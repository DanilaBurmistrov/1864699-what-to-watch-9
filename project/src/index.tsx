import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';

const PromoFilm = {
  name: 'The Grand Budapest Hotel poster',
  genre: 'Drama',
  released: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilm={PromoFilm}
      films={films}
      film={films[0]}
    />
  </React.StrictMode>,
  document.getElementById('root'));
