// Event Handling
// const closeBtn = document.querySelector('.close');
// const card = document.querySelector('.card');

// closeBtn.addEventListener('click', function() {
//     const container = document.querySelector('.container');
//     container.removeChild(card);
// })

// DOM Traversal
// const closeBtn = document.querySelectorAll('.close');
const container = document.querySelector('.container');
const card = document.querySelectorAll('.card');
const clrAllBtn = document.querySelector('.clearAll');
const restoreAllBtn = document.querySelector('.restoreAll');

// closeBtn.forEach(close => {
//     close.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });

clrAllBtn.addEventListener('click', function() {
    card.forEach(c => {
        c.classList.add('none');
    });
});

restoreAllBtn.addEventListener('click', function() {
    card.forEach(c => {
        c.classList.remove('none');
    });
});

container.addEventListener('click', function(e) {
    if(e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});

// const cards = document.querySelectorAll('.card');

// cards.forEach(card => {
//     card.addEventListener('click', function(e) {
//         alert('ok')
//     })
// });


