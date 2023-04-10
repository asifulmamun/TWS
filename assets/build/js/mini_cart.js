/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/js/mini_cart.js ***!
  \*****************************/
// Library files trigger
setTimeout(function () {
  odometer.innerHTML = document.getElementById('odometerUpload').innerText;
}, 100);
var ajaxUrl = frontend_ajax_object.ajaxurl; // get admin-ajax.php url
var wpNonce = frontend_ajax_object.ajaxnonce; // get admin-ajax.php nonce - for unique ajax requests

// All elements under ul - select all li>data-pdoduct_id then with product_id action another function
var tws__mini_cart_ul = document.getElementById('tws__mini_cart_ul');
// var ids_tws__mini_cart_li = []; // initialize an array
// check mini cart ul is eixist or not, if exist then collect all li data-pdoduct_id then with product_id action another function
if (tws__mini_cart_ul) {
  var _loop = function _loop() {
    var currentChild = tws__mini_cart_ul.childNodes[i];
    if (currentChild.id && currentChild.nodeName === 'LI') {
      // ids_tws__mini_cart_li.push(currentChild.getAttribute('data-product_id')); // add the id to the array

      // with peoduct_id action another function
      document.getElementById("tws__mini_decrement_".concat(currentChild.dataset.product_id)).addEventListener('click', function (e) {
        // console.log(`tws__mini_decrement_${currentChild.getAttribute('data-product_id')}`);

        // action with product_id
        decrement_quantity("".concat(currentChild.dataset.product_id));
      });
    }
    ;
  };
  for (var i = 0; i < tws__mini_cart_ul.childNodes.length; i++) {
    _loop();
  }
  ;

  // Clicking on decrement button
  function decrement_quantity(product_id) {
    var tws__quantity = parseInt(document.getElementById("tws__mini_cart_quantity_".concat(product_id)).innerText);
    var tws__product_key = document.getElementById("tws__mini_decrement_".concat(product_id)).dataset.cart_item_key;

    // calculate new quantity, it will be decremented 2 and if success to save it to db then again increment it 1, again increment it 1 because for fragment refresh automatically increment it 1
    if (tws__quantity > 1) {
      var newQuantity = parseInt(tws__quantity) - 2;
      save_to_db(tws__product_key, newQuantity, product_id);
    }
  } // end decrement_quantity

  // New Quantity	Set
  function save_to_db(ckey, qty, product_id) {
    // var inputQuantityElement = document.getElementById("input-quantity-" + cart_id);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", ajaxUrl, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // console.log(this.response);
        if (this.response == 0) {
          // after decrement qty = 2, then it will be increment qty = 1 for fregment refresh
          document.getElementById("tws__mini_increment_".concat(product_id)).click();
        }
      }
    };
    xhr.send('action=change_item_qty&ckey=' + ckey + '&qty=' + qty + '&wp_nonce=' + wpNonce);
  } // end new quantity set
}

; // end of if tws__mini_cart_ul
// console.log(ids_tws__mini_cart_li); // the array of ids

var tws__coupon_code_wrap = document.getElementById('tws__coupon_code_wrap');
if (tws__coupon_code_wrap) {
  var tws__has_coupon_code = document.getElementById('tws__has_coupon_code');

  // icon set on tws coupon code
  document.getElementById('tws__has_coupon_code_icon').innerHTML = '<svg id="tws__has_coupon_code_icon_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"/></svg><style>.rotate180{-webkit-transform:rotate(180deg);-moz-transform:rotate(180deg);-ms-transform:rotate(180deg);-o-transform:rotate(180deg);transform:rotate(180deg);}</style>';
  if (tws__has_coupon_code) {
    tws__has_coupon_code.addEventListener('click', function (e) {
      // if class not exsist add class for rotate, otherwise remove class
      var tws__has_coupon_code_icon_svg = document.getElementById('tws__has_coupon_code_icon_svg');
      if (!tws__has_coupon_code_icon_svg.classList.contains('rotate180')) {
        // trigger up the icon
        tws__has_coupon_code_icon_svg.classList.add('rotate180');
        tws__coupon_code_wrap.style.display = 'block';
      } else {
        // trigger down the icon
        tws__has_coupon_code_icon_svg.classList.remove('rotate180');
        tws__coupon_code_wrap.style.display = 'none';
      }
    });
  }
  ; // end of if tws__has_coupon_code

  var tws__coupon_wrap_close = document.getElementById('tws__coupon_wrap_close');
  if (tws__coupon_wrap_close) {
    tws__coupon_wrap_close.addEventListener('click', function (e) {
      tws__coupon_code_wrap.style.display = 'none';

      // The icon will rotate and close the wrapper
      document.getElementById('tws__has_coupon_code_icon_svg').classList.remove('rotate180');
    });
  }
  ; // end of if tws__coupon_wrap_close

  // Coupon code action
  function coupon_code(action, coupon_code) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", ajaxUrl, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // console.log(this.response);
        // console.log(JSON.parse(this.response).msg);

        // coupon code response are showing to in this element
        var tws__coupon_code_response = document.getElementById('tws__coupon_code_response');
        if (tws__coupon_code_response) {
          tws__coupon_code_response.innerText = JSON.parse(this.response).msg;

          // push_notify const declare in global.js file
          push_notify.innerText = JSON.parse(this.response).msg;
          push_notify.classList.remove('hidden');

          // again hide the notification after selected sec
          setTimeout(function () {
            push_notify.classList.add('hidden');
          }, 4000);
        }
        ;

        // freagment refresh
        document.body.dispatchEvent(new Event('wc_fragment_refresh'));
        if (this.response == 0) {
          // console.log(this.response);
          // freagment refresh
          document.body.dispatchEvent(new Event('wc_fragment_refresh'));
          return true; // it's not necessary - but, use for for cross origin request
        }

        return true; // it's not necessary - but, use for for cross origin request
      }
    };

    xhr.send('action=' + action + '&coupon_code=' + coupon_code + '&wp_nonce=' + wpNonce);
  }
  ;

  // click the coupon submit button
  if (document.getElementById('tws__coupon_submit')) {
    document.getElementById('tws__coupon_submit').addEventListener('click', function (e) {
      coupon_code('add_coupon_code', document.getElementById('tws__coupon_input').value);
    });
  }
  ; // end of if

  // Remove button for coupon code
  var tws__coupon_list_ul = document.getElementById('tws__coupon_list_ul');
  if (tws__coupon_list_ul) {
    var _loop2 = function _loop2() {
      var currentChildcpn = tws__coupon_list_ul.childNodes[_i];
      if (currentChildcpn.id && currentChildcpn.nodeName === 'LI') {
        // ids_tws__mini_cart_li.push(currentChild.getAttribute('data-product_id')); // add the id to the array

        // with coupon code
        document.getElementById("tws__coupon_remove_".concat(currentChildcpn.dataset.cpcode)).addEventListener('click', function (e) {
          // action with remove coupon code
          coupon_code('remove_coupon_code', currentChildcpn.dataset.cpcode);
        });
      }
      ;
    };
    for (var _i = 0; _i < tws__coupon_list_ul.childNodes.length; _i++) {
      _loop2();
    }
    ;
  }
  ; // end of if
}
; // end of if tws__coupon_code_wrap

// In products loop ajax and products details change
var tws__products_ul = document.getElementById('tws__products_ul');
if (tws__products_ul) {
  // For product loop
  if (tws__mini_cart_ul) {
    var _loop3 = function _loop3() {
      var currentChild = tws__mini_cart_ul.childNodes[_i2];
      if (currentChild.id && currentChild.nodeName === 'LI') {
        // If change value in mini cart item, then it will same value in product loop
        document.getElementById("tws__cart_loop_add_to_cart_".concat(currentChild.dataset.product_id)).style.display = 'none';
        document.getElementById("tws__cart_loop_counter_".concat(currentChild.dataset.product_id)).innerText = document.getElementById("tws__mini_cart_quantity_".concat(currentChild.dataset.product_id)).innerText;
        document.getElementById("tws__product_loop_hover_amount_".concat(currentChild.dataset.product_id)).innerText = document.getElementById("tws__mini_cart_price_".concat(currentChild.dataset.product_id)).innerText;
        document.getElementById("tws__cart_loop_counter_".concat(currentChild.dataset.product_id)).style.display = 'inline-block';
        document.getElementById("tws__cart_loop_increment_".concat(currentChild.dataset.product_id)).style.display = 'inline-block';
        document.getElementById("tws__cart_loop_btn_before_qty_".concat(currentChild.dataset.product_id)).style.display = 'inline-block';
        // if looping time mini cart found product qty is less then 2 then the decrement button will be hide otherwise it will be show
        if (document.getElementById("tws__cart_loop_counter_".concat(currentChild.dataset.product_id)).innerText == 1) {
          document.getElementById("tws__cart_loop_decrement_".concat(currentChild.dataset.product_id)).style.display = 'none';
        } else {
          document.getElementById("tws__cart_loop_decrement_".concat(currentChild.dataset.product_id)).style.display = 'inline-block';
        }
        ;

        // Decrement button in Loop Proudct
        document.getElementById("tws__cart_loop_decrement_".concat(currentChild.dataset.product_id)).addEventListener('click', function (e) {
          var tws__quantity = parseInt(document.getElementById("tws__cart_loop_counter_".concat(currentChild.dataset.product_id)).innerText);
          var tws__product_key = document.getElementById("tws__mini_decrement_".concat(currentChild.dataset.product_id)).dataset.cart_item_key;

          // calculate new quantity, it will be decremented 2 and if success to save it to db then again increment it 1, again increment it 1 because for fragment refresh automatically increment it 1
          if (tws__quantity > 1) {
            var newQuantity = parseInt(tws__quantity) - 1;
            save_to_db_product_loop(tws__product_key, newQuantity, currentChild.dataset.product_id);
          } // end of if - calculate new quantity, it will be decremented 2 and if success to save it to db then again
        }); // Decrement button in Loop Proudct

        // Remove button is clicked from mini cart then loop will counter 1 with product id
        document.getElementById("tws__mini_cart_remove_".concat(currentChild.dataset.product_id)).addEventListener('click', function (e) {
          document.getElementById("tws__cart_loop_add_to_cart_".concat(currentChild.dataset.product_id)).style.display = 'inline-block';
          document.getElementById("tws__cart_loop_counter_".concat(currentChild.dataset.product_id)).innerText = '';
          document.getElementById("tws__cart_loop_counter_".concat(currentChild.dataset.product_id)).style.display = 'none';
          document.getElementById("tws__product_loop_hover_amount_".concat(currentChild.dataset.product_id)).innerText = '';
          document.getElementById("tws__cart_loop_btn_before_qty_".concat(currentChild.dataset.product_id)).style.display = 'none';
          document.getElementById("tws__cart_loop_increment_".concat(currentChild.dataset.product_id)).style.display = 'none';
          document.getElementById("tws__cart_loop_decrement_".concat(currentChild.dataset.product_id)).style.display = 'none';

          // hide the button from - hover of product loop
          document.getElementById("tws__add_to_cart_hover_txt_".concat(currentChild.dataset.product_id)).style.display = 'inherit';
          document.getElementById("tws__add_to_cart_hover_wrapper_".concat(currentChild.dataset.product_id)).classList.remove('tws__add_to_cart_hover_wrapper');
          document.getElementById("tws__add_to_cart_hover_wrapper_".concat(currentChild.dataset.product_id)).classList.add('hidden');
        });

        // Hover add to cart quantity change
        document.getElementById("tws__cart_hover_loop_counter_".concat(currentChild.dataset.product_id)).innerText = document.getElementById("tws__mini_cart_quantity_".concat(currentChild.dataset.product_id)).innerText;

        // Hover add to cart show
        document.getElementById("tws__add_to_cart_hover_add_".concat(currentChild.dataset.product_id)).addEventListener('mouseenter', function (e) {
          if (document.getElementById("tws__cart_loop_counter_".concat(currentChild.dataset.product_id)).innerText > 0) {
            document.getElementById("tws__add_to_cart_hover_wrapper_".concat(currentChild.dataset.product_id)).classList.remove('hidden');
            document.getElementById("tws__add_to_cart_hover_wrapper_".concat(currentChild.dataset.product_id)).classList.add('tws__add_to_cart_hover_wrapper');
          }
        });

        // If any product qty - hover add to cart text will be hide also another function will be show
        if (document.getElementById("tws__cart_loop_counter_".concat(currentChild.dataset.product_id)).innerText > 0) {
          // hide the add to cart button from - hover of product loop
          document.getElementById("tws__add_to_cart_hover_txt_".concat(currentChild.dataset.product_id)).style.display = 'none';

          // Hover add to cart show
          document.getElementById("tws__add_to_cart_hover_wrapper_".concat(currentChild.dataset.product_id)).classList.remove('hidden');
          document.getElementById("tws__add_to_cart_hover_wrapper_".concat(currentChild.dataset.product_id)).classList.add('tws__add_to_cart_hover_wrapper');
        } // If any product qty - hover add to cart text will be hide also another function will be show

        // Hover in prouduct - Decrement button in Loop Proudct
        document.getElementById("tws__cart_hover_loop_decrement_".concat(currentChild.dataset.product_id)).addEventListener('click', function (e) {
          var tws__quantity = parseInt(document.getElementById("tws__cart_hover_loop_counter_".concat(currentChild.dataset.product_id)).innerText);
          var tws__product_key = document.getElementById("tws__mini_decrement_".concat(currentChild.dataset.product_id)).dataset.cart_item_key;

          // calculate new quantity, it will be decremented 2 and if success to save it to db then again increment it 1, again increment it 1 because for fragment refresh automatically increment it 1
          if (tws__quantity > 1) {
            var newQuantity = parseInt(tws__quantity) - 1;
            save_to_db_product_loop(tws__product_key, newQuantity, currentChild.dataset.product_id);
          } // end of if - calculate new quantity, it will be decremented 2 and if success to save it to db then again

          e.stopPropagation(); // stop the triger to parent
        }); // Hover in prouduct - Decrement button in Loop Proudct
      }

      ; // end of if
    };
    for (var _i2 = 0; _i2 < tws__mini_cart_ul.childNodes.length; _i2++) {
      _loop3();
    }
    ; // end loop

    // New Quantity	Set and fregment refresh after click on loop product
    function save_to_db_product_loop(ckey, qty, product_id) {
      // var inputQuantityElement = document.getElementById("input-quantity-" + cart_id);
      var xhr = new XMLHttpRequest();
      xhr.open("POST", ajaxUrl, true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          // console.log(this.response);
          if (this.response == 0) {
            // after decrement qty = 2, then it will be increment qty = 1 for fregment refresh
            // document.getElementById(`tws__cart_loop_increment_${product_id}`).click();
            document.body.dispatchEvent(new Event('wc_fragment_refresh'));
          }
        } else {
          // Reload the current page from the server if response problem
          // window.location.reload(true);
          // window.location.reload();
          document.body.dispatchEvent(new Event('wc_fragment_refresh'));
          // console.log(xhr.status)
        } // end of if
      };

      xhr.send('action=change_item_qty&ckey=' + ckey + '&qty=' + qty + '&wp_nonce=' + wpNonce);
    }
    ;
  }
  ; // is esist or not tws__mini_cart_ul
}
;
/******/ })()
;
//# sourceMappingURL=mini_cart.js.map