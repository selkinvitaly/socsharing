"use strict";

const gulp    = require("gulp");
const gutil   = require("gulp-util");
const plumber = require("gulp-plumber");
const jade    = require("gulp-jade");
const jadeInh = require("gulp-jade-inheritance");
const gulpIf  = require("gulp-if");

module.exports = function(options) {
  let src     = options && options.src;
  let dest    = options && options.dest;
  let plugins = options && options.plugins;
  let dev     = options && options.dev;
  let watched = options && options.watched;
  let reload  = options && options.reload;

  if (!src || !dest || !plugins || (dev === undefined) || (watched === undefined)) {
    throw new gutil.PluginError("gulp-jade", "html: incorrect config", {showStack: true});
  }

  return function(cb) {
    return gulp.src(src)
      .pipe(plumber())
      .pipe(jadeInh(plugins.jadeInheritance))
      .pipe(gulpIf(dev, jade(plugins.jadeDev), jade(plugins.jadeProd)))
      .pipe(plumber.stop())
      .pipe(gulp.dest(dest))
      .pipe(gulpIf(watched, reload({ stream: true })));
  };

};
