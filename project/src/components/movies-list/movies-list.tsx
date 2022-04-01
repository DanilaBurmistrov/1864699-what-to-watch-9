import FilmCard from '../pages/film-card/film-card';
import { Film } from '../../types/types';
import { useState, useEffect } from 'react';
import { FILM_COUNT_PER_STEP } from '../../const';
import { useAppSelector } from '../../hooks';
import { getActiveGenre } from '../../store/selectors';
import { ShowMoreButton } from '../pages/show-more-button/show-more-button';

type MovieListProps = {
  films: Film[],
}

export default function MoviesList({films}: MovieListProps): JSX.Element {

  const activeGenre = useAppSelector(getActiveGenre);

  const [renderedFilmsCount, setRenderedFilmsCount] = useState(FILM_COUNT_PER_STEP);

  const [filmsForRender, setfilmsForRender] = useState(films.slice(0, FILM_COUNT_PER_STEP));

  useEffect(() => {
    setfilmsForRender(films.slice(0, renderedFilmsCount));

  }, [renderedFilmsCount, films]);

  useEffect(() => {
    setRenderedFilmsCount(FILM_COUNT_PER_STEP);
  }, [activeGenre]);

  function handleShowMoreButtonClick() {
    setRenderedFilmsCount(renderedFilmsCount + FILM_COUNT_PER_STEP);
  }

  return (
    <>
      <div className="catalog__films-list" >
        {filmsForRender.map((film) => <FilmCard key={film.id} film={film} />)}
      </div>
      {renderedFilmsCount < films.length  && <ShowMoreButton onClickCb={handleShowMoreButtonClick}/>}
    </>
  );
}
