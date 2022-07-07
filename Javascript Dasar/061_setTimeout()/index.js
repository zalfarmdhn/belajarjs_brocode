// setTimeout() =  invokes a function after a number of milliseconds 
//                 asynchronous function (doesn't pause execution)

let item = "Artiscoin";
let price = 10000;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price) {
    alert(`Beli ${item} mulai dari Rp.${price} !`);
}
function secondMessage() {
    alert(`Ini bukan penipuan!`);
}
function thirdMessage() {
    alert(`LAKUKAN SEKARANG!!!`);
}

document.getElementById("myButton").onclick = function () {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`Terimakasih sudah membeli!`);
}