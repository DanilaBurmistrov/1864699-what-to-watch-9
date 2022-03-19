import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import { fetchCheckAuth, fetchFilms } from './store/api-action';
import ErrorMessage from './components/error-message.tsx/error-message';

store.dispatch(fetchFilms());
store.dispatch(fetchCheckAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
