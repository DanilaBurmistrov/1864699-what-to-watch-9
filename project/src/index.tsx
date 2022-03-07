import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';

const promoFilm = films;

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilm={promoFilm[0]}
      films={films}
      film={films[0]}
    />
  </React.StrictMode>,
  document.getElementById('root'));
