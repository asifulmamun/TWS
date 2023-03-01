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

// // // Sidebar Nav expendable - need li item add this class with number, example: tws__nav_li_1, tws__nav_li_2, every time change the class number 1,2,3.. etc, how many class want to add, which li has sub-menu 
// const main_menu_ul = document.getElementById('primary_menus'); // primary menu id select
// // check if main_menu_ul exists, then
// if(main_menu_ul){
//     // General loop for run menu
//     for (var i = 1; i <= main_menu_ul.childElementCount; i++) {
//         // Check if the selector exist
//         if (main_menu_ul.getElementsByClassName(`tws__nav_li_${i}`).length == 1) {
//             tws__loop_all_nav_li(`tws__nav_li_${i}`, i);
//         }
//     } // General loop for run menu

//     // Nav close exclude without selected
//     function close_all_sub_menu(exclude){
//         for (let i = 1; i <= main_menu_ul.childElementCount; i++) {
//             if(i===exclude){continue;}// exclude selected from loop
//             // Check if the selector exist
//             if (main_menu_ul.getElementsByClassName(`tws__nav_li_${i}`).length == 1) {

//                 // all sub-menu close by default after refresh
//                 setCookie(`tws__nav_li_${i}_sub`, 'none', 0);

//                 document.getElementById(`tws__nav_li_${i}_sub`).style.display = 'none';
//                 document.getElementById(`tws__nav_li_${i}_icon`).setAttribute('style', '-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);');
//             } // condition
//         } // for loop
//     } // close_all_sub_menu

//     // Looping with li
//     function tws__loop_all_nav_li(tws__nav_class_name, menu_numb) {

//         // Create Child Node for icon
//         let i = document.createElement('i');
//         i.setAttribute('id', `${tws__nav_class_name}_icon`);
//         main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].appendChild(i);
//         main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].classList.add('relative');
//         document.getElementById(`${tws__nav_class_name}_icon`).innerHTML = `›`;
//         // Create an ID in sub-menu
//         main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].getElementsByClassName('sub-menu')[0].setAttribute('id', `${tws__nav_class_name}_sub`);
//         // Create child as style element
//         let style = document.createElement('style');
//         let styleCss = `#${tws__nav_class_name}_icon{position:absolute;top:0;right:.5rem;font-style:normal;cursor:pointer;}`;
//         style.innerHTML = styleCss;
//         main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].appendChild(style);

        
//         // by default sub menu open or close with cookie
//         if(getCookie(`${tws__nav_class_name}_sub`) != ""){
//             document.getElementById(`${tws__nav_class_name}_sub`).style.display = 'block';
//             document.getElementById(`${tws__nav_class_name}_icon`).setAttribute('style', '-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);');
//         }else{
//             document.getElementById(`${tws__nav_class_name}_sub`).style.display = 'none';
//         } // by default sub menu open or close with cookie
        

//         // After click the li - open the sub-menu
//         if(main_menu_ul.getElementsByClassName(tws__nav_class_name).length == 1){
//             main_menu_ul.getElementsByClassName(tws__nav_class_name)[0].addEventListener('click', open_sub_menu); 
//         } // After click the li - open the sub-menu
        

//         // oepn sub-menu
//         function open_sub_menu() {
            
//             // All submenu close without selected
//             close_all_sub_menu(menu_numb);

//             if(main_menu_ul.getElementsByClassName(tws__nav_class_name).length == 1){

//                 // sub-menu open by default after refresh
//                 setCookie(`${tws__nav_class_name}_sub`, 'block', 1);

//                 document.getElementById(`${tws__nav_class_name}_sub`).style.display = 'block';
//                 document.getElementById(`${tws__nav_class_name}_icon`).setAttribute('style', '-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);');
//             }
//         } // oepn sub-menu
//     } // Looping with li
// } // end if main_menu_ul exists



const primary_menu = document.getElementById('primary_menu');
// var primary_menu_li = []; // initialize an array
if (primary_menu) {
	
    for (let i = 0; i < primary_menu.childNodes.length; i++) {
		let currentChild = primary_menu.childNodes[i];
		if (currentChild.id && currentChild.nodeName === 'LI') {
            // If has sub menu
            if(document.getElementById(currentChild.getAttribute('id')).getElementsByClassName('sub-menu').length > 0){
                // primary_menu_li.push(currentChild.getAttribute('id')); // add the id to the array


                // submenu set id
                document.getElementById(currentChild.getAttribute('id')).getElementsByClassName('sub-menu')[0].setAttribute('id', `${currentChild.getAttribute('id')}_sub`);


                // li style and auto event
                tws__loop_all_nav_li(currentChild.getAttribute('id'));


                // event click for li
                document.getElementById(currentChild.getAttribute('id')).addEventListener('click', function (e) {
                    open_sub_menu(currentChild.getAttribute('id'));
                }); // event click for li


            } // If has sub menu
		};
	}; // loop
    // console.log(primary_menu_li); // print the array with id


    // auto event and menu li style
    function tws__loop_all_nav_li(primary_menu_li_id){
        
        // Create Child Node for icon
        let i = document.createElement('i');
        i.setAttribute('id', `${primary_menu_li_id}_icon`);
        document.getElementById(primary_menu_li_id).appendChild(i);

        // li make relative and add the arrow in inner icon
        document.getElementById(primary_menu_li_id).classList.add('relative');
        document.getElementById(`${primary_menu_li_id}_icon`).innerHTML = `›`;

        // Create child as style element
        let style = document.createElement('style');
        let styleCss = `#${primary_menu_li_id}_icon{position:absolute;top:0;right:.5rem;font-style:normal;cursor:pointer;}`;
        style.innerHTML = styleCss;
        document.getElementById(primary_menu_li_id).appendChild(style);

        // by default sub menu open or close with cookie
        if(getCookie(`${primary_menu_li_id}_sub`) != ""){
            document.getElementById(`${primary_menu_li_id}_sub`).style.display = 'block';
            document.getElementById(`${primary_menu_li_id}_icon`).setAttribute('style', '-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);');
        }else{
            document.getElementById(`${primary_menu_li_id}_sub`).style.display = 'none';
        } // by default sub menu open or close with cookie
    } // tws__loop_all_nav_li


    function open_sub_menu(primary_menu_li_id) {
        
        // All submenu close without selected
        close_all_sub_menu(primary_menu_li_id);

        if(document.getElementsByClassName(primary_menu_li_id).length == 1){

            // sub-menu open by default after refresh
            setCookie(`${primary_menu_li_id}_sub`, 'block', 1);

            document.getElementById(`${primary_menu_li_id}_sub`).style.display = 'block';
            document.getElementById(`${primary_menu_li_id}_icon`).setAttribute('style', '-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-ms-transform:rotate(90deg);-o-transform:rotate(90deg);transform:rotate(90deg);');
        }
    } // open sub-menu


    // Nav close exclude without selected which id in exclude variable
    function close_all_sub_menu(exclude){
        for (let i = 0; i < primary_menu.childNodes.length; i++) {
            let currentChild = primary_menu.childNodes[i];
            if (currentChild.id && currentChild.nodeName === 'LI') {
                // If has sub menu
                if(document.getElementById(currentChild.getAttribute('id')).getElementsByClassName('sub-menu').length > 0){
                    
                    if(currentChild.getAttribute('id')===exclude){continue;}// exclude selected from loop

                    
                    // console.log(`${currentChild.getAttribute('id')}_sub`);


                    // all sub-menu close by default after refresh
                    setCookie(`${currentChild.getAttribute('id')}_sub`, 'none', 0);


                    document.getElementById(`${currentChild.getAttribute('id')}_sub`).style.display = 'none';
                    document.getElementById(`${currentChild.getAttribute('id')}_icon`).setAttribute('style', '-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);');
            
                } // If has sub menu
            } // endif
        } // for loop
    } // close_all_sub_menu


} // end if primary_menu exists or not check