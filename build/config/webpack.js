"use strict";

const path    = require("path");
const webpack = require("webpack");
const watched = process.env.LIVE_RELOAD === "true";

module.exports = function(dev, root) {

  let options = {
    context: root,
    entry: {
      socsharing: ["./src/js/index"]
    },
    output: {
      path: path.join(root, "./dist/"),
      filename: dev ? "[name].js" : "[name].min.js",
      publicPath: "",
      library: "Socsharing",
      pathinfo: dev
    },
    debug: dev,
    devtool: watched ? "cheap-module-source-map" : null,
    resolve: {
      modulesDirectories: ["node_modules"],
      extensions: ["", ".js"]
    },
    resolveLoader: {
      modulesDirectories: ["node_modules"],
      extensions: ["", ".loader.js", ".js"],
      moduleTemplates: ["*-loader", "*"]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin()
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          include: path.join(root, "./src/js/"),
          loader: "babel?presets[]=es2015,plugins[]=transform-runtime"
        }
      ]
    }
  };

  // minification
  if (!dev) {
    options.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          "warnings": false,
          "drop_debugger": true,
          "drop_console" : true,
          "unsafe": true
        }
      }),
      new webpack.optimize.OccurenceOrderPlugin()
    );
  }

  return options;
};
