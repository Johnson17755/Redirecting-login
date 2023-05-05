//  redirection when logging to an email 
function auth( ) {
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	if(email == "synero@gmail.com" && password == "admin123"){
		window.location.assign('dashboard.html');
	('login successful');
	} 
	else {
		alert('Invalid Password or Username!!');
		return;
	}
};





