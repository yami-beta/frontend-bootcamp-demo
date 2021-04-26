const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let publicPath = "/";

/**
 * @typedef { () => import("webpack").Configuration } WebpackConfigFunc
 * @type WebpackConfigFunc
 */
module.exports = (env, argv) => {
  const mode = argv.mode || "development";

  return {
    mode,
    entry: {
      index: [path.join(__dirname, "src", "index.tsx")],
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js",
      publicPath,
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          use: ["ts-loader"],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
      new CopyWebpackPlugin([
        {
          from: "../../node_modules/sanitize.css/sanitize.css",
          to: "vendor/",
        },
      ]),
    ],
    devtool: mode === "development" ? "source-map" : false,
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      historyApiFallback: true,
      watchContentBase: true,
      compress: true,
    },
  };
};
