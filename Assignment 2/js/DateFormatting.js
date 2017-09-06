// Time for JS Assignment //

<<<<<<< HEAD
var dateFormatter = {
    //Short Time
    getShortTime: function(date) {
      var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes()
        : date.getMinutes();
      var ampm = date.getHours() < 12 ? "AM" : "PM";
      var shortTime = date.getHours() % 12 + ":" + minutes + " " + ampm;
      return shortTime;
    },
  
    //Long Time
    getLongTime: function(date) {
      var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes()
        : date.getMinutes();
      var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds()
        : date.getSeconds();
      var ampm = date.getHours() < 12 ? "AM" : "PM";
      var longTime =
        date.getHours() % 12 + ":" + minutes + ":" + seconds + " " + ampm;
      return longTime;
    },
  
    //Short Date
    getShortDate: function(date) {
      var today = new Date();
      var thisMonth =
        today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
      return thisMonth;
    },
  
    //Long Date
    getLongDate: function(date) {
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
      var longDate =
        months[month_value] + " " + today.getDate() + ", " + today.getFullYear();
      return longDate;
    },
  
    //Short Date Time
  
    getShortDateTime: function(date) {
      var today = new Date();
      var date1 =
        today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
      var minutes = today.getMinutes() < 10 ? "0" + today.getMinutes()
        : today.getMinutes();
      var seconds = today.getSeconds() < 10 ? "0" + today.getSeconds()
        : today.getSeconds();
      var ampm = today.getHours() < 12 ? "AM" : "PM";
      var time = today.getHours() % 12 + ":" + minutes + " " + ampm;
  
      var dateTime = date1 + " " + time;
  
      return dateTime;
    },
  
    // Long Date Time
    getLongDateTime: function(date) {
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
      var date1 =
        months[month_value] + " " + today.getDate() + ", " + today.getFullYear();
      var minutes = today.getMinutes() < 10 ? "0" + today.getMinutes()
        : today.getMinutes();
      var seconds = today.getSeconds() < 10 ? "0" + today.getSeconds()
        : today.getSeconds();
      var ampm = today.getHours() < 12 ? "AM" : "PM";
      var time = today.getHours() % 12 + ":" + minutes + " " + ampm;
      var longDate = date1 + " " + time;
      return longDate;
    },
  
    //Extended Date Time
    getExtendedDateTime: function(date) {
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
      var date1 =
        months[month_value] + " " + today.getDate() + ", " + today.getFullYear();
      var minutes = today.getMinutes() < 10 ? "0" + today.getMinutes()
        : today.getMinutes();
      var ampm = today.getHours() < 12 ? "AM" : "PM";
      var time = today.getHours() % 12 + ":" + minutes + " " + ampm;
      var extended = day + ", " + date1 + " " + time;
      return extended;
    }
  };
  
  /*
  //bottom of DateFormatting.js
  var getShortTime = dateFormatter.getShortTime(new Date());
  console.log("Get Short Time");
  
  var getLongTime = dateFormatter.getLongTime(new Date());
  console.log("Get Long Time");
  
  var getShortDate = dateFormatter.getShortDate(new Date());
  console.log("Get Short Date");
  
  var getLongDate = dateFormatter.getLongDate(new Date());
  console.log("Get Long Date");
  
  var getShortDateTime = dateFormatter.getShortDateTime(new Date());
  console.log("Get Short Date Time");
  
  var getLongDateTime = dateFormatter.getLongDateTime(new Date());
  console.log("Get Long Date Time");
  
  var getExtendedDateTime = dateFormatter.getExtendedDateTime(new Date());
  console.log("Get Extended Date Time");
  
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
  
=======

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
>>>>>>> 52e9c540894bc226aedd9d3351ee701961d5879f
