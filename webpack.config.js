const path =  require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extract = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
              loader: 'babel-loader',
              options: {
                  presets: ['@babel/preset-env']
              }
          }
      },
      {
        test:/\.css$/,
        use: [
          {
            loader: extract.loader
          },
          {
            loader: 'css-loader'
          },
        ]
    }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    inlineSource: '.(js|css)$'
  }),
  new extract({
    filename: 'styles.css'
  })
  ],
  mode: 'development',
}