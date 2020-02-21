const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
              {
                loader: 'file-loader?name=./src/fonts/[name].[ext]'
              },
              {
                loader: 'file-loader?name=./src/fonts/ofont.ru_Segoe WP Light/[name].[ext]'
              }
        ]
      }
    ]
  },

  devServer: {
    contentBase: [path.resolve(__dirname, "build"), path.resolve(__dirname, "src")],
    compress: true,
    port: 4200,
    historyApiFallback: true,
    noInfo:true
},
  plugins: [
    new ExtractTextPlugin('style.css'),
  ]
};