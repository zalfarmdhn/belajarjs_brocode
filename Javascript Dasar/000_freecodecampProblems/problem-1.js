function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    item = arr[0];
    arr.shift();
    return item;

    // Other code (more perfect)
    // arr.push(item);
    // const removed = arr.shift;
    //return removed;
    // Only change code above this line
}

// Setup
const testArr = [12, 13, 14, 15];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 16));
console.log("After: " + JSON.stringify(testArr));