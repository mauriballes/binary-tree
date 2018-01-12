module.exports = {
  entry: './src/js/app.js',
  output: {
    path: __dirname + '/src/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }
        ]
      }, {
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        use: {
          loader: 'url-loader'
        }
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}
