import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import LoginNavItemContainer from '../containers/LoginNavItemContainer';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Home</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/about">
        <NavItem eventKey={1}>About</NavItem>
      </LinkContainer>
      <LinkContainer to="/repos">
        <NavItem eventKey={2}>Repos</NavItem>
      </LinkContainer>
      <LinkContainer to="/hello">
        <NavItem eventKey={3}>Hello</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <LoginNavItemContainer/>
    </Nav>
  </Navbar>
);

export default Header;
