var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    js: [  `./src/index.js`],
    test_css: [ `./style/main.scss`]
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
      loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.scss$/,
        exclude:/node_modules/,
        loader: ExtractTextPlugin.extract([
          'css-loader?sourceMap!postcss-loader?sourceMap!sass-loader?sourceMap'
        ])
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
