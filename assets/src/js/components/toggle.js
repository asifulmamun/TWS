// Toggle
const toggle_primary_menu = document.getElementById('toggle_primary_menu');
const aside = document.getElementById('aside');
const tws__page_with_aside = document.getElementById('tws__page_with_aside');

// check the tws__page_with_aside id is exist, then
if(tws__page_with_aside){
    // default
    aside.style.left = '0';
    tws__page_with_aside.style.marginLeft = '220px';

    // aftr click
    toggle_primary_menu.addEventListener('click', (event) => {
        
        // aside/page action by toggle
        if(aside.style.left == '-300px'){
            aside.style.left = '0';
            tws__page_with_aside.style.marginLeft = '220px';
            
        }else{
            aside.style.left = '-300px';
            tws__page_with_aside.style.marginLeft = '0px';
        }

    });
} // end if, tws__page_with_aside id is exist




// Mini cart action by float
const tws__mini_cart_float = document.getElementById('tws__mini_cart_float'); // float - odometer button
var tws__mini_cart = document.getElementById('tws__mini_cart'); // mini cart section

if(tws__mini_cart){
    if(tws__mini_cart_float){
            
        // default
        tws__mini_cart.style.right = '-420px';

        // after click the float
        tws__mini_cart_float.addEventListener('click', (event) => {
            tws__mini_cart.style.right = '0px';
        }); // end of event of float mini cart action
    }; // if exist tws__mini_cart_float
}; // if tws__mini_cart is exist



