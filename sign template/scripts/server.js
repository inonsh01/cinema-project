//if This page is reloaded
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    removeCurrentUser();
    console.info("This page is reloaded");
}

class Server {
    constructor() {
    }
    getData(from, data) {
        this.data = data;
        this.from = from;
        this.request = this.from.request;
        console.log(this.request, "  server:", data);
        checkRequest(this.from.url, this.data, this.request);
    }
    sendResponse(data) {
        this.from.url = "/client";
        this.from.sentFrom = this;
        console.log("server sent res to network");
        network.getPackage(this.from, JSON.stringify(data));
    }
}
const server = new Server();

function checkRequest(url, data, requestType) {
    url = url.split("/");
    data = JSON.parse(data);
    let response;
    let request = url[url.length - 1];
    if (requestType === "GET") {
        if (request == "chairs") {
            let allChairs = allTakenChairs();
            let myChairs = getCurrentUserChair();
            let obj = {
                allChairs: allChairs,
                myChairs: myChairs
            }
            response = obj;
        }
    }
    else if (requestType === "DELETE") {
        if (request == "users") {
            removeCurrentUser();
            response = "current user deleted";
        }
    }
    else if (requestType === "POST") {
        if (request == "chairs") {
            let myChairs = getCurrentUserChair();
            if (myChairs) {
                data.push(...myChairs);
            }
            setChairsUserInDB(data);
            myChairs = getCurrentUserChair();
            let allChairs = allTakenChairs();
            let obj = {
                allChairs: allChairs,
                myChairs: myChairs
            }
            response = obj;
        }
        else if (request == "users") {
            if (data.type == "signUp") {
                if (!getUsers()) {
                    response = setUser(data);
                }
                else {
                    response = ifExist(data);
                }
            }
            else if (data.type == "login") {
                let users = getUsers();
                for (let us of users) {
                    if (data.username == us.username) {
                        if (data.password == us.password) {
                            response = true;
                        }
                    }
                }
            }
        }

    }
    console.log(response);
    server.sendResponse(response);
}

function allTakenChairs() {
    return getAllChairs();
}