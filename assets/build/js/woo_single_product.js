/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/woo_single_product.scss":
/*!******************************************!*\
  !*** ./src/sass/woo_single_product.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************************!*\
  !*** ./src/js/woo_single_product.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_woo_single_product_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/woo_single_product.scss */ "./src/sass/woo_single_product.scss");
 // for single products page

console.log('this is woo_single_product.js');

// qty of products update
var inpt_qty = document.querySelector('input[name=quantity]');

// Create the "Before" button
var btnBefore = document.createElement('button');
btnBefore.textContent = '-';
btnBefore.id = 'qty_dec';
btnBefore.type = 'button';

// Create the "After" button
var btnAfter = document.createElement('button');
btnAfter.textContent = '+';
btnAfter.id = 'qty_inc';
btnAfter.type = 'button';

// Insert the buttons before and after the input element
inpt_qty.parentNode.insertBefore(btnBefore, inpt_qty);
inpt_qty.parentNode.insertBefore(btnAfter, inpt_qty.nextSibling);
var qty_inc = document.getElementById('qty_inc');
var qty_dec = document.getElementById('qty_dec');

// Add event listener for quantity increment
qty_inc.addEventListener('click', function () {
  var currentValue = parseInt(inpt_qty.value);
  inpt_qty.value = currentValue + 1;
});

// Add event listener for quantity decrement
qty_dec.addEventListener('click', function () {
  var currentValue = parseInt(inpt_qty.value);
  if (currentValue > 0) {
    inpt_qty.value = currentValue - 1;
  }
});
}();
/******/ })()
;
//# sourceMappingURL=woo_single_product.js.map