import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';

const Settings = {
  title: 'The Grand Budapest Hotel poster',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      settings={Settings}
      films={films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
