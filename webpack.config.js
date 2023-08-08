const path = require("path");
const nodeExternals = require("webpack-node-externals");

const dir = process.env.WEBPACK_DIR || ".webpack";

module.exports /** @type { import('webpack').Configuration } */ = {
  entry: ["./src/entry.ts"],
  target: "es2024",
  node: {
    __dirname: true
  },
  stats: "normal",
  mode: "production",
  devtool: false,
  // devtool: "eval-source-map",
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  cache: {
    type: "filesystem",
    cacheDirectory: path.resolve(__dirname, "./node_modules/.webpack-cache")
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "swc-loader",
        exclude: [path.resolve(__dirname, ".webpack"), path.resolve(__dirname, "node_modules")]
      }
    ]
  },
  resolve: {
    extensions: [".ts"]
  },
  experiments: {
    outputModule: true
  },
  output: {
    libraryTarget: "module",
    path: path.join(__dirname, dir),
    filename: "[name].mjs"
  }
};
