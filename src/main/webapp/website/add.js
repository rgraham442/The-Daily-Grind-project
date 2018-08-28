'use strict';

function trueCheck() {
var loggedIn = sessionStorage.getItem('login result');
	
	if (loggedIn = null) {
		document.write("Permission Denied")
	}
}

function addItem() {
	let name = document.getElementById('name').value;
	let type = document.getElementById('type').value;
	let cost = document.getElementById('cost').value;
	let stock = document.getElementById('stock').value;
	let desc = document.getElementById('desc').value;
	let img = document.getElementById('img').value;
	
	 var requestURL = 'http://localhost:8080/TruerDailyGrind/thedailygrind/retrieve/admin/add/' 
		 + name +'/'+ type +'/' + desc +'/'+ img +'/'+ cost +'/'+ stock;
     var request = new XMLHttpRequest();
     request.open('POST', requestURL);
     request.send();
     request.onload = function () {
         name.innerHTML = "";
         type.innerHTML = "";
         cost.innerHTML = "";
         stock.innerHTML = "";
         desc.innerHTML = "";
         img.innerHTML = "";    
         
     }
}