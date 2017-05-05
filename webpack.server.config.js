var fs = require('fs');
var path = require('path');

var nodeEnvPath = 'devo';

if (process.env.NODE_ENV === 'production') {
  nodeEnvPath = 'prod';
}

module.exports = {
  entry: path.resolve(__dirname, 'server/lambda.js'),

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
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  resolve: {
    alias: {
      'social.config.json': __dirname + '/config/social.config.' + nodeEnvPath + '.json'
    }
  },
};
