import { useState } from 'react';
import FilmCard from '../../pages/film-card/film-card';
import { Films } from '../../types/types';

export default function MoviesList({films}: {films: Films}): JSX.Element {

  const [activeFilmId, setActiveFilmId] = useState<number | null>(null);

  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard key={film.id} film={film} isActive={film.id === activeFilmId} onHover={setActiveFilmId}/>)}
    </div>
  );
}
