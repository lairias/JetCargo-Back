const path = require("path");
module.exports = {
  entry: {
    app: ["@babel/polyfill", "./src/models/Pa_people.js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/app.bundle.js",
  },
};
