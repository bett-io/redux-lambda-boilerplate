import facebook from './facebook';

export const userUpdated = (user) => ({
  type: 'USER_UPDATED',
  user,
});

export const initializeApp = () => {
  return () => {
    facebook.initialize();
  };
};

export const login = () => {
  return (dispatch) => {
    facebook.login()
      .then((fbToken) => {
        dispatch(userUpdated({
          uid: 1,
          name: 'tester',
          fbToken,
        }));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    facebook.logout()
      .then(() => {
        dispatch(userUpdated({
          uid: 0,
          name: '',
          fbToken: 0,
        }));
      });
  };
};
