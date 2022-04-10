import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import AddReview from '../add-review/add-review';
import MainScreen from '../main-screen/main-screen';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';
import { browserHistory } from '../../browser-history';
import HistoryRouter from '../history-router/history-router';
import PageNotFound from '../page-not-found/page-not-found';
import InternalServerError from '../internal-server-error/internal-server-error';

export default function App(): JSX.Element {

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute >
              <MyList />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.MoviePage}
          element={<MoviePage />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player />}
        />
        <Route
          path={AppRoute.ServerError}
          element={<InternalServerError /> }
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
    </HistoryRouter>
  );
}
