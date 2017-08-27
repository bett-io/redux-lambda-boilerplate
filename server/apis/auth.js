import facebook from '../libs/facebook';

const signin = async (req) => {
  const fbToken = req.body.fbToken;

  console.log({ function: 'auth.signin', fbToken });

  const fbUserInfo = await facebook.getUserInfo(fbToken);
  console.log({ function: 'auth.signin', fbUserInfo });

  req.session.fbToken = req.body.fbToken;

  return {
    uid: fbUserInfo.id,
    name: fbUserInfo.name,
    picture: fbUserInfo.picture,
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
