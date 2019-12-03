var email = document.getElementById("email");
var password = document.getElementById("password");
var retype = document.getElementById("retype");
var btn = document.getElementById("register");




btn.addEventListener("click", function(){

	var passwordValue = password.value;
	var retypeValue = retype.value;
	if (passwordValue.length < 6 ) {
		notify.innerHTML = 	"Mật khẩu phải có ít nhất 6 kí tự"; 
	}
	if (passwordValue != retypeValue)
	{
		notify.innerHTML = "Mật khẩu nhập lại không đúng";
	}
});
