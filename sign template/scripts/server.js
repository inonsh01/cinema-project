class Server{
    constructor(){
    }
    getData(request, data){
        this.data = data;
        this.request = request;
        console.log(this.request, "  server:", data);
        this.sendResponse();
    }
    sendResponse(){
        this.url = "/client";
        network.getPackage(this, "hello you get to me");
    }
}
const server = new Server();