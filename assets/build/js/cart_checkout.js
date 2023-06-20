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

// aside hide from this cart and checkout page
var aside = document.getElementById('aside');
var main = document.getElementById('main');
if (main) {
  main.classList.remove('md:pl-56');
}
if (aside) {
  aside.classList.remove('md:-left-0');
  aside.classList.add('md:-left-80');
}
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
    var quantityInput = document.getElementsByName('cart[' + id + '][qty]')[0];
    // let quantityInput = quantityInputs[0]; // Assuming there is only one input with the specified name

    var currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
      tws__btn_update_cart();
    }
    ;
  }
  ;
  function incr(id) {
    var quantityInput = document.getElementsByName('cart[' + id + '][qty]')[0];
    // let quantityInput = quantityInputs[0]; // Assuming there is only one input with the specified name
    var currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
    tws__btn_update_cart();
  }
  ;
  function tws__btn_update_cart() {
    var updateCartButton = document.getElementById('tws__btn_update_cart');
    updateCartButton.removeAttribute('disabled');
    updateCartButton.setAttribute('aria-disabled', 'false');
  }
  ;

  // var updateCartButton = document.getElementById('tws__btn_update_cart');
  // updateCartButton.addEventListener('click', function() {
  //     setTimeout(function() {
  //     // Add the button ID as a query parameter in the URL
  //     let currentURL = window.location.href;
  //     currentURL = currentURL.replace(/\/#.*$/, '');
  //     let updatedURL = currentURL + '/#' + encodeURIComponent(updateCartButton.id);
  //     window.location.href = updatedURL;
  //     }, 2000);
  // });

  var updateCartButton = document.getElementById('tws__btn_update_cart');
  var tws__btn_apply_coupon = document.getElementById('tws__btn_apply_coupon');
  updateCartButton.addEventListener('click', tws__reload_cart);
  tws__btn_apply_coupon.addEventListener('click', tws__reload_cart);
  function tws__reload_cart() {
    setTimeout(function () {
      // Add the button ID as a query parameter in the URL
      var currentURL = window.location.href;
      currentURL = currentURL.replace(/\/#.*$/, '');
      var updatedURL = currentURL + '/#' + encodeURIComponent(updateCartButton.id);
      window.location.href = updatedURL;
    }, 0);
    setTimeout(function () {
      location.reload();
    }, 2000);
  }
}
; // if has tbody
}();
/******/ })()
;
//# sourceMappingURL=cart_checkout.js.map