const path = require('path');
const config = require('./base.conf');

// Webpack Production Settings
module.exports = Object.assign(config, {
  entry: './src',
  output: {
    path: path.resolve('dist'),
    filename: 'react-metismenu.js',
    library: 'ReactMetismenu',
    libraryTarget: 'umd',
  },
  externals: [
    {
      react: true,
    },
  ],
});
