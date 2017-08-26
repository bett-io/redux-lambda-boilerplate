import React from 'react';
import { initializeApp } from '../actions';
import connectWithRouter from '../../modules/connectWithRouter';

import Header from '../components/Header';
import MainContainer from '../containers/MainContainer';

export class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(initializeApp());
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContainer/>
      </div>
    );
  }
}

const connectedApp = connectWithRouter(null, null)(App);  // To use this.props.dispatch

export default connectedApp;
