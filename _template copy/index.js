let mhs = 0;
let npmtif = 0;
let npm_mhs = 0;

function totalMhs(npmtif, mhs, npm_mhs) {
    npmtif = 213040000;
    for (mhs = 1; mhs <= 110; mhs++) {
        npm_mhs = npmtif + mhs;
        console.log(npm_mhs);
    }
    return npm_mhs;
}

// let pass_mhs = (totalMhs() + '').replace('.', '').length;
document.getElementById("myLabel") = totalMhs();
console.log(pass_mhs);