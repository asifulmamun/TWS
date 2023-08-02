/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/all_excld_homeshop_desktop.scss":
/*!**************************************************!*\
  !*** ./src/sass/all_excld_homeshop_desktop.scss ***!
  \**************************************************/
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
/*!**********************************************!*\
  !*** ./src/js/all_excld_homeshop_desktop.js ***!
  \**********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_all_excld_homeshop_desktop_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/all_excld_homeshop_desktop.scss */ "./src/sass/all_excld_homeshop_desktop.scss");

console.log('this is all_excld_homeshop_desktop.js');

/* 
  Single products
  *
   */
// qty of products update
var tws__single_product_small_details = document.getElementById('tws__single_product_small_details');
if (tws__single_product_small_details) {
  console.log('   /// This is single_product page');
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
    if (currentValue > 1) {
      inpt_qty.value = currentValue - 1;
    }
  });
}
;

/* 
  Cart
   */

var tws__cart_table = document.getElementById('tws__cart_table');
var checkout = document.getElementById('checkout');
if (tws__cart_table || checkout) {
  console.log('   /// This is tws__cart_table || checkout');

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
} // if tws__cart_table || checkout

/* 
  Checkout
   */

// Place Order btn - Simulated/Triggerable/Custom
var place_order = document.getElementById("place_order");
var tws__place_order_trigger = document.getElementById("tws__place_order_trigger");
if (place_order && tws__place_order_trigger) {
  var tws__ic_paper_airplan = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>';

  // change the simulated btn text with order place button txt
  tws__place_order_trigger.innerHTML = place_order.innerText + tws__ic_paper_airplan;

  // clicked function for simulated order btn
  tws__place_order_trigger.addEventListener("click", function () {
    // check mark - terms & condition
    var checkbox = document.getElementById("terms");
    if (!checkbox.checked) {
      // Check if the checkbox is not already checked
      checkbox.checked = true; // Check the checkbox
    }

    // click/trigger - place order btn
    document.getElementById("place_order").click(); // Simulate a click on the main button
  }); // tws__place_order_trigger
}
}();
/******/ })()
;
//# sourceMappingURL=all_excld_homeshop_desktop.js.map