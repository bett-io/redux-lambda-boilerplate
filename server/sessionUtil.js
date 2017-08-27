const createInitialReduxState = (session) => {
  const state = {
    sessionCounter: {
      counter: session.counter,
    },
  };

  if (session.fbToken) {
    state.user = {
      uid: 1,
      name: 'Tester Name',
      fbToken: session.fbToken,
    };
  }

  console.log({ function: 'createInitialReduxState', state });

  return state;
};

module.exports = {
  createInitialReduxState,
};
