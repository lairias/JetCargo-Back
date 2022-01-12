const path = require("path");
module.exports = {
  mode: "'development'",
  entry: {
    app: ["@babel/polyfill", "./build/app.js"],
  },
  output: {
    path: path.join(__dirname, "Server"),
    filename: "bundle.js",
  },
};
