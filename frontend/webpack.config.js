// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your app
  output: {
    filename: 'app.js', // Output bundle filename
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
};
