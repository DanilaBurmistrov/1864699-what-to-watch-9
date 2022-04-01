import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TabType } from '../../const';
import { useAppSelector } from '../../hooks';
import { getFilmById } from '../../store/selectors';
import Tabs from './tabs';

export default function TabsNavigation(): JSX.Element {

  const params = useParams();
  const selectedFilm = useAppSelector(getFilmById(Number(params.id)));

  const [typeTabs, setTypeTabs] = useState(TabType.Overview);
  const [activeClassFilm, setActiveClassFilm] = useState([true, false, false]);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeClassFilm[0] ? 'film-nav__item--active' : ''}`}>
            <a href="#todo" className="film-nav__link"
              onClick={(evt: React.MouseEvent<HTMLAnchorElement>) => {
                evt.preventDefault();
                setTypeTabs(TabType.Overview);
                setActiveClassFilm([true, false, false]);
              }}
            >
        Overview
            </a>
          </li>
          <li className={`film-nav__item ${activeClassFilm[1] ? 'film-nav__item--active' : ''}`} >
            <a href="#todo" className="film-nav__link"
              onClick={(evt: React.MouseEvent<HTMLAnchorElement>) => {
                evt.preventDefault();
                setTypeTabs(TabType.Details);
                setActiveClassFilm([false, true, false]);
              }}
            >
        Details
            </a>
          </li>
          <li className={`film-nav__item ${activeClassFilm[2] ? 'film-nav__item--active' : ''}`} >
            <a href="#todo" className="film-nav__link"
              onClick={(evt: React.MouseEvent<HTMLAnchorElement>) => {
                evt.preventDefault();
                setTypeTabs(TabType.Reviews);
                setActiveClassFilm([false, false, true]);
              }}
            >
        Reviews
            </a>
          </li>
        </ul>
      </nav>
      {selectedFilm && <Tabs type={typeTabs}/>}
    </div>
  );
}
