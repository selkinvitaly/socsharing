"use strict";

const path = require("path");

// transforms the relative path to the task
// example: "./build/tasks/clean" -> "./tasks/clean"
function transformPath(taskPath, root) {
  let absolute = path.resolve(root, taskPath);

  return "./" + path.relative(__dirname, absolute);
}

module.exports = function(root) {

  return function(path) {
    let args = Array.prototype.slice.call(arguments, 1);
    let task = require(transformPath(path, root)).apply(this, args);

    return task;
  };

};
