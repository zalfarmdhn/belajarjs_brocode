let prices = [2, 5, 10, 15, 20];

for (i = 0; i < prices.length; i += 1) {
    console.log(prices[i]);
}
// standard loop
console.log(" ");

for (let price of prices) {
    console.log(price);
}
// array loop
console.log(" ");

for (let j = prices.length - 1; j >= 0; j -= 1) {
    console.log(prices[j]);
}
// backwards loop