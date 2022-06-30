let fruits = ["pisang", "apel", "jeruk", "mangga"];

fruits = fruits.sort(); // sort array alphabetically

for (i = 0; i < fruits.length; i += 1) {
    console.log(fruits[i]);
}

// Output :
// apel
// jeruk
// mangga
// pisang

console.log(" ");

fruits = fruits.sort().reverse(); // sort array alphabetically, backwards

for (let fruit of fruits) {
    console.log(fruit);
}

// Output :
// pisang
// mangga
// jeruk
// apel
