import React, { PropTypes } from 'react';
import { NavItem } from 'react-bootstrap';

const Login = ({ isLogin, onClickLogin, onClickLogout }) => {
  if (isLogin) {
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
  isLogin: PropTypes.bool.isRequired,
  onClickLogin: PropTypes.func.isRequired,
  onClickLogout: PropTypes.func.isRequired,
};

export default Login;
