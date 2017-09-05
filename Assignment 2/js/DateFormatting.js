// Time for JS Assignment //


//Short Time
function getShortTime() {
  var time = new Date();
  var minutes = time.getMinutes() < 10
    ? "0" + time.getMinutes()
    : time.getMinutes();
  var ampm = time.getHours() < 12 ? "AM" : "PM";
  console.log(time.getHours() % 12 + ":" + minutes + " " + ampm);
}

//Long Time
function getLongTime() {
  var time = new Date();
  var minutes = time.getMinutes() < 10
    ? "0" + time.getMinutes()
    : time.getMinutes();
  var seconds = time.getSeconds() < 10
    ? "0" + time.getSeconds()
    : time.getSeconds();
  var ampm = time.getHours() < 12 ? "AM" : "PM";
  console.log(
    time.getHours() % 12 + ":" + minutes + ":" + seconds + " " + ampm
  );
}

//Short Date
function getShortDate() {
  var today = new Date();
  var date =
    today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
  console.log(date);
}

//Long Date
function getLongDate() {
  var months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var today = new Date();
  var month_value = today.getMonth();
  var date =
    months[month_value] + " " + today.getDate() + ", " + today.getFullYear();
  console.log(date);
}

//Short Date Time

function getShortDateTime() {
  var today = new Date();
  var date =
    today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
  var minutes = today.getMinutes() < 10
    ? "0" + today.getMinutes()
    : today.getMinutes();
  var seconds = today.getSeconds() < 10
    ? "0" + today.getSeconds()
    : today.getSeconds();
  var ampm = today.getHours() < 12 ? "AM" : "PM";
  var time = today.getHours() % 12 + ":" + minutes + " " + ampm;

  var dateTime = date + " " + time;

  console.log(dateTime);
}

// Long Date Time
function getLongDateTime() {
  var today = new Date();
  var months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var month_value = today.getMonth();
  var date =
    months[month_value] + " " + today.getDate() + ", " + today.getFullYear();
  var minutes = today.getMinutes() < 10
    ? "0" + today.getMinutes()
    : today.getMinutes();
  var seconds = today.getSeconds() < 10
    ? "0" + today.getSeconds()
    : today.getSeconds();
  var ampm = today.getHours() < 12 ? "AM" : "PM";
  var time = today.getHours() % 12 + ":" + minutes + " " + ampm;
  var longDate = date + " " + time;
  console.log(longDate);
}

//Extended Date Time
function getExtendedDateTime() {
  var today = new Date();
  var months = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  var month_value = today.getMonth();
  var day_value = today.getDay();
  var day = days[day_value];
  var date =
    months[month_value] + " " + today.getDate() + ", " + today.getFullYear();
  var minutes = today.getMinutes() < 10
    ? "0" + today.getMinutes()
    : today.getMinutes();
  var ampm = today.getHours() < 12 ? "AM" : "PM";
  var time = today.getHours() % 12 + ":" + minutes + " " + ampm;
  var extended = day + ", " + date + " " + time;
  console.log(extended);
}

// Calling the functions
getShortTime();
getLongTime();
getShortDate();
getLongDate();
getShortDateTime();
getLongDateTime();
getExtendedDateTime();

//bottom of DateFormatting.js
    var getMonthYear = DateFormatter.getMonthYear(new Date());
    console.log('Get Month Year ' + getMonthYear);


/* 
getShortTime - returns a the date's time with hours, minutes and AM or PM
Example: "4:20 PM", "3:00 AM"

getLongTime - returns a the date's time with hours, minutes, seconds and AM or PM
Example: "4:20:20 PM", "3:00:33 AM"

getShortDate - returns the date in the following format month/day/year
Example: "1/20/2017", "10/15/2017"

getLongDate - returns the date in the following format Month Day, Year
Example: "January 20, 2017", "October 15, 2017"

getShortDateTime - returns the date in the following format month/day/year hour:minutes AM|PM -Example: '1/20/2017 4:20 PM', '10/15/2017 3:00 AM'

getLongDateTime - returns the date in the following format- Month Day, Year hour:minutes AM|PM
Example: "January 20, 2017 4:20 PM", "October 15, 2017 3:00 AM"

getExtendedDateTime - returns the date in the following format- Day of the week, Month Day, Year hour:minutes AM|PM
Example: "Friday, January 20, 2017 4:20 PM", "Sunday, October 15, 2017 3:00 AM"
*/
