// switches = statement that examines a value for a match against many case clauses. 
// More efficient that many "else if" statements

let grade = "45";

switch (true) {
    case grade >= 79:
        console.log("A - Menakjubkan!");
        break;
    case grade >= 65:
        console.log("B - Mantap!");
        break;
    case grade >= 55:
        console.log("C - Oke!");
        break;
    case grade >= 45:
        console.log("D - Kamu hampir lolos.");
        break;
    case grade < 45:
        console.log("F - Kamu gagal.");
        break;
    default:
        console.log(grade, "bukanlah nilai!");

}