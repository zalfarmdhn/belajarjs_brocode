// array.filter()  = creates a new array with all elements
//                   that pass the test provided by a function

let ages = [18, 16, 21, 17, 19, 20];
let adults = ages.filter(checkAge);

adults.forEach(print);


function checkAge(element) {
    if (element >= 18) {
        console.log(element + " - Adult");
    } else {
        console.log(element + " - Not Adult");
    }
}

function print(element) {
    console.log(element);
}