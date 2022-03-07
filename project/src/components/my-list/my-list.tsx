import FilmCard from '../../pages/film-card/film-card';
import Logo from '../../pages/logo/logo';
import LogoFooter from '../../pages/logo/logo-footer';
import { Films } from '../../types/types';


export default function MyList({films}: {films: Films}): JSX.Element {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">

        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {films.map((film) => <FilmCard key={film.id} film={film} />)}
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
