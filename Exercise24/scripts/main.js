$( document ).ready(function() {
    console.log( "ready!" );
    $("#btnSubmit").on('click', function () {
        $('form').fadeOut('slow', function () {
            $('#thankyou').fadeIn('slow');
        });

    })



});