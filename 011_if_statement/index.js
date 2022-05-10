// if statement = basic form of decision making if a condition is true, then do something
// if a condition is false, then don't do it!

let age = 21;


if (age >= 65) {
    console.log("You are a senior citizen!")
} else if (age >= 18) {
    console.log("You are an adult!");
} else if (age == 0) {
    console.log("Please enter your age.")
} else if (age < 0) {
    console.log("You haven't born yet!")
} else {
    console.log("You are an underage!")
}

let online = false;

if (online) {
    console.log("You are online!")
} else {
    console.log("You are offline!")
}
