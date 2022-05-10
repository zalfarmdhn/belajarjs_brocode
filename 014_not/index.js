// NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false false -> true

let temp = 13;
let sunny = false;

if (!(temp > 15)) {
    console.log("It's cold outside");
} else {
    console.log("It's warm outside");
}

if (!sunny) {
    console.log("It's cloudy outside");
} else {
    console.log("It's sunny outside")
}

// Output :
// IF Conditions 1 (temp = 13) : It's cold outside
// IF Conditions 2 (sunny = false) : It's cloudy outside