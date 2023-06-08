const path = require('path');

module.exports = {
  entry: './src/pages/index.js', // Replace './src/index.js' with the entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Replace 'dist' with the desired output directory
    filename: 'bundle.js', // Replace 'bundle.js' with the desired output filename
  },
  module: {
    rules: [
      // Other rules...
      {
        test: /\.glsl$/,
        use: 'glsl-loader',
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  
  },
};
