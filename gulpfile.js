"use strict";

const gulp   = require("gulp");
const sync   = require("browser-sync");
const server = sync.create();

const dev     = process.env.NODE_ENV !== "production";
const watched = process.env.LIVE_RELOAD === "true";
const root    = __dirname;

const configGulp = require("./build/config/gulp")(dev, root);
const include    = require("./build/helpers/include")(root);

gulp.task("clean", include("./build/tasks/clean", {
  dest: configGulp.tasks.clean.dest
}));

gulp.task("img", include("./build/tasks/img", {
  dest: configGulp.tasks.img.dest,
  src: configGulp.tasks.img.src
}));

gulp.task("live", include("./build/tasks/live", {
  server: server,
  plugins: configGulp.plugins
}));

gulp.task("css", include("./build/tasks/css", {
  dest: configGulp.tasks.css.dest,
  src: configGulp.tasks.css.src,
  plugins: configGulp.plugins,
  dev: dev,
  watched: watched,
  reload: server.reload
}));

gulp.task("html", include("./build/tasks/html", {
  dest: configGulp.tasks.html.dest,
  src: configGulp.tasks.html.src,
  plugins: configGulp.plugins,
  dev: dev,
  reload: server.reload,
  watched: watched
}));

gulp.task("js", include("./build/tasks/js", {
  plugins: configGulp.plugins,
  reload: server.reload,
  watched: watched
}));

gulp.task("build", gulp.parallel("css", "html", "js"));

gulp.task("watch", include("./build/tasks/watch", {
  paths: configGulp.tasks.watch
}));
