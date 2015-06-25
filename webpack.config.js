var path = require('path');

module.exports = {
  entry: './scripts/app.jsx',
  // foundation: './src/foundation',
  // head: './src/head'
  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:8090/assets'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'jsx-loader?insertPragma=React.DOM&harmony'
      },
      {
        test: /\.scss$/,
        loader: "style-loader!sass-loader?outputStyle=expanded&" +
        "includePaths[]=" +
          (path.resolve(__dirname, "./node_modules/zurb-foundation-5/scss/"))
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpeg|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: ['src', 'node_modules']
  }
}
