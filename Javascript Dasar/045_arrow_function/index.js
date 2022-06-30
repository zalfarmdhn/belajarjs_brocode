// arrow function = compact alternative to a traditional function expression
//              =>

const greeting = (userName) => console.log(`hello ${userName}`)
// NOTE : you do need curly braces {} if your function uses more than 1 statement

greeting("Jal");

const percent = (x, y) => x / y * 100;


console.log(`${percent(45, 50)}%`)