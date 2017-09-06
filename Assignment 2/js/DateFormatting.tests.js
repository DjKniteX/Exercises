
//Short Time

function validate(expected, testDate) {
    
    var formatted = dateFormatter.getShortTime(testDate)


    if (expected === formatted) {
        console.log('Get Reverse Date Worked')
    } else {
        console.log("Your code is broken Expected: " + expected + " + Got:" + formatted);
    }

}

validate();

var test = "8:00 AM";
var testdate = new Date (2017,0,1,8);
Validate(test, testDate); 

var test1 = "12:00 PM"
var testdate1 = new Date (3,4,1009);
Validate(test, testDate); 


//Long Time Example
function validateLongDate(expected, testDate) {
    
    var formatted = dateFormatter.getShortTime(testDate)


    if (expected === formatted) {
        console.log('Get Reverse Date Worked')
    } else {
        console.log("Your code is broken Expected: " + expected + " + Got:" + formatted);
    }

}


var test2 = 1
var testdate2 = new Date (2,2,1009);
Validate(test2, testDate2); 

var test3 = 12
var testdate3 = new Date (3,4,1009);
Validate(test3, testDate3); 