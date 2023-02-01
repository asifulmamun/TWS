// set cookies
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// get cookies
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


// toogle menu




// Sidebar Nav expendable
const main_menu_ul = document.getElementById('primary_menu'); // primary menu id select
for (var i = 1; i <= main_menu_ul.childElementCount; i++) {

    // Check if the selector exist
    if (main_menu_ul.getElementsByClassName(`tws__nav_li_${i}`).length == 1) {

        tws__loop_all_nav_li(`tws__nav_li_${i}`);

    }
}
// After click menu class action to here - opening sub menu
function tws__loop_all_nav_li(tws__nav_class_name) {

    // Default - after refresh check, if has any cookies menu will open otherwise close
    if(getCookie(tws__nav_class_name) != "" ){
        main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].getElementsByClassName('sub-menu')[0].style.display = 'block';
    }else{
        main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].getElementsByClassName('sub-menu')[0].style.display = 'none';
    }

    main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].addEventListener('click', function tws_aleart() {
        if(getCookie(tws__nav_class_name) != ""){
            setCookie(tws__nav_class_name, tws__nav_class_name, 0);
            main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].getElementsByClassName('sub-menu')[0].style.display = 'none';
        }else{
            setCookie(tws__nav_class_name, tws__nav_class_name, 1);
            main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].getElementsByClassName('sub-menu')[0].style.display = 'block';
        }    
    });
}