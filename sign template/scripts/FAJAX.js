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
        this.timeWait = (Math.random() * 800);
    }
    send(data) {
        if (this.request == "GET") {
            setTimeout(() => network.getPackage(this, null), this.timeWait)
        }
        else if (this.request == "POST") {

            console.log("FAJAX send message to network");
            setTimeout(() => network.getPackage(this, data), this.timeWait)
        }
        else if (this.request == "DELETE") {
            setTimeout(() => network.getPackage(this, null), this.timeWait)
        }
        this.ifDone();
    }
    responseTextFromServer(data) {
        console.log("FAJAX got respond")
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
            setTimeout(() => this.ifDone(), 100);
        }
    }
}