// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps :
// 1. Declaration (var, let, const)
// 2. Assignment ( = assignment operator)

let firstName = "Udin"; // strings
let age = 21; // numbers or int
let student = false; // booleans

age += 1;

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age;
document.getElementById("p3").innerHTML = "Enrolled: " + student;