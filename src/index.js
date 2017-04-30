import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from '../modules/routes';
import './styles/index.css';
import { Provider } from 'react-redux';
import createReduxStore from '../modules/store';

let initialState = window.__INITIAL_STATE__;

const store = createReduxStore(initialState);

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
  document.getElementById('app')
);

