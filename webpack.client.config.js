const webpack = require('webpack');

const config = {
  entry: [
    'babel-polyfill', // https://github.com/babel/babel-preset-env/issues/112
    './src/index.js',
  ],

  output: {
    path: __dirname + '/dist/public',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ],
      },
    ],
  },

  plugins: [],
};

module.exports = (env) => {
  if (env === 'production') {
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  }

  return config;
};

