'use strict';
var section = document.querySelector("section");
var amount = 0;

function reveal() {
	var requestURL = 'http://localhost:8080/TruerDailyGrind/thedailygrind/retrieve/product/all';
	// request works by: http://[location]/[PROJECT NAME]/[JAXACTIVATOR PATH]/[METHOD PATH]
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function () {
		var reply = request.response;
		for (var i = 0; i < reply.length; i++) {
			var grab = {
				    item: reply[i].name,
				    price: reply[i].cost,
				    qty: reply[i].stock
			};
			var jsonStr = JSON.stringify( grab );
			
			var myArticle = document.createElement('article');
			var myH1 = document.createElement('h1');
			myH1.textContent = reply[i].name;
			var myLogistics = document.createElement('p');
			myLogistics.textContent = "Price: £" + reply[i].cost + ".00 | Remaining: " + reply[i].stock;
			var myDescription = document.createElement('p');
			myDescription.textContent = reply[i].description;
			var myImage = document.createElement('img');
			myImage.setAttribute('src', reply[i].image);
			var myAdd = document.createElement('input');
			myAdd.setAttribute('type', 'button');
			myAdd.setAttribute('value', 'Add to Cart');
			myAdd.setAttribute('onclick', 'addProduct(' + jsonStr + ')');
			
			myArticle.appendChild(myH1);
			myArticle.appendChild(myLogistics);
			myArticle.appendChild(myAdd);
			myArticle.appendChild(myDescription);
			myArticle.appendChild(myImage);
			
			
			section.appendChild(myArticle);
		}
	}
}
function addProduct(productInfo) {
	amount++
	sessionStorage.setItem( "name", productInfo.item);
	sessionStorage.setItem( "cost", productInfo.price);
	sessionStorage.setItem( "stock", amount);
	var name = sessionStorage.getItem("name");
	var cost = parseInt( sessionStorage.getItem( "cost" ));
	var quantity = parseInt( sessionStorage.getItem( "stock" ));
	var total = ( cost * quantity );
	
	console.log(name + "<br>Price: £" + cost + " | Quantity: " + quantity + "<br>Total: £" + total);
}