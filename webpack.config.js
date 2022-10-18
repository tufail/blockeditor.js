const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/editor/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'blockeditor.js',
    library: 'BlockEditor',
    libraryExport: 'default',
    libraryTarget: 'window',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001,
  },
  target: ['web', 'es5'],
}
