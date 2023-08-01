/* 
    Cookies
 */

console.log('This is global.js');

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
	var data = JSON.parse(this.responseText);
	console.log(data);

	// Top Search Place Holder
	let tws__top_search = document.getElementById('tws__top_search');
	if(tws__top_search){
		tws__top_search.placeholder = data.tws__top_search;
	}

	// Footer Live Chat Change
	let tws__live_support = document.getElementById('tws__live_support');
	if(tws__live_support){
		tws__live_support.innerText = data.tws__live_support;
	}

}
xmlhttp.open("GET", tws__site_root+'/inc/data.json');
xmlhttp.send();