// const xhttp = new XMLHttpRequest();
// xhttp.onload = function () {
//     let obj = JSON.parse(xhttp.responseText);
// }
// xhttp.open("GET", peopleLink);
// xhttp.send();
const network = new Network();

class FXMLHttpRequest {
    constructor() {

    }
    open(request, url) {
        console.log("FAJAX get message");
        this.done = false;
        this.request = request;
        this.url = url;
        this.sentFrom = this;
    }
    send(data) {
        if (this.request == "GET") {
            setTimeout(() => network.getPackage(this, null), 1000)
        }
        else if (this.request == "POST") {

            console.log("FAJAX send message to network");
            setTimeout(() => network.getPackage(this, data), 1000)
        }
        else if (this.request == "DELETE") {
            setTimeout(() => network.getPackage(this, null), 1000)
        }
        this.ifDone();
    }
    responseTextFromServer(data) {
        console.log("FAJAX got res")
        this.responseText = data;
        this.done = true;
    }
    ifDone() {
        if (this.done) {
            if (this.onload) {
                this.onload();
            }
        }
        else {
            console.log("wait...");
            setTimeout(() => this.ifDone(), 500);
        }
    }
}
