import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReviews } from '../../store/api-action';
import { getReviews } from '../../store/selectors';

function getReviewDate(date: string, isProperty: boolean) {
  return isProperty?
    new Date(date).toLocaleDateString() :
    new Date(date).toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: 'numeric' });
}

type FilmTabReviewsProps = {
  filmId: number;
}

export default function FilmTabReviews({filmId}: FilmTabReviewsProps): JSX.Element {

  const reviews = useAppSelector(getReviews);

  const dispatch = useAppDispatch();

  useEffect(() => {

    dispatch(fetchReviews({filmId: filmId}));

  },[dispatch, filmId]);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.slice(0, (reviews.length+1)/2).map((review) => (
          <div className="review" key={review.id} >
            <blockquote className="review__quote">
              <p className="review__text">
                {review.comment}
              </p>
              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime={getReviewDate(review.date, true)}>
                  {getReviewDate(review.date, false)}
                </time>
              </footer>
            </blockquote>
            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviews.slice((reviews.length+1)/2).map((review) => (
          <div className="review" key={review.id} >
            <blockquote className="review__quote">
              <p className="review__text">
                {review.comment}
              </p>
              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime={getReviewDate(review.date, true)}>
                  {getReviewDate(review.date, false)}
                </time>
              </footer>
            </blockquote>
            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

