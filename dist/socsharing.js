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

	var _helpers = __webpack_require__(/*! ./lib/helpers */ 19);

	var _helpers2 = _interopRequireDefault(_helpers);

	var _Error = __webpack_require__(/*! ./classes/Error */ 20);

	var _Error2 = _interopRequireDefault(_Error);

	var _services = __webpack_require__(/*! ./lib/services */ 24);

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
	        status: 0
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
	      event.preventDefault();
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

	      return meta && meta.getAttribute("content") ? meta.getAttribute("content") : _helpers2.default.dataset(elem, Socsharing.ATTR_TITLE) || document.title;
	    }
	  }, {
	    key: "_parseURL",
	    value: function _parseURL(elem) {
	      var meta = document.querySelector("meta[property=\"og:url\"]");

	      return meta && meta.getAttribute("content") ? meta.getAttribute("content") : _helpers2.default.dataset(elem, Socsharing.ATTR_URL) || window.location.href;
	    }
	  }, {
	    key: "_parseMessage",
	    value: function _parseMessage(elem) {
	      var meta = document.querySelector("meta[property=\"og:description\"]");

	      return meta && meta.getAttribute("content") ? meta.getAttribute("content") : _helpers2.default.dataset(elem, Socsharing.ATTR_MSG) || "";
	    }
	  }, {
	    key: "_parseImage",
	    value: function _parseImage(elem) {
	      var meta = document.querySelector("meta[property=\"og:image\"]");

	      return meta && meta.getAttribute("content") ? meta.getAttribute("content") : _helpers2.default.dataset(elem, Socsharing.ATTR_IMG) || "";
	    }

	    /**
	     * Gets an array of service names
	     * Removes dublicated and unsupported names
	     * @param  {elem} elem Element-container
	     * @return {arr}       Array of service names
	     */

	  }, {
	    key: "_parseServices",
	    value: function _parseServices(elem) {
	      var passedServices = _helpers2.default.dataset(elem, Socsharing.ATTR_SERVICES);

	      if (!passedServices) {
	        throw new _Error2.default(0);
	      }

	      // removes dublicated services
	      passedServices = _helpers2.default.unique(passedServices.split(","));

	      // filters supported services
	      var parsedServices = passedServices.filter(function (service) {
	        return !!_services2.default[service];
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
	        var serviceMap = _services2.default[service];
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
  !*** ./src/js/lib/helpers.js ***!
  \*******************************/
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var lib = {};

	exports.default = {

	  /**
	   * Removes duplicates from an array
	   * @param  {array} arr The original array
	   * @return {array}     The unique array
	   */

	  unique: function unique(arr) {
	    return arr.filter(function (item) {
	      return !this[item] ? this[item] = true : false;
	    }, {});
	  },
	  hasClass: function hasClass(elem, className) {
	    return elem.classList ? elem.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(elem.className);
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

	  /**
	   * Returns value of "data-" attributes
	   * @param {[type]} elem [description]
	   * @param {[type]} attr [description]
	   */
	  dataset: function dataset(elem, attr) {
	    if (elem.dataset) {
	      return elem.dataset[this.toCamelCase(attr)];
	    }

	    for (var i = 0, len = elem.attributes.length; i < len; i++) {
	      var current = elem.attributes[i];

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
	  toCamelCase: function toCamelCase(attr) {
	    return attr.slice(5).replace(/-./g, function (ch0) {
	      return ch0[1].toUpperCase();
	    });
	  }
	};

/***/ },
/* 20 */
/*!*********************************!*\
  !*** ./src/js/classes/Error.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _create = __webpack_require__(/*! babel-runtime/core-js/object/create */ 21);

	var _create2 = _interopRequireDefault(_create);

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _errors = __webpack_require__(/*! ../lib/errors */ 23);

	var _errors2 = _interopRequireDefault(_errors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// custom class error
	function SocsharingError(code) {
	  this.name = "SocsharingError";
	  this.code = code;
	  this.message = _errors2.default[code];

	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, SocsharingError);
	  } else {
	    this.stack = new Error().stack;
	  }
	}

	SocsharingError.prototype = (0, _create2.default)(Error.prototype);

	exports.default = SocsharingError;

/***/ },
/* 21 */
/*!**************************************************!*\
  !*** ./~/babel-runtime/core-js/object/create.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ 22), __esModule: true };

/***/ },
/* 22 */
/*!***********************************************!*\
  !*** ./~/core-js/library/fn/object/create.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(/*! ../../modules/$ */ 18);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 23 */
/*!******************************!*\
  !*** ./src/js/lib/errors.js ***!
  \******************************/
/***/ function(module, exports) {

	"use strict";

	// list of errors

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  0: "you haven't specified the list of services",
	  1: "you haven't specified any support service"
	};

/***/ },
/* 24 */
/*!********************************!*\
  !*** ./src/js/lib/services.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _Service = __webpack_require__(/*! ../classes/Service */ 25);

	var _Service2 = _interopRequireDefault(_Service);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// list of services
	exports.default = {
	    vk: new _Service2.default("https://vk.com/share.php?url={url}&title={title}&description={message}&image={img}", "socsharing__item_vk", "vkontakte"),
	    tw: new _Service2.default("https://twitter.com/intent/tweet?status={title}%20{url}", "socsharing__item_tw", "twitter"),
	    fb: new _Service2.default("https://www.facebook.com/sharer.php?src=sp&u={url}", "socsharing__item_fb", "facebook"),
	    link: new _Service2.default("https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={message}", "socsharing__item_link", "linkedin"),
	    ok: new _Service2.default("https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl={url}", "socsharing__item_ok", "odnoklassniki"),
	    mail: new _Service2.default("https://connect.mail.ru/share?url={url}&title={title}&description={message}", "socsharing__item_mail", "moi mir"),
	    gplus: new _Service2.default("https://plus.google.com/share?url={url}", "socsharing__item_gplus", "google plus")
	};

/***/ },
/* 25 */
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