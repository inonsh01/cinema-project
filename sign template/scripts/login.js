
const logInSubmit = document.getElementById("submit-login-btn");
logInSubmit.addEventListener('click', logInCheck);

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function logInCheck(event) {
  let flag = 0;
  let username = loginForm["user-id"].value;
  let password = loginForm["password"].value;
  const usersSignIn = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < usersSignIn.length; i++) {
    if (username == usersSignIn[i].username) {
      if (password === usersSignIn[i].password) {
        welcomePage(username, password);
        flag = 1;
      }
    }
  }
  if (flag == 0) {
    // response.innerHTML = "your user name or password are invalid";
    alert("your user name or password are invalid");
    //location.reload();
  }
  event.preventDefault();
}

function welcomePage(username, password) {
  let currentUser = { username: username, password: password, highScore: null };
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  //location.replace("../pages/main.html");
}

