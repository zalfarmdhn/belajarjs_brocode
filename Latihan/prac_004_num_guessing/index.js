const answer = Math.floor(Math.random() * 50 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function () {

    let guess = document.getElementById("guessField").value
    guesses += 1; //check if there is value in the id, and then add 1 guess
    document.getElementById("guessCount").innerHTML = `You guess ${guesses} times`;

    if (guess == answer) {
        alert(`Selamat! ${answer} adalah nomor yg berhasil ditebak. Kamu berhasil menebak ${guesses} kali`);
        location.reload();
    } else if (guess < answer) {
        document.getElementById("guesser").innerHTML = "Too Small!";
    } else {
        document.getElementById("guesser").innerHTML = "Too Large!";
    }


}