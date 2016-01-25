module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },

  output: {
    path: __dirname + "/dist",
    filename: "app.js"
  },
  module: {
    loaders: [
    ],
  },
};
