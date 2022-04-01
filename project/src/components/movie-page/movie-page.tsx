import { AppRoute } from '../../const';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Logo from '../pages/logo/logo';
import LogoFooter from '../pages/logo/logo-footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilm } from '../../store/api-action';
import { useEffect } from 'react';
import { getFilmById } from '../../store/selectors';
import UserBlock from '../user-block/user-block';
import TabsNavigation from '../tabs/tabs-navigation';
import MoreLikeThisFilm from '../pages/more-like-this-film/more-like-this-film';

export default function MoviePage(): JSX.Element {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const params = useParams();
  const filmId = Number(params.id);
  const film = useAppSelector(getFilmById(filmId));

  useEffect(() => {
    dispatch(fetchFilm(filmId));
  }, [dispatch, filmId]);

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">

            <Logo />

            <UserBlock />

          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button"
                  onClick={() => navigate(`/player/${film?.id}`)}
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
                <Link to={`/films/${film?.id}}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film?.posterImage} alt={film?.name} width="218"
                height="327"
              />
            </div>

            <TabsNavigation />

          </div>
        </div>
      </section>
      <div className="page-content">

        <MoreLikeThisFilm filmId={filmId}/>

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
