'use strict'
const {resolve} = require('path');

module.exports = {
	entry: './client/index.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
	},
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
				test: /jsx?$/,
        include: resolve(__dirname, './client'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
