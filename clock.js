//                  A real time clock.              //
let timerID = null;
let timerRunning = false;
let July_4th = new Date(2018, 12, 25);
// stop the clock
function stopclock() {
    if (timerRunning) {
    clearTimeout(timerID);
    timerRunning = false;
    }
}
// start the clock
function startclock() {
    // make sure the clock is stopped
    stopclock();
    showtime();
}
// actually display the time
function showtime() {
    let now = new Date();
    let to_July_4th = July_4th - now;

    let days = Math.floor(((to_July_4th % 31536000000) % 2628000000)/86400000);
    let hours = Math.floor((((to_July_4th % 31536000000) % 2628000000) % 6400000)/3600000);
    let minutes = Math.floor(((((to_July_4th % 31536000000) % 2628000000) % 6400000) % 3600000)/60000);
    let seconds = Math.floor((((((to_July_4th % 31536000000) % 2628000000) % 6400000) % 3600000) % 60000)/1000);

    let timeValue = days + " days ";
    timeValue += "" + ((hours>12)?hours-12: hours);
    timeValue += ((minutes<10)?" : 0" : ": ") + minutes;
    timeValue += ((seconds<10)?" : 0" : ": ") + seconds;
    // timeValue += ((hours>=12)?" P.M." : " A.M.");
    // display to the screen
    let timeplace = document.getElementById("time");
    timeplace.childNodes[0].nodeValue = timeValue;
    timerID = setTimeout("showtime()", 1000);
    timerRunning = true;
}