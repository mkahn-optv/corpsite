$(document).ready(function () {/* smooth scrolling for scroll to top */
    $('.scroll-top').click(function () {
        $('body,html').animate({scrollTop: 0}, 1000);
    })
    /* smooth scrolling for scroll down */
    $('.scroll-down').click(function () {
        $('body,html').animate({scrollTop: $(window).scrollTop() + 1000}, 1000);
    })

    /* highlight the top nav as scrolling occurs */
    $('body').scrollspy({target: '#navbar'})

    /*var i=0;
    var root = document.querySelector('.fadein');
    var els = root.querySelectorAll(':not(:first-child)');
    for (i=0; i < els.length; i++) {
        els[i].classList.add('is-hidden');
    }
    root.addEventListener('transitionend', function(){
        root.insertBefore(root.querySelector(':first-child.is-hidden'), null);
    });
    setInterval(function(){
        root.querySelector(':first-child').classList.add('is-hidden');
        root.querySelector(':nth-child(2)').classList.remove('is-hidden');
    }, 3000)*/
});