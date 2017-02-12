'use strict';

var express = require('express');
var compression = require('compression');
var path = require('path');

const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Production Express server running at localhost:' + PORT);
});
