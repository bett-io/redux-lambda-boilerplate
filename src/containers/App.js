import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import LoginNavItemContainer from './LoginNavItemContainer';
import { connect } from 'react-redux';
import { initializeApp } from '../actions';
import Main from '../components/Main';

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

        <Main/>
      </div>
    );
  }
}

const connectedApp = connect(null, null)(App);  // To use this.props.dispatch

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
const connectedAppWithRouter = withRouter(connectedApp);

export default connectedAppWithRouter;
