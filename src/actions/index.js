import cognito from './cognito';
import facebook from './facebook';

export const authUpdated = (auth) => ({
  type: 'AUTH_UPDATED',
  auth,
});

export const initializeApp = () => {
  return (dispatch) => {
    facebook.initialize()
      .then(facebook.getAccessToken)
      .then((fbToken) => {
        cognito.initialize(fbToken).then(() => {
          dispatch(authUpdated({ isAuth: !!fbToken }));
        });
      });
  };
};

export const login = () => {
  return (dispatch) => {
    facebook.login()
      .then(cognito.updateFbToken)
      .then(() => {
        dispatch(authUpdated({ isAuth: true }));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    facebook.logout()
      .then(() => {
        dispatch(authUpdated({ isAuth: false }));
      });
  };
};
