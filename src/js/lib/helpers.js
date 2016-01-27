"use strict";

let lib = {};

export default {

  /**
   * Removes duplicates from an array
   * @param  {array} arr The original array
   * @return {array}     The unique array
   */
  unique(arr) {
    return arr.filter(function(item) {
			return !this[item] ? this[item] = true : false;
		}, {});
  },

  hasClass(elem, className) {
    return elem.classList ? elem.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(elem.className);
  },

  /**
   * Finds element with the passed name of class in top DOM
   * @param  {elem} elem      The initial element in search
   * @param  {str} className  The name of class
   * @param  {num} deep=3     The deep of search. 0 => self; 1 => self.parentNode etc.
   * @return {elem or undef}  Returns the found element or implicit undefined
   */
  closest(elem, className, deep = 3) {
    do {

      if (this.hasClass(elem, className)) {
        return elem;
      }

    } while (elem = elem.parentNode && deep-- !== 0);
  },

  /**
   * Returns value of "data-" attributes
   * @param {[type]} elem [description]
   * @param {[type]} attr [description]
   */
  dataset(elem, attr) {
    if (elem.dataset) {
      return elem.dataset[this.toCamelCase(attr)];
    }

    for (let i = 0, len = elem.attributes.length; i < len; i++) {
      let current = elem.attributes[i];

      if (current.nodeName.indexOf("data-") === -1 || current.nodeName !== attr) {
        continue;
      }

      return current.nodeValue;
    }

    return null;
  },

  /**
   * Transforms the name of attribute to camel case
   * Example: "data-set-testing" => "setTesting"
   * @param  {str} attr The name of attribute
   * @return {str}      The transformed name of attribute
   */
  toCamelCase(attr) {
    return attr.slice(5).replace(/-./g, ch0 => ch0[1].toUpperCase());
  }

};
