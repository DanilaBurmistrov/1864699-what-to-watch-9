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

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {[TabType.Overview, TabType.Details, TabType.Reviews].map((tab) => (
            <li className = {`film-nav__item ${tab === typeTabs  ? 'film-nav__item--active' : ''}`} key = {tab}>
              <a href="#todo" className="film-nav__link"
                onClick={(evt: React.MouseEvent<HTMLAnchorElement>) => {
                  evt.preventDefault();
                  setTypeTabs(tab);
                }}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {selectedFilm && <Tabs type={typeTabs}/>}
    </div>
  );
}
