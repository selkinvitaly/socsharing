"use strict";

import dataset  from "./lib/dataset";
import _        from "./lib/helpers";
import Err      from "./classes/Error";
import social   from "./lib/services";

class Socsharing {

  // static constants
  static get ATTR_SERVICES() {
    return "data-socsharing-list";
  }

  static get ATTR_POPUP() {
    return "data-socsharing-popup";
  }

  static get ATTR_TITLE() {
    return "data-socsharing-title";
  }

  static get ATTR_IMG() {
    return "data-socsharing-img";
  }

  static get ATTR_MSG() {
    return "data-socsharing-msg";
  }

  static get ATTR_URL() {
    return "data-socsharing-url";
  }

  static get CLASS_UL() {
    return "socsharing__list";
  }

  static get CLASS_LI() {
    return "socsharing__item";
  }

  static get CLASS_LINK() {
    return "socsharing__link";
  }

  static get TITLE_LINK() {
    return "share on ";
  }

  static get POPUP_CFG() {
    const width  = 650;
    const height = 550;

    let cfg = {
      scrollbars: 1,
      resizable: 1,
      menubar: 0,
      toolbar: 0,
      status: 0
    };

    cfg.height = height;
    cfg.width  = width;
    cfg.left = (window.screen.availWidth - width) / 2;
    cfg.top  = (window.screen.availHeight - height) / 2;

    return cfg;
  }

  /**
   * Generates DOM after the call
   * @param  {elem} elem       This container will contain the generated code
   * @param  {obj}  options={} This object can contain options for certain service
   * @return {obj}             "this" to the new object
   */
  constructor(elem, options = {}) {
    this.container = elem;

    let services  = this._parseServices(elem);
    let intoPopup = this._parsePopup(elem);
    let listElem  = this._attach(services, options);

    if (intoPopup) {
      elem.addEventListener("click", _clickHandler);
    }

    elem.appendChild(listElem);

    // private
    function _clickHandler(event) {
      let finded = _.closest(event.target, Socsharing.CLASS_LINK, 0);

      if (!finded) {
        return;
      }

      let cfg     = Socsharing.POPUP_CFG;
      let href    = finded.href;
      let winName = `win-${Math.random() * 1000}`;
      let options = Object.keys(cfg).map((opt) => {
        return `${opt}=${cfg[opt]}`;
      });

      let popup = window.open(href, winName, options.join(","));

      popup.focus();
      _.preventDefault(event);
    }
  }

  _parsePopup(elem) {
    return elem.hasAttribute(Socsharing.ATTR_POPUP);
  }

  _parseTitle(elem) {
    let meta = document.querySelector("meta[property=\"og:title\"]");

    return (meta && meta.getAttribute("content"))
            ? meta.getAttribute("content")
            : dataset(elem, Socsharing.ATTR_TITLE) || document.title;
  }

  _parseURL(elem) {
    let meta = document.querySelector("meta[property=\"og:url\"]");

    return (meta && meta.getAttribute("content"))
            ? meta.getAttribute("content")
            : dataset(elem, Socsharing.ATTR_URL) || window.location.href;
  }

  _parseMessage(elem) {
    let meta = document.querySelector("meta[property=\"og:description\"]");

    return (meta && meta.getAttribute("content"))
            ? meta.getAttribute("content")
            : dataset(elem, Socsharing.ATTR_MSG) || "";
  }

  _parseImage(elem) {
    let meta = document.querySelector("meta[property=\"og:image\"]");

    return (meta && meta.getAttribute("content"))
            ? meta.getAttribute("content")
            : dataset(elem, Socsharing.ATTR_IMG) || "";
  }

  /**
   * Gets an array of service names
   * Removed dublicated and unsupported names
   * @param  {elem} elem Element-container
   * @return {arr}       Array of service names
   */
  _parseServices(elem) {
    let passedServices = dataset(elem, Socsharing.ATTR_SERVICES);

    if (!passedServices) {
      throw new Err(0);
    }

    // removes dublicated services
    passedServices = _.unique(passedServices.split(","));

    // filters supported services
    let parsedServices = passedServices.filter((service) => {
      return !!social[service];
    });

    if (!parsedServices.length) {
      throw new Err(1);
    }

    return parsedServices;
  }

  _getTitle(service, options) {
    return options[service] && options[service].title || this._parseTitle(this.container);
  }

  _getURL(service, options) {
    return options[service] && options[service].url || this._parseURL(this.container);
  }

  _getMessage(service, options) {
    return options[service] && options[service].message || this._parseMessage(this.container);
  }

  _getImage(service, options) {
    return options[service] && options[service].img || this._parseImage(this.container);
  }

  _template(str, label, replacement) {
    return str.replace(new RegExp(`{${label}}`), encodeURIComponent(replacement));
  }

  /**
   * Generates DOM from the parsed array of service names
   * @param  {arr} parsedServices The parsed array of service names
   * @param  {obj} options        This object can contain options for certain service
   * @return {elem}               Generated UL element
   */
  _attach(parsedServices, options) {
    let listElem = document.createElement("ul");
    let items    = "";

    listElem.className = Socsharing.CLASS_UL;

    parsedServices.forEach((service) => {
      let serviceMap = social[service];
      let address    = serviceMap.getURL();
      let classLi    = serviceMap.getClass();
      let altText    = serviceMap.getAltText();
      let title      = this._getTitle(service, options);
      let url        = this._getURL(service, options);
      let message    = this._getMessage(service, options);
      let img        = this._getImage(service, options);

      address = this._template(address, "title", title);
      address = this._template(address, "url", url);
      address = this._template(address, "message", message);
      address = this._template(address, "img", img);

      items += `<li class="${Socsharing.CLASS_LI} ${classLi}"><a class="${Socsharing.CLASS_LINK}" href="${address}" title="${Socsharing.TITLE_LINK + altText}" target="_blank">${altText}</a></li>`;
    });

    listElem.innerHTML = items;

    return listElem;
  }

}

module.exports = Socsharing;
