//Menu
var toggle = document.querySelector('.menu__toggle');
var nav = document.querySelector('#nav');
toggle.addEventListener('click', function(){
    nav.classList.toggle('active');
});



//Scroll top
var scrollTop = document.querySelector('.scroll__top');
window.onscroll = function(){
    if(window.pageYOffset >= 900) {
        scrollTop.style.display = 'block';
    }
    else {
        scrollTop.style.display = 'none';
    }
};

scrollTop.addEventListener('click', function(){
    window.scrollTo(0, 0);
});

