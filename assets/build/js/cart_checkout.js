/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/cart_checkout.scss":
/*!*************************************!*\
  !*** ./src/sass/cart_checkout.scss ***!
  \*************************************/
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
/*!*********************************!*\
  !*** ./src/js/cart_checkout.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_cart_checkout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/cart_checkout.scss */ "./src/sass/cart_checkout.scss");

console.log('this is cart_checkout.js');
var tbody = document.getElementById('cart_t_body');
// var tbody_li = []; // initialize an array
if (tbody) {
  var _loop = function _loop() {
    var currentChild = tbody.childNodes[i];
    if (currentChild.id && currentChild.nodeName === 'TR') {
      // event click
      document.getElementById('decr_' + currentChild.getAttribute('id')).addEventListener('click', function (e) {
        decr(currentChild.getAttribute('id'));
      }); // event click decr

      document.getElementById('incr_' + currentChild.getAttribute('id')).addEventListener('click', function (e) {
        incr(currentChild.getAttribute('id'));
      }); // event click incr
    }

    ; // if
  };
  for (var i = 0; i < tbody.childNodes.length; i++) {
    _loop();
  }
  ; // loop

  function decr(id) {
    var quantityInputs = document.getElementsByName('cart[' + id + '][qty]');
    var quantityInput = quantityInputs[0]; // Assuming there is only one input with the specified name

    var currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  }
  function incr(id) {
    var quantityInputs = document.getElementsByName('cart[' + id + '][qty]');
    var quantityInput = quantityInputs[0]; // Assuming there is only one input with the specified name
    var currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  }
} // if has tbody
}();
/******/ })()
;
//# sourceMappingURL=cart_checkout.js.map