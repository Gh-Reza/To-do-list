const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {bundle: path.resolve(__dirname, './src/index.js')},
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin(
    {
      template: './src/index.html',
    }
  )],
  optimization: {
    runtimeChunk: 'single',
  },
}