var right = document.querySelector('.right');
var left = document.querySelector('.left');
var images = document.querySelectorAll('img');
var activeElement = document.querySelector('.active');

right.addEventListener('click', function(){
    if (activeElement.nextElementSibling == undefined) {
        images[0].classList.add('active');
    } else {
        activeElement.nextElementSibling.classList.add('active');
    }
    activeElement.classList.remove('active');
    activeElement = activeElement.nextElementSibling || images[0];
});

left.addEventListener('click', function(){
    if (activeElement.previousElementSibling == undefined) {
        images[images.length - 1].classList.add('active');
    } else {
        activeElement.previousElementSibling.classList.add('active');
    }
    activeElement.classList.remove('active');
    activeElement = activeElement.previousElementSibling || images[images.length - 1];
});
