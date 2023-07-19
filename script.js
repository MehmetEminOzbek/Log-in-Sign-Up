let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let clickButton = document.getElementById("clickbutton");

clickButton.addEventListener("click", function (e) {
  const usernamevalue = usernameInput.value;
  const passwordvalue = passwordInput.value;
  console.log("Username : ", usernamevalue, " Password : ", passwordvalue);
  usernameInput.value = "";
  passwordInput.value = "";
  console.log("Başarıyla Giriş Yapıldı");
});
