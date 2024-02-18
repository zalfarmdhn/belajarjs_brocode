const resetColorBtn = document.getElementById('resetColor');
const getDiv = document.querySelector('div.btnDiv');
const showRGB = document.querySelector('h2.showRGB');
const body = document.querySelector('body');

// changeColorBtn.onclick = function() {
//     // document.body.style.backgroundColor = 'lightblue';
//     // document.body.setAttribute('class', 'biru-muda');
//     document.body.classList.toggle('biru-muda');
// }

resetColorBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
    showRGB.innerHTML = 'Mendapat rgb()';
});


const randomColorBtn = document.createElement('button');
const textButton = document.createTextNode('Acak warna');

randomColorBtn.appendChild(textButton);
randomColorBtn.setAttribute('type', 'button');

resetColorBtn.after(randomColorBtn);



randomColorBtn.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    
    showRGB.innerHTML = `Mendapat rgb(${r},${g},${b})`;
    getDiv.after(showRGB);
    
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

const redSlider = document.querySelector('input[name=redSlider]');
const greenSlider = document.querySelector('input[name=greenSlider]');
const blueSlider = document.querySelector('input[name=blueSlider]');
const kotakCursor = document.querySelector('#kotak-cursor');


redSlider.addEventListener('input', function() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    showRGB.innerHTML =  `Mendapat rgb(${r}, ${g}, ${b})`;
});

greenSlider.addEventListener('input', function() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    showRGB.innerHTML =  `Mendapat rgb(${r}, ${g}, ${b})`
});

blueSlider.addEventListener('input', function() {
    const r = redSlider.value;
    const g = greenSlider.value;
    const b = blueSlider.value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    showRGB.innerHTML =  `Mendapat rgb(${r}, ${g}, ${b})`
});

kotakCursor.addEventListener('mousemove', function() {
    // posisi mouse
    // console.log(event.clientX);
    // console.log(window.innerWidth);
    const xPos  = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos  = Math.round((event.clientY / window.innerHeight) * 255);
    kotakCursor.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;
});
