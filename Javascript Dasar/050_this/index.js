// this = reference to a particular object
//        the object depends on the immediate context.

const car1 = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive: function () {
        console.log(`You drive the ${this.model}`);
    },

    brake: function () {
        console.log(`You drive the ${this.model}`);
    }
}

const car2 = {
    model: "Corvette",
    color: "blue",
    year: 2024,

    drive: function () {
        console.log("You drive the car");
    },

    brake: function () {
        console.log("You step on the brakes");
    }
}


car1.drive();
car2.drive();