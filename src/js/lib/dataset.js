"use strict";

import _ from "./helpers";

/**
 * If dataset is supported than this returns true, else false
 * @return {bool} Supported or not
 */
function checkSupport() {
  let supported = document.documentElement.dataset ||
                  (Object.getOwnPropertyDescriptor(Element.prototype, "dataset") &&
                  Object.getOwnPropertyDescriptor(Element.prototype, "dataset").get);

  return !!supported;
}

/**
 * Returns value of "data-" attributes
 * @param {[type]} elem [description]
 * @param {[type]} attr [description]
 */
function dataset(elem, attr) {
  if (checkSupport()) {
    return  elem.dataset[_.toCamelCase(attr)];
  }

  for (let i = 0, len = elem.attributes.length; i < len; i++) {
    let current = elem.attributes[i];

    if (current.nodeName.indexOf("data-") === -1 || current.nodeName !== attr) {
      continue;
    }

    return current.nodeValue;
  }

  return null;
}

export default dataset;
