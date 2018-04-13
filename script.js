var dayMiliseconds = 1000*60*60*24;
var hourMiliseconds = 1000*60*60;
var minuteMiliseconds = 1000*60;
var secondMiliseconds = 1000;

var daysBox = document.getElementById("days");
var hoursBox = document.getElementById("hours");
var minutesBox = document.getElementById("minutes");
var secondsBox = document.getElementById("seconds");
var resultText = document.getElementById("resultMessage");

var futureDate = new Date("April 25 2018 18:37:00").getTime();

var countdownTimer = function() {
    var todayDate = new Date().getTime();
    var timeDiference = futureDate - todayDate;
    var timeIsOut = 0;
    var flag = 0;

    //Update days
    var difDays = Math.floor(timeDiference/dayMiliseconds);
    daysBox.innerText = difDays;
    timeDiference -= difDays * dayMiliseconds;
    flag += difDays;

    //Update hours
    var difHours = Math.floor(timeDiference/hourMiliseconds);
    hoursBox.innerText = difHours;
    timeDiference -= difHours * hourMiliseconds
    flag += difHours;

    //Update minutes
    var difMinutes = Math.floor(timeDiference/minuteMiliseconds);
    minutesBox.innerText = difMinutes;
    timeDiference -= difMinutes * minuteMiliseconds;
    flag += difMinutes;

    //Update seconds
    var difSeconds = Math.floor(timeDiference/secondMiliseconds);
    secondsBox.innerText = difSeconds;
    flag += difSeconds;

    //Check if it's done
    if(flag === 0) {
        clearInterval(start);
        resultText.innerText = "DONE!";
    }

    //Just for debug...
    console.log("Days: " + difDays + "Hours: " + difHours + "Minutes: " + difMinutes + "Seconds: " + difSeconds);
}

var start = setInterval(countdownTimer, 1000);

