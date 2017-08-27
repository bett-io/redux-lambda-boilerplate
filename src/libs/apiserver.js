import axios from 'axios';

const signin = async (fbToken) => {
  const response = await axios.post('/signin', {
    fbToken,
  });

  console.log({ function: 'apiserver.signin', response });

  return response;
};

const signout = async () => {
  const response = await axios.post('/signout', {});

  console.log({ function: 'apiserver.signout', response });

  return response;
};

const updateSessionState = async (state) => {
  const response = await axios.post('/sessionState', {
    state,
  });

  console.log({ function: 'apiserver.updateSessionState', response });

  return response;
};

export default {
  signin,
  signout,
  updateSessionState,
};
