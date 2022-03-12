import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';
import {Provider} from 'react-redux';
import {store} from './store';

const promoFilm = films;

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        promoFilm={promoFilm[0]}
        films={films}
        film={films[0]}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
