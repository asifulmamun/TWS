// Toggle
const toggle_primary_menu = document.getElementById('toggle_primary_menu');
const aside = document.getElementById('aside');
const tws__page_with_aside = document.getElementById('tws__page_with_aside');

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