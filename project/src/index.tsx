import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';

const PromoFilm = films;

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilm={PromoFilm[0]}
      films={films}
      film={films[0]}
    />
  </React.StrictMode>,
  document.getElementById('root'));
