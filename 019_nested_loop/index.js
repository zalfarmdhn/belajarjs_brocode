// nested loop = a loop inside of another loop

// for (let i = 1; i <= 3; i += 1) {
//     for (let j = 1; j <= 3; j += 1) {
//         console.log(j);
//     }
// }

// Output :
// 1
// 2
// 3
// 1
// 2
// 3
// 1
// 2
// 3


// Membuat kotak

// let symbol = window.prompt("Enter a symbol to use");
// let rows = window.prompt('Enter # of rows');
// let columns = window.prompt('Enter # of columns');

// for (let i = 1; i <= rows; i += 1) {
//     for (let j = 1; j <= columns; j += 1) {
//         document.getElementById("myRectangle").innerHTML += symbol;
//     }
//     document.getElementById("myRectangle").innerHTML += "<br>";
// }

// Membuat segitiga

let simbol = window.prompt("Masukkan simbol");
let tinggi = window.prompt("Masukkan tinggi");

for (let i = 1; i <= tinggi; i += 1) {
    for (let j = 1; j <= i; j += 1) {
        document.getElementById("myTriangle").innerHTML += simbol;
    }
    document.getElementById("myTriangle").innerHTML += "<br>";
}