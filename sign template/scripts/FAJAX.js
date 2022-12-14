// const xhttp = new XMLHttpRequest();
// xhttp.onload = function () {
//     let obj = JSON.parse(xhttp.responseText);
// }
// xhttp.open("GET", peopleLink);
// xhttp.send();
const network = new Network();

class FXMLHttpRequest {
    constructor() {
        // this.onload;
        // this.responseText;
        // this.open;
        // this.send;
    }
    open(request, url) {
        this.request = request;
        this.url = url;
    }
    send(data) {
        if (this.request == "GET") {
            network.getPackage(this, null);
        }
        else if (this.request == "POST") {
            network.getPackage(this, data);
        }
        else if (this.request == "DELETE") {
            network.getPackage(this, null);
        }
    }
    responseTextFromServer(data){
        this.data = data;
    }
    responseText(){
        return this.data;
    }
}
