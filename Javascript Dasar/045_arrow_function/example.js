// arrow function = compact alternative to a traditional function expression
//              =>

let grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x);

grades.forEach((element) => console.log(element));
