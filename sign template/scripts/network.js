class Network {
    constructor() {

    }
    getPackage(from, data) {
        this.from = from;
        this.url = this.from.url;
        this.request = this.from.request;
        if(this.url == "/server"){
            this.client = this.from;
        }
        if(data){
            this.data = data;
        }
        this.sendPackage();
    }
    sendPackage() {
        if(this.url == "/server"){
            server.getData(this.request, this.data);
        }
        else if(this.url == "/client"){
            this.client.responseTextFromServer(this.data);
        }
    }
}