import Logo from '../pages/logo/logo';
import LogoFooter from '../pages/logo/logo-footer';
import MoviesList from '../movies-list/movies-list';
import UserBlock from '../user-block/user-block';
import { useAppSelector } from '../../hooks';
import { getFilms } from '../../store/selectors';

export default function MyList(): JSX.Element {

  const films = useAppSelector(getFilms);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />

      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <MoviesList films = {films}/>
        </div>
      </section>

      <footer className="page-footer">

        <LogoFooter />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}
