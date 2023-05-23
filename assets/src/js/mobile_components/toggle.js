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

    // after click
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


    // if clicking on main section | page and if the aside is open it will be closed
    main.addEventListener('click', (event) => {

        if(aside.classList.contains('left-0')){
            // sidebar hide - mobile or else
           aside.classList.add('-left-80');
           aside.classList.remove('left-0');
        } // if left-0 class is exists
           
    }); // click on main section


} // end if, main id is exist


