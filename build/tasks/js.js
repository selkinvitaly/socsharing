"use strict";

const gutil   = require("gulp-util");
const webpack = require("webpack");

module.exports = function(options) {
  let plugins = options && options.plugins;
  let watched = options && options.watched;
  let reload  = options && options.reload;

  if (!plugins || (watched === undefined)) {
    throw new gutil.PluginError("webpack", "js: incorrect config", {showStack: true});
  }

  return function(cb) {

    webpack(plugins.webpack, function(err, stats) {
      if (err) {
        throw new gutil.PluginError("webpack", err);
      }

      gutil.log("[webpack]", stats.toString(plugins.webpackOutput));

      if (watched) {
        reload();
      }

      cb();
    });

  };

};
