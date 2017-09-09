//Buttons

document.getElementById("btnUpdate").addEventListener("click", submit);
document.getElementById("btnUpdate1").addEventListener("click", reset);

//Function for Submit Button

function submit() {
  //Array
  var errorList = [];
  var email = getValue('emailAddress');
  //Username

  var userName = getElm('userName');
  if (userName.value.length === 0) {
    errorList.push('Username is required')
    document.getElementById('userName').style.borderColor = "red";
  } else {
    document.getElementById('userName').style.borderColor = "white";
  }

  //Email

  if (email.indexOf('@') === -1) {
    errorList.push("Please enter an email address");
    document.getElementById('emailAddress').style.borderColor = "red";
  } else {
    document.getElementById('emailAddress').style.borderColor = "white";
  }


  //Password
  var password = getValue('password');
  if (password.length === 0) {
    errorList.push('You must need to enter a password');
    document.getElementById('password').style.borderColor = "red";
  } else {
    document.getElementById('password').style.borderColor = "white";
  }

  //time zone
  var time = getValue('time');
  if (time === "") {
    errorList.push('Please select a time zone');
    document.getElementById('time').style.borderColor = "red";
  } else {
    document.getElementById('time').style.borderColor = "white";
  }


  //terms & conditions
  var terms = getElm('terms');
  if (terms.checked === false) {

    errorList.push('You must accept the terms and conditions');
  } else {
    // Not going to do anything
  }


  //errors
  var web;
  if (errorList.length > 0) {
    web =
      '<ul class="errors"><li>' + errorList.join("</li><li>") + "</li></ul>";
  } else {
    web = "<h1>Success!</h1>";

  }

  document.getElementById("message").innerHTML = web;


}

//function for reset

function reset() {
  getElm('userName').value = "";
  getElm('password').value = "";
  getElm('emailAddress').value = " ";
  getElm('time').value = " ";
}

//back up functions

function getValue(id) {
  return getElm(id).value;
}

function getElm(id) {
  return document.getElementById(id);
}

