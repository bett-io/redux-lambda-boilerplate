/*global FB*/

import socialConfig from 'social.config.json';

const getAccessToken = (callback) => {
  FB.getLoginStatus((response) => {
    if (response.status === 'connected') {
      callback(response.authResponse.accessToken);
    }
  });
};

const initialize = (callback) => {
  window.fbAsyncInit = function() {
    FB.init({
      appId: socialConfig.facebook.appId,
      cookie: true,
      xfbml: true,
      version: 'v2.8',
    });

    getAccessToken(callback);
  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = '//connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
};

const login = (callback) => {
  FB.login(() => {
    getAccessToken(callback);
  });
};

const logout = (callback) => {
  FB.logout(callback);
};

export default {
  initialize,
  getAccessToken,
  login,
  logout,
};
