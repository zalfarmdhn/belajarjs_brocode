// array = think of it as a variable 
//         that can store multiple values

let fruits = ["apple", "orange", "banana"];


// fruits[0] = "melon"; // replace an element

fruits.push("lemon");       // add an element
fruits.pop();               // removes last element
fruits.unshift("mango");    // add element to beginning
fruits.shift();             //removes element from beginning

let length = fruits.length;
let index = fruits.indexOf("banana");


console.log(index);