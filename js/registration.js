document.getElementById('button').addEventListener("click", validate);

function validate() {
    let inputFname = document.getElementById('fname').value;
	let inputLname = document.getElementById('lname').value;
	let inputEmail = document.getElementById('email').value;
	let inputPassword = document.getElementById('password').value;
	let repeatPassword = document.getElementById('repeatpsw').value;

	let fnameRGEX = /\b[a-zA-Z]{6,20}\b/;
	let lnameRGEX = /\b[a-zA-Z]{6,20}\b/;
	let emailRGEX = /\w+@\w+\.\w+/;
	let passwordRGEX = /[a-zA-Z0-9()!@_?%><$^&#*+]{6,12}/;

    let fnameResult = fnameRGEX.test(inputFname);
    let lnameResult = lnameRGEX.test(inputLname);
    let emailResult = emailRGEX.test(inputEmail);
    let passwordResult = passwordRGEX.test(inputPassword);

    if (fnameResult === false) {
    	alert("First name must be from 6 to 20 characters and contain only English letters");
    }

    if (lnameResult === false) {
    	alert("Last name must be from 6 to 20 characters and contain only English letters");
    }

    if (emailResult === false)	 {
    	alert("E-mail must begin with letters, contain @ than letters, '.' and letters");
    }

    if (passwordResult === false) {
    	alert("Password must be from 6 to 12 characters and can contain any symbols");
    }

    if (repeatPassword !== inputPassword) {
    	alert("Fields 'Password' and 'Repeat password' must have the same values");
    }
     
    sendUserDataToServer(); 

    return true;
}

function sendUserDataToServer() {
	let inputFname = document.getElementById('fname').value;
	let inputLname = document.getElementById('lname').value;
	let inputEmail = document.getElementById('email').value;
	let inputPassword = document.getElementById('password').value;
	let repeatPassword = document.getElementById('repeatpsw').value;

	const request = new XMLHttpRequest();

	const url = "https://habitat.help";

	const data = "firstName=" + inputFname
	 + "&" + "lastName=" + inputLname 
	 + "&" + "email=" + inputEmail 
	 + "&" + "password=" + inputPassword;

	request.open("POST", url, true);

	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	request.addEventListener("readystatechange", sendRequest);

	function sendRequest() {
		if (request.readyState === 4 && request.status === 200) {
			console.log(request.responseText);
		}
	}

	request.send(JSON.stringify(data));
}
