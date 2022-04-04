import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import { sendReview } from '../../../store/api-action';
import { UserReview } from '../../../types/types';

type AddCommentFormProps = {
  filmId: number;
}

export default function AddCommentForm({filmId}: AddCommentFormProps): JSX.Element {

  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');

  const commentFieldChangeHandler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = evt.target;
    setText(value);
  };

  const dispatch = useAppDispatch();

  const onSubmit = (userReview: UserReview) => {
    dispatch(sendReview(userReview));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({
      comment: text,
      rating: rating,
      filmId: filmId,
    });
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {Array.from({length: 10}).map((_, index) => (
              <>
                <input className="rating__input" id={`star-${index}`} type="radio" name="rating" value={index} checked={rating === + index} onChange={({target}: React.ChangeEvent<HTMLInputElement>) => {setRating(+target.value);}}/>
                <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
              </>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea onChange={commentFieldChangeHandler} className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={text}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
}
