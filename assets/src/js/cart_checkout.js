import '../sass/cart_checkout.scss';

console.log('this is cart_checkout.js');







const tbody = document.getElementById('cart_t_body');
// var tbody_li = []; // initialize an array
if (tbody) {
	
    for (let i = 0; i < (tbody.childNodes.length); i++) {
		let currentChild = tbody.childNodes[i];
		
        if (currentChild.id && currentChild.nodeName === 'TR') {
            
            // event click
            document.getElementById('decr_'+currentChild.getAttribute('id')).addEventListener('click', function (e) {
            
                decr(currentChild.getAttribute('id'));
                
            }); // event click decr
            
            document.getElementById('incr_'+currentChild.getAttribute('id')).addEventListener('click', function (e) {
            
                incr(currentChild.getAttribute('id'));
            
            }); // event click incr

		}; // if
	}; // loop


    function decr(id){
        let quantityInputs = document.getElementsByName('cart['+id+'][qty]');
        let quantityInput = quantityInputs[0]; // Assuming there is only one input with the specified name

        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }

    }


    function incr(id){
        let quantityInputs = document.getElementsByName('cart['+id+'][qty]');
        let quantityInput = quantityInputs[0]; // Assuming there is only one input with the specified name
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    }



} // if has tbody





