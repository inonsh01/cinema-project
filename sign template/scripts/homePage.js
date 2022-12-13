
const signOutBtn = document.getElementById("sign-out-btn");
signOutBtn.addEventListener("click", signOut);

function signOut() {
    localStorage.removeItem("currentUser");
    main.innerHTML = "";
    main.appendChild(templates[0].content.cloneNode(true));
    location.reload();
}