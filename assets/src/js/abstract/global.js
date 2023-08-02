/* 
    Cookies
 */

console.log('This is global.js');


// static data update for mobile and desktop
function update_static_data(data) {
	// Update Top Search Placeholder
	let tws__top_search = document.getElementById('tws__top_search');
	if (tws__top_search) {
		tws__top_search.placeholder = data.tws__top_search;
	}

	// Update Footer Live Chat Text
	let tws__live_support = document.getElementById('tws__live_support');
	if (tws__live_support) {
		tws__live_support.innerText = data.tws__live_support;
	}
}

// static data get from json files and update data as per terms and conditions
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function () {
	if (xmlhttp.status === 200) {
		var data = JSON.parse(this.responseText);
		update_static_data(data);
		
	} else {
		// If data.json not found, try to request data-sample.json
		const xmlhttpSample = new XMLHttpRequest();
		xmlhttpSample.onload = function () {
			if (xmlhttpSample.status === 200) {
				var data = JSON.parse(xmlhttpSample.responseText);
				update_static_data(data);
			} else {
				console.log("data-sample.json not found or returned an error.");
			}
		};

		// Send the HTTP GET request to retrieve the data-sample.json
		xmlhttpSample.open("GET", tws__site_root + '/inc/data-sample.json');
		xmlhttpSample.send();
	}
};

// Send the HTTP GET request to retrieve the data.json
xmlhttp.open("GET", tws__site_root + '/inc/data.json');
xmlhttp.send();
