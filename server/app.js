'use strict';

var express = require('express');
var path = require('path');

import awsConfig from 'aws.config.json';
import bodyParser from 'body-parser';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import createReduxStore from '../modules/store';

import auth from './auth';
import session from './libs/session';

import App from '../src/containers/App';

const app = express();

app.use(bodyParser.json()); // for parsing POST body
app.use(session.createSessionMiddleware(awsConfig.common.region));
app.use(express.static(path.join(__dirname, './public')));

app.get('*', (req, res) => {
  console.log({ function:'app.get', req: { url: req.url } });

  const context = {};

  // counter in session for demo
  if (!req.session.counter) req.session.counter = 0;
  req.session.counter++;

  const initialState = session.createInitialReduxState(req.session);
  const store = createReduxStore(initialState);

  const appHtml = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}>
        <App/>
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.redirect(302, context.url);
  } else {
    res.send(renderPage(appHtml, store.getState()));
  }
});

app.post('/signin', (req, res) => {
  console.log({ function:'app.post', req: { url: req.url } });

  auth.signin(req).then((result) => res.send(result));
});

app.post('/signout', (req, res) => {
  console.log({ function:'app.post', req: { url: req.url } });

  res.send(auth.signout(req, res));
});

function renderPage(appHtml, initialState) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>helloworld-lambda-web</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
    <div id=app>${appHtml}</div>
    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
    </script>
    <script src="/bundle.js"></script>
  `;
}

// Export your express server so you can import it in the lambda function.
module.exports = app;
