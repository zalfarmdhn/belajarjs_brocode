document.getElementById("myButton").onclick =
    function () {
        const robux = document.getElementById("myRobux");
        const vbucks = document.getElementById("myVbucks");
        const visaBtn = document.getElementById("visaBtn");
        const ovoBtn = document.getElementById("ovoBtn");
        const gopayBtn = document.getElementById("gopayBtn");

        if (robux.checked) {
            console.log("You are given 10 Million Robux");
        } else {
            console.log("Please select your prize!");
        }

        if (vbucks.checked) {
            console.log("You are given 10 Million VBucks");
        } else {
            console.log("Please select your prize!");
        }

        if (visaBtn.checked) {
            console.log("You are paying with Visa");
        } else if (ovoBtn.checked) {
            console.log("You are paying with OVO");
        } else if (gopayBtn.checked) {
            console.log("You are paying with Gopay");
        } else {
            console.log("Please select payment type!");
        }
    }