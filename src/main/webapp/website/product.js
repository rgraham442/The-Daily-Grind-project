var productShow = document.getElementById('productShow');
var nameArray = [];
var priceArray = [];
var quantityArray = [];
										
function newProduct () {
var requestURL = 'http://localhost:8080/TruerDailyGrind/thedailygrind/retrieve/product/all';
// request works by: http://[location]/[PROJECT NAME]/[JAXACTIVATOR PATH]/[METHOD PATH]
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
	var reply = request.response;
	for (var i=0; i<reply.length; i++) {
		
		var myProductA = document.createElement('div');
		myProductA.setAttribute('class','col-lg-4 col-md-6 mb-4');
		var myProductB = document.createElement('div');
		myProductB.setAttribute('class','card h-100');
		
		var myImageHolder = document.createElement('a');
		//myImageHolder.setAttribute('data-fancybox','quick-view-' + i);
		//myImageHolder.setAttribute('data-type','image');
		var myImage = document.createElement('img');
		myImage.setAttribute('class','card-img-top');
		myImage.setAttribute('src',reply[i].image);
		myImage.setAttribute('height','300px');
		myImage.setAttribute('width','400px');
		myImageHolder.appendChild(myImage);
		myProductB.appendChild(myImageHolder);
		
		var myInfoHolder = document.createElement('div');
		myInfoHolder.setAttribute('class','card-body');
		var myName = document.createElement('h4');
		myName.setAttribute('class','card-title');
		var myNameText = document.createElement('a');
		myNameText.setAttribute('id','productName'+i);
		//myNameText.setAttribute('data-fancybox','quick-view-' + i);
		//myNameText.setAttribute('data-type','image');
		myNameText.textContent = reply[i].name;
		myName.appendChild(myNameText);
		var myPrice = document.createElement('h5');
		myPrice.setAttribute('id','productPrice'+i);
		myPrice.textContent = "£" + reply[i].cost + ".00";
		var myInfo = document.createElement('p');
		myInfo.setAttribute('class','card-text');
		myInfo.textContent = reply[i].description;
		var myAdder = document.createElement('button'); 
		myAdder.setAttribute('onclick','addItem(\"'+ reply[i].name +'\",' + reply[i].cost + ')');
		myAdder.textContent = "Add to Cart";
		
		/*var myFancy = document.createElement('div'); Fancybox functionality, removes product from page
		myFancy.setAttribute('class','product-form');
		var myName2 = document.createElement('h3');
		myName2.textContent = reply[i].name;
		var myFancyClose = document.createElement('p');
		var myFancyCloseBtn = document.createElement('button');
		myFancyCloseBtn.setAttribute('class','btn');
		myFancyCloseBtn.setAttribute('data-fancybox-close');
		myFancyCloseBtn.textContent = "Add to Cart";
		myFancyClose.appendChild(myFancyCloseBtn);
		myFancy.appendChild(myName2);
		myFancy.appendChild(myInfo);
		myFancy.appendChild(myFancyClose);*/
		
		myInfoHolder.appendChild(myName);
		myInfoHolder.appendChild(myPrice);
		myInfoHolder.appendChild(myInfo);
		myProductB.appendChild(myInfoHolder);
		myProductB.appendChild(myAdder);
		myProductA.appendChild(myProductB);			
		
		productShow.appendChild(myProductA);
		}
	}
}

function filterIn(type) {
	sessionStorage.setItem( "filter", type);
	window.location.href = "filter.html";
}

function addItem(name, price) {
	let nameIn = String(name);
	nameArray.push(nameIn);
	priceArray.push(price);
	sessionStorage.setItem('itemNames', nameArray);
	var show = sessionStorage.getItem('itemNames')
	console.log(show);
	sessionStorage.setItem('itemCost', priceArray);
}