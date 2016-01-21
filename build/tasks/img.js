"use strict";

const gulp  = require("gulp");
const gutil = require("gulp-util");

module.exports = function(options) {
  let src  = options && options.src;
  let dest = options && options.dest;

  if (!src || !dest) {
    throw new gutil.PluginError("gulp", "img: incorrect config", {showStack: true});
  }

  return function(cb) {
    return gulp.src(src)
      .pipe(gulp.dest(dest));
  };

};
