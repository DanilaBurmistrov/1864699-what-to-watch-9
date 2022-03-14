import FilmCard from '../pages/film-card/film-card';
import { Film } from '../../types/types';

type MovieListProps = {
  films: Film[],
}

export default function MoviesList({films}: MovieListProps): JSX.Element {

  return (
    <div className="catalog__films-list" >
      {films.map((film) => <FilmCard key={film.id} film={film} />)}
    </div>
  );
}
