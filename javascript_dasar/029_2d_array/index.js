// 2D array = An array of arrays

let fruits = ["apel", "jeruk", "pisang"];
let vegetables = ["wortel", "bawang", "kentang"];
let meats = ["telur", "ayam", "sapi"];

let groceryList = [fruits, vegetables, meats];

groceryList[2][2] = "steak";



for (let list of groceryList) {
    for (let food of list) {
        console.log(food);
    }
}