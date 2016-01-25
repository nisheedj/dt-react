var path = require('path');

module.exports = {
  entry: {
    'bundle': './app/app.js'
  },
  output: {
    path: path.resolve('dist'),
    publicPath: 'dist/',
    filename: '[name].js'
  },
  devServer: {
    contentBase: './examples/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.resolve('app')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      test: /\.css$/,
      include: [
        path.resolve('app'),
        path.resolve('node_modules/normalize.css')
      ],
      loader: 'style-loader!css-loader'
    }, {
      test: /\.scss$/,
      include: [
        path.resolve('app')
      ],
      loader: 'style-loader!css-loader!sass-loader'
    }]
  }
};
