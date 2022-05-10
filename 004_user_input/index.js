// How to accept user input

// EASY WAY with a window prompt

// let username = window.prompt("What's your name?");
// console.log(username);

// DIFFICULT WAY HTML textbox

document.getElementById("myButton").onclick = function () {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myPg").innerHTML = "Selamat datang " + username;
}