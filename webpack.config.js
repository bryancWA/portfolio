const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'client', 'index.js');
const OUT_DIR = path.resolve(__dirname, 'public');

module.exports = {
  // devtool: 'eval-source-map',
  mode: 'development',
  entry: {
    main: SRC_DIR,
  },
  output: {
    path: OUT_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.m?(js|jsx)/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["@babel/plugin-transform-react-jsx"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)?/i,
        include: [path.resolve(__dirname, 'Images')],
        loader: 'file-loader',
         

      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // devtool: 'eval-source-map;',
};