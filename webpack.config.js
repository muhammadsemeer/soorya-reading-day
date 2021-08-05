const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const webpack = require("webpack");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

const overlay = require("webpack-dev-server/client/overlay");
const show = overlay.showMessage;
overlay.showMessage = function (messages) {
  const newMessages = messages.map((msg) =>
    msg.split("\n").slice(2).join("\n")
  );

  show(newMessages);
};

const devMode = process.env.NODE_ENV !== "production";
module.exports = {
  entry: "src/index.js",
  output: {
    filename: "chunk.[fullhash].js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new ErrorOverlayPlugin(),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./public/",
          to: "./",
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ["**/*.html", "**/*.js", "**/*.css", "**/*.scss"],
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "vendor.[contenthash].css",
    }),
    new Dotenv(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, `src`),
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};
