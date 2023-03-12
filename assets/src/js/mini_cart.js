const ajaxUrl = frontend_ajax_object.ajaxurl; // get admin-ajax.php url
const wpNonce = frontend_ajax_object.ajaxnonce; // get admin-ajax.php nonce - for unique ajax requests

// All elements under ul - select all li>data-pdoduct_id then with product_id action another function
const tws__mini_cart_ul = document.getElementById('tws__mini_cart_ul');
// var ids_tws__mini_cart_li = []; // initialize an array
// check mini cart ul is eixist or not, if exist then collect all li data-pdoduct_id then with product_id action another function
if (tws__mini_cart_ul) {
	for (let i = 0; i < tws__mini_cart_ul.childNodes.length; i++) {
		let currentChild = tws__mini_cart_ul.childNodes[i];
		if (currentChild.id && currentChild.nodeName === 'LI') {
			// ids_tws__mini_cart_li.push(currentChild.getAttribute('data-product_id')); // add the id to the array

			// with peoduct_id action another function
			document.getElementById(`tws__mini_decrement_${currentChild.dataset.product_id}`).addEventListener('click', function (e) {
				// console.log(`tws__mini_decrement_${currentChild.getAttribute('data-product_id')}`);

				// action with product_id
				decrement_quantity(`${currentChild.dataset.product_id}`);
			});
		};
	};
}
// console.log(ids_tws__mini_cart_li); // the array of ids

// Clicking on decrement button
function decrement_quantity(product_id) {
	var tws__quantity = parseInt(document.getElementById(`tws__mini_cart_quantity_${product_id}`).innerText);
	var tws__product_key = document.getElementById(`tws__mini_decrement_${product_id}`).dataset.cart_item_key;

	// calculate new quantity, it will be decremented 2 and if success to save it to db then again increment it 1, again increment it 1 because for fragment refresh automatically increment it 1
	if (tws__quantity > 1) {
		var newQuantity = parseInt(tws__quantity) - 2;
		save_to_db(tws__product_key, newQuantity, product_id);
	}
}

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
				document.getElementById(`tws__mini_increment_${product_id}`).click();
			}
		}
	};
	xhr.send('action=change_item_qty&ckey=' + ckey + '&qty=' + qty + '&wp_nonce=' + wpNonce);
}

// Coupon code action
function coupon_code(action, coupon_code) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", ajaxUrl, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
			// console.log(this.response);
			// freagment refresh
			document.body.dispatchEvent(new Event('wc_fragment_refresh'));
            if (this.response == 0) {
                // console.log(this.response);
				// freagment refresh
				document.body.dispatchEvent(new Event('wc_fragment_refresh'));
            }
        }
    };
    xhr.send('action=' + action + '&coupon_code=' + coupon_code + '&wp_nonce=' + wpNonce);
}

// click the coupon submit button
if(document.getElementById('tws__coupon_submit')){
	document.getElementById('tws__coupon_submit').addEventListener('click', function(e) { 
		
		coupon_code('add_coupon_code', document.getElementById('tws__coupon_input').value);

	});
}; // end of if

// Remove button for coupon code
const tws__coupon_list_ul = document.getElementById('tws__coupon_list_ul');
if (tws__coupon_list_ul) {
	for (let i = 0; i < tws__coupon_list_ul.childNodes.length; i++) {
		let currentChildcpn = tws__coupon_list_ul.childNodes[i];
		if (currentChildcpn.id && currentChildcpn.nodeName === 'LI') {
			// ids_tws__mini_cart_li.push(currentChild.getAttribute('data-product_id')); // add the id to the array

			// with coupon code
			document.getElementById(`tws__coupon_remove_${currentChildcpn.dataset.cpcode}`).addEventListener('click', function (e) {
			
				// action with remove coupon code
				coupon_code('remove_coupon_code', currentChildcpn.dataset.cpcode);
			});
		};
	};
}; // end of if




// In products loop ajax and products details change
const tws__products_ul = document.getElementById('tws__products_ul');
if (tws__products_ul) {
	// For product loop
	if (tws__mini_cart_ul) {
		for (let i = 0; i < tws__mini_cart_ul.childNodes.length; i++) {
			let currentChild = tws__mini_cart_ul.childNodes[i];
			if (currentChild.id && currentChild.nodeName === 'LI') {

				// If change value in mini cart item, then it will same value in product loop
				document.getElementById(`tws__cart_loop_add_to_cart_${currentChild.dataset.product_id}`).style.display = 'none';
				document.getElementById(`tws__cart_loop_counter_${currentChild.dataset.product_id}`).innerText = document.getElementById(`tws__mini_cart_quantity_${currentChild.dataset.product_id}`).innerText;
				document.getElementById(`tws__product_loop_hover_amount_${currentChild.dataset.product_id}`).innerText = document.getElementById(`tws__mini_cart_price_${currentChild.dataset.product_id}`).innerText;
				document.getElementById(`tws__cart_loop_counter_${currentChild.dataset.product_id}`).style.display = 'inline-block';
				document.getElementById(`tws__cart_loop_increment_${currentChild.dataset.product_id}`).style.display = 'inline-block';
				document.getElementById(`tws__cart_loop_btn_before_qty_${currentChild.dataset.product_id}`).style.display = 'inline-block';
				// if looping time mini cart found product qty is less then 2 then the decrement button will be hide otherwise it will be show
				if(document.getElementById(`tws__cart_loop_counter_${currentChild.dataset.product_id}`).innerText == 1){
					document.getElementById(`tws__cart_loop_decrement_${currentChild.dataset.product_id}`).style.display = 'none';
				} else{
					document.getElementById(`tws__cart_loop_decrement_${currentChild.dataset.product_id}`).style.display = 'inline-block';
				};
				

				// Decrement button in Loop Proudct
				document.getElementById(`tws__cart_loop_decrement_${currentChild.dataset.product_id}`).addEventListener('click', function (e) {

					let tws__quantity = parseInt(document.getElementById(`tws__cart_loop_counter_${currentChild.dataset.product_id}`).innerText);
					let tws__product_key = document.getElementById(`tws__mini_decrement_${currentChild.dataset.product_id}`).dataset.cart_item_key;
				
					// calculate new quantity, it will be decremented 2 and if success to save it to db then again increment it 1, again increment it 1 because for fragment refresh automatically increment it 1
					if (tws__quantity > 1) {
						var newQuantity = parseInt(tws__quantity) - 1;
						save_to_db_product_loop(tws__product_key, newQuantity, currentChild.dataset.product_id);
					}// end of if - calculate new quantity, it will be decremented 2 and if success to save it to db then again
					
					
				}); // Decrement button in Loop Proudct


				// Remove button is clicked from mini cart then loop will counter 1 with product id
				document.getElementById(`tws__mini_cart_remove_${currentChild.dataset.product_id}`).addEventListener('click', function (e) {
					document.getElementById(`tws__cart_loop_add_to_cart_${currentChild.dataset.product_id}`).style.display = 'inline-block';
					document.getElementById(`tws__cart_loop_counter_${currentChild.dataset.product_id}`).innerText = '';
					document.getElementById(`tws__cart_loop_counter_${currentChild.dataset.product_id}`).style.display = 'none';
					document.getElementById(`tws__product_loop_hover_amount_${currentChild.dataset.product_id}`).innerText = '';
					document.getElementById(`tws__cart_loop_btn_before_qty_${currentChild.dataset.product_id}`).style.display = 'none';
					document.getElementById(`tws__cart_loop_increment_${currentChild.dataset.product_id}`).style.display = 'none';
					document.getElementById(`tws__cart_loop_decrement_${currentChild.dataset.product_id}`).style.display = 'none';

					// hide the button from - hover of product loop
					document.getElementById(`tws__add_to_cart_hover_txt_${currentChild.dataset.product_id}`).style.display = 'inherit';
					document.getElementById(`tws__add_to_cart_hover_wrapper_${currentChild.dataset.product_id}`).classList.remove('tws__add_to_cart_hover_wrapper');
					document.getElementById(`tws__add_to_cart_hover_wrapper_${currentChild.dataset.product_id}`).classList.add('hidden');

				});

				// Hover add to cart quantity change
				document.getElementById(`tws__cart_hover_loop_counter_${currentChild.dataset.product_id}`).innerText = document.getElementById(`tws__mini_cart_quantity_${currentChild.dataset.product_id}`).innerText;
				
				// Hover add to cart show
				document.getElementById(`tws__add_to_cart_hover_add_${currentChild.dataset.product_id}`).addEventListener('mouseenter', function(e) {
					if(document.getElementById(`tws__cart_loop_counter_${currentChild.dataset.product_id}`).innerText > 0){
						document.getElementById(`tws__add_to_cart_hover_wrapper_${currentChild.dataset.product_id}`).classList.remove('hidden');
						document.getElementById(`tws__add_to_cart_hover_wrapper_${currentChild.dataset.product_id}`).classList.add('tws__add_to_cart_hover_wrapper');
					}
				});

				// If any product qty - hover add to cart text will be hide also another function will be show
				if(document.getElementById(`tws__cart_loop_counter_${currentChild.dataset.product_id}`).innerText > 0){
					
					// hide the add to cart button from - hover of product loop
					document.getElementById(`tws__add_to_cart_hover_txt_${currentChild.dataset.product_id}`).style.display = 'none';

					// Hover add to cart show
					document.getElementById(`tws__add_to_cart_hover_wrapper_${currentChild.dataset.product_id}`).classList.remove('hidden');
					document.getElementById(`tws__add_to_cart_hover_wrapper_${currentChild.dataset.product_id}`).classList.add('tws__add_to_cart_hover_wrapper');
				} // If any product qty - hover add to cart text will be hide also another function will be show


				// Hover in prouduct - Decrement button in Loop Proudct
				document.getElementById(`tws__cart_hover_loop_decrement_${currentChild.dataset.product_id}`).addEventListener('click', function (e) {

					let tws__quantity = parseInt(document.getElementById(`tws__cart_hover_loop_counter_${currentChild.dataset.product_id}`).innerText);
					let tws__product_key = document.getElementById(`tws__mini_decrement_${currentChild.dataset.product_id}`).dataset.cart_item_key;
				
					// calculate new quantity, it will be decremented 2 and if success to save it to db then again increment it 1, again increment it 1 because for fragment refresh automatically increment it 1
					if (tws__quantity > 1) {
						var newQuantity = parseInt(tws__quantity) - 1;
						save_to_db_product_loop(tws__product_key, newQuantity, currentChild.dataset.product_id);
					}// end of if - calculate new quantity, it will be decremented 2 and if success to save it to db then again
					
					e.stopPropagation(); // stop the triger to parent
				}); // Hover in prouduct - Decrement button in Loop Proudct
				
			}; // end of if
		}; // end loop

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
				}else{
					// Reload the current page from the server if response problem
					// window.location.reload(true);
					window.location.reload();
					// document.body.dispatchEvent(new Event('wc_fragment_refresh'));
					// console.log(xhr.status)
					
				} // end of if
			};
			xhr.send('action=change_item_qty&ckey=' + ckey + '&qty=' + qty + '&wp_nonce=' + wpNonce);
		};

	}; // is esist or not tws__mini_cart_ul
}


