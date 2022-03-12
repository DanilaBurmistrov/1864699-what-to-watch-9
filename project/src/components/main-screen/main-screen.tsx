import MoviesList from '../movies-list/movies-list';
import { Film, Films } from '../../types/types';
import { AppRoute, DEFAULT_ACTIVE_GENRE } from '../../const';
import { useNavigate } from 'react-router-dom';
import Logo from '../pages/logo/logo';
import LogoFooter from '../pages/logo/logo-footer';
import GenresList from '../genres-list/genres-list';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';

type MainScreenProps = {
  promoFilm: Film;
  films: Films;
}

export default function MainScreen({promoFilm, films}: MainScreenProps): JSX.Element {

  const navigate = useNavigate();

  const [genres, setGenres] = useState<string[]>([]);
  const activeGenre = useAppSelector((state) => state.activeGenre);
  const filmsList = films.filter(({genre}) => activeGenre === 'All genres' || activeGenre === genre);

  useEffect(() => {
    setGenres([DEFAULT_ACTIVE_GENRE, ...new Set(films.map((film) => film.genre))]);
  }, [films]);


  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.posterImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">

          <Logo />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" href="/">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.previewImage} alt={promoFilm.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button"
                  onClick={() => navigate(AppRoute.Player)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button"
                  onClick={() => navigate(AppRoute.MyList)}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <GenresList genres={genres} />
          </ul>

          <MoviesList films={filmsList} />

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <footer className="page-footer">

          <LogoFooter />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
