import { combineReducers } from 'redux';

function sessionCounter(state = { counter: 0 }) {
  // This value never changes from initial value which is given from server
  return state;
}

const userDefault = {
  uid: 0,
  name: '',
  fbToken: 0,
};

function user(state = userDefault, action) {
  switch (action.type) {
    case 'USER_UPDATED':
      return action.user;
    default:
      return state;
  }
}

const reducer = combineReducers({
  sessionCounter,
  user,
});

export default reducer;
