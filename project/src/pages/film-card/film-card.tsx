import { Film } from '../../types/types';
import { Link } from 'react-router-dom';

type FilmCardProps = {
  film: Film,
  isActive: boolean,
  onHover: (id: number | null) => void,
};

export default function FilmCard({film, isActive, onHover}: FilmCardProps): JSX.Element {

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image"
        onMouseEnter={() => onHover(film.id)}
        onMouseLeave={() => onHover(null)}
      >
        <img src={film.posterImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}
        </Link>
      </h3>
    </article>
  );
}
