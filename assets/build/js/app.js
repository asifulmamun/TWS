/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/abstract/global.js":
/*!***********************************!*\
  !*** ./src/js/abstract/global.js ***!
  \***********************************/
/***/ (function() {

/* 
    Cookies
 */

// push notification - footer
var push_notify = document.getElementById('push_notify');
push_notify.addEventListener('click', function (event) {
  // push notification will hide itself if click event
  this.classList.add('hidden');
}); // click push notification

/***/ }),

/***/ "./src/js/components/aside.js":
/*!************************************!*\
  !*** ./src/js/components/aside.js ***!
  \************************************/
/***/ (function() {

// set cookies
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// get cookies
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// // // Sidebar Nav expendable - need li item add this class with number, example: tws__nav_li_1, tws__nav_li_2, every time change the class number 1,2,3.. etc, how many class want to add, which li has sub-menu 
// const main_menu_ul = document.getElementById('primary_menus'); // primary menu id select
// // check if main_menu_ul exists, then
// if(main_menu_ul){
//     // General loop for run menu
//     for (var i = 1; i <= main_menu_ul.childElementCount; i++) {
//         // Check if the selector exist
//         if (main_menu_ul.getElementsByClassName(`tws__nav_li_${i}`).length == 1) {
//             tws__loop_all_nav_li(`tws__nav_li_${i}`, i);
//         }
//     } // General loop for run menu

//     // Nav close exclude without selected
//     function close_all_sub_menu(exclude){
//         for (let i = 1; i <= main_menu_ul.childElementCount; i++) {
//             if(i===exclude){continue;}// exclude selected from loop
//             // Check if the selector exist
//             if (main_menu_ul.getElementsByClassName(`tws__nav_li_${i}`).length == 1) {

//                 // all sub-menu close by default after refresh
//                 setCookie(`tws__nav_li_${i}_sub`, 'none', 0);

//                 document.getElementById(`tws__nav_li_${i}_sub`).style.display = 'none';
//                 document.getElementById(`tws__nav_li_${i}_icon`).setAttribute('style', '-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);');
//             } // condition
//         } // for loop
//     } // close_all_sub_menu

//     // Looping with li
//     function tws__loop_all_nav_li(tws__nav_class_name, menu_numb) {

//         // Create Child Node for icon
//         let i = document.createElement('i');
//         i.setAttribute('id', `${tws__nav_class_name}_icon`);
//         main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].appendChild(i);
//         main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].classList.add('relative');
//         document.getElementById(`${tws__nav_class_name}_icon`).innerHTML = `›`;
//         // Create an ID in sub-menu
//         main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].getElementsByClassName('sub-menu')[0].setAttribute('id', `${tws__nav_class_name}_sub`);
//         // Create child as style element
//         let style = document.createElement('style');
//         let styleCss = `#${tws__nav_class_name}_icon{position:absolute;top:0;right:.5rem;font-style:normal;cursor:pointer;}`;
//         style.innerHTML = styleCss;
//         main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].appendChild(style);

//         // by default sub menu open or close with cookie
//         if(getCookie(`${tws__nav_class_name}_sub`) != ""){
//             document.getElementById(`${tws__nav_class_name}_sub`).style.display = 'block';
//             document.getElementById(`${tws__nav_class_name}_icon`).setAttribute('style', '-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);');
//         }else{
//             document.getElementById(`${tws__nav_class_name}_sub`).style.display = 'none';
//         } // by default sub menu open or close with cookie

//         // After click the li - open the sub-menu
//         if(main_menu_ul.getElementsByClassName(tws__nav_class_name).length == 1){
//             main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].addEventListener('click', open_sub_menu); 
//         } // After click the li - open the sub-menu

//         // oepn sub-menu
//         function open_sub_menu() {

//             // All submenu close without selected
//             close_all_sub_menu(menu_numb);

//             if(main_menu_ul.getElementsByClassName(tws__nav_class_name).length == 1){

//                 // sub-menu open by default after refresh
//                 setCookie(`${tws__nav_class_name}_sub`, 'block', 1);

//                 document.getElementById(`${tws__nav_class_name}_sub`).style.display = 'block';
//                 document.getElementById(`${tws__nav_class_name}_icon`).setAttribute('style', '-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);');
//             }
//         } // oepn sub-menu
//     } // Looping with li
// } // end if main_menu_ul exists

var primary_menu = document.getElementById('primary_menu');
// var primary_menu_li = []; // initialize an array
if (primary_menu) {
  var _loop = function _loop() {
    var currentChild = primary_menu.childNodes[i];
    if (currentChild.id && currentChild.nodeName === 'LI') {
      // If has sub menu
      if (document.getElementById(currentChild.getAttribute('id')).getElementsByClassName('sub-menu').length > 0) {
        // primary_menu_li.push(currentChild.getAttribute('id')); // add the id to the array

        // submenu set id
        document.getElementById(currentChild.getAttribute('id')).getElementsByClassName('sub-menu')[0].setAttribute('id', "".concat(currentChild.getAttribute('id'), "_sub"));

        // li style and auto event
        tws__loop_all_nav_li(currentChild.getAttribute('id'));

        // event click for li
        document.getElementById(currentChild.getAttribute('id')).addEventListener('click', function (e) {
          open_sub_menu(currentChild.getAttribute('id'));
        }); // event click for li
      } // If has sub menu
    }
    ;
  };
  for (var i = 0; i < primary_menu.childNodes.length; i++) {
    _loop();
  }
  ; // loop
  // console.log(primary_menu_li); // print the array with id

  // auto event and menu li style
  function tws__loop_all_nav_li(primary_menu_li_id) {
    // Create Child Node for icon
    var i = document.createElement('i');
    i.setAttribute('id', "".concat(primary_menu_li_id, "_icon"));
    document.getElementById(primary_menu_li_id).appendChild(i);

    // li make relative and add the arrow in inner icon
    document.getElementById(primary_menu_li_id).classList.add('relative');
    document.getElementById("".concat(primary_menu_li_id, "_icon")).innerHTML = "\u203A";

    // Create child as style element
    var style = document.createElement('style');
    var styleCss = "#".concat(primary_menu_li_id, "_icon{position:absolute;top:0;right:.5rem;font-style:normal;cursor:pointer;}");
    style.innerHTML = styleCss;
    document.getElementById(primary_menu_li_id).appendChild(style);

    // by default sub menu open or close with cookie
    if (getCookie("".concat(primary_menu_li_id, "_sub")) != "") {
      document.getElementById("".concat(primary_menu_li_id, "_sub")).style.display = 'block';
      document.getElementById("".concat(primary_menu_li_id, "_icon")).setAttribute('style', '-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);');
    } else {
      document.getElementById("".concat(primary_menu_li_id, "_sub")).style.display = 'none';
    } // by default sub menu open or close with cookie
  } // tws__loop_all_nav_li

  function open_sub_menu(primary_menu_li_id) {
    // All submenu close without selected
    close_all_sub_menu(primary_menu_li_id);
    if (document.getElementsByClassName(primary_menu_li_id).length == 1) {
      // sub-menu open by default after refresh
      setCookie("".concat(primary_menu_li_id, "_sub"), 'block', 1);
      document.getElementById("".concat(primary_menu_li_id, "_sub")).style.display = 'block';
      document.getElementById("".concat(primary_menu_li_id, "_icon")).setAttribute('style', '-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);');
    }
  } // open sub-menu

  // Nav close exclude without selected which id in exclude variable
  function close_all_sub_menu(exclude) {
    for (var _i = 0; _i < primary_menu.childNodes.length; _i++) {
      var currentChild = primary_menu.childNodes[_i];
      if (currentChild.id && currentChild.nodeName === 'LI') {
        // If has sub menu
        if (document.getElementById(currentChild.getAttribute('id')).getElementsByClassName('sub-menu').length > 0) {
          if (currentChild.getAttribute('id') === exclude) {
            continue;
          } // exclude selected from loop

          // console.log(`${currentChild.getAttribute('id')}_sub`);

          // all sub-menu close by default after refresh
          setCookie("".concat(currentChild.getAttribute('id'), "_sub"), 'none', 0);
          document.getElementById("".concat(currentChild.getAttribute('id'), "_sub")).style.display = 'none';
          document.getElementById("".concat(currentChild.getAttribute('id'), "_icon")).setAttribute('style', '-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);');
        } // If has sub menu
      } // endif
    } // for loop
  } // close_all_sub_menu
} // end if primary_menu exists or not check

/***/ }),

/***/ "./src/js/components/toggle.js":
/*!*************************************!*\
  !*** ./src/js/components/toggle.js ***!
  \*************************************/
/***/ (function() {

// Toggle
var toggle_primary_menu = document.getElementById('toggle_primary_menu');
var aside = document.getElementById('aside');
var tws__page_with_aside = document.getElementById('tws__page_with_aside');

// check the tws__page_with_aside id is exist, then
if (tws__page_with_aside) {
  // default
  aside.style.left = '0';
  tws__page_with_aside.style.marginLeft = '220px';

  // aftr click
  toggle_primary_menu.addEventListener('click', function (event) {
    // aside/page action by toggle
    if (aside.style.left == '-300px') {
      aside.style.left = '0';
      tws__page_with_aside.style.marginLeft = '220px';
    } else {
      aside.style.left = '-300px';
      tws__page_with_aside.style.marginLeft = '0px';
    }
  });
} // end if, tws__page_with_aside id is exist

// Mini cart action by float
var tws__mini_cart_float = document.getElementById('tws__mini_cart_float');
var tws__mini_cart = document.getElementById('tws__mini_cart');
if (tws__mini_cart_float) {
  if (tws__mini_cart) {
    // default
    tws__mini_cart.style.right = '-420px';

    // after click the float
    tws__mini_cart_float.addEventListener('click', function (event) {
      if (tws__mini_cart.style.right == '0px') {
        tws__mini_cart.style.right = '-420px';
      } else {
        tws__mini_cart.style.right = '0px';
      }
      ;
    }); // end of event of float mini cart action
  }
  ; // if tws__mini_cart is exist
}
; // if exist tws__mini_cart_float

/***/ }),

/***/ "./src/js/lib/_odometer.js":
/*!*********************************!*\
  !*** ./src/js/lib/_odometer.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
(function () {
  var COUNT_FRAMERATE,
    COUNT_MS_PER_FRAME,
    DIGIT_FORMAT,
    DIGIT_HTML,
    DIGIT_SPEEDBOOST,
    DURATION,
    FORMAT_MARK_HTML,
    FORMAT_PARSER,
    FRAMERATE,
    FRAMES_PER_VALUE,
    MS_PER_FRAME,
    MutationObserver,
    Odometer,
    RIBBON_HTML,
    TRANSITION_END_EVENTS,
    TRANSITION_SUPPORT,
    VALUE_HTML,
    addClass,
    createFromHTML,
    fractionalPart,
    now,
    removeClass,
    requestAnimationFrame,
    round,
    transitionCheckStyles,
    trigger,
    truncate,
    wrapJQuery,
    _jQueryWrapped,
    _old,
    _ref,
    _ref1,
    __slice = [].slice;
  VALUE_HTML = '<span class="odometer-value"></span>';
  RIBBON_HTML = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + VALUE_HTML + '</span></span>';
  DIGIT_HTML = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + RIBBON_HTML + '</span></span>';
  FORMAT_MARK_HTML = '<span class="odometer-formatting-mark"></span>';
  DIGIT_FORMAT = '(,ddd).dd';
  FORMAT_PARSER = /^\(?([^)]*)\)?(?:(.)(d+))?$/;
  FRAMERATE = 30;
  DURATION = 2000;
  COUNT_FRAMERATE = 20;
  FRAMES_PER_VALUE = 2;
  DIGIT_SPEEDBOOST = .5;
  MS_PER_FRAME = 1000 / FRAMERATE;
  COUNT_MS_PER_FRAME = 1000 / COUNT_FRAMERATE;
  TRANSITION_END_EVENTS = 'transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd';
  transitionCheckStyles = document.createElement('div').style;
  TRANSITION_SUPPORT = transitionCheckStyles.transition != null || transitionCheckStyles.webkitTransition != null || transitionCheckStyles.mozTransition != null || transitionCheckStyles.oTransition != null;
  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
  createFromHTML = function createFromHTML(html) {
    var el;
    el = document.createElement('div');
    el.innerHTML = html;
    return el.children[0];
  };
  removeClass = function removeClass(el, name) {
    return el.className = el.className.replace(new RegExp("(^| )" + name.split(' ').join('|') + "( |$)", 'gi'), ' ');
  };
  addClass = function addClass(el, name) {
    removeClass(el, name);
    return el.className += " " + name;
  };
  trigger = function trigger(el, name) {
    var evt;
    if (document.createEvent != null) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent(name, true, true);
      return el.dispatchEvent(evt);
    }
  };
  now = function now() {
    var _ref, _ref1;
    return (_ref = (_ref1 = window.performance) != null ? typeof _ref1.now === "function" ? _ref1.now() : void 0 : void 0) != null ? _ref : +new Date();
  };
  round = function round(val, precision) {
    if (precision == null) {
      precision = 0;
    }
    if (!precision) {
      return Math.round(val);
    }
    val *= Math.pow(10, precision);
    val += 0.5;
    val = Math.floor(val);
    return val /= Math.pow(10, precision);
  };
  truncate = function truncate(val) {
    if (val < 0) {
      return Math.ceil(val);
    } else {
      return Math.floor(val);
    }
  };
  fractionalPart = function fractionalPart(val) {
    return val - round(val);
  };
  _jQueryWrapped = false;
  (wrapJQuery = function wrapJQuery() {
    var property, _i, _len, _ref, _results;
    if (_jQueryWrapped) {
      return;
    }
    if (window.jQuery != null) {
      _jQueryWrapped = true;
      _ref = ['html', 'text'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        property = _ref[_i];
        _results.push(function (property) {
          var old;
          old = window.jQuery.fn[property];
          return window.jQuery.fn[property] = function (val) {
            var _ref1;
            if (val == null || ((_ref1 = this[0]) != null ? _ref1.odometer : void 0) == null) {
              return old.apply(this, arguments);
            }
            return this[0].odometer.update(val);
          };
        }(property));
      }
      return _results;
    }
  })();
  setTimeout(wrapJQuery, 0);
  Odometer = function () {
    function Odometer(options) {
      var e,
        k,
        property,
        v,
        _base,
        _i,
        _len,
        _ref,
        _ref1,
        _ref2,
        _this = this;
      this.options = options;
      this.el = this.options.el;
      if (this.el.odometer != null) {
        return this.el.odometer;
      }
      this.el.odometer = this;
      _ref = Odometer.options;
      for (k in _ref) {
        v = _ref[k];
        if (this.options[k] == null) {
          this.options[k] = v;
        }
      }
      if ((_base = this.options).duration == null) {
        _base.duration = DURATION;
      }
      this.MAX_VALUES = this.options.duration / MS_PER_FRAME / FRAMES_PER_VALUE | 0;
      this.resetFormat();
      this.value = this.cleanValue((_ref1 = this.options.value) != null ? _ref1 : '');
      this.renderInside();
      this.render();
      try {
        _ref2 = ['innerHTML', 'innerText', 'textContent'];
        for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
          property = _ref2[_i];
          if (this.el[property] != null) {
            (function (property) {
              return Object.defineProperty(_this.el, property, {
                get: function get() {
                  var _ref3;
                  if (property === 'innerHTML') {
                    return _this.inside.outerHTML;
                  } else {
                    return (_ref3 = _this.inside.innerText) != null ? _ref3 : _this.inside.textContent;
                  }
                },
                set: function set(val) {
                  return _this.update(val);
                }
              });
            })(property);
          }
        }
      } catch (_error) {
        e = _error;
        this.watchForMutations();
      }
      this;
    }
    Odometer.prototype.renderInside = function () {
      this.inside = document.createElement('div');
      this.inside.className = 'odometer-inside';
      this.el.innerHTML = '';
      return this.el.appendChild(this.inside);
    };
    Odometer.prototype.watchForMutations = function () {
      var e,
        _this = this;
      if (MutationObserver == null) {
        return;
      }
      try {
        if (this.observer == null) {
          this.observer = new MutationObserver(function (mutations) {
            var newVal;
            newVal = _this.el.innerText;
            _this.renderInside();
            _this.render(_this.value);
            return _this.update(newVal);
          });
        }
        this.watchMutations = true;
        return this.startWatchingMutations();
      } catch (_error) {
        e = _error;
      }
    };
    Odometer.prototype.startWatchingMutations = function () {
      if (this.watchMutations) {
        return this.observer.observe(this.el, {
          childList: true
        });
      }
    };
    Odometer.prototype.stopWatchingMutations = function () {
      var _ref;
      return (_ref = this.observer) != null ? _ref.disconnect() : void 0;
    };
    Odometer.prototype.cleanValue = function (val) {
      var _ref;
      if (typeof val === 'string') {
        val = val.replace((_ref = this.format.radix) != null ? _ref : '.', '<radix>');
        val = val.replace(/[.,]/g, '');
        val = val.replace('<radix>', '.');
        val = parseFloat(val, 10) || 0;
      }
      return round(val, this.format.precision);
    };
    Odometer.prototype.bindTransitionEnd = function () {
      var event,
        renderEnqueued,
        _i,
        _len,
        _ref,
        _results,
        _this = this;
      if (this.transitionEndBound) {
        return;
      }
      this.transitionEndBound = true;
      renderEnqueued = false;
      _ref = TRANSITION_END_EVENTS.split(' ');
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        event = _ref[_i];
        _results.push(this.el.addEventListener(event, function () {
          if (renderEnqueued) {
            return true;
          }
          renderEnqueued = true;
          setTimeout(function () {
            _this.render();
            renderEnqueued = false;
            return trigger(_this.el, 'odometerdone');
          }, 0);
          return true;
        }, false));
      }
      return _results;
    };
    Odometer.prototype.resetFormat = function () {
      var format, fractional, parsed, precision, radix, repeating, _ref, _ref1;
      format = (_ref = this.options.format) != null ? _ref : DIGIT_FORMAT;
      format || (format = 'd');
      parsed = FORMAT_PARSER.exec(format);
      if (!parsed) {
        throw new Error("Odometer: Unparsable digit format");
      }
      _ref1 = parsed.slice(1, 4), repeating = _ref1[0], radix = _ref1[1], fractional = _ref1[2];
      precision = (fractional != null ? fractional.length : void 0) || 0;
      return this.format = {
        repeating: repeating,
        radix: radix,
        precision: precision
      };
    };
    Odometer.prototype.render = function (value) {
      var classes, cls, digit, match, newClasses, theme, wholePart, _i, _j, _len, _len1, _ref;
      if (value == null) {
        value = this.value;
      }
      this.stopWatchingMutations();
      this.resetFormat();
      this.inside.innerHTML = '';
      theme = this.options.theme;
      classes = this.el.className.split(' ');
      newClasses = [];
      for (_i = 0, _len = classes.length; _i < _len; _i++) {
        cls = classes[_i];
        if (!cls.length) {
          continue;
        }
        if (match = /^odometer-theme-(.+)$/.exec(cls)) {
          theme = match[1];
          continue;
        }
        if (/^odometer(-|$)/.test(cls)) {
          continue;
        }
        newClasses.push(cls);
      }
      newClasses.push('odometer');
      if (!TRANSITION_SUPPORT) {
        newClasses.push('odometer-no-transitions');
      }
      if (theme) {
        newClasses.push("odometer-theme-" + theme);
      } else {
        newClasses.push("odometer-auto-theme");
      }
      this.el.className = newClasses.join(' ');
      this.ribbons = {};
      this.digits = [];
      wholePart = !this.format.precision || !fractionalPart(value) || false;
      _ref = value.toString().split('').reverse();
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
        digit = _ref[_j];
        if (digit === '.') {
          wholePart = true;
        }
        this.addDigit(digit, wholePart);
      }
      return this.startWatchingMutations();
    };
    Odometer.prototype.update = function (newValue) {
      var diff,
        _this = this;
      newValue = this.cleanValue(newValue);
      if (!(diff = newValue - this.value)) {
        return;
      }
      removeClass(this.el, 'odometer-animating-up odometer-animating-down odometer-animating');
      if (diff > 0) {
        addClass(this.el, 'odometer-animating-up');
      } else {
        addClass(this.el, 'odometer-animating-down');
      }
      this.stopWatchingMutations();
      this.animate(newValue);
      this.startWatchingMutations();
      setTimeout(function () {
        _this.el.offsetHeight;
        return addClass(_this.el, 'odometer-animating');
      }, 0);
      return this.value = newValue;
    };
    Odometer.prototype.renderDigit = function () {
      return createFromHTML(DIGIT_HTML);
    };
    Odometer.prototype.insertDigit = function (digit, before) {
      if (before != null) {
        return this.inside.insertBefore(digit, before);
      } else if (!this.inside.children.length) {
        return this.inside.appendChild(digit);
      } else {
        return this.inside.insertBefore(digit, this.inside.children[0]);
      }
    };
    Odometer.prototype.addSpacer = function (chr, before, extraClasses) {
      var spacer;
      spacer = createFromHTML(FORMAT_MARK_HTML);
      spacer.innerHTML = chr;
      if (extraClasses) {
        addClass(spacer, extraClasses);
      }
      return this.insertDigit(spacer, before);
    };
    Odometer.prototype.addDigit = function (value, repeating) {
      var chr, digit, resetted, _ref;
      if (repeating == null) {
        repeating = true;
      }
      if (value === '-') {
        return this.addSpacer(value, null, 'odometer-negation-mark');
      }
      if (value === '.') {
        return this.addSpacer((_ref = this.format.radix) != null ? _ref : '.', null, 'odometer-radix-mark');
      }
      if (repeating) {
        resetted = false;
        while (true) {
          if (!this.format.repeating.length) {
            if (resetted) {
              throw new Error("Bad odometer format without digits");
            }
            this.resetFormat();
            resetted = true;
          }
          chr = this.format.repeating[this.format.repeating.length - 1];
          this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1);
          if (chr === 'd') {
            break;
          }
          this.addSpacer(chr);
        }
      }
      digit = this.renderDigit();
      digit.querySelector('.odometer-value').innerHTML = value;
      this.digits.push(digit);
      return this.insertDigit(digit);
    };
    Odometer.prototype.animate = function (newValue) {
      if (!TRANSITION_SUPPORT || this.options.animation === 'count') {
        return this.animateCount(newValue);
      } else {
        return this.animateSlide(newValue);
      }
    };
    Odometer.prototype.animateCount = function (newValue) {
      var cur,
        diff,
        last,
        start,
        _tick,
        _this = this;
      if (!(diff = +newValue - this.value)) {
        return;
      }
      start = last = now();
      cur = this.value;
      return (_tick = function tick() {
        var delta, dist, fraction;
        if (now() - start > _this.options.duration) {
          _this.value = newValue;
          _this.render();
          trigger(_this.el, 'odometerdone');
          return;
        }
        delta = now() - last;
        if (delta > COUNT_MS_PER_FRAME) {
          last = now();
          fraction = delta / _this.options.duration;
          dist = diff * fraction;
          cur += dist;
          _this.render(Math.round(cur));
        }
        if (requestAnimationFrame != null) {
          return requestAnimationFrame(_tick);
        } else {
          return setTimeout(_tick, COUNT_MS_PER_FRAME);
        }
      })();
    };
    Odometer.prototype.getDigitCount = function () {
      var i, max, value, values, _i, _len;
      values = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      for (i = _i = 0, _len = values.length; _i < _len; i = ++_i) {
        value = values[i];
        values[i] = Math.abs(value);
      }
      max = Math.max.apply(Math, values);
      return Math.ceil(Math.log(max + 1) / Math.log(10));
    };
    Odometer.prototype.getFractionalDigitCount = function () {
      var i, parser, parts, value, values, _i, _len;
      values = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      parser = /^\-?\d*\.(\d*?)0*$/;
      for (i = _i = 0, _len = values.length; _i < _len; i = ++_i) {
        value = values[i];
        values[i] = value.toString();
        parts = parser.exec(values[i]);
        if (parts == null) {
          values[i] = 0;
        } else {
          values[i] = parts[1].length;
        }
      }
      return Math.max.apply(Math, values);
    };
    Odometer.prototype.resetDigits = function () {
      this.digits = [];
      this.ribbons = [];
      this.inside.innerHTML = '';
      return this.resetFormat();
    };
    Odometer.prototype.animateSlide = function (newValue) {
      var boosted, cur, diff, digitCount, digits, dist, end, fractionalCount, frame, frames, i, incr, j, mark, numEl, oldValue, start, _base, _i, _j, _k, _l, _len, _len1, _len2, _m, _ref, _results;
      oldValue = this.value;
      fractionalCount = this.getFractionalDigitCount(oldValue, newValue);
      if (fractionalCount) {
        newValue = newValue * Math.pow(10, fractionalCount);
        oldValue = oldValue * Math.pow(10, fractionalCount);
      }
      if (!(diff = newValue - oldValue)) {
        return;
      }
      this.bindTransitionEnd();
      digitCount = this.getDigitCount(oldValue, newValue);
      digits = [];
      boosted = 0;
      for (i = _i = 0; 0 <= digitCount ? _i < digitCount : _i > digitCount; i = 0 <= digitCount ? ++_i : --_i) {
        start = truncate(oldValue / Math.pow(10, digitCount - i - 1));
        end = truncate(newValue / Math.pow(10, digitCount - i - 1));
        dist = end - start;
        if (Math.abs(dist) > this.MAX_VALUES) {
          frames = [];
          incr = dist / (this.MAX_VALUES + this.MAX_VALUES * boosted * DIGIT_SPEEDBOOST);
          cur = start;
          while (dist > 0 && cur < end || dist < 0 && cur > end) {
            frames.push(Math.round(cur));
            cur += incr;
          }
          if (frames[frames.length - 1] !== end) {
            frames.push(end);
          }
          boosted++;
        } else {
          frames = function () {
            _results = [];
            for (var _j = start; start <= end ? _j <= end : _j >= end; start <= end ? _j++ : _j--) {
              _results.push(_j);
            }
            return _results;
          }.apply(this);
        }
        for (i = _k = 0, _len = frames.length; _k < _len; i = ++_k) {
          frame = frames[i];
          frames[i] = Math.abs(frame % 10);
        }
        digits.push(frames);
      }
      this.resetDigits();
      _ref = digits.reverse();
      for (i = _l = 0, _len1 = _ref.length; _l < _len1; i = ++_l) {
        frames = _ref[i];
        if (!this.digits[i]) {
          this.addDigit(' ', i >= fractionalCount);
        }
        if ((_base = this.ribbons)[i] == null) {
          _base[i] = this.digits[i].querySelector('.odometer-ribbon-inner');
        }
        this.ribbons[i].innerHTML = '';
        if (diff < 0) {
          frames = frames.reverse();
        }
        for (j = _m = 0, _len2 = frames.length; _m < _len2; j = ++_m) {
          frame = frames[j];
          numEl = document.createElement('div');
          numEl.className = 'odometer-value';
          numEl.innerHTML = frame;
          this.ribbons[i].appendChild(numEl);
          if (j === frames.length - 1) {
            addClass(numEl, 'odometer-last-value');
          }
          if (j === 0) {
            addClass(numEl, 'odometer-first-value');
          }
        }
      }
      if (start < 0) {
        this.addDigit('-');
      }
      mark = this.inside.querySelector('.odometer-radix-mark');
      if (mark != null) {
        mark.parent.removeChild(mark);
      }
      if (fractionalCount) {
        return this.addSpacer(this.format.radix, this.digits[fractionalCount - 1], 'odometer-radix-mark');
      }
    };
    return Odometer;
  }();
  Odometer.options = (_ref = window.odometerOptions) != null ? _ref : {};
  setTimeout(function () {
    var k, v, _base, _ref1, _results;
    if (window.odometerOptions) {
      _ref1 = window.odometerOptions;
      _results = [];
      for (k in _ref1) {
        v = _ref1[k];
        _results.push((_base = Odometer.options)[k] != null ? (_base = Odometer.options)[k] : _base[k] = v);
      }
      return _results;
    }
  }, 0);
  Odometer.init = function () {
    var el, elements, _i, _len, _ref1, _results;
    if (document.querySelectorAll == null) {
      return;
    }
    elements = document.querySelectorAll(Odometer.options.selector || '.odometer');
    _results = [];
    for (_i = 0, _len = elements.length; _i < _len; _i++) {
      el = elements[_i];
      _results.push(el.odometer = new Odometer({
        el: el,
        value: (_ref1 = el.innerText) != null ? _ref1 : el.textContent
      }));
    }
    return _results;
  };
  if (((_ref1 = document.documentElement) != null ? _ref1.doScroll : void 0) != null && document.createEventObject != null) {
    _old = document.onreadystatechange;
    document.onreadystatechange = function () {
      if (document.readyState === 'complete' && Odometer.options.auto !== false) {
        Odometer.init();
      }
      return _old != null ? _old.apply(this, arguments) : void 0;
    };
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      if (Odometer.options.auto !== false) {
        return Odometer.init();
      }
    }, false);
  }
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Odometer;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}).call(this);

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/app.scss */ "./src/sass/app.scss");
/* harmony import */ var _lib_odometer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/_odometer */ "./src/js/lib/_odometer.js");
/* harmony import */ var _lib_odometer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_odometer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _abstract_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract/global */ "./src/js/abstract/global.js");
/* harmony import */ var _abstract_global__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_abstract_global__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/toggle */ "./src/js/components/toggle.js");
/* harmony import */ var _components_toggle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_toggle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_aside__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/aside */ "./src/js/components/aside.js");
/* harmony import */ var _components_aside__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_aside__WEBPACK_IMPORTED_MODULE_4__);
// sass


// library


// global js


// components


console.log('this is app.js');
}();
/******/ })()
;
//# sourceMappingURL=app.js.map