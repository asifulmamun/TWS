// Pixel to 
const pxrem = function (px){
    return px*0.0625+'rem';
};


// Toggle
const toggle_primary_menu = document.getElementById('toggle_primary_menu');
const aside = document.getElementById('aside');
const main = document.getElementById('main');

// check the main id is exist, then
if(main){
    // default
    // aside.style.left = '0';
    // main.style.paddingLeft = pxrem(225);
    main.classList.add('pl-56'); // 224px

    // aftr click
    toggle_primary_menu.addEventListener('click', (event) => {
        
        // aside/page action by toggle
        if(aside.classList.contains('-left-80')){
            
            aside.classList.remove('-left-80'); // 320px - show sidebar
            aside.classList.add('left-0');

            main.classList.add('pl-56'); // 224px
            main.classList.remove('pl-4'); // 224px

            // main.style.paddingLeft = '220px';

            
        }else{
            // aside.style.left = '-'+pxrem(300);
            // main.style.paddingLeft = '0';
            
            aside.classList.remove('left-0');
            aside.classList.add('-left-80'); // 320px - hide sidebar

            main.classList.remove('pl-56'); // 224px
            main.classList.add('pl-4'); // 224px
            
        }

    });
} // end if, main id is exist




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

            let tws__mini_cart_header = document.getElementById('tws__mini_cart_header');
            tws__mini_cart_header.classList.add('grid');
            tws__mini_cart_header.classList.remove('hidden');
        }); // end of event of float mini cart action
    }; // if exist tws__mini_cart_float
}; // if tws__mini_cart is exist



