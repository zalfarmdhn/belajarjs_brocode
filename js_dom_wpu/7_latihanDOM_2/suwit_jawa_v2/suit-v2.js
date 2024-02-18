function getComputerChoice() {
    // menangkap pilihan computer
    // membangkitkan bilangan random
    const comp = Math.random();

    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}


function getHasil (player, comp) {
    // menentukan rules
    if( player == comp ) hasil = 'SERI!'; 
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return  ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

function rollResult() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', `img/${gambar[i++]}.png`);
        if(i == gambar.length) i = 0;
    }, 100);
}

const info = document.querySelector('.info');

const compImg = document.querySelector('.img-komputer');

const choices = document.querySelectorAll('li img');
choices.forEach(function(choice) {
    choice.addEventListener('click', function() {
        const compChoice = getComputerChoice();
        
        rollResult();
        
        setTimeout(function() {
            const compImg = document.querySelector('.img-komputer');
            compImg.setAttribute(`src`, `img/${compChoice}.png`);
            info.innerHTML = getHasil(choice.className, compChoice);
        }, 1000);
    });
});