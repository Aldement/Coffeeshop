let startX = 0;
let links = document.querySelectorAll('.scroll');
let targetID;

document.getElementById('coffeeBtn').onclick = function() {
    document.getElementById('mobileNav').classList.toggle('open');
}

if (document.querySelector('.btn')) {
    document.querySelector('.btn').onclick = function() {
        let inputs = document.querySelectorAll("input");
        let values = [];

        for (let i = 0; i < inputs.length; i++) {
            values.push(inputs[i].value);
        }

        console.log(values);
        alert('Регистрация завершена!');
    }
}

document.ontouchstart = function(e) {
    startX = e.touches[0].clientX;
}

document.ontouchend = function(e) {
    let diff = startX - e.changedTouches[0].clientX;

    if (diff > 50) window.location.href = 'menu.html';
    if (diff < -50) window.location.href = 'index.html';
}

links.forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

$(document).ready(function() {
    $('.team-slider').bxSlider({
        minSlides: 1,
        maxSlides: 3,
        slideWidth: 450,      
        slideMargin: 20,
        infiniteLoop: true,   
        hideControlOnEnd: false,
        responsive: true,     
        adaptiveHeight: true
    });
});
