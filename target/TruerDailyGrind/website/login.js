function login(){
	sessionStorage.setItem('username1', document.getElementById('username').value);
	sessionStorage.setItem('password1', document.getElementById('password').value);
	
	var username = sessionStorage.getItem('username1');
    var password = sessionStorage.getItem('password1');
	console.log(username);
	console.log(password);
	 var requestURL = 'http://localhost:8080/TruerDailyGrind/thedailygrind/retrieve/admin/login/' + username;
     var request = new XMLHttpRequest();
     request.open('GET', requestURL);
     request.responseType = 'json';
     request.send();
     request.onload = function () {
         var reply = request.response;
            
         if (reply == null) {
         	sessionStorage.setItem('login result', "failed username");
         }
         
         else if (reply.password != password && reply !=null) {
         	sessionStorage.setItem('login result', "failed pass");
         }
         
         else if (reply.password == password && reply !=null) {
         	sessionStorage.setItem('username1', reply.username);
         	sessionStorage.setItem('login result', "success");
         	window.location.href = "index.html"
         }
         
        
      
         
     }
     
}