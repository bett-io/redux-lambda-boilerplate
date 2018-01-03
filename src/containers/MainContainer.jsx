import React from 'react';

import connectWithRouter from '../../modules/connectWithRouter';
import Home from '../components/Home';
import Repos from '../components/Repos';
import About from '../components/About';
import Hello from '../components/Hello';
import { Route, Switch } from 'react-router-dom';

const MainContainer = ({ sessionCounter }) => (
  <div>
    <div>
      <strong>Session counter: {sessionCounter.counter}</strong>
      <br/>
      (Note that this value is incresed only when server side rendering requested)
    </div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/repos' component={Repos}/>
      <Route path='/hello' component={Hello}/>
      <Route path='/about' component={About}/>
    </Switch>
  </div>
);

const mapStateToProps = (state) => {
  return {
    sessionCounter: state.sessionCounter,
  };
};

export default connectWithRouter(
  mapStateToProps,
  null,
)(MainContainer);
