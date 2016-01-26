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

    $('#subscribe-button').click(function(){
        var firstName = $('#first-name-input').val();
        var lastName = $('#last-name-input').val();
        var email = $('#email-input').val();
    });
});

$( "#whitehomepage" ).click(function() {
    formData = {
        u: "3959eeadb32e02b85a792e21c",
        id: "6d7613df26"
    };
    $.ajax({
        url: "http://fiercelycurious.us1.list-manage.com/subscribe/post",
        type: "POST",
        crossDomain: true,
        contentType: 'application/json',
        data: formData,
        dataType: "json",
        success: function(data) {
            //success handler
        },
        error: function() {
            //error handler
        }
    });
});