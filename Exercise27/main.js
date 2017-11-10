/*
    Exercise 27 
*/
$(document).ready(function(){
    document.getElementById("btnvalidate").addEventListener("click", function(){
        alert("Hello World!");
    });
    /*=======================
        Regular Expressions 
     =======================*/

//var email = documentGetElementById("email").value;
//var patt = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
//var res = patt.test(email); 





     /*=======================
       Array Methods 
     =======================*/
     var main = [1,2,3,4];
     
     var newMain = main.map(function(main) {
       console.log(Math.pow(main, 2));
     });


});