// do while loop = do something,
//                 then check the condition,
//                 repeat if condition is true

let userName;

do {
    userName = window.prompt("Enter your name");
} while (userName == "")

console.log("Hello", userName);

// Output :
// do window prompt, Enter your name (userName)
// while userName string is undefined (user didn't input anything but pressing OK), loop forever
// userName is defined, Hello (userName)