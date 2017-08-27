import facebook from './facebook';
import apiserver from '../libs/apiserver';

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
      .then(apiserver.signin)
      .then((response) => {
        dispatch(userUpdated({
          uid: response.data.uid,
          name: response.data.name,
          pictureUrl: response.data.picture,
          fbToken: response.data.fbToken,
        }));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    apiserver.signout()
      .then(() => {
        dispatch(userUpdated({
          uid: 0,
          name: '',
          pictureUrl: '',
          fbToken: 0,
        }));
      });
  };
};
