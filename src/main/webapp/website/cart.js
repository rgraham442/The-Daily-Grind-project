var nameArray = sessionStorage.getItem("itemNames");
var priceArray = Number(sessionStorage.getItem('itemCost'));

var cartTable = document.getElementById('cartTable');

function showCart() {
	let total = 0;
	
	for (var i = 0;i<nameArray.length;i++) {
		var holder = document.createElement('tr');
		var myName = document.createElement('td');
		myName.textContent = nameArray;
		myName.style.width = '200px';
		var myPrice = document.createElement('td');
		myPrice.textContent = priceArray;
		myPrice.style.width = '200px';
		var myDeleteHolder = document.createElement('td');
		var myDelete = document.createElement('button');
		myDelete.setAttribute('onclick','deleteThis('+i+')');
		myDelete.textContent = "Delete";
		myDeleteHolder.appendChild(myDelete);
		
		holder.appendChild(myName);
		holder.appendChild(myPrice);
		holder.appendChild(myDeleteHolder);
		
		cartTable.appendChild(holder);
		total += priceArray;
	}
	var totalRowHolder = document.createElement('tr');
	var totalRowSpacer = document.createElement('td');
	var totalRow = document.createElement('td');
	totalRow.textContent = "£" + total + ".00";
	totalRowHolder.appendChild(totalRowSpacer);
	totalRowHolder.appendChild(totalRow);
	
	cartTable.appendChild(totalRowHolder);
	
}

function deleteThis(product) {
	console.log(product);
	nameArray.splice(nameArray.indexOf(product),1);
	priceArray.splice(priceArray.indexOf(product),1);
	showCart();
}