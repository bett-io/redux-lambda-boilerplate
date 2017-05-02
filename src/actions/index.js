import facebook from './facebook';

export const authTokenChanged = (authToken) => ({
  type: 'AUTH_TOKEN_CHANGED',
  authToken,
});

export const initializeApp = () => {
  return (dispatch) => {
    facebook.initialize()
      .then(facebook.getAccessToken)
      .then((accessToken) => {
        dispatch(authTokenChanged(accessToken));
      });
  };
};

export const login = () => {
  return (dispatch) => {
    facebook.login()
      .then((accessToken) => {
        dispatch(authTokenChanged(accessToken));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    facebook.logout()
      .then(() => {
        dispatch(authTokenChanged(''));
      });
  };
};
