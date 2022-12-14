class Network {
    constructor() {

    }
    getPackage(from, data) {
        this.from = from;
        this.sendTo = this.from.url.split("/")[1];
        if(data){
            this.data = data;
        }
        console.log("network got message");
        this.sendPackage();
    }
    sendPackage() {
        if(this.sendTo == "server"){
            this.client = this.from.sentFrom;
            console.log("network sent message to server");
            server.getData(this.from, this.data);
        }
        else if(this.sendTo == "client"){
            console.log("network sent res to fajax");
            this.client.responseTextFromServer(this.data);
        }
    }
}