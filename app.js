const Link = document.querySelector("#Link");
const LinkTop = document.querySelector("#url_text");


LinkTop.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        Link.src = event.target.value;
    }
});


const body = document.querySelector(".container-frameTab");
const row = document.querySelector(".row");

body.classList.add('browser-black');
row.classList.add('row-black');


const botaoGreen = document.querySelector('#expandir');

botaoGreen.addEventListener('click', function() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
});
