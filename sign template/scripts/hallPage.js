let chairs = []

let fxhttp = new FXMLHttpRequest()
fxhttp.open("GET", "/server/chairs")
fxhttp.onload = function () {
    let allChairs = JSON.parse(fxhttp.responseText).allChairs;
    let myChairs = JSON.parse(fxhttp.responseText).myChairs;
    draw(allChairs, myChairs);
}
fxhttp.send();


function choose() {
    if (this.src === "http://127.0.0.1:5500/images/chair-before.png") {
        this.src = "/images/chair-userCheck.png"
        chairs.push(this.id);
        
    }
    else if (this.src === "http://127.0.0.1:5500/images/chair-userCheck.png") {
        console.log("doda")
        this.src = "/images/chair-before.png";
        chairs.splice(chairs.indexOf(this.id), 1);
    }
}

function draw(allChairs, myChairs) {
    main.innerHTML = "";
    appendSignOut();
    let mainDiv = document.createElement("div");
    mainDiv.id = "mainDiv";
    let chairsDiv = document.createElement("div");
    chairsDiv.id = "chairsDiv";
    chairsDiv.style.background = "url(/images/hall-screen.png)";
    chairsDiv.style.backgroundSize = "contain";
    chairsDiv.style.backgroundPosition = "center";
    chairsDiv.style.backgroundRepeat = "no-repeat";
    for (let i = 0; i < 50; i++) {
        let a = document.createElement("a");
        let img = document.createElement("img");
        img.src = "/images/chair-before.png";
        img.id = i + 1;
        img.addEventListener("click", choose);
        a.appendChild(img);
        chairsDiv.appendChild(a);
        for (let j in allChairs) {
            if (img.id === allChairs[j]) {
                img.src = "/images/chair-after.png"
                img.removeEventListener("click", choose);
            }
        }
        for (let k in myChairs) {
            if (img.id === myChairs[k]) {
                img.src = "/images/chair-owner.png";
            }
        }
    }
    mainDiv.appendChild(chairsDiv);
    main.appendChild(mainDiv);
    let sendButton = document.createElement("button");
    sendButton.innerHTML = "send";
    sendButton.addEventListener("click", sendMyChairs);
    mainDiv.appendChild(sendButton);
}

function signOut() {
    let fxhttp = new FXMLHttpRequest();
    fxhttp.open("DELETE", "/server/users");
    fxhttp.onload = function () {
        main.innerHTML = "";
        main.appendChild(templates[0].content.cloneNode(true));
        location.reload();
    }
    fxhttp.send();
}


function appendSignOut() {
    let signOutBtn = document.createElement("a")
    signOutBtn.innerHTML = "click here to sign out";
    signOutBtn.id = "sign-out-btn";
    signOutBtn.style.cursor = "pointer";
    main.appendChild(signOutBtn);
    signOutBtn.addEventListener("click", signOut);
}

function sendMyChairs() {
    if (!(chairs.length === 0)) {
        let fxhttp = new FXMLHttpRequest()
        fxhttp.open("POST", "/server/chairs");
        fxhttp.onload = function () {
            let allChairs = JSON.parse(fxhttp.responseText).allChairs;
            let myChairs = JSON.parse(fxhttp.responseText).myChairs;
            draw(allChairs, myChairs);
        }
        fxhttp.send(JSON.stringify(chairs));
        chairs = [];
        fxhttp.onload = function () {
            let allChairs = JSON.parse(fxhttp.responseText).allChairs;
            let myChairs = JSON.parse(fxhttp.responseText).myChairs;
            draw(allChairs, myChairs);
        }
    }
}