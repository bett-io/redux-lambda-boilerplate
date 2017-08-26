import { combineReducers } from 'redux';

function auth(state = { isAuth: false }, action) {
  switch (action.type) {
  case 'AUTH_UPDATED':
    return action.auth;
  default:
    return state;
  }
}

function sessionCounter(state = { counter: 0 }) {
  // This value never changes from initial value which is given from server
  return state;
}

const reducer = combineReducers({
  auth,
  sessionCounter,
});

export default reducer;
