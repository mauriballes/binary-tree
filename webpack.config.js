module.exports = {
  entry: './app/main.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.min.js'
  },
  devServer: {
    contentBase: "public",
    filename: "bundle.min.js"
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
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
      }, {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}
