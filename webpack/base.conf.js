module.exports = {
    resolve: {
      extensions: [
        '.js',
        '.jsx',
      ],
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
        },
      ],
    },
  };