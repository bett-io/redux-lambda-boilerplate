import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Repos from './Repos';
import About from './About';
import Hello from './Hello';

import { Link } from 'react-router-dom';

const Main = () => (
  <div>
    <Link to="/hello">Home</Link>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path="/repos" component={Repos}/>
      <Route path="/hello" component={Hello}/>
      <Route path="/about" component={About}/>
    </Switch>
  </div>
);

export default Main;
