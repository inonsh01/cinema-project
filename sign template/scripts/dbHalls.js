const amountOfHalls = 10;
const chairsAmountArr = [50, 60, 65, 55, 30, 68, 70, 35, 40, 45];
let arr = [];
for (let i = 0; i < amountOfHalls; i++) {
    let obj = {
        id: i + 1,
        chairs: chairsAmountArr[i]
    }
    arr.push(obj);
}
localStorage.setItem("Halls",JSON.stringify(arr));