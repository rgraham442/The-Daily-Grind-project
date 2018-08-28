function check() {
	var loggedIn = sessionStorage.getItem('login result');
	
	if (loggedIn != null) {
		var myAdminLi = document.createElement('li');
		myAdminLi.setAttribute('class','nav-item');
		var myAdmin = document.createElement('a');
		myAdmin.setAttribute('class','nav-link');
		myAdmin.setAttribute('href','admin.html');
		myAdmin.textContent = "Admin";
		document.getElementById("loginLink").setAttribute('onclick','logout()');
		document.getElementById("loginLink").textContent = "Log Out";
		document.getElementById("loginLink").removeAttribute('href')
		
		myAdminLi.appendChild(myAdmin);
		document.getElementById('navHold').appendChild(myAdminLi);
	}
}

function logout() {
	sessionStorage.removeItem('login result');
	window.location.href = "login.html";
	}