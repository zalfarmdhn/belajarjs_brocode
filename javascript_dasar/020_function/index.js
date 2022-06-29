// function = Define code once, and use it many times.
//            To perform some code, call the function name.

// repeat code more than once

startProgram();

function startProgram() {
    let userName = "Mizu";
    let age = 21;

    happyBirthday(userName, age);
}

function happyBirthday(a, b) {
    console.log("Happy birthday to you");
    console.log("Happy birthday to you");
    console.log("Happy birthday dear", a);
    console.log("Happy birthday to you");
    console.log("You are", b, "years old!");
}