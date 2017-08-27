var fs = require('fs');
var path = require('path');

var nodeEnvPath = 'devo';

if (process.env.NODE_ENV === 'production') {
  nodeEnvPath = 'prod';
}

module.exports = {
  entry: [
    'babel-polyfill', // https://github.com/babel/babel-preset-env/issues/112
    path.resolve(__dirname, 'server/standalone.js'),
  ],

  output: {
    path: __dirname + '/standalone',
    filename: 'standalone.bundle.js',
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
      'social.config.json': __dirname + '/config/social.config.' + nodeEnvPath + '.json',
      'aws.config.json': __dirname + '/config/aws.config.' + nodeEnvPath + '.json',
    },
  },
};
