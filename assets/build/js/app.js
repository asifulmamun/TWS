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

/***/ }),

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
  \***********************************/
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
  for (var _i = 0; _i < ca.length; _i++) {
    var c = ca[_i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Sidebar Nav expendable
var main_menu_ul = document.getElementById('primary_menu'); // primary menu id select

// General loop for run menu
for (var i = 1; i <= main_menu_ul.childElementCount; i++) {
  // Check if the selector exist
  if (main_menu_ul.getElementsByClassName("tws__nav_li_".concat(i)).length == 1) {
    tws__loop_all_nav_li("tws__nav_li_".concat(i), i);
  }
} // General loop for run menu

// Nav close exclud without selected
function close_all_sub_menu(exclude) {
  for (var _i2 = 1; _i2 <= main_menu_ul.childElementCount; _i2++) {
    if (_i2 === exclude) {
      continue;
    } // exclude selected from loop
    // Check if the selector exist
    if (main_menu_ul.getElementsByClassName("tws__nav_li_".concat(_i2)).length == 1) {
      // all sub-menu close by default after refresh
      setCookie("tws__nav_li_".concat(_i2, "_sub"), 'none', 0);
      document.getElementById("tws__nav_li_".concat(_i2, "_sub")).style.display = 'none';
      document.getElementById("tws__nav_li_".concat(_i2, "_icon")).setAttribute('style', '-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);');
    } // condition
  } // for loop
} // Nav close exclud without selected

// Looping with li
function tws__loop_all_nav_li(tws__nav_class_name, menu_numb) {
  // Create Child Node for icon
  var i = document.createElement('i');
  i.setAttribute('id', "".concat(tws__nav_class_name, "_icon"));
  main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].appendChild(i);
  main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].classList.add('relative');
  document.getElementById("".concat(tws__nav_class_name, "_icon")).innerHTML = "\u203A";
  // Create an ID in sub-menu
  main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].getElementsByClassName('sub-menu')[0].setAttribute('id', "".concat(tws__nav_class_name, "_sub"));
  // Create child as style element
  var style = document.createElement('style');
  var styleCss = "#".concat(tws__nav_class_name, "_icon{position:absolute;top:0;right:.5rem;font-style:normal;cursor:pointer;}");
  style.innerHTML = styleCss;
  main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].appendChild(style);

  // by default sub menu open or close with cookie
  if (getCookie("".concat(tws__nav_class_name, "_sub")) != "") {
    document.getElementById("".concat(tws__nav_class_name, "_sub")).style.display = 'block';
    document.getElementById("".concat(tws__nav_class_name, "_icon")).setAttribute('style', '-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);');
  } else {
    document.getElementById("".concat(tws__nav_class_name, "_sub")).style.display = 'none';
  } // by default sub menu open or close with cookie

  // After click the li - open the sub-menu
  if (main_menu_ul.getElementsByClassName(tws__nav_class_name).length == 1) {
    main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].addEventListener('click', open_sub_menu);
  } // After click the li - open the sub-menu

  // oepn sub-menu
  function open_sub_menu() {
    // All submenu close without selected
    close_all_sub_menu(menu_numb);
    if (main_menu_ul.getElementsByClassName(tws__nav_class_name).length == 1) {
      // sub-menu open by default after refresh
      setCookie("".concat(tws__nav_class_name, "_sub"), 'block', 1);
      document.getElementById("".concat(tws__nav_class_name, "_sub")).style.display = 'block';
      document.getElementById("".concat(tws__nav_class_name, "_icon")).setAttribute('style', '-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);');
    }
  } // oepn sub-menu
} // Looping with li

// Toggle
var toggle_primary_menu = document.getElementById('toggle_primary_menu');
var aside = document.getElementById('aside');
var tws__page_with_aside = document.getElementById('tws__page_with_aside');
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

/***/ }),

/***/ "./src/sass/app.scss":
/*!***************************!*\
  !*** ./src/sass/app.scss ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/* harmony import */ var _abstract_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/global */ "./src/js/abstract/global.js");
/* harmony import */ var _abstract_global__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_abstract_global__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu */ "./src/js/components/menu.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_menu__WEBPACK_IMPORTED_MODULE_2__);
// sass


// global js


// components

}();
/******/ })()
;
//# sourceMappingURL=app.js.map