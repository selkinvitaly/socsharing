"use strict";

const gulp  = require("gulp");
const gutil = require("gulp-util");

module.exports = function(options) {
  let server  = options && options.server;
  let plugins = options && options.plugins;

  if (!server || !plugins) {
    throw new gutil.PluginError("browser-sync", "live: incorrect config", {showStack: true});
  }

  return function(cb) {
    server.init(plugins.browserSync);
  };

};
