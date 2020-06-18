const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './client/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

/* {
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": true
      }
    ],
    "@babel/preset-react"
  ]
}
 */

module.exports = config;
