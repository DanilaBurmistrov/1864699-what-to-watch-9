import { useParams } from 'react-router-dom';
import { TabType } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilmById } from '../../store/selectors';
import FilmTabDetails from './film-tab-details';
import FilmTabOverview from './film-tab-overview';
import FilmTabReviews from './film-tab-reviews';

type TabsProps = {
  type: TabType;
}

export default function Tabs({type}: TabsProps): JSX.Element | null {

  const params = useParams();
  const filmId = Number(params.id);
  const selectedFilm = useAppSelector(getFilmById(filmId));

  if (!selectedFilm) {
    return null;
  }
  switch (type) {
    case TabType.Overview:
      return (
        <FilmTabOverview film={selectedFilm}/>
      );
    case TabType.Details:
      return (
        <FilmTabDetails film={selectedFilm}/>
      );
    case TabType.Reviews:
      return (
        <FilmTabReviews filmId={filmId}/>
      );
  }
}

