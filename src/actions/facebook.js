/*global FB*/

import socialConfig from 'social.config.json';

const getAccessToken = () => new Promise((resolve, reject) => {
  FB.getLoginStatus((response) => {
    if (response.status === 'connected') {
      resolve(response.authResponse.accessToken);
    } else {
      reject();
    }
  });
});

const initialize = () => new Promise((resolve) => {
  window.fbAsyncInit = function() {
    FB.init({
      appId: socialConfig.facebook.appId,
      cookie: true,
      xfbml: true,
      version: 'v2.8',
    });

    getAccessToken().then(resolve);
  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = '//connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
});

const login = () => new Promise((resolve) => {
  FB.login(() => {
    getAccessToken().then(resolve);
  });
});

const logout = () => new Promise((resolve) => {
  FB.logout(resolve);
});

export default {
  initialize,
  getAccessToken,
  login,
  logout,
};
