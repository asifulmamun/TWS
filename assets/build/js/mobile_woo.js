/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/mobile_woo.scss":
/*!**********************************!*\
  !*** ./src/sass/mobile_woo.scss ***!
  \**********************************/
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
/*!******************************!*\
  !*** ./src/js/mobile_woo.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_mobile_woo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/mobile_woo.scss */ "./src/sass/mobile_woo.scss");

console.log('this is mobile_woo.js');

// // In products loop ajax and products details change
// const tws__products_ul = document.getElementById('tws__products_ul');
// if (tws__products_ul) {
// 	// For product loop
// 	if (tws__mini_cart_ul) {
// 		for (let i = 0; i < tws__mini_cart_ul.childNodes.length; i++) {
// 			let currentChild = tws__mini_cart_ul.childNodes[i];
// 			if (currentChild.id && currentChild.nodeName === 'LI') {

// 				// If change value in mini cart item, then it will same value in product loop
// 				let tws__cart_loop_add_to_cart_ = document.getElementById(`tws__cart_loop_add_to_cart_${currentChild.dataset.product_id}`);
// 				if(tws__cart_loop_add_to_cart_){
// 					tws__cart_loop_add_to_cart_.style.display = 'none';
// 				};

// 				let tws__cart_loop_counter_ = document.getElementById(`tws__cart_loop_counter_${currentChild.dataset.product_id}`);
// 				let tws__mini_cart_quantity_ = document.getElementById(`tws__mini_cart_quantity_${currentChild.dataset.product_id}`);
// 				if(tws__cart_loop_counter_){
// 					tws__cart_loop_counter_.innerText = tws__mini_cart_quantity_.innerText;
// 					tws__cart_loop_counter_.style.display = 'inline-block';

// 					// if looping time mini cart found product qty is less then 2 then the decrement button will be hide otherwise it will be show
// 					if(!tws__cart_loop_counter_.innerText == 1){
// 						// document.getElementById(`tws__cart_loop_decrement_${currentChild.dataset.product_id}`).style.display = 'none';
// 					} else{
// 						document.getElementById(`tws__cart_loop_decrement_${currentChild.dataset.product_id}`).style.display = 'inline-block';
// 					};

// 					// Decrement button in Loop Proudct
// 					document.getElementById(`tws__cart_loop_decrement_${currentChild.dataset.product_id}`).addEventListener('click', function (e) {

// 						let tws__quantity = parseInt(document.getElementById(`tws__cart_loop_counter_${currentChild.dataset.product_id}`).innerText);
// 						let tws__product_key = document.getElementById(`tws__mini_decrement_${currentChild.dataset.product_id}`).dataset.cart_item_key;

// 						// calculate new quantity, it will be decremented 2 and if success to save it to db then again increment it 1, again increment it 1 because for fragment refresh automatically increment it 1
// 						if (tws__quantity > 1) {
// 							var newQuantity = parseInt(tws__quantity) - 1;
// 							save_to_db_product_loop(tws__product_key, newQuantity, currentChild.dataset.product_id);
// 						}// end of if - calculate new quantity, it will be decremented 2 and if success to save it to db then again

// 					}); // Decrement button in Loop Proudct

// 					// If any product qty - hover add to cart text will be hide also another function will be show
// 					if(tws__cart_loop_counter_.innerText > 0){

// 						// hide the add to cart button from - hover of product loop
// 						document.getElementById(`tws__add_to_cart_hover_txt_${currentChild.dataset.product_id}`).style.display = 'none';

// 						// Hover add to cart show
// 						document.getElementById(`tws__add_to_cart_hover_wrapper_${currentChild.dataset.product_id}`).classList.remove('hidden');
// 						document.getElementById(`tws__add_to_cart_hover_wrapper_${currentChild.dataset.product_id}`).classList.add('tws__add_to_cart_hover_wrapper');
// 					} // If any product qty - hover add to cart text will be hide also another function will be show

// 				}; // if tws__cart_loop_counter_

// 				let tws__product_loop_hover_amount_ = document.getElementById(`tws__product_loop_hover_amount_${currentChild.dataset.product_id}`);
// 				let tws__mini_cart_price_ = document.getElementById(`tws__mini_cart_price_${currentChild.dataset.product_id}`);
// 				if(tws__product_loop_hover_amount_){
// 					tws__product_loop_hover_amount_.innerText =  currencySymbol.innerText + tws__mini_cart_price_.innerText;
// 				}

// 				// let tws__cart_loop_counter_ = document.getElementById(`tws__cart_loop_counter_${currentChild.dataset.product_id}`);
// 				// if(tws__cart_loop_counter_){
// 				// 	tws__cart_loop_counter_.style.display = 'inline-block';
// 				// }

// 				let tws__cart_loop_increment_ = document.getElementById(`tws__cart_loop_increment_${currentChild.dataset.product_id}`);
// 				if(tws__cart_loop_increment_){
// 					tws__cart_loop_increment_.style.display = 'inline-block';
// 				}

// 				let tws__cart_loop_btn_before_qty_ = document.getElementById(`tws__cart_loop_btn_before_qty_${currentChild.dataset.product_id}`);
// 				if(tws__cart_loop_btn_before_qty_){
// 					tws__cart_loop_btn_before_qty_.style.display = 'inline-block';
// 				}

// 				// Remove button is clicked from mini cart then loop will counter 1 with product id
// 				document.getElementById(`tws__mini_cart_remove_${currentChild.dataset.product_id}`).addEventListener('click', function (e) {
// 					document.getElementById(`tws__cart_loop_add_to_cart_${currentChild.dataset.product_id}`).style.display = 'inline-block';
// 					document.getElementById(`tws__cart_loop_counter_${currentChild.dataset.product_id}`).innerText = '';
// 					document.getElementById(`tws__cart_loop_counter_${currentChild.dataset.product_id}`).style.display = 'none';
// 					document.getElementById(`tws__product_loop_hover_amount_${currentChild.dataset.product_id}`).innerText = '';
// 					document.getElementById(`tws__cart_loop_btn_before_qty_${currentChild.dataset.product_id}`).style.display = 'none';
// 					document.getElementById(`tws__cart_loop_increment_${currentChild.dataset.product_id}`).style.display = 'none';
// 					document.getElementById(`tws__cart_loop_decrement_${currentChild.dataset.product_id}`).style.display = 'none';

// 					// hide the button from - hover of product loop
// 					document.getElementById(`tws__add_to_cart_hover_txt_${currentChild.dataset.product_id}`).style.display = 'inherit';
// 					document.getElementById(`tws__add_to_cart_hover_wrapper_${currentChild.dataset.product_id}`).classList.remove('tws__add_to_cart_hover_wrapper');
// 					document.getElementById(`tws__add_to_cart_hover_wrapper_${currentChild.dataset.product_id}`).classList.add('hidden');

// 				});

// 				// Hover add to cart quantity change
// 				let tws__cart_hover_loop_counter_ = document.getElementById(`tws__cart_hover_loop_counter_${currentChild.dataset.product_id}`);
// 				if(tws__cart_hover_loop_counter_){
// 					tws__cart_hover_loop_counter_.innerText = document.getElementById(`tws__mini_cart_quantity_${currentChild.dataset.product_id}`).innerText;
// 				};

// 				// Hover add to cart show
// 				let tws__add_to_cart_hover_add_ = document.getElementById(`tws__add_to_cart_hover_add_${currentChild.dataset.product_id}`);
// 				if(tws__add_to_cart_hover_add_){
// 						tws__add_to_cart_hover_add_.addEventListener('mouseenter', function(e) {
// 						if(tws__cart_loop_counter_){
// 							if(tws__cart_loop_counter_.innerText > 0){
// 								document.getElementById(`tws__add_to_cart_hover_wrapper_${currentChild.dataset.product_id}`).classList.remove('hidden');
// 								document.getElementById(`tws__add_to_cart_hover_wrapper_${currentChild.dataset.product_id}`).classList.add('tws__add_to_cart_hover_wrapper');
// 							};
// 						}; // if tws__cart_loop_counter_

// 					});
// 				}

// 				// Hover in prouduct - Decrement button in Loop Proudct
// 				let tws__cart_hover_loop_decrement_ = document.getElementById(`tws__cart_hover_loop_decrement_${currentChild.dataset.product_id}`);
// 				if(tws__cart_hover_loop_decrement_){
// 					tws__cart_hover_loop_decrement_.addEventListener('click', function (e) {

// 						let tws__quantity = parseInt(document.getElementById(`tws__cart_hover_loop_counter_${currentChild.dataset.product_id}`).innerText);
// 						let tws__product_key = document.getElementById(`tws__mini_decrement_${currentChild.dataset.product_id}`).dataset.cart_item_key;

// 						// calculate new quantity, it will be decremented 2 and if success to save it to db then again increment it 1, again increment it 1 because for fragment refresh automatically increment it 1
// 						if (tws__quantity > 1) {
// 							var newQuantity = parseInt(tws__quantity) - 1;
// 							save_to_db_product_loop(tws__product_key, newQuantity, currentChild.dataset.product_id);
// 						}// end of if - calculate new quantity, it will be decremented 2 and if success to save it to db then again

// 						e.stopPropagation(); // stop the triger to parent
// 					}); // Hover in prouduct - Decrement button in Loop Proudct
// 				};

// 			}; // end of if
// 		}; // end loop

// 		// New Quantity	Set and fregment refresh after click on loop product
// 		function save_to_db_product_loop(ckey, qty, product_id) {
// 			// var inputQuantityElement = document.getElementById("input-quantity-" + cart_id);
// 			var xhr = new XMLHttpRequest();
// 			xhr.open("POST", ajaxUrl, true);
// 			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// 			xhr.onreadystatechange = function () {
// 				if (xhr.readyState === 4 && xhr.status === 200) {
// 					// console.log(this.response);
// 					if (this.response == 0) {
// 						// after decrement qty = 2, then it will be increment qty = 1 for fregment refresh
// 						// document.getElementById(`tws__cart_loop_increment_${product_id}`).click();
// 						document.body.dispatchEvent(new Event('wc_fragment_refresh'));
// 					}
// 				}else{
// 					// Reload the current page from the server if response problem
// 					// window.location.reload(true);
// 					// window.location.reload();
// 					document.body.dispatchEvent(new Event('wc_fragment_refresh'));
// 					// console.log(xhr.status)

// 				} // end of if
// 			};
// 			xhr.send('action=change_item_qty&ckey=' + ckey + '&qty=' + qty + '&wp_nonce=' + wpNonce);
// 		};

// 	}; // is esist or not tws__mini_cart_ul
// };
}();
/******/ })()
;
//# sourceMappingURL=mobile_woo.js.map