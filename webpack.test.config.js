const merge = require('webpack-merge');
const clientConfig = require('./webpack.client.config.js');

const testConfig = {
  externals: {
  },
};

module.exports = merge(testConfig, clientConfig());
