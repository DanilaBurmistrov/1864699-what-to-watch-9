import MoviesList from '../movies-list/movies-list';
import { AppRoute } from '../../const';
import { useNavigate } from 'react-router-dom';
import Logo from '../pages/logo/logo';
import LogoFooter from '../pages/logo/logo-footer';
import GenresList from '../genres-list/genres-list';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilms, fetchPromoFilm } from '../../store/api-action';
import UserBlock from '../user-block/user-block';
import LoadingScreen from '../loading-screen/loading-screen';
import { getLoadedDataStatus, getPromoFilm, getFilmsByActiveGenre, getFilmsGenres } from '../../store/selectors';
import { ButtonAddMyList } from '../pages/button-add-my-list/button-add-my-list';


export default function MainScreen(): JSX.Element {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const genres = useAppSelector(getFilmsGenres);
  const promoFilm = useAppSelector(getPromoFilm);
  const filmsList = useAppSelector(getFilmsByActiveGenre);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);

  useEffect(() => {
    dispatch(fetchPromoFilm());
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">

          <Logo />

          <UserBlock />

        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.posterImage} alt={promoFilm?.name} width="218" height="327" onClick={() => navigate(AppRoute.MyList)}/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button"
                  onClick={() => navigate(`/player/${promoFilm?.id}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <ButtonAddMyList filmIsFavorite={promoFilm?.isFavorite} filmId={promoFilm?.id} />

              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {!isDataLoaded ? <LoadingScreen /> :
            <>
              <ul className="catalog__genres-list">
                <GenresList genres={genres} />
              </ul>
              <MoviesList films={filmsList} />
            </>}

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
