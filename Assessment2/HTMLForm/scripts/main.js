$(function () {
    $('#btnSubmit').on('click', submit);
    $('#btnReset').on('click', reset);

    function submit() {
        var errorList = [];

        //first Name
        let firstName = $('#firstName').val();

        if (firstName === "") {
            errorList.push('firstname is required')
            $('#firstName').addClass('invalid');
        } else {
            error1.fadeOut();
            $('#firstName').removeClass('invalid');
        }

        //last name

        let lastName = $('#lastName').val();
        if (firstName === "") {
            $('#lastName').addClass('invalid');
            errorList.push('Lastname is required')
        } else {
            error2.fadeOut();
            $('#lastName').removeClass('invalid');
        }

        //Email Address
        let email = $('#emailAddress').val();

        if (email === "") {

            $('#emailAddress').addClass('invalid');
            errorList.push('Email is required')
        } else {
            error3.fadeOut();
            $('#emailAddress').removeClass('invalid');

        }

        if (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {

            $('#emailAddress').addClass('invalid');
            errorList.push('Valid email is required');
        } else {

            $('#emailAddress').removeClass('invalid');
        }

        //Check to see if checkbox is checked
        var terms = document.getElementById('terms');
        if (terms.checked === false) {

            errorList.push('You must accept the terms and conditions');
        } else {
            // Not going to do anything
        }


        //push errors
        var web;
        if (errorList.length > 0) {
            web =
                '<ul class="errors"><li>' + errorList.join("</li><li>") + "</li></ul>";
        } else {
            web = "<h1>Success!</h1>";

        }

        $("#message").html(web);

    } //End of submit function

    //Reset Function

    function reset() {
        $('#firstName').val(" ");
        $('#lastName').val(" ");
        $('#emailAddress').val(" ");
    }






}); //End of main function