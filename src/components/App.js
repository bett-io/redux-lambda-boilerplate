import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FBLoginButton from './FBLoginButton';
import socialConfig from '../../social.config.json';
import LoginNavItemContainer from '../containers/LoginNavItemContainer';

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
          <Nav pullRight>
            <LoginNavItemContainer/>
          </Nav>
          <FBLoginButton appId={socialConfig.facebook.appId}>FBLoginButton</FBLoginButton>
        </Navbar>

        {this.props.children}
      </div>
    );
  }
}

export default App;
