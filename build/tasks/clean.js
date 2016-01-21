"use strict";

const del   = require("del");
const gutil = require("gulp-util");

module.exports = function(options) {
  let dest = options && options.dest;

  if (!dest) {
    throw new gutil.PluginError("del", "clean: incorrect path to remove", {showStack: true});
  }

  return function(cb) {
    return del(dest).then(paths => {

      if (paths.length) {
        gutil.log(`Deleted the output directory '${gutil.colors.magenta(dest)}'`);
      }

    });
  };

};
