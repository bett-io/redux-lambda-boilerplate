import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const profileImage = (url) => (
  <img className="thumbnail-image" src={url} />
);

const Login = ({ isLoggedIn, pictureUrl, onClickLogin, onClickLogout }) => {
  if (isLoggedIn) {
    return (
      <NavDropdown eventKey={1} title={ profileImage(pictureUrl) } id="basic-nav-dropdown">
        <MenuItem eventKey={1.1}></MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={1.2} href="#" onClick={e => {
          e.preventDefault();
          onClickLogout();
        }}>
          Logout
        </MenuItem>
      </NavDropdown>
    );
  }

  return (
    <NavItem href="#" onClick={e => {
      e.preventDefault();
      onClickLogin();
    }}>
      Login
    </NavItem>
  );
};

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onClickLogin: PropTypes.func.isRequired,
  onClickLogout: PropTypes.func.isRequired,
};

export default Login;
