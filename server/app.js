'use strict';

var express = require('express');
var path = require('path');

import awsConfig from 'aws.config.json';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import connectDynamoDb from 'connect-dynamodb';
import createReduxStore from '../modules/store';
import session from 'express-session';

import App from '../src/containers/App';

const store = createReduxStore({});

const app = express();
const DynamoDBStore = connectDynamoDb({session});

const sessionOption = {
  resave: false,
  saveUninitialized: true,
  secret: 'session secret',
};

if (process.env.NODE_ENV === 'production') {
  // Use DynamoDB only in production. Session will be stored in memory in non-production.

  const dynamoDBOptions = {
    // Optional DynamoDB table name, defaults to 'sessions'
    table: 'hello_session',

    // Optional JSON object of AWS credentials and configuration
    AWSConfigJSON: {
      region: awsConfig.common.region,
    },

    // Optional ProvisionedThroughput params, defaults to 5
    readCapacityUnits: 2,
    writeCapacityUnits: 2,
  };

  sessionOption.store = new DynamoDBStore(dynamoDBOptions);
} else {
  console.log('session will be stored in memory');
}

app.use(session(sessionOption));
app.use(express.static(path.join(__dirname, './public')));

app.get('*', (req, res) => {
  const context = {};

  const appHtml = renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}>
        <App/>
      </StaticRouter>
    </Provider>
  )

  if (context.url) {
    res.redirect(302, context.url);
  } else {
    res.send(renderPage(appHtml));
  }
});

const initialState = store.getState();

function renderPage(appHtml) {
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
