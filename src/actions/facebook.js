/* global FB */

import { socialConfig } from '../../config';

const getAccessToken = () => new Promise((resolve) => {
  FB.getLoginStatus((response) => {
    if (response.status === 'connected') {
      resolve(response.authResponse.accessToken);
    } else {
      resolve(null);
    }
  });
});

const initialize = () => new Promise((resolve) => {
  if (window.fbAsyncInit) return resolve();

  window.fbAsyncInit = function () {
    FB.init({
      appId: socialConfig.facebook.appId,
      cookie: true,
      xfbml: true,
      version: 'v2.8',
    });

    resolve();
  };

  // Load the SDK asynchronously
  (function (d, s, id) {
    if (d.getElementById(id)) return;
    const js = d.createElement(s);
    js.id = id;
    js.src = '//connect.facebook.net/en_US/sdk.js';
    const fjs = d.getElementsByTagName(s)[0];
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

