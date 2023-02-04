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

// Sidebar Nav expendable
const main_menu_ul = document.getElementById('primary_menu'); // primary menu id select

// General loop for run menu
for (var i = 1; i <= main_menu_ul.childElementCount; i++) {
    // Check if the selector exist
    if (main_menu_ul.getElementsByClassName(`tws__nav_li_${i}`).length == 1) {
        tws__loop_all_nav_li(`tws__nav_li_${i}`, i);
    }
} // General loop for run menu

// Nav close exclud without selected
function close_all_sub_menu(exclude){
    for (let i = 1; i <= main_menu_ul.childElementCount; i++) {
        if(i===exclude){continue;}// exclude selected from loop
        // Check if the selector exist
        if (main_menu_ul.getElementsByClassName(`tws__nav_li_${i}`).length == 1) {

            // all sub-menu close by default after refresh
            setCookie(`tws__nav_li_${i}_sub`, 'none', 0);

            document.getElementById(`tws__nav_li_${i}_sub`).style.display = 'none';
            document.getElementById(`tws__nav_li_${i}_icon`).setAttribute('style', '-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);');
        } // condition
    } // for loop
} // Nav close exclud without selected

// Looping with li
function tws__loop_all_nav_li(tws__nav_class_name, menu_numb) {

    // Create Child Node for icon
    let i = document.createElement('i');
    i.setAttribute('id', `${tws__nav_class_name}_icon`);
    main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].appendChild(i);
    main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].classList.add('relative');
    document.getElementById(`${tws__nav_class_name}_icon`).innerHTML = `›`;
    // Create an ID in sub-menu
    main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].getElementsByClassName('sub-menu')[0].setAttribute('id', `${tws__nav_class_name}_sub`);
    // Create child as style element
    let style = document.createElement('style');
    let styleCss = `#${tws__nav_class_name}_icon{position:absolute;top:0;right:.5rem;font-style:normal;cursor:pointer;}`;
    style.innerHTML = styleCss;
    main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].appendChild(style);

    
    // by default sub menu open or close with cookie
    if(getCookie(`${tws__nav_class_name}_sub`) != ""){
        document.getElementById(`${tws__nav_class_name}_sub`).style.display = 'block';
        document.getElementById(`${tws__nav_class_name}_icon`).setAttribute('style', '-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);');
    }else{
        document.getElementById(`${tws__nav_class_name}_sub`).style.display = 'none';
    } // by default sub menu open or close with cookie
    

    // After click the li - open the sub-menu
    if(main_menu_ul.getElementsByClassName(tws__nav_class_name).length == 1){
        main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].addEventListener('click', open_sub_menu); 
    } // After click the li - open the sub-menu
    

    // oepn sub-menu
    function open_sub_menu() {
        
        // All submenu close without selected
        close_all_sub_menu(menu_numb);

        if(main_menu_ul.getElementsByClassName(tws__nav_class_name).length == 1){

            // sub-menu open by default after refresh
            setCookie(`${tws__nav_class_name}_sub`, 'block', 1);

            document.getElementById(`${tws__nav_class_name}_sub`).style.display = 'block';
            document.getElementById(`${tws__nav_class_name}_icon`).setAttribute('style', '-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);');
        }
    } // oepn sub-menu
} // Looping with li