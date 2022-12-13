const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
    let obj = JSON.parse(xhttp.responseText);
}
xhttp.open("GET", peopleLink);
xhttp.send();

class FXMLHttpRequest{
    constructor(request, url){
        this.request = request;
        this.url = url;
        // this.onload;
        // this.responseText;
        // this.open;
        // this.send;
    }

    send(){
        
    }
}



class network{
    constructor(){

    }
}
