//  DOM Manipulation
// document.innerHTML

const h1 = document.getElementById('judul');
h1.innerHTML = 'Hello Website';

// element.style.<propertiCSS>

// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

const judul = document.getElementsByTagName('h1')[0];
const a = document.querySelector('section#a a');

a.setAttribute('id', 'link');

const p2 = document.querySelector('.p2');
p2.classList.add('label');

