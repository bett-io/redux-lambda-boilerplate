'use strict';

var express = require('express');
var path = require('path');

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from '../modules/routes';

const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props}/>);
      res.send(renderPage(appHtml));
    } else {
      res.status(404).send('Not Found');
    }
  });
});

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
    <script src="/bundle.js"></script>
  `;
}

// Export your express server so you can import it in the lambda function.
module.exports = app
