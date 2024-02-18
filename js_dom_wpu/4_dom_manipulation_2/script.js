// DOM Manipulation

// buat elemen baru
const newP = document.createElement('p');
const newText = document.createTextNode('Paragraf Baru');

// simpan tulisan ke paragraf
newP.appendChild(newText);

// simpan newP di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(newP);

const newList = document.createElement('li');
const newTextList = document.createTextNode('item baru');
// masukkan di akhir newList
newList.appendChild(newTextList);

const ul = document.querySelector('section#b ul'); // select element parent (ul) 
const selectedList = ul.querySelector('li:nth-child(2)'); // select element childnya (list kedua)
// masukkan ke dalam node ul, yang dimasukkan newList tepatnya di selectedList
ul.insertBefore(newList, selectedList); 


const link = document.querySelector('section#a a');
// const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const newH2 = document.createElement('h2');
const newTextH2 = document.createTextNode('Judul Baru');
newH2.appendChild(newTextH2);

sectionB.replaceChild(newH2, p4);

newP.style.backgroundColor = 'lightgreen';
newList.style.backgroundColor = 'lightgreen';
newH2.style.backgroundColor = 'lightgreen';


