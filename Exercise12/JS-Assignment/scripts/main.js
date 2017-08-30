function update() {
    /* ===================
        Your code starts here
    =====================*/

    //Create new array.
    var messages = [];
    var firstName = getValue("firstName");
    var lastName = getValue("lastName");
    var emailAddress = getValue("emailAddress");

    //If first name is empty. Add it to the array
    if (firstName.length === 0) {
        messages.push("First name is required");
    }

    //If last name is empty. Add it to the array
    if (lastName.length === 0) {
        messages.push("Last name is required");
    }

    //Email is empty. Add it to the array
    if (emailAddress.length === 0) {
        messages.push("Email is required");
    }

    //Loop through array
    for (var i = 0; i < messages.length; i++) {
        getElm("error-list").innerHTML += messages[i] + " ";
    }



    //Create javascript object for the user
    var user = {
        firstName: getValue("firstName"),
        lastName: getValue("lastName"),
        email: getValue("emailAddress"),
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }



    //log the user object to the console

    console.log(user);

    //Check to see if everything is valid

    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.
    var submittedDate = new Date();
    var date = submittedDate.getFullYear() + '-' + (submittedDate.getMonth() + 1) + '-' + submittedDate.getDate();
    console.log(submittedDate.toDateString())


    //Make the alert box.
    if (messages.length === 0) {
        alert("submitted on " + submittedDate)
    }



    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}