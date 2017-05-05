import React, { PropTypes } from 'react';
import { NavItem } from 'react-bootstrap';

const Login = ({ isLoggedIn, onClickLogin, onClickLogout }) => {
  if (isLoggedIn) {
    return <NavItem href="#" onClick={e => {
      e.preventDefault();
      onClickLogout();
    }}>
      Logout
    </NavItem>;
  } else {
    return <NavItem href="#" onClick={e => {
      e.preventDefault();
      onClickLogin();
    }}>
      Login
    </NavItem>;
  }
};

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onClickLogin: PropTypes.func.isRequired,
  onClickLogout: PropTypes.func.isRequired,
};

export default Login;
