import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from '../actions';

import Header from '../components/Header';
import Main from '../components/Main';

export class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(initializeApp());
  }

  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

const connectedApp = connect(null, null)(App);  // To use this.props.dispatch

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md
const connectedAppWithRouter = withRouter(connectedApp);

export default connectedAppWithRouter;
