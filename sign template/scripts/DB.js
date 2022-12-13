function setChairsUserInDB(arr) {
    let usersArr = [];
    let flag = false;
    let currentUser = JSON.parse(localStorage.getItem("currentUser")).username;
    const obj = {
        name: currentUser,
        chairs: arr.join()
    }
    if (localStorage.getItem("usersChair")) {
        usersArr = JSON.parse(localStorage.getItem("usersChair"));
        flag = checkIfExist(usersArr,currentUser,arr);
    }
    if(!flag){
        usersArr.push(obj);
    }
    localStorage.setItem("usersChair",JSON.stringify(usersArr));
}


function checkIfExist(usersArr,name,arr) {
    for (i of usersArr) {
        if (i.name == name) {
            i.chairs = arr.join();
            return true;
        }
    }
    return false;
}


function getCurrentUserChair(){
    let users = JSON.parse(localStorage.getItem("usersChair"));
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    for(let user of users){
        if(user.name == currentUser.username){
            return user.chairs.split(",");
        }
    }
}


function getAllChairs(){
    let users = JSON.parse(localStorage.getItem("usersChair"));
    let arr = [];
    for(let user of users){
        for(chair of user.chairs.split(",")){
            arr.push(chair);
        }
    }
    return arr;
}