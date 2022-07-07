// The Date Object is used to work with dates & times

let date = new Date();
// let date = new Date(0);
// let date = new Date(2023, 0, 1, 2, 3, 4, 5);
// let date = new Date("January 1, 2023 00:00:00");

/*
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayOfWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();
*/

/*
date.setFullYear(2024);
date.setMonth(11);
date.setDate(32);
date.setHours(12);
date.setMinutes(5);
date.setSeconds(5);
*/

// date = date.toLocaleString();


document.getElementById("myLabel").innerHTML = formatTime(date);

function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${day}/${month}/${year}`;
}
function formatTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let clockTimes = hours >= 12 ? "PM" : "AM"

    hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds} ${clockTimes}`;
}