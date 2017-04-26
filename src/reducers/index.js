import { combineReducers } from 'redux';

function authToken(state = '', action) {
  switch (action.type) {
  case 'SET_AUTHTOKEN':
    return action.authToken;
  default:
    return state;
  }
}

const reducer = combineReducers({
  authToken,
});

export default reducer;
