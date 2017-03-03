import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../src/components/App';
import Home from '../src/components/Home';
import Repos from '../src/components/Repos';
import Repo from '../src/components/Repo';
import About from '../src/components/About';
import Hello from '../src/components/Hello';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/hello" component={Hello}/>
    <Route path="/about" component={About}/>
  </Route>
);
