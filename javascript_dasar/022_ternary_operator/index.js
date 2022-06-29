// ternary operator = Shortcut for an 'if/else statement'
//                    Takes 3 operands

//                    1. a condition with ?
//                    2. expression if True :
//                    3. expression if False

// condition ? exprIfTrue : exprIfFalse 
// for short, its a shortcut

let adult = checkAge(21);
console.log(adult);

function checkAge(age) {
    return age >= 18 ? true : false;
}

// Output :
// true


checkWinner(false);

function checkWinner(win) {
    win ? console.log("You Win!") : console.log("You Lose");
}

// Output :
// You Lose