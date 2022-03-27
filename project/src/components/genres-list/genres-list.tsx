import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setActiveGenre } from '../../store/film-process/film-process';
import { getGenre } from '../../store/selectors';

type GenresListProps = {
  genres: string[],
}

export default function GenresList ({genres}: GenresListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector(getGenre);

  return (
    <>
      {genres.map((genre) =>(
        <li key={genre} onClick={() => dispatch(setActiveGenre(genre))} className={`catalog__genres-item ${genre === activeGenre ? ' catalog__genres-item--active' : ''}`}>
          <Link to={''} className="catalog__genres-link">{genre}</Link>
        </li>),
      )}
    </>
  );
}
