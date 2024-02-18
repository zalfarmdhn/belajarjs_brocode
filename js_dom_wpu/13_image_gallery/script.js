const thumb = document.querySelectorAll('.thumb');
const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');

container.addEventListener('click', function(e) {
    if(e.target.className == 'thumb') {
        const img = e.target.getAttribute('src');
        jumbo.setAttribute('src', `${img}`);
        jumbo.classList.add('fade');
        setTimeout(function() {
            jumbo.classList.remove('fade');
        }, 500);

        thumb.forEach(th => {
            if(th.className != 'active') th.classList.remove('active'); e.target.classList.add('active');
        });
    };
});
