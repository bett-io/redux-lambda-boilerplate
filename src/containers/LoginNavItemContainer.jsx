import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, logout } from '../actions';
import { NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const profileImage = url => (
  <img className="thumbnail-image" src={url} />
);

const LoginNavItemContainer = ({ isLoggedIn, pictureUrl, onClickLogin, onClickLogout }) => {
  if (isLoggedIn) {
    return (
      <NavDropdown eventKey={1} title={ profileImage(pictureUrl) } id="basic-nav-dropdown">
        <MenuItem eventKey={1.1}></MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={1.2} href="#" onClick={(e) => {
          e.preventDefault();
          onClickLogout();
        }}>
          Logout
        </MenuItem>
      </NavDropdown>
    );
  }

  return (
    <NavItem href="#" onClick={(e) => {
      e.preventDefault();
      onClickLogin();
    }}>
      Login
    </NavItem>
  );
};

LoginNavItemContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onClickLogin: PropTypes.func.isRequired,
  onClickLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.uid,
  userName: state.user.name,
  pictureUrl: state.user.pictureUrl,
});

const mapDispatchToProps = dispatch => ({
  onClickLogin: () => {
    dispatch(login());
  },
  onClickLogout: () => {
    dispatch(logout());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginNavItemContainer);
