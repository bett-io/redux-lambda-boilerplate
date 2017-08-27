const signin = (req) => {
  req.session.fbToken = req.body.fbToken;

  return {
    uid: 1,
    name: 'Tester Name',
    fbToken: req.body.fbToken,
  };
};

const signout = (req) => {
  req.session.fbToken = null;

  return {};
};

module.exports = {
  signin,
  signout,
};
