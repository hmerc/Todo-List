var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: { 
    js: ['./src/index.js'],
    css: ['./style/main.scss']
  },
  devtools: 'source-map',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
      loaders: [
      {
        test: /\.js$/,
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
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new ExtractTextPlugin('css/style.css')
  ],
};
