import '../sass/cart_checkout.scss';

console.log('this is cart_checkout.js');


// aside hide from this cart and checkout page
const aside = document.getElementById('aside');
const main = document.getElementById('main');
if(main){
    main.classList.remove('md:pl-56');
}
if(aside){
    aside.classList.remove('md:-left-0');
    aside.classList.add('md:-left-80');
}


const tbody = document.getElementById('cart_t_body');
// var tbody_li = []; // initialize an array
if (tbody) {

    for (let i = 0; i < (tbody.childNodes.length); i++) {
        let currentChild = tbody.childNodes[i];

        if (currentChild.id && currentChild.nodeName === 'TR') {

            // event click
            document.getElementById('decr_' + currentChild.getAttribute('id')).addEventListener('click', function (e) {

                decr(currentChild.getAttribute('id'));

            }); // event click decr

            document.getElementById('incr_' + currentChild.getAttribute('id')).addEventListener('click', function (e) {

                incr(currentChild.getAttribute('id'));

            }); // event click incr

        }; // if
    }; // loop


    function decr(id) {
        let quantityInput = document.getElementsByName('cart[' + id + '][qty]')[0];
        // let quantityInput = quantityInputs[0]; // Assuming there is only one input with the specified name

        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
            tws__btn_update_cart();
        };

    };


    function incr(id) {
        let quantityInput = document.getElementsByName('cart[' + id + '][qty]')[0];
        // let quantityInput = quantityInputs[0]; // Assuming there is only one input with the specified name
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
        tws__btn_update_cart();
    };

    function tws__btn_update_cart() {
        let updateCartButton = document.getElementById('tws__btn_update_cart');
        updateCartButton.removeAttribute('disabled');
        updateCartButton.setAttribute('aria-disabled', 'false');

    };



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

    function tws__reload_cart(){
        setTimeout(function () {
            // Add the button ID as a query parameter in the URL
            let currentURL = window.location.href;
            currentURL = currentURL.replace(/\/#.*$/, '');
            let updatedURL = currentURL + '/#' + encodeURIComponent(updateCartButton.id);
            window.location.href = updatedURL;
        }, 0);

        setTimeout(function () {
            location.reload();
        }, 2000);
    }

}; // if has tbody





