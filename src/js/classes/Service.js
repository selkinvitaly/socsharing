"use strict";

// class service
export default class Service {

  constructor(url, className, altText) {
    this.url = url;
    this.className = className;
    this.altText = altText;
  }

  getURL() {
    return this.url;
  }

  getClass() {
    return this.className;
  }

  getAltText() {
    return this.altText;
  }

};
