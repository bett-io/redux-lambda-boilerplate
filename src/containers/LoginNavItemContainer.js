/*global FB*/

import React from 'react';
import { connect } from 'react-redux';
import { authTokenChanged } from '../actions';
import LoginNavItem from '../components/LoginNavItem';
import socialConfig from 'social.config.json';

class Wrapper extends React.Component {
  componentDidMount() {
    this.props.componentDidMount();
  }

  render() {
    return (<LoginNavItem {...this.props} />);
  }
}

const statusChangeCallback = (dispatch, response) => {
  if (response.status === 'connected') {
    FB.api('/me', function(response) {
      dispatch(authTokenChanged(response.id));
    });
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    console.log('Please log into this app');
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    console.log('Please log into Facebook');
  }
};

const mapStateToProps = (state) => {
  return {
    isLogin: !!state.authToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    componentDidMount: () => {
      window.fbAsyncInit = function() {
        FB.init({
          appId: socialConfig.facebook.appId,
          cookie: true,
          xfbml: true,
          version: 'v2.8',
        });

        // Now that we've initialized the JavaScript SDK, we call
        // FB.getLoginStatus().  This function gets the state of the
        // person visiting this page and can return one of three states to
        // the callback you provide.  They can be:
        //
        // 1. Logged into your app ('connected')
        // 2. Logged into Facebook, but not your app ('not_authorized')
        // 3. Not logged into Facebook and can't tell if they are logged into
        //    your app or not.
        //
        // These three cases are handled in the callback function.

        FB.getLoginStatus(function(response) {
          statusChangeCallback(dispatch, response);
        });
      };

      // Load the SDK asynchronously
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = '//connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    },
    onClickLogin: () => {
      FB.login(() => {
        FB.getLoginStatus(function(response) {
          statusChangeCallback(dispatch, response);
        });
      });
    },
    onClickLogout: () => {
      FB.logout(() => {
        dispatch(authTokenChanged(''));
      });
    },
  };
};

const LoginNavItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wrapper);

export default LoginNavItemContainer;
