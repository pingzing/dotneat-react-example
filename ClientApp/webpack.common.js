const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { 
    main: "./src/index.tsx"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
    publicPath: "/"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader"
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(gif|png|jpe?g|woff|woff2|eot|ttf|svg)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],  
};
