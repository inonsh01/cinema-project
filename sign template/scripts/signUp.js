const toggleDiv = document.getElementById("toggle-div");
const loginToggleBtn = document.getElementById("toggle-login");
const signupToggleBtn = document.getElementById("toggle-signup");
const submitSignupBtn = document.getElementById("submit-signup-btn");
const response1 = document.getElementById("response");

const loginForm = document.forms["login-form"];
const signupForm = document.forms["signup-form"];

loginToggleBtn.addEventListener("click", login);
signupToggleBtn.addEventListener("click", signup);
signupForm.addEventListener("submit", registerUser);

function registerUser(event) {
  event.preventDefault();

  const username = signupForm["username"];
  const password = signupForm["password"];
  const email = signupForm["email"];

  const user = {
    username: username.value,
    password: password.value,
    email: email.value,
    type: "signUp"
  };
  
  let fxhttp = new FXMLHttpRequest()
  fxhttp.open("POST", "/server/users")
  fxhttp.onload = function () {
    response1.textContent = JSON.parse(fxhttp.responseText);
  }
  fxhttp.send(JSON.stringify(user));

}

function signup() {
  loginForm.style.left = "-400px";
  signupForm.style.left = "50px";
  toggleDiv.style.left = "110px";
}

function login() {
  loginForm.style.left = "50px";
  signupForm.style.left = "450px";
  toggleDiv.style.left = "0px";
}
