var webpack = require('webpack');

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
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'react-hmre']
        }
      }
    ]
  }
}