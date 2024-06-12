// Set the date we're counting down to
var countDownDate = new Date("Dec 12, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    let countdownDay = $('.countdown-day');
    let countdownHours = $('.countdown-hours');
    let countdownMinutes = $('.countdown-minutes');
    let countdownSeconds = $('.countdown-seconds');

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with class
    //   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    //   + minutes + "m " + seconds + "s ";
    countdownDay.text(days);
    countdownHours.text(hours);
    countdownMinutes.text(minutes);
    countdownSeconds.text(seconds);

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        countdownDay.text('0');
        countdownHours.text('0');
        countdownMinutes.text('0');
        countdownSeconds.text('0');
    }
}, 1000);