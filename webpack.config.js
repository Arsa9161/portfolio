const path = require("path");
const postcss_plugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-simple-vars"), // css dotor variable zarlaj bolno
  require("postcss-hexrgba"), // rgba() dotor ungiig variable-eer duudaj bolno
  require("postcss-nested"),
  require("autoprefixer"),
];
module.exports = {
  entry: "./app/assets/scripts/main.js",
  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app"),
  },

  devServer: {
    before: function (app, server) {
      server._watch("./app/**/*.html");
    },
    contentBase: path.join(__dirname, "app"),
    hot: true,
    port: 8080,
    host: "0.0.0.0",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          { loader: "postcss-loader", options: { plugins: postcss_plugins } },
        ],
      },
    ],
  },
  node: {
    fs: "empty"
  }
};
