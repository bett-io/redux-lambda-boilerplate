import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FBLoginButton from './FBLoginButton';

class App extends React.Component {
  render() {
    return (
      <div>
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
          <FBLoginButton>FBLoginButton</FBLoginButton>
        </Navbar>

        {this.props.children}
      </div>
    );
  }
}

export default App;
