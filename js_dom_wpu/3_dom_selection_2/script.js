// DOM Selection
// document.querySelector() -> element

const p4 = document.querySelector('#b>p');

p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('#b>ul li:nth-child(2)');
li2.style.backgroundColor = '#4F6F52';
li2.style.color = 'white';

// document.querySelectorAll() -> nodeList
const p = document.querySelectorAll('p');
for(let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
    p[i].innerHTML = `Paragraf ke-`+(i+1)+` diubah oleh javascript`;
}
