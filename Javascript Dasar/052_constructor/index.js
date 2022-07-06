// constructor = a special method of a class, 
//               accepts arguments and assigns properties

class Student {

    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study() {
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Zack", 19, 3.4);
const student2 = new Student("Alex", 24, 2.3);
const student3 = new Student("Sandy", 27, 4.0);

console.log("Name : " + student1.name);
console.log("Age : " + student1.age);
console.log("GPA : " + student1.gpa);
student1.study();

console.log("Name : " + student2.name);
console.log("Age : " + student2.age);
console.log("GPA : " + student2.gpa);
student2.study();

console.log("Name : " + student3.name);
console.log("Age : " + student3.age);
console.log("GPA : " + student3.gpa);
student3.study();