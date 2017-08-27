import facebook from '../libs/facebook';
import session from '../libs/session';

const signin = async (req) => {
  const fbToken = req.body.fbToken;

  console.log({ function: 'auth.signin', fbToken });

  const fbUserInfo = await facebook.getUserInfo(fbToken);
  console.log({ function: 'auth.signin', fbUserInfo });

  const result = {
    uid: fbUserInfo.id,
    name: fbUserInfo.name,
    pictureUrl: fbUserInfo.picture,
    fbToken: req.body.fbToken,
  };

  session.updateAuthResult(req, result);

  return result;
};

const signout = (req) => {
  session.updateAuthResult(req, {});

  return {};
};

module.exports = {
  signin,
  signout,
};
