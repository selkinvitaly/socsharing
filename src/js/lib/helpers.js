"use strict";

let lib = {};

export default {

  /**
   * Returns uniq array
   * @param  {array} arr The original array
   * @return {array}     The unique array
   */
  unique(arr) {
    let temp = {};

    arr.forEach((item) => {
      temp[item] = true;
    });

    return Object.keys(temp);
  },

  isString(str) {
    return typeof str === "string";
  },

  hasClass(elem, className) {
    return elem.classList ? elem.classList.contains(className) : ~elem.className.indexOf(className);
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

  preventDefault(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = 0;
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
