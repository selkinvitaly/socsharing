"use strict";

const webpack = require("webpack");
const path    = require("path");

const configureWebpack = require("./webpack");

module.exports = function(dev, root) {

  let tasks = {

    clean: {
      dest: "./dist/"
    },

    img: {
      src: ["./src/img/!(base64)", "./src/img/!(base64)/**/*"],
      dest: "./dist/default/img/"
    },

    css: {
      dest: "./dist/default/css/",
      src: ["./src/css/default.styl"]
    },

    html: {
      dest: "./dist/default/",
      src: ["./src/html/default.jade"],
      basedir: "./src/html/"
    },

    watch: {
      js: "./src/js/**/*.js",
      css: "./src/css/**/*.styl",
      html: "./src/html/**/*.jade"
    }

  };

  let plugins = {

    autoprefixer: {
      browsers: ["last 2 versions", "Firefox ESR", "ie >= 9"]
    },

    browserSync: {
      server: {
        baseDir: "dist/"
      },
      ghostMode: false,
      ui: false,
      open: false
    },

    stylusProd: {
      compress: true
    },

    cssBase64: {
      baseDir: "src/img/base64/",
      extensions: [/\.svg#base64/i],
      exclude: [],
      maxImageSize: 10 * 1024, // bytes
      debug: false
    },

    jadeInheritance: {
      basedir: tasks.html.basedir
    },

    jadeDev: {
      pretty: true
    },

    jadeProd: {
      pretty: false
    },

    webpack: configureWebpack(dev, root),

    webpackOutput: {
      hash: true,
      version: false,
      timings: true,
      assets: true,
      chunks: false,
      modules: false,
      cached: true,
      colors: true
    }

  };

  return {
    tasks: tasks,
    plugins: plugins
  };

};
