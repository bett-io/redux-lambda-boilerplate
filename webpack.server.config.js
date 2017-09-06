const fs = require('fs');
const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill', // https://github.com/babel/babel-preset-env/issues/112
    path.resolve(__dirname, 'server/lambda.js'),
  ],

  output: {
    path: __dirname + '/dist',
    libraryTarget: 'commonjs2',
    filename: 'lambda.js',
  },

  target: 'node',

  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod;
    return ext;
  }, {}),

  node: {
    __filename: false,
    __dirname: false,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
