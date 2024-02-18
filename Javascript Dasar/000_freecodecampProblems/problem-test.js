function minimal(a, b) {
    if (a < b) {
        return a;
    }
    if (b < a) {
        return b;
    }
    return a;
}
function power(a, b) {
    let result = 1;
    if (b < 1) {
        return a * b;
    }
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
};

console.log(minimal(1, 4));
console.log(power(7, 3));