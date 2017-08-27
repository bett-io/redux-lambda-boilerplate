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

export const login = () => async (dispatch) => {
  const fbToken = await facebook.login();
  const response = await apiserver.signin(fbToken);

  dispatch(userUpdated({
    uid: response.data.uid,
    name: response.data.name,
    pictureUrl: response.data.pictureUrl,
    fbToken: response.data.fbToken,
  }));
};

export const logout = () => async (dispatch) => {
  await apiserver.signout();

  dispatch(userUpdated({
    uid: 0,
    name: '',
    pictureUrl: '',
    fbToken: 0,
  }));
};
