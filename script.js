
const days_el = document.getElementById("days");
const hours_el = document.getElementById("hours");
const minutes_el = document.getElementById("minutes");
const seconds_el = document.getElementById("seconds");

const newYears = '1 Jan 2023'


 function countdown(){

    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate)/ 1000;

    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds /3600) % 24;
    const minutes = Math.floor(totalSeconds /60) % 60;
    const seconds = Math.floor(totalSeconds % 60)

    // console.log(days, hours, minutes, seconds)


    days_el.innerHTML = days;
    hours_el.innerHTML = hours;
    minutes_el.innerHTML = minutes;
    seconds_el.innerHTML = seconds;
}
// Initial Call

// document.getElementById("days").innerHTML = countdown().days

setInterval(countdown,1000);


