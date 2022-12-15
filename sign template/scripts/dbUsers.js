let users = [];

function getUsers() {
    return JSON.parse(localStorage.getItem("users"));
}

function setUser(user) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    return "Username sign up successfully";
}
 function ifExist(user){
    users = JSON.parse(localStorage.getItem("users"));
    let flag = false;
    for (us of users) {
        if (user.username == us.username) {
            return "Username is already exists";
        }
    }
    //user does not exist in users(create new user)
    return setUser(user);
 }

 function removeCurrentUser(){
    localStorage.removeItem("currentUser");
 }