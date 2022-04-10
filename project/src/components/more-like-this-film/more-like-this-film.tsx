import { useEffect } from 'react';
import MoviesList from '../movies-list/movies-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchSimilarFilms } from '../../store/api-action';
import { getSimilarFilms } from '../../store/selectors';
import { MAX_SIMILAR_FILMS } from '../../const';

type MoreLikeThisFilmProps = {
  filmId: number;
}

export default function MoreLikeThisFilm({filmId}: MoreLikeThisFilmProps): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {

    dispatch(fetchSimilarFilms({filmId: filmId}));

  },[dispatch, filmId]);

  const similarFilms = useAppSelector(getSimilarFilms).filter((film) => film.id !== filmId).slice(0, MAX_SIMILAR_FILMS);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <MoviesList films={similarFilms}/>
    </section>
  );
}
