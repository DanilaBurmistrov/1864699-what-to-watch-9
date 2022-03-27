import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import AddReview from '../add-review/add-review';
import Error from '../pages/error/error';
import MainScreen from '../main-screen/main-screen';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import PrivateRoute from '../pages/private-route/private-route';
import { useAppSelector } from '../../hooks';
import { browserHistory } from '../../browser-history';
import HistoryRouter from '../history-route/history-route';
import { getFilms } from '../../store/selectors';


export default function App(): JSX.Element {

  const films = useAppSelector(getFilms);

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
              <MyList films={films} />
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
          path="*"
          element={<Error />}
        />
      </Routes>
    </HistoryRouter>
  );
}
