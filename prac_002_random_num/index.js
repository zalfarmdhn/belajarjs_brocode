let x;
let y;
let z;

document.getElementById("rollButton").onclick =
    function () {
        x = Math.floor(Math.random() * 6) + 1;
        y = Math.floor(Math.random() * 6) + 1;
        z = Math.floor(Math.random() * 6) + 1;

        document.getElementById("xlabel").innerHTML = x;
        document.getElementById("ylabel").innerHTML = y;
        document.getElementById("zlabel").innerHTML = z;

        switch (x) {
            case x == 1:
                document.getElementById("xlabel").innerHTML = "Silver";
                break;
            case x == 2:
                document.getElementById("xlabel") = "Gold Nova";
                break;
            case x == 3:
                document.getElementById("xlabel") = "Master Guardian";
                break;
            case x == 4:
                document.getElementById("xlabel") = "Legendary Eagle";
                break;
            case x == 5:
                document.getElementById("xlabel") = "Supreme Master First Class";
                break;
            case x == 6:
                document.getElementById("xlabel") = "Global Elite";
                break;
        }
    }