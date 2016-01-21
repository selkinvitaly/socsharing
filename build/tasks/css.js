"use strict";

const stylus  = require("gulp-stylus");
const gulp    = require("gulp");
const gutil   = require("gulp-util");
const postcss = require("gulp-postcss");
const prefix  = require("autoprefixer");
const plumber = require("gulp-plumber");
const base64  = require("gulp-base64");
const gulpIf  = require("gulp-if");
const smaps   = require("gulp-sourcemaps");
const csscomb = require("gulp-csscomb");

module.exports = function(options) {
  let src     = options && options.src;
  let dest    = options && options.dest;
  let plugins = options && options.plugins;
  let dev     = options && options.dev;
  let watched = options && options.watched;
  let reload  = options && options.reload;

  let processors = [
    prefix(plugins.autoprefixer)
  ];

  if (!src || !dest || !plugins || (dev === undefined) || (watched === undefined)) {
    throw new gutil.PluginError("gulp-stylus", "css: incorrect config", {showStack: true});
  }

  return function(cb) {
    return gulp.src(src)
      .pipe(plumber())
      .pipe(gulpIf(watched, smaps.init()))
      .pipe(gulpIf(dev, stylus(), stylus(plugins.stylusProd)))
      .pipe(postcss(processors))
      .pipe(gulpIf(watched, smaps.write()))
      .pipe(base64(plugins.cssBase64))
      .pipe(gulpIf(dev, csscomb()))
      .pipe(plumber.stop())
      .pipe(gulp.dest(dest))
      .pipe(gulpIf(watched, reload({ stream: true })));
  };

};
