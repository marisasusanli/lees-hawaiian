const path = require('path');

module.exports = {
  entry: './app/index.js',
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 8000,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.mp4$/i,
        loader: 'file-loader',
        options: {
          name: 'media/[hash].[ext]',
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
};
