import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { MIN_LENGTH_TEXT, MAX_LENGTH_TEXT, STARS_ARRAY } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReview } from '../../store/api-action';
import { getIsDisabledForm, getReviewSendStatus } from '../../store/selectors';


type AddCommentFormProps = {
  filmId: number;
}

export default function AddCommentForm({filmId}: AddCommentFormProps): JSX.Element {

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const isCommentValid = comment.length > MIN_LENGTH_TEXT && comment.length < MAX_LENGTH_TEXT && rating !== 0;

  const isDisabledForm = useAppSelector(getIsDisabledForm);

  const sendStatus = useAppSelector(getReviewSendStatus);

  const dispatch = useAppDispatch();

  const commentChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const {value} = evt.target;
    setComment(value);
  };

  const ratingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setRating(+value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(sendReview({filmId, rating, comment}));
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div aria-disabled={isDisabledForm} className="rating">
          <div className="rating__stars">
            {STARS_ARRAY.map((element) => (
              <Fragment key={element}>
                <input className="rating__input" id={`star-${element}`} type="radio" name="rating" value={element} onChange={ratingChangeHandler}/>
                <label className="rating__label" htmlFor={`star-${element}`}>Rating {element}</label>
              </Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea disabled={isDisabledForm}
            onChange={commentChangeHandler}
            className="add-review__textarea"
            name="review-text" id="review-text"
            placeholder="Review text"
            value={comment}
            minLength={MIN_LENGTH_TEXT}
            maxLength={MAX_LENGTH_TEXT}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isDisabledForm || !isCommentValid}>Post</button>
          </div>

        </div>
        {sendStatus === 'error' ? <span>Oops, something went wrong while submitting your review! Try later!</span> : ''}
      </form>
    </div>
  );
}
