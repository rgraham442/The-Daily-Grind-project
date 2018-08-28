function filter() {
	var type = sessionStorage.getItem("filter");
	console.log(type);
	if (type === "all") {
		filterAll();
	}
	else if (type == "coffee") {
		filterCoffee();
	}
	else if (type === "tea") {
		filterTea();
	}
	else if (type == "equipment") {
		filterEquipment();
	}
	
}

function filterAll () {
	let requestURL = 'http://localhost:8080/TruerDailyGrind/thedailygrind/retrieve/product/all';
	let request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function () {
		let reply = request.response;
		for (var i=0; i<reply.length; i++) {
			
			var myProductA = document.createElement('div');
			myProductA.setAttribute('class','col-lg-4 col-md-6 mb-4');
			var myProductB = document.createElement('div');
			myProductB.setAttribute('class','card h-100');
			
			var myImageHolder = document.createElement('a');
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
			myNameText.textContent = reply[i].name;
			myName.appendChild(myNameText);
			var myPrice = document.createElement('h5');
			myPrice.textContent = "£" + reply[i].cost + ".00";
			var myInfo = document.createElement('p');
			myInfo.setAttribute('class','card-text');
			myInfo.textContent = reply[i].description;
			var myAdder = document.createElement('button'); 
			myAdder.setAttribute('onclick','addItem()');
			
			myInfoHolder.appendChild(myName);
			myInfoHolder.appendChild(myPrice);
			myInfoHolder.appendChild(myInfo);
			myProductB.appendChild(myInfoHolder);
			myProductA.appendChild(myProductB);			
			
			productShow.appendChild(myProductA);
			}
		}
}
function filterCoffee() {
	let requestURL = 'http://localhost:8080/TruerDailyGrind/thedailygrind/retrieve/product/coffee';
	let request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function () {
		let reply = request.response;
		for (var i=0; i<reply.length; i++) {
			
			var myProductA = document.createElement('div');
			myProductA.setAttribute('class','col-lg-4 col-md-6 mb-4');
			var myProductB = document.createElement('div');
			myProductB.setAttribute('class','card h-100');
			
			var myImageHolder = document.createElement('a');
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
			myNameText.textContent = reply[i].name;
			myName.appendChild(myNameText);
			var myPrice = document.createElement('h5');
			myPrice.textContent = "£" + reply[i].cost + ".00";
			var myInfo = document.createElement('p');
			myInfo.setAttribute('class','card-text');
			myInfo.textContent = reply[i].description;
			var myAdder = document.createElement('button'); 
			myAdder.setAttribute('onclick','addItem()');
			
			myInfoHolder.appendChild(myName);
			myInfoHolder.appendChild(myPrice);
			myInfoHolder.appendChild(myInfo);
			myProductB.appendChild(myInfoHolder);
			myProductA.appendChild(myProductB);			
			
			productShow.appendChild(myProductA);
			}
		}
}
function filterTea() {
	let requestURL = 'http://localhost:8080/TruerDailyGrind/thedailygrind/retrieve/product/tea';
	let request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function () {
		let reply = request.response;
		for (var i=0; i<reply.length; i++) {
			
			var myProductA = document.createElement('div');
			myProductA.setAttribute('class','col-lg-4 col-md-6 mb-4');
			var myProductB = document.createElement('div');
			myProductB.setAttribute('class','card h-100');
			
			var myImageHolder = document.createElement('a');
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
			myNameText.textContent = reply[i].name;
			myName.appendChild(myNameText);
			var myPrice = document.createElement('h5');
			myPrice.textContent = "£" + reply[i].cost + ".00";
			var myInfo = document.createElement('p');
			myInfo.setAttribute('class','card-text');
			myInfo.textContent = reply[i].description;
			var myAdder = document.createElement('button'); 
			myAdder.setAttribute('onclick','addItem()');
			
			myInfoHolder.appendChild(myName);
			myInfoHolder.appendChild(myPrice);
			myInfoHolder.appendChild(myInfo);
			myProductB.appendChild(myInfoHolder);
			myProductA.appendChild(myProductB);			
			
			productShow.appendChild(myProductA);
			}
		}
}
function filterEquipment() {
	let requestURL = 'http://localhost:8080/TruerDailyGrind/thedailygrind/retrieve/product/equipment';
	let request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function () {
		let reply = request.response;
		for (var i=0; i<reply.length; i++) {
			
			var myProductA = document.createElement('div');
			myProductA.setAttribute('class','col-lg-4 col-md-6 mb-4');
			var myProductB = document.createElement('div');
			myProductB.setAttribute('class','card h-100');
			
			var myImageHolder = document.createElement('a');
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
			myNameText.textContent = reply[i].name;
			myName.appendChild(myNameText);
			var myPrice = document.createElement('h5');
			myPrice.textContent = "£" + reply[i].cost + ".00";
			var myInfo = document.createElement('p');
			myInfo.setAttribute('class','card-text');
			myInfo.textContent = reply[i].description;
			var myAdder = document.createElement('button'); 
			myAdder.setAttribute('onclick','addItem()');
			
			myInfoHolder.appendChild(myName);
			myInfoHolder.appendChild(myPrice);
			myInfoHolder.appendChild(myInfo);
			myProductB.appendChild(myInfoHolder);
			myProductA.appendChild(myProductB);			
			
			productShow.appendChild(myProductA);
			}
		}
}