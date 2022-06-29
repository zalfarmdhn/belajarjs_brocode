// Gives us the ability to check more than 1 condition concurrently
// && AND (BOTH conditions must be true
// || OR (Either contidion can be true)

let temp = 15;
let sunny = false;

if (temp > 0 && temp < 30 && sunny) {
    console.log("The weather is good!");
} else {
    console.log("The weather is bad!");
}

// Output :
// The weather is bad!

// Explanation :
// temp is greater than 0, temp is less than 30 but sunny isn't true. the code continues to else, "The weather is bad!"

// Code Backup :
// let temp = 15;
// let sunny = false;

// if (temp > 0 && temp < 30 && sunny) {
//     console.log("The weather is good!");
// } else {
//     console.log("The weather is bad!");
// }