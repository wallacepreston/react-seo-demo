module.exports = {
  entry: './client/main.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  mode: 'development',
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  }
}
