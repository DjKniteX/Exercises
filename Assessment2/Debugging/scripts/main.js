/*
    Read the comments and follow the instructions
    Total Points available -> 80
    Part 1 - 30 points
    Part 2 - 40 points
    Clean Code and Comments - 10 points

    Total Challenge/Bonus points -> 10
*/


/*========================
    Part 1 Fixing Code - 30
====================================*/
$(function () {
    
    
        //This is supposed to add an event listener but it's causing an error
        //Fix it please.
        document.getElementById('btnMake').addEventListener('click', build);
    
        function build() {
            var firstName = $('#firstName');
            var firstNameValue = firstName.value;
    
    
            var lastName = $('#lastName');
            var lastNameValue = lastName.value;
    
            /*invalid should add a red border around the respective input
                It will also show a hidden error message */
            if (firstNameValue = '') {
                firstName.addClass('invalid');
    
                var parentDiv = firstName.closest('.input-group');
                var errorSpan = parentDiv.find('.errors');
                errorSpan.show();
            }
    
            if (lastNameValue = '') {
                lastName.addClass('invalid');
    
                var parentDiv = lastName.closest('.input-group');
                var errorSpan = parentDiv.find('.errors');
                errorSpan.show();
            }
    
    
            /*====================================
                I need to create an object, but it's not working
                so I just commented it out.
                Please fix it
            ======================================*/
            var state = $('#state');
            var stateValue = state.value;

            var userObject = {
                firstName : firstName,
                lastName : lastName,
                fullname : function () {
                    firstname + ' ' + lastName;
                },
                state : stateValue,
            };
            console.log(userObject);

    
    
        }
    
    
    
    
    
    });



/*========================
    Part 2 Writing Functions -  10 points each
====================================*/


/*
    Write a JavaScript function that accepts 
    one input parameter and returns the number 
    of characters in the string.

    //Sample
    var foo = getLength('hello world');
    console.log(foo) // Outputs 11

*/

function number(x) {
    return x.length
}




/*
    Write a JavaScript function that computes the sum
    all of the numbers in an array.

    //Sample
    var foo = sumArray([2,5,6]);
    console.log(foo) // Outputs 13

*/

function sumArray(num1, num2, num3) {
    var numbers = [num1, num2, num3];
    var result = numbers.reduce(function (num1, num2) {
        return num1 + num2;
    });
    console.log(result);

}


/*
    Write a JavaScript function that converts a decimal
    into a percentage.

    //Sample
    var foo = percentage(.23);
    console.log(foo) //Outputs "23%"

    var foo2 = percentage(.5);
    console.log(foo2) //Outputs "50%"

*/

function percent(num1) {
    var result = num1 * 100 + '%'
    return result
};

/*
    Write a JavaScript function that takes a date and adds a 
    number of days to it.

    //Sample
    var d = new Date('1/1/2001');
    var newD = addDays(d, 10);
    console.log(newD);  //outputs Thu Jan 11 2001 00:00:00 GMT-0600 (Central Standard Time)
*/

function calender () {
    Date.prototype.addDays = function(days) {
        var dat = new Date(this.valueOf());
        dat.setDate(dat.getDate() + days);
        return dat;
      }
      
      var dat = new Date();
      
      console.log(dat.addDays(10))
}



/*
    Challenge - 
    Write a javascript function to take an array of numbers
    and sorts them in ascending order.

    //Sample
    var array1 = [3, 5, 1, 10];
    console.log(sortArray(array1); //outputs [1,3,5,10]


*/


function sorting (num1, num2, num3, num4) {
var array1 = [num1, num2, num3, num4];
var arrayResult = array1.sort(function(a, b){return a - b});
console.log(arrayResult);
}







































































/*
=====================================================================
    Nothing is broken here... here be dragons
    Go away :)
*/
$(function () {
    $('#btnReset').on('click', function () {
        $('#firstName').val('John');
        $('#lastName').val('Doe');
        $('#state').val('OK');
        $('.errors').hide();
        $('.invalid').removeClass('invalid');
    });
});