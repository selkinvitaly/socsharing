"use strict";

const gulp  = require("gulp");
const gutil = require("gulp-util");

module.exports = function(options) {
  let paths  = options && options.paths;

  if (!paths) {
    throw new gutil.PluginError("gulp", "watch: incorrect config", {showStack: true});
  }

  return gulp.series(function(cb) {
    gulp.watch(paths.js, gulp.series("js"));
    gulp.watch(paths.css, gulp.series("css"));
    gulp.watch(paths.html, gulp.series("html"));
    cb();
  }, "live");

};
