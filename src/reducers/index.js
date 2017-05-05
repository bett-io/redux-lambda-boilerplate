import { combineReducers } from 'redux';

function auth(state = { isAuth: false }, action) {
  switch (action.type) {
  case 'AUTH_UPDATED':
    return action.auth;
  default:
    return state;
  }
}

const reducer = combineReducers({
  auth,
});

export default reducer;
