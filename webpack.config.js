module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },

  output: {
    path: __dirname + "/dist",
    publicPath: 'http://localhost:8080/',
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style", "css"]
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel"],
      },
      {
        test: /\.html$/,
        loaders: ["file?name=[name].[ext]"],
      },
    ],
  },
};
