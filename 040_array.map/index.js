//  array.map() =  executes a provided callback function
//                 once for each array element
//                 AND creates a new array

let numbers = [1, 2, 3, 4, 5];
let pangkatNum = numbers.map(pangkat);
let cubes = numbers.map(cube);

cubes.forEach(print);

function pangkat(element) {
    return Math.pow(element, 2);
}

function cube(element) {
    return Math.pow(element, 3);
}

function print(element) {
    console.log(element);
}