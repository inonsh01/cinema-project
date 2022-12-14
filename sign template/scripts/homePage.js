


































































const signOutBtn = document.getElementById("sign-out-btn");
signOutBtn.addEventListener("click", signOut);
const fxhttp = new FXMLHttpRequest();
fxhttp.open("POST", "/server");
fxhttp.send("you fucking shit");
console.log(fxhttp.responseText());


function signOut() {
    localStorage.removeItem("currentUser");
    main.innerHTML = "";
    main.appendChild(templates[0].content.cloneNode(true));
    location.reload();
}