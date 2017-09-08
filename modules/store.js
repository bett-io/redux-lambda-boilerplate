import { applyMiddleware, createStore } from 'redux';
import reducer from '../src/reducers';
import thunk from 'redux-thunk';

const createReduxStore = (initialState) => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    const { createLogger } = require('redux-logger');

    const logger = createLogger({
      collapsed: (getState, action, logEntry) => !logEntry.error,
    });

    middlewares.push(logger);
  }

  return createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};

export default createReduxStore;
