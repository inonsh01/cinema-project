
const logInSubmit = document.getElementById("submit-login-btn");
logInSubmit.addEventListener('click', logInCheck);

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function logInCheck(event) {
  event.preventDefault();
  let obj = {
    username: loginForm["user-id"].value,
    password: loginForm["password"].value,
    type: "login"
  }
  let fxhttp = new FXMLHttpRequest()
  fxhttp.open("POST", "/server/users")
  fxhttp.onload = function () {
    if(JSON.parse(fxhttp.responseText)){
      const h1 = document.getElementById("h1");
      h1.innerHTML = `Hey ${obj.username} Welcome to Cine(hil)ma`
      welcomePage(obj.username, obj.password);
    }
    else{
      alert("your user name or password are invalid");
      location.reload();
    }
  }
  fxhttp.send(JSON.stringify(obj));

}

function welcomePage(username, password) {
  let currentUser = { username: username, password: password, highScore: null };
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  main.innerHTML = "";
  location.hash = "#home-page";
  main.appendChild(templates[1].content.cloneNode(true));
  // main.appendChild(templates[2].content.cloneNode(true));
}