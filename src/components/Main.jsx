import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Repos from './Repos';
import About from './About';
import Hello from './Hello';

const Main = ({ sessionCounter }) => (
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

export default Main;
