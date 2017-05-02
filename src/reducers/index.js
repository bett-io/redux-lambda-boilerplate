import { combineReducers } from 'redux';

function authToken(state = '', action) {
  switch (action.type) {
  case 'AUTH_TOKEN_CHANGED':
    return action.authToken;
  default:
    return state;
  }
}

const reducer = combineReducers({
  authToken,
});

export default reducer;
