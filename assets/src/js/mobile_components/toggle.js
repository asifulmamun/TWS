console.log('this is mobile toggle.js for desktop browser');

// // Pixel to 
// const pxrem = function (px){
//     return px*0.0625+'rem';
// };


// Toggle
const toggle_primary_menu = document.getElementById('toggle_primary_menu');
const aside = document.getElementById('aside');
const main = document.getElementById('main');

// check the main id is exist, then
if(main){
    // default
    // aside.style.left = '0';
    // main.style.paddingLeft = pxrem(225);
    // main.classList.add('pl-56'); // 224px

    // aftr click
    toggle_primary_menu.addEventListener('click', (event) => {
        
        // aside/page action by toggle
        if(aside.classList.contains('md:left-0')){

            // sidebar hide bigger screen
            aside.classList.remove('md:left-0');
            aside.classList.add('md:-left-80');
            main.classList.remove('md:pl-56');
            
            // sidebar show - mobile or else
            aside.classList.remove('-left-80');
            aside.classList.add('left-0');            
        } 
    
        
        else{
            // sidebar show smaller screen
            aside.classList.add('md:left-0');
            aside.classList.remove('md:-left-80');
            main.classList.add('md:pl-56');
            
            // sidebar hide - mobile or else
            aside.classList.add('-left-80');
            aside.classList.remove('left-0');
        }

    });
} // end if, main id is exist




// // Mini cart action by float
// const tws__mini_cart_float = document.getElementById('tws__mini_cart_float'); // float - odometer button
// var tws__mini_cart = document.getElementById('tws__mini_cart'); // mini cart section

// if(tws__mini_cart){
//     if(tws__mini_cart_float){
            
//         // default
//         // tws__mini_cart.style.right = '-420px';

//         // after click the float
//         tws__mini_cart_float.addEventListener('click', (event) => {
            
//             // show mini cart
//             if(tws__mini_cart.classList.contains('-right-96')){
//                 tws__mini_cart.classList.remove('-right-96');
//                 tws__mini_cart.classList.add('right-0');
//             };

//             let tws__mini_cart_header = document.getElementById('tws__mini_cart_header');
            
//             tws__mini_cart_header.classList.add('grid');
//             tws__mini_cart_header.classList.remove('hidden');
//         }); // end of event of float mini cart action
//     }; // if exist tws__mini_cart_float
// }; // if tws__mini_cart is exist



