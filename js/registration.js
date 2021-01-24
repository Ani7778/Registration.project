document.getElementById('button').addEventListener("click", validate);

function validate() {
	var inputFname = document.getElementById('fname').value;
	var inputLname = document.getElementById('lname').value;
	var inputEmail = document.getElementById('email').value;
	var inputPassword = document.getElementById('password').value;
	var repeatPassword = document.getElementById('repeatpsw').value;

	var fnameRGEX = /\b[a-zA-Z]{6,20}\b/;
	var lnameRGEX = /\b[a-zA-Z]{6,20}\b/;
	var emailRGEX = /\w+@\w+\.\w+/;
	var passwordRGEX = /[a-zA-Z0-9()!@_?%><$^&#*+]{6,12}/;

    var fnameResult = fnameRGEX.test(inputFname);
    var lnameResult = lnameRGEX.test(inputLname);
    var emailResult = emailRGEX.test(inputEmail);
    var passwordResult = passwordRGEX.test(inputPassword);

    if (fnameResult == false) {
    	alert("First name must be from 6 to 20 characters and contain only English letters");
    }

    if (lnameResult == false) {
    	alert("Last name must be from 6 to 20 characters and contain only English letters");
    }

    if (emailResult == false)	 {
    	alert("E-mail must begin with letters, contain @ than letters, '.' and letters");
    }

    if (passwordResult == false) {
    	alert("Password must be from 6 to 12 characters and can contain any symbols");
    }

    if (repeatPassword !== passwordResult) {
    	alert("Fields 'Password' and 'Repeat password' must have the same values");
    }

    return true;
}


