/*
Functions inside other functions.
Outer functions have access to inner functions.
Inner functions are "hidden" from outside the other function.
used in closures 
*/

let userName = "Rizu";
let userInbox = 0;

login();

function login() {
    displayUserName();
    displayUserInbox();
    function displayUserName() {
        console.log(`Welcome ${userName}`);
    }
    function displayUserInbox() {
        console.log(`You have ${userInbox} new messages`);
    }
}

