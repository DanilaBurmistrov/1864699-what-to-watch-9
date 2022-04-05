import { Film } from '../../types/types';
import { getTextRating } from '../../utils';

type FilmTabOverviewProps = {
  film: Film,
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
