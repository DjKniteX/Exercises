$(document).ready(function () {
    //Everything with the class of error are hidden
    $(".error").hide();

    //Every class with input group and even stuff
    let even = $(".input-group").filter(":even");
    even.addClass('even');

    //First name with blur
    $('#firstName').on('blur', function () {
        let firstName = $('#firstName').val();
        let error1 = $('#firstName').closest('.input-group').find('.requiredMsg');

        if (firstName === "") {
            error1.fadeIn();
        } else {
            error1.fadeOut();
        }
    });
    //Last Name
    $('#lastName').on('blur', function () {
        let lastName = $('#lastName').val();
        let error1 = $('#lastName').closest('.input-group').find('.requiredMsg');

        if (lastName === "") {
            error1.fadeIn();
        } else {
            error1.fadeOut();
        }
    });


    //Email
    $('#lastName').on('blur', function () {
        let email = $('#emailAddress').val();
        let error1 = $('#emailAddress').closest('.input-group').find('.requiredMsg');
        let error2 = $('#emailAddress').closest('.input-group').find('.emailMsg');

       if (email === ""){
            error1.fadeIn();
        } else{
            error1.fadeOut();
            
        }

        if (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
            error2.fadeIn();
        } else {
            error2.fadeOut();
        }
    });
 

});