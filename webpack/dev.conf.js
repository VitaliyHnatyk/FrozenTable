const config = require('./base.conf');

// Webpack Development Settings
module.exports = Object.assign(config, {
  entry: './dev/App.jsx',
  output: 'bundle.js',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: 'dev',
  },
  module: {
    loaders: [
      ...config.module.loaders,
      {
        test: /\.less$/,
        loader: 'style-loader?insertAt=top!css-loader!less-loader',
      },
    ],
  },
});