"use strict";
// All elements under ul - select all li>data-pdoduct_id then with product_id action another function
const tws__mini_cart_ul = document.getElementById('tws__mini_cart_ul');
// var ids_tws__mini_cart_li = []; // initialize an array
// check mini cart ul is eixist or not, if exist then collect all li data-pdoduct_id then with product_id action another function
if(tws__mini_cart_ul) {
	for (let i = 0; i < tws__mini_cart_ul.childNodes.length; i++) {
		let currentChild = tws__mini_cart_ul.childNodes[i];
		if (currentChild.id && currentChild.nodeName === 'LI') {
			// ids_tws__mini_cart_li.push(currentChild.getAttribute('data-product_id')); // add the id to the array

			// with peoduct_id action another function
			document.getElementById(`tws__mini_decrement_${currentChild.getAttribute('data-product_id')}`).addEventListener('click', function (e) {
				// console.log(`tws__mini_decrement_${currentChild.getAttribute('data-product_id')}`);
			
				// action with product_id
				decrement_quantity(`${currentChild.getAttribute('data-product_id')}`);
			});
		};
	};
}
// console.log(ids_tws__mini_cart_li); // the array of ids

// Clicking on decrement button
function decrement_quantity(product_id) {
	var tws__quantity = parseInt(document.getElementById(`tws__mini_cart_quantity_${product_id}`).innerText);
	var tws__product_key = document.getElementById(`tws__mini_decrement_${product_id}`).getAttribute('data-cart_item_key');

	// calculate new quantity, it will be decremented 2 and if success to save it to db then again increment it 1, again increment it 1 because for fragment refresh automatically increment it 1
	if (tws__quantity > 1) {
		var newQuantity = parseInt(tws__quantity) - 2;
		save_to_db(tws__product_key, newQuantity, product_id);
	}
}

// New Quantity	Set
function save_to_db(ckey, qty, product_id) {
	var action_cart_url = '/wp-admin/admin-ajax.php';
    // var inputQuantityElement = document.getElementById("input-quantity-" + cart_id);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", action_cart_url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
	if (xhr.readyState === 4 && xhr.status === 200) {
        // console.log(this.response);
		if (this.response == 0) {
			// after decrement qty = 2, then it will be increment qty = 1 for fregment refresh
			document.getElementById(`tws__mini_increment_${product_id}`).click();
		}
      }
    };
    xhr.send("action=tws_master_pro_woocommerce_cart_link_fragment&ckey=" + ckey + "&qty=" + qty);
}