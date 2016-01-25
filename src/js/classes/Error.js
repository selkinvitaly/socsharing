"use strict";

import errors from "../lib/errors";

// custom class error
function SocsharingError(code) {
  this.name    = "SocsharingError";
  this.code    = code;
  this.message = errors[code];

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, SocsharingError);
  } else {
    this.stack = (new Error()).stack;
  }
}

SocsharingError.prototype = Object.create(Error.prototype);

export default SocsharingError;
