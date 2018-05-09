const path = require('path');
const pkg = require(path.join(process.cwd(), 'package.json'));

module.exports = {
  entry: {
    [`${pkg.name}.min`]: ['./src/index.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader', 'eslint-loader']
      // }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    library: pkg.name,
    libraryTarget: 'umd',
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    contentBase: './dist'
  }
};
