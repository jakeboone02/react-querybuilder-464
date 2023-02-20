const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src"),
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["src", "node_modules"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
