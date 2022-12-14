let signOutBtn = document.createElement("a")
signOutBtn.innerHTML = "click here to sign out";
signOutBtn.style.cursor = "pointer";
main.appendChild(signOutBtn);
signOutBtn.addEventListener("click", signOut);

function draw(array) {
    let mainDiv = document.createElement("div")
    mainDiv.id = "mainDiv";
    let chairsDiv = document.createElement("div")
    chairsDiv.id = "chairsDiv";
    chairsDiv.style.background = "url(/images/hall-screen.png)";
    chairsDiv.style.backgroundSize = "contain";
    chairsDiv.style.backgroundPosition = "center";
    chairsDiv.style.backgroundRepeat = "no-repeat";
    for (let i = 0; i < 50; i++) {
        let a = document.createElement("a")
        let img = document.createElement("img");
        img.src = "/images/chair-before.png";
        img.id = i + 1;
        img.width = 50;
        a.appendChild(img);
        chairsDiv.appendChild(a);
        img.addEventListener("click", choose);
    }
    mainDiv.appendChild(chairsDiv);
    main.appendChild(mainDiv);
}

draw([])

let chairs = []
function choose() {
    console.log(this.src)
    if (this.src === "http://127.0.0.1:5500/images/chair-before.png") {
        this.src = "/images/chair-userCheck.png"
        chairs.push(this.id);
    }
    else if (this.src === "http://127.0.0.1:5500/images/chair-userCheck.png") {
        console.log("doda")
        this.src = "/images/chair-before.png"
    }
    console.log(chairs)
}

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

