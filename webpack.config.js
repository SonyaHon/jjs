const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  context: __dirname + '/src',
  entry: "./index.js",
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  devtool: NODE_ENV === 'devel' ? 'eval' : false,
  watch: NODE_ENV === 'devel',

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['babel-preset-env']
      }
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }]
  }

};
