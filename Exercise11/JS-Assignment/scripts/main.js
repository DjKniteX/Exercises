var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    var p1_fullName = firstName + " " + lastName;
    var p1_valid;
    if (firstName === "" || lastName === "") {
        p1_valid = false;
    } else {
        p1_valid = true;
    }
    getElm("p1_valid").innerHTML = p1_valid;
    var p1_fullNameLength = p1_fullName.length;
    console.log(firstName);
    console.log(lastName);
    console.log(p1_fullNameLength);

    getElm("p1_fullName").innerHTML = p1_fullName;
    getElm("p1_fullNameLength").innerHTML = p1_fullNameLength;





    // Part 2
    var emailAddress = getValue('emailAddress');
    var p2_email = emailAddress;
    var p2_emailLength = emailAddress.length;
    var p2_valid;

    if (p2_email.indexOf('@') > -1) {
        p2_valid = true;
    } else {
        p2_valid = false;
    }

    console.log(emailAddress);

    getElm("p2_email").innerHTML = p2_email;
    getElm("p2_emailLength").innerHTML = p2_emailLength;
    getElm("p2_valid").innerHTML = p2_valid;



    // Part 3
    var randomNumber = getValue('randomNumber');
    var p3_number = randomNumber;
    var p3_valid;
    if (isNaN(p3_number)){
        p3_valid = false;
    }else{
        p3_valid = true;
    }
    console.log(randomNumber);
    getElm("p3_valid").innerHTML = p3_valid;
    getElm("p3_number").innerHTML = p3_number;



    // Part 4
    var arrayInput = getValue('arrayValue');
    var p4_arrayLength = arrayItems.length;
    arrayItems.push(arrayInput);



    console.log(arrayItems);
    console.log(arrayInput);
    getElm("p4_arraylength").innerHTML = p4_arrayLength;
    getElm("p4_valid").innerHTML = arrayItems;











    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}