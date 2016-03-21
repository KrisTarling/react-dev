var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './components/Main.js',
  output: {
    path: './',
    filename: 'client/index.js'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}