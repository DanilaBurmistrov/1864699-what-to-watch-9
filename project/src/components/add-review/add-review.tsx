import AddCommentForm from '../add-comment-form/add-comment-form';
import Logo from '../logo/logo';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getFilmById, isCheckedAuth } from '../../store/selectors';
import UserBlock from '../user-block/user-block';
import { useEffect } from 'react';
import { fetchFilm } from '../../store/api-action';
import { useDispatch } from 'react-redux';
import { AppRoute, AuthorizationStatus } from '../../const';


export default function AddReview(): JSX.Element {

  const params = useParams();
  const filmId = Number(params.id);
  const film = useAppSelector(getFilmById(filmId));
  const dispatch = useDispatch();
  const authorizationStatus = useAppSelector(isCheckedAuth);

  useEffect(() => {
    dispatch(fetchFilm(filmId));
  }, [dispatch, filmId]);

  return (
    authorizationStatus === AuthorizationStatus.NoAuth ? <Navigate to={AppRoute.SignIn} /> :
      <section className="film-card film-card--full" style={{backgroundColor: film?.backgroundColor}}>
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film?.backgroundImage} alt={film?.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">

            <Logo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${film?.id}`} className="breadcrumbs__link">{film?.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link className="breadcrumbs__link" to={`/films/${film?.id}/review`}>Add review</Link>
                </li>
              </ul>
            </nav>

            <UserBlock />

          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={film?.posterImage} alt={film?.name} width="218" height="327" />
          </div>
        </div>

        <AddCommentForm filmId={filmId}/>

      </section>
  );
}

