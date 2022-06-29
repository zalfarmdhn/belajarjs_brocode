// while loop = repeat some code
//              while some condition is true
//              potentially infinite

let userName = "";

while (userName == "" || userName == null) {
    userName = window.prompt("Enter your name");
} // you can't escape or cancel the window prompt, because it's stuck in while loop

console.log("Hello", userName);

// Output :
// while userName is undefined or null (OK without a string or canceled) == user didn't input anything, loop forever
// if userName is defined, show Hello (userName)
