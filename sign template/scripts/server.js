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

function checkRequest(url, data, requestType){
    url = url.split("/");
    let response;
    let request = url[url.length-1];
    if(requestType === "GET"){
        if(request == "chairs"){
            response  = allTakenChairs();
        }
        else if(request === "chairs/myChairs"){
            response = getCurrentUserChair();
        }
    }
    if(requestType === "POST"){
        if(request == "chairs"){
            let myChairs = getCurrentUserChair();
            data = JSON.parse(data);
            data.push(...myChairs);
            setChairsUserInDB(data);
            response = "server saved your chairs";
        }
    }
    server.sendResponse(response);
}

function allTakenChairs(){
    return getAllChairs();
}