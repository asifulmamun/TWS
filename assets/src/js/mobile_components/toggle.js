console.log('this is mobile toggle.js for desktop browser');

// // Pixel to 
// const pxrem = function (px){
//     return px*0.0625+'rem';
// };


// Toggle
const toggle_primary_menu = document.getElementById('toggle_primary_menu');
const aside = document.getElementById('aside');
const main = document.getElementById('main');
const qmenu = document.getElementById('tws__quick_access_menu'); // quick access menu


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

            qmenu.classList.remove('md:left-0');
            qmenu.classList.add('md:-left-80');


            
            // sidebar show - mobile or else
            aside.classList.remove('-left-80');
            aside.classList.add('left-0');
            
            qmenu.classList.remove('-left-80');
            qmenu.classList.add('left-0');             
        } 
    
        // if mobile aside hide by click on body then again the toggle menu will show by check if the aside is hide
        else if(aside.classList.contains('-left-80')){

            // sidebar hide bigger screen
            aside.classList.remove('md:left-0');
            aside.classList.add('md:-left-80');
            main.classList.remove('md:pl-56');

            qmenu.classList.remove('md:left-0');
            qmenu.classList.add('md:-left-80');
            

            // sidebar show - mobile or else
            aside.classList.remove('-left-80');
            aside.classList.add('left-0');

            qmenu.classList.remove('-left-80');
            qmenu.classList.add('left-0');

        } 

        else{
            // sidebar show smaller screen
            aside.classList.add('md:left-0');
            aside.classList.remove('md:-left-80');
            main.classList.add('md:pl-56');

            qmenu.classList.add('md:left-0');
            qmenu.classList.remove('md:-left-80');
            
            // sidebar hide - mobile or else
            aside.classList.add('-left-80');
            aside.classList.remove('left-0');
            
            qmenu.classList.add('-left-80');
            qmenu.classList.remove('left-0');

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


