import React from 'react';
import { Link } from 'react-router';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import LoginNavItemContainer from './LoginNavItemContainer';
import { connect } from 'react-redux';
import { initializeApp } from '../actions';

export class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(initializeApp());
  }

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
        </Navbar>

        {this.props.children}
      </div>
    );
  }
}

export default connect(null, null)(App); // To use this.props.dispatch
