const merge = require('webpack-merge');
const clientConfig = require('./webpack.client.config.js');

const testConfig = {
  externals: {
    'react/addons': true,  // pre-existing at enzyme 2.8.0
    'react/lib/ExecutionEnvironment': true,  // pre-existing at enzyme 2.8.0
    'react/lib/ReactContext': true,  // pre-existing at enzyme 2.8.0
    'react-dom/test-utils': true,
    'react-test-renderer/shallow': true,
  },
};

module.exports = merge(testConfig, clientConfig());

