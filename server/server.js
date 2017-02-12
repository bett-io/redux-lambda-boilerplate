'use strict';

import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import path from 'path';
import Hello from '../src/components/hello';
import About from '../src/components/about';

const PORT = 8001;

const app = express();

app.set('views', path.join(__dirname, '../src/views'))
app.set('view engine', 'pug');

app.use('/static', express.static(path.resolve('static')));
app.get('/about', (req, res) => {
  const content = renderToString(<About />);
  res.render('index', { content });
});
app.get('*', (req, res) => {
  const content = renderToString(<Hello />);
  res.render('index', { content });
});

app.listen(PORT);
