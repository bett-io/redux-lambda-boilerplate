import facebook from './facebook';

export const authTokenChanged = (authToken) => ({
  type: 'AUTH_TOKEN_CHANGED',
  authToken,
});

export const initializeApp = () => {
  return (dispatch) => {
    facebook.initialize(() => {
      facebook.getAccessToken((accessToken) => {
        dispatch(authTokenChanged(accessToken));
      });
    });
  };
};

export const login = () => {
  return (dispatch) => {
    facebook.login((accessToken) => {
      dispatch(authTokenChanged(accessToken));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    facebook.logout(() => {
      dispatch(authTokenChanged(''));
    });
  };
};
