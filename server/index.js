
import React from 'react';
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from '../src/components/app';
import Home from '../src/components/home';
import Repos from '../src/components/Repos';
import Repo from '../src/components/Repo';
import About from '../src/components/about';
import Hello from '../src/components/hello';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/hello" component={Hello}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
