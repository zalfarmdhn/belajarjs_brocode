var userName = "Zalfa";

userName ? console.log(`Hello, ${userName}. Mari kita bermain Eight Ball`) :
    console.log('Hello!');

var userQuestion = "Apakah besok akan menjadi hari yang baik?";

console.log(`Pertanyaannya adalah: ${userQuestion}`);

var randomNumber = Math.floor(Math.random() * 8);

var eightBall = "";

switch (randomNumber) {
    case 0:
        eightBall = 'Bisa jadi';
        break;
    case 1:
        eightBall = 'Iya';
        break;
    case 2:
        eightBall = 'Coba Lagi';
        break;
    case 3:
        eightBall = 'Mungkin saja';
        break;
    case 4:
        eightBall = 'Tidak mungkin';
        break;
    case 5:
        eightBall = 'Nggak dulu';
        break;
    case 6:
        eightBall = 'Valid sekali';
        break;
    case 7:
        eightBall = 'Mimpi lu';
        break;

}

console.log(`The eight ball answered: ${eightBall}`);