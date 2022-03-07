import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import AddReview from '../add-review/add-review';
import Error from '../../pages/error/error';
import MainScreen from '../main-screen/main-screen';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import PrivateRoute from '../../pages/private-route/private-route';
import { Film, Films } from '../../types/types';

type AppProps = {
  promoFilm: Film;
  films: Films;
  film: Film;
}

export default function App({promoFilm, films, film}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen promoFilm={promoFilm} films={films}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList films={films} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.MoviePage}
          element={<MoviePage film={film}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview film={film}/>}
        />
        <Route
          path={AppRoute.Player}
          element={<Player film={film}/>}
        />
        <Route
          path="*"
          element={<Error />}
        />
      </Routes>
    </BrowserRouter>
  );
}
