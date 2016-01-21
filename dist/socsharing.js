var Socsharing =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** multi socsharing ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./src/js/index */1);


/***/ },
/* 1 */
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 2);

	var _keys2 = _interopRequireDefault(_keys);

	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 15);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _dataset = __webpack_require__(/*! ./lib/dataset */ 19);

	var _dataset2 = _interopRequireDefault(_dataset);

	var _helpers = __webpack_require__(/*! ./lib/helpers */ 26);

	var _helpers2 = _interopRequireDefault(_helpers);

	var _Error = __webpack_require__(/*! ./classes/Error */ 27);

	var _Error2 = _interopRequireDefault(_Error);

	var _services = __webpack_require__(/*! ./lib/services */ 70);

	var _services2 = _interopRequireDefault(_services);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Socsharing = function () {
	  (0, _createClass3.default)(Socsharing, null, [{
	    key: "ATTR_SERVICES",

	    // static constants
	    get: function get() {
	      return "data-socsharing-list";
	    }
	  }, {
	    key: "ATTR_POPUP",
	    get: function get() {
	      return "data-socsharing-popup";
	    }
	  }, {
	    key: "ATTR_TITLE",
	    get: function get() {
	      return "data-socsharing-title";
	    }
	  }, {
	    key: "ATTR_IMG",
	    get: function get() {
	      return "data-socsharing-img";
	    }
	  }, {
	    key: "ATTR_MSG",
	    get: function get() {
	      return "data-socsharing-msg";
	    }
	  }, {
	    key: "ATTR_URL",
	    get: function get() {
	      return "data-socsharing-url";
	    }
	  }, {
	    key: "CLASS_UL",
	    get: function get() {
	      return "socsharing__list";
	    }
	  }, {
	    key: "CLASS_LI",
	    get: function get() {
	      return "socsharing__item";
	    }
	  }, {
	    key: "CLASS_LINK",
	    get: function get() {
	      return "socsharing__link";
	    }
	  }, {
	    key: "TITLE_LINK",
	    get: function get() {
	      return "share on ";
	    }
	  }, {
	    key: "POPUP_CFG",
	    get: function get() {
	      var width = 650;
	      var height = 550;

	      var cfg = {
	        scrollbars: 1,
	        resizable: 1,
	        menubar: 0,
	        toolbar: 0,
	        status: 0,
	        left: (window.screen.availWidth - 600) / 2,
	        top: (window.screen.availHeight - 500) / 2,
	        width: 600,
	        height: 500
	      };

	      cfg.height = height;
	      cfg.width = width;
	      cfg.left = (window.screen.availWidth - width) / 2;
	      cfg.top = (window.screen.availHeight - height) / 2;

	      return cfg;
	    }

	    /**
	     * Generates DOM after the call
	     * @param  {elem} elem       This container will contain the generated code
	     * @param  {obj}  options={} This object can contain options for certain service
	     * @return {obj}             "this" to the new object
	     */

	  }]);

	  function Socsharing(elem) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	    (0, _classCallCheck3.default)(this, Socsharing);

	    this.container = elem;

	    var services = this._parseServices(elem);
	    var intoPopup = this._parsePopup(elem);
	    var listElem = this._attach(services, options);

	    if (intoPopup) {
	      elem.addEventListener("click", _clickHandler);
	    }

	    elem.appendChild(listElem);

	    // private
	    function _clickHandler(event) {
	      var finded = _helpers2.default.closest(event.target, Socsharing.CLASS_LINK, 0);

	      if (!finded) {
	        return;
	      }

	      var cfg = Socsharing.POPUP_CFG;
	      var href = finded.href;
	      var winName = "win-" + Math.random() * 1000;
	      var options = (0, _keys2.default)(cfg).map(function (opt) {
	        return opt + "=" + cfg[opt];
	      });

	      var popup = window.open(href, winName, options.join(","));

	      popup.focus();
	      _helpers2.default.preventDefault(event);
	    }
	  }

	  (0, _createClass3.default)(Socsharing, [{
	    key: "_parsePopup",
	    value: function _parsePopup(elem) {
	      return elem.hasAttribute(Socsharing.ATTR_POPUP);
	    }
	  }, {
	    key: "_parseTitle",
	    value: function _parseTitle(elem) {
	      var meta = document.querySelector("meta[property=\"og:title\"]");

	      return meta && meta.getAttribute("content") ? meta.getAttribute("content") : (0, _dataset2.default)(elem, Socsharing.ATTR_TITLE) || document.title;
	    }
	  }, {
	    key: "_parseURL",
	    value: function _parseURL(elem) {
	      var meta = document.querySelector("meta[property=\"og:url\"]");

	      return meta && meta.getAttribute("content") ? meta.getAttribute("content") : (0, _dataset2.default)(elem, Socsharing.ATTR_URL) || window.location.href;
	    }
	  }, {
	    key: "_parseMessage",
	    value: function _parseMessage(elem) {
	      var meta = document.querySelector("meta[property=\"og:description\"]");

	      return meta && meta.getAttribute("content") ? meta.getAttribute("content") : (0, _dataset2.default)(elem, Socsharing.ATTR_MSG) || "";
	    }
	  }, {
	    key: "_parseImage",
	    value: function _parseImage(elem) {
	      var meta = document.querySelector("meta[property=\"og:image\"]");

	      return meta && meta.getAttribute("content") ? meta.getAttribute("content") : (0, _dataset2.default)(elem, Socsharing.ATTR_IMG) || "";
	    }

	    /**
	     * Gets an array of service names
	     * Removed dublicated and unsupported names
	     * @param  {elem} elem Element-container
	     * @return {arr}       Array of service names
	     */

	  }, {
	    key: "_parseServices",
	    value: function _parseServices(elem) {
	      var passedServices = (0, _dataset2.default)(elem, Socsharing.ATTR_SERVICES);

	      if (!passedServices) {
	        throw new _Error2.default(0);
	      }

	      // removes dublicated services
	      passedServices = _helpers2.default.unique(passedServices.split(","));

	      // filters supported services
	      var parsedServices = passedServices.filter(function (service) {
	        return _services2.default.has(service);
	      });

	      if (!parsedServices.length) {
	        throw new _Error2.default(1);
	      }

	      return parsedServices;
	    }
	  }, {
	    key: "_getTitle",
	    value: function _getTitle(service, options) {
	      return options[service] && options[service].title || this._parseTitle(this.container);
	    }
	  }, {
	    key: "_getURL",
	    value: function _getURL(service, options) {
	      return options[service] && options[service].url || this._parseURL(this.container);
	    }
	  }, {
	    key: "_getMessage",
	    value: function _getMessage(service, options) {
	      return options[service] && options[service].message || this._parseMessage(this.container);
	    }
	  }, {
	    key: "_getImage",
	    value: function _getImage(service, options) {
	      return options[service] && options[service].img || this._parseImage(this.container);
	    }
	  }, {
	    key: "_template",
	    value: function _template(str, label, replacement) {
	      return str.replace(new RegExp("{" + label + "}"), encodeURIComponent(replacement));
	    }

	    /**
	     * Generates DOM from the parsed array of service names
	     * @param  {arr} parsedServices The parsed array of service names
	     * @param  {obj} options        This object can contain options for certain service
	     * @return {elem}               Generated UL element
	     */

	  }, {
	    key: "_attach",
	    value: function _attach(parsedServices, options) {
	      var _this = this;

	      var listElem = document.createElement("ul");
	      var items = "";

	      listElem.className = Socsharing.CLASS_UL;

	      parsedServices.forEach(function (service) {
	        var serviceMap = _services2.default.get(service);
	        var address = serviceMap.getURL();
	        var classLi = serviceMap.getClass();
	        var altText = serviceMap.getAltText();
	        var title = _this._getTitle(service, options);
	        var url = _this._getURL(service, options);
	        var message = _this._getMessage(service, options);
	        var img = _this._getImage(service, options);

	        address = _this._template(address, "title", title);
	        address = _this._template(address, "url", url);
	        address = _this._template(address, "message", message);
	        address = _this._template(address, "img", img);

	        items += "<li class=\"" + Socsharing.CLASS_LI + " " + classLi + "\"><a class=\"" + Socsharing.CLASS_LINK + "\" href=\"" + address + "\" title=\"" + (Socsharing.TITLE_LINK + altText) + "\" target=\"_blank\">" + altText + "</a></li>";
	      });

	      listElem.innerHTML = items;

	      return listElem;
	    }
	  }]);
	  return Socsharing;
	}();

	module.exports = Socsharing;

/***/ },
/* 2 */
/*!************************************************!*\
  !*** ./~/babel-runtime/core-js/object/keys.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ 3), __esModule: true };

/***/ },
/* 3 */
/*!*********************************************!*\
  !*** ./~/core-js/library/fn/object/keys.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../../modules/es6.object.keys */ 4);
	module.exports = __webpack_require__(/*! ../../modules/$.core */ 10).Object.keys;

/***/ },
/* 4 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.keys.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(/*! ./$.to-object */ 5);

	__webpack_require__(/*! ./$.object-sap */ 7)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 5 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.to-object.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(/*! ./$.defined */ 6);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 6 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.defined.js ***!
  \************************************************/
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 7 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.object-sap.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(/*! ./$.export */ 8)
	  , core    = __webpack_require__(/*! ./$.core */ 10)
	  , fails   = __webpack_require__(/*! ./$.fails */ 13);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 8 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.export.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(/*! ./$.global */ 9)
	  , core      = __webpack_require__(/*! ./$.core */ 10)
	  , ctx       = __webpack_require__(/*! ./$.ctx */ 11)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 9 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.global.js ***!
  \***********************************************/
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 10 */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.core.js ***!
  \*********************************************/
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 11 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.ctx.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(/*! ./$.a-function */ 12);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 12 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.a-function.js ***!
  \***************************************************/
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 13 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/$.fails.js ***!
  \**********************************************/
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 14 */
/*!***************************************************!*\
  !*** ./~/babel-runtime/helpers/classCallCheck.js ***!
  \***************************************************/
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 15 */
/*!************************************************!*\
  !*** ./~/babel-runtime/helpers/createClass.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ 16);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

/***/ },
/* 16 */
/*!***********************************************************!*\
  !*** ./~/babel-runtime/core-js/object/define-property.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ 17), __esModule: true };

/***/ },
/* 17 */
/*!********************************************************!*\
  !*** ./~/core-js/library/fn/object/define-property.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! ../../modules/$ */ 18);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 18 */
/*!****************************************!*\
  !*** ./~/core-js/library/modules/$.js ***!
  \****************************************/
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 19 */
/*!*******************************!*\
  !*** ./src/js/lib/dataset.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _getOwnPropertyDescriptor = __webpack_require__(/*! babel-runtime/core-js/object/get-own-property-descriptor */ 20);

	var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _helpers = __webpack_require__(/*! ./helpers */ 26);

	var _helpers2 = _interopRequireDefault(_helpers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * If dataset is supported than this returns true, else false
	 * @return {bool} Supported or not
	 */
	function checkSupport() {
	  var supported = document.documentElement.dataset || (0, _getOwnPropertyDescriptor2.default)(Element.prototype, "dataset") && (0, _getOwnPropertyDescriptor2.default)(Element.prototype, "dataset").get;

	  return !!supported;
	}

	/**
	 * Returns value of "data-" attributes
	 * @param {[type]} elem [description]
	 * @param {[type]} attr [description]
	 */
	function dataset(elem, attr) {
	  if (checkSupport()) {
	    return elem.dataset[_helpers2.default.toCamelCase(attr)];
	  }

	  for (var i = 0, len = elem.attributes.length; i < len; i++) {
	    var current = elem.attributes[i];

	    if (current.nodeName.indexOf("data-") === -1 || current.nodeName !== attr) {
	      continue;
	    }

	    return current.nodeValue;
	  }

	  return null;
	}

	exports.default = dataset;

/***/ },
/* 20 */
/*!***********************************************************************!*\
  !*** ./~/babel-runtime/core-js/object/get-own-property-descriptor.js ***!
  \***********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ 21), __esModule: true };

/***/ },
/* 21 */
/*!********************************************************************!*\
  !*** ./~/core-js/library/fn/object/get-own-property-descriptor.js ***!
  \********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! ../../modules/$ */ 18);
	__webpack_require__(/*! ../../modules/es6.object.get-own-property-descriptor */ 22);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 22 */
/*!*****************************************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.get-own-property-descriptor.js ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(/*! ./$.to-iobject */ 23);

	__webpack_require__(/*! ./$.object-sap */ 7)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 23 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.to-iobject.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(/*! ./$.iobject */ 24)
	  , defined = __webpack_require__(/*! ./$.defined */ 6);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 24 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.iobject.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(/*! ./$.cof */ 25);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 25 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.cof.js ***!
  \********************************************/
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 26 */
/*!*******************************!*\
  !*** ./src/js/lib/helpers.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ 2);

	var _keys2 = _interopRequireDefault(_keys);

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var lib = {};

	exports.default = {

	  /**
	   * Returns uniq array
	   * @param  {array} arr The original array
	   * @return {array}     The unique array
	   */

	  unique: function unique(arr) {
	    var temp = {};

	    arr.forEach(function (item) {
	      temp[item] = true;
	    });

	    return (0, _keys2.default)(temp);
	  },
	  isString: function isString(str) {
	    return typeof str === "string";
	  },
	  hasClass: function hasClass(elem, className) {
	    return elem.classList ? elem.classList.contains(className) : ~elem.className.indexOf(className);
	  },

	  /**
	   * Finds element with the passed name of class in top DOM
	   * @param  {elem} elem      The initial element in search
	   * @param  {str} className  The name of class
	   * @param  {num} deep=3     The deep of search. 0 => self; 1 => self.parentNode etc.
	   * @return {elem or undef}  Returns the found element or implicit undefined
	   */
	  closest: function closest(elem, className) {
	    var deep = arguments.length <= 2 || arguments[2] === undefined ? 3 : arguments[2];

	    do {

	      if (this.hasClass(elem, className)) {
	        return elem;
	      }
	    } while (elem = elem.parentNode && deep-- !== 0);
	  },
	  preventDefault: function preventDefault(event) {
	    event.preventDefault ? event.preventDefault() : event.returnValue = 0;
	  },

	  /**
	   * Transforms the name of attribute to camel case
	   * Example: "data-set-testing" => "setTesting"
	   * @param  {str} attr The name of attribute
	   * @return {str}      The transformed name of attribute
	   */
	  toCamelCase: function toCamelCase(attr) {
	    return attr.slice(5).replace(/-./g, function (ch0) {
	      return ch0[1].toUpperCase();
	    });
	  }
	};

/***/ },
/* 27 */
/*!*********************************!*\
  !*** ./src/js/classes/Error.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _create = __webpack_require__(/*! babel-runtime/core-js/object/create */ 28);

	var _create2 = _interopRequireDefault(_create);

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _errors = __webpack_require__(/*! ../lib/errors */ 30);

	var _errors2 = _interopRequireDefault(_errors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// custom class error
	function SocsharingError(code) {
	  this.name = "SocsharingError";
	  this.code = code;
	  this.message = _errors2.default.get(code);

	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, SocsharingError);
	  } else {
	    this.stack = new Error().stack;
	  }
	}

	SocsharingError.prototype = (0, _create2.default)(Error.prototype);

	exports.default = SocsharingError;

/***/ },
/* 28 */
/*!**************************************************!*\
  !*** ./~/babel-runtime/core-js/object/create.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ 29), __esModule: true };

/***/ },
/* 29 */
/*!***********************************************!*\
  !*** ./~/core-js/library/fn/object/create.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! ../../modules/$ */ 18);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 30 */
/*!******************************!*\
  !*** ./src/js/lib/errors.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// list of errors

	var _map = __webpack_require__(/*! babel-runtime/core-js/map */ 31);

	var _map2 = _interopRequireDefault(_map);

	Object.defineProperty(exports, "__esModule", {
	      value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var errors = new _map2.default();

	errors.set(0, "you haven't specified the list of services").set(1, "you haven't specified any support service");

	exports.default = errors;

/***/ },
/* 31 */
/*!****************************************!*\
  !*** ./~/babel-runtime/core-js/map.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/map */ 32), __esModule: true };

/***/ },
/* 32 */
/*!*************************************!*\
  !*** ./~/core-js/library/fn/map.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ../modules/es6.object.to-string */ 33);
	__webpack_require__(/*! ../modules/es6.string.iterator */ 34);
	__webpack_require__(/*! ../modules/web.dom.iterable */ 50);
	__webpack_require__(/*! ../modules/es6.map */ 54);
	__webpack_require__(/*! ../modules/es7.map.to-json */ 68);
	module.exports = __webpack_require__(/*! ../modules/$.core */ 10).Map;

/***/ },
/* 33 */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/es6.object.to-string.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	

/***/ },
/* 34 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/es6.string.iterator.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(/*! ./$.string-at */ 35)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(/*! ./$.iter-define */ 37)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 35 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.string-at.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(/*! ./$.to-integer */ 36)
	  , defined   = __webpack_require__(/*! ./$.defined */ 6);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 36 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.to-integer.js ***!
  \***************************************************/
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 37 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-define.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(/*! ./$.library */ 38)
	  , $export        = __webpack_require__(/*! ./$.export */ 8)
	  , redefine       = __webpack_require__(/*! ./$.redefine */ 39)
	  , hide           = __webpack_require__(/*! ./$.hide */ 40)
	  , has            = __webpack_require__(/*! ./$.has */ 43)
	  , Iterators      = __webpack_require__(/*! ./$.iterators */ 44)
	  , $iterCreate    = __webpack_require__(/*! ./$.iter-create */ 45)
	  , setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 46)
	  , getProto       = __webpack_require__(/*! ./$ */ 18).getProto
	  , ITERATOR       = __webpack_require__(/*! ./$.wks */ 47)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 38 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.library.js ***!
  \************************************************/
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 39 */
/*!*************************************************!*\
  !*** ./~/core-js/library/modules/$.redefine.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./$.hide */ 40);

/***/ },
/* 40 */
/*!*********************************************!*\
  !*** ./~/core-js/library/modules/$.hide.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(/*! ./$ */ 18)
	  , createDesc = __webpack_require__(/*! ./$.property-desc */ 41);
	module.exports = __webpack_require__(/*! ./$.descriptors */ 42) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 41 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/$.property-desc.js ***!
  \******************************************************/
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 42 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.descriptors.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(/*! ./$.fails */ 13)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 43 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.has.js ***!
  \********************************************/
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 44 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.iterators.js ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 45 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-create.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(/*! ./$ */ 18)
	  , descriptor     = __webpack_require__(/*! ./$.property-desc */ 41)
	  , setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 46)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(/*! ./$.hide */ 40)(IteratorPrototype, __webpack_require__(/*! ./$.wks */ 47)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 46 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/$.set-to-string-tag.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(/*! ./$ */ 18).setDesc
	  , has = __webpack_require__(/*! ./$.has */ 43)
	  , TAG = __webpack_require__(/*! ./$.wks */ 47)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 47 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.wks.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(/*! ./$.shared */ 48)('wks')
	  , uid    = __webpack_require__(/*! ./$.uid */ 49)
	  , Symbol = __webpack_require__(/*! ./$.global */ 9).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 48 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.shared.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(/*! ./$.global */ 9)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 49 */
/*!********************************************!*\
  !*** ./~/core-js/library/modules/$.uid.js ***!
  \********************************************/
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 50 */
/*!*******************************************************!*\
  !*** ./~/core-js/library/modules/web.dom.iterable.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./es6.array.iterator */ 51);
	var Iterators = __webpack_require__(/*! ./$.iterators */ 44);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 51 */
/*!*********************************************************!*\
  !*** ./~/core-js/library/modules/es6.array.iterator.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(/*! ./$.add-to-unscopables */ 52)
	  , step             = __webpack_require__(/*! ./$.iter-step */ 53)
	  , Iterators        = __webpack_require__(/*! ./$.iterators */ 44)
	  , toIObject        = __webpack_require__(/*! ./$.to-iobject */ 23);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(/*! ./$.iter-define */ 37)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 52 */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/$.add-to-unscopables.js ***!
  \***********************************************************/
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 53 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-step.js ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 54 */
/*!**********************************************!*\
  !*** ./~/core-js/library/modules/es6.map.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(/*! ./$.collection-strong */ 55);

	// 23.1 Map Objects
	__webpack_require__(/*! ./$.collection */ 67)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 55 */
/*!**********************************************************!*\
  !*** ./~/core-js/library/modules/$.collection-strong.js ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(/*! ./$ */ 18)
	  , hide         = __webpack_require__(/*! ./$.hide */ 40)
	  , redefineAll  = __webpack_require__(/*! ./$.redefine-all */ 56)
	  , ctx          = __webpack_require__(/*! ./$.ctx */ 11)
	  , strictNew    = __webpack_require__(/*! ./$.strict-new */ 57)
	  , defined      = __webpack_require__(/*! ./$.defined */ 6)
	  , forOf        = __webpack_require__(/*! ./$.for-of */ 58)
	  , $iterDefine  = __webpack_require__(/*! ./$.iter-define */ 37)
	  , step         = __webpack_require__(/*! ./$.iter-step */ 53)
	  , ID           = __webpack_require__(/*! ./$.uid */ 49)('id')
	  , $has         = __webpack_require__(/*! ./$.has */ 43)
	  , isObject     = __webpack_require__(/*! ./$.is-object */ 61)
	  , setSpecies   = __webpack_require__(/*! ./$.set-species */ 66)
	  , DESCRIPTORS  = __webpack_require__(/*! ./$.descriptors */ 42)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;

	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 56 */
/*!*****************************************************!*\
  !*** ./~/core-js/library/modules/$.redefine-all.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(/*! ./$.redefine */ 39);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 57 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.strict-new.js ***!
  \***************************************************/
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 58 */
/*!***********************************************!*\
  !*** ./~/core-js/library/modules/$.for-of.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(/*! ./$.ctx */ 11)
	  , call        = __webpack_require__(/*! ./$.iter-call */ 59)
	  , isArrayIter = __webpack_require__(/*! ./$.is-array-iter */ 62)
	  , anObject    = __webpack_require__(/*! ./$.an-object */ 60)
	  , toLength    = __webpack_require__(/*! ./$.to-length */ 63)
	  , getIterFn   = __webpack_require__(/*! ./core.get-iterator-method */ 64);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 59 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.iter-call.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(/*! ./$.an-object */ 60);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 60 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.an-object.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(/*! ./$.is-object */ 61);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 61 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.is-object.js ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 62 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/$.is-array-iter.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(/*! ./$.iterators */ 44)
	  , ITERATOR   = __webpack_require__(/*! ./$.wks */ 47)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 63 */
/*!**************************************************!*\
  !*** ./~/core-js/library/modules/$.to-length.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(/*! ./$.to-integer */ 36)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 64 */
/*!***************************************************************!*\
  !*** ./~/core-js/library/modules/core.get-iterator-method.js ***!
  \***************************************************************/
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(/*! ./$.classof */ 65)
	  , ITERATOR  = __webpack_require__(/*! ./$.wks */ 47)('iterator')
	  , Iterators = __webpack_require__(/*! ./$.iterators */ 44);
	module.exports = __webpack_require__(/*! ./$.core */ 10).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 65 */
/*!************************************************!*\
  !*** ./~/core-js/library/modules/$.classof.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(/*! ./$.cof */ 25)
	  , TAG = __webpack_require__(/*! ./$.wks */ 47)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 66 */
/*!****************************************************!*\
  !*** ./~/core-js/library/modules/$.set-species.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var core        = __webpack_require__(/*! ./$.core */ 10)
	  , $           = __webpack_require__(/*! ./$ */ 18)
	  , DESCRIPTORS = __webpack_require__(/*! ./$.descriptors */ 42)
	  , SPECIES     = __webpack_require__(/*! ./$.wks */ 47)('species');

	module.exports = function(KEY){
	  var C = core[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 67 */
/*!***************************************************!*\
  !*** ./~/core-js/library/modules/$.collection.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(/*! ./$ */ 18)
	  , global         = __webpack_require__(/*! ./$.global */ 9)
	  , $export        = __webpack_require__(/*! ./$.export */ 8)
	  , fails          = __webpack_require__(/*! ./$.fails */ 13)
	  , hide           = __webpack_require__(/*! ./$.hide */ 40)
	  , redefineAll    = __webpack_require__(/*! ./$.redefine-all */ 56)
	  , forOf          = __webpack_require__(/*! ./$.for-of */ 58)
	  , strictNew      = __webpack_require__(/*! ./$.strict-new */ 57)
	  , isObject       = __webpack_require__(/*! ./$.is-object */ 61)
	  , setToStringTag = __webpack_require__(/*! ./$.set-to-string-tag */ 46)
	  , DESCRIPTORS    = __webpack_require__(/*! ./$.descriptors */ 42);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    C = wrapper(function(target, iterable){
	      strictNew(target, C, NAME);
	      target._c = new Base;
	      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
	    });
	    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','),function(KEY){
	      var IS_ADDER = KEY == 'add' || KEY == 'set';
	      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
	        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
	        var result = this._c[KEY](a === 0 ? 0 : a, b);
	        return IS_ADDER ? this : result;
	      });
	    });
	    if('size' in proto)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return this._c.size;
	      }
	    });
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F, O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 68 */
/*!******************************************************!*\
  !*** ./~/core-js/library/modules/es7.map.to-json.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(/*! ./$.export */ 8);

	$export($export.P, 'Map', {toJSON: __webpack_require__(/*! ./$.collection-to-json */ 69)('Map')});

/***/ },
/* 69 */
/*!***********************************************************!*\
  !*** ./~/core-js/library/modules/$.collection-to-json.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(/*! ./$.for-of */ 58)
	  , classof = __webpack_require__(/*! ./$.classof */ 65);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 70 */
/*!********************************!*\
  !*** ./src/js/lib/services.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _map = __webpack_require__(/*! babel-runtime/core-js/map */ 31);

	var _map2 = _interopRequireDefault(_map);

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Service = __webpack_require__(/*! ../classes/Service */ 71);

	var _Service2 = _interopRequireDefault(_Service);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// list of services
	var services = new _map2.default();

	services.set("vk", new _Service2.default("https://vk.com/share.php?url={url}&title={title}&description={message}&image={img}", "socsharing__item_vk", "vkontakte")).set("tw", new _Service2.default("https://twitter.com/intent/tweet?status={title}%20{url}", "socsharing__item_tw", "twitter")).set("fb", new _Service2.default("https://www.facebook.com/sharer.php?src=sp&u={url}", "socsharing__item_fb", "facebook")).set("link", new _Service2.default("https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={message}", "socsharing__item_link", "linkedin")).set("ok", new _Service2.default("https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl={url}", "socsharing__item_ok", "odnoklassniki")).set("mail", new _Service2.default("https://connect.mail.ru/share?url={url}&title={title}&description={message}", "socsharing__item_mail", "moi mir")).set("gplus", new _Service2.default("https://plus.google.com/share?url={url}", "socsharing__item_gplus", "google plus"));

	exports.default = services;

/***/ },
/* 71 */
/*!***********************************!*\
  !*** ./src/js/classes/Service.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// class service

	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 14);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 15);

	var _createClass3 = _interopRequireDefault(_createClass2);

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Service = function () {
	  function Service(url, className, altText) {
	    (0, _classCallCheck3.default)(this, Service);

	    this.url = url;
	    this.className = className;
	    this.altText = altText;
	  }

	  (0, _createClass3.default)(Service, [{
	    key: "getURL",
	    value: function getURL() {
	      return this.url;
	    }
	  }, {
	    key: "getClass",
	    value: function getClass() {
	      return this.className;
	    }
	  }, {
	    key: "getAltText",
	    value: function getAltText() {
	      return this.altText;
	    }
	  }]);
	  return Service;
	}();

	exports.default = Service;
	;

/***/ }
/******/ ]);