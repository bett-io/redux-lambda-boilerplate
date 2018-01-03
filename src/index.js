/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { render } from 'react-dom';
import './styles/index.css';
import { Provider } from 'react-redux';
import createReduxStore from '../modules/store';

import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';

const initialState = window.__INITIAL_STATE__;

const store = createReduxStore(initialState);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);
