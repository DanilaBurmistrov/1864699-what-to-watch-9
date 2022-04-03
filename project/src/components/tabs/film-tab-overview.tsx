import { FilmTextRating } from '../../const';
import { Film } from '../../types/types';

type FilmTabOverviewProps = {
  film: Film,
}


function getTextRating(rating: number) {
  if(rating >= 0 && rating < 3) {
    return FilmTextRating.Bad;
  }
  else if(rating >= 3 && rating < 5) {
    return FilmTextRating.Normal;
  }
  else if(rating >= 5 && rating < 8) {
    return FilmTextRating.Good;
  }
  else if(rating >= 8 && rating < 10) {
    return FilmTextRating.VeryGood;
  }
  else {
    return FilmTextRating.Awesome;
  }
}

export default function FilmTabOverview({film}: FilmTabOverviewProps): JSX.Element {

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getTextRating(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>
          {film.description}
        </p>
        <p>
        </p>
        <p className="film-card__director">
          <strong>Director: {film.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
          Starring: {film.starring.join(', ')}
          </strong>
        </p>
      </div>
    </>
  );

}
