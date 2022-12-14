const templates = document.getElementsByTagName("template");
const main = document.getElementById("main");
const signTemp = templates[0];
history.replaceState({}, "home", "#login")
main.appendChild(signTemp.content.cloneNode(true));
