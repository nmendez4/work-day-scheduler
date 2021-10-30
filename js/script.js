// displays current date on webpage
var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
$("#currentDay").html(currentDate);

// button click listener
$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        // gets vals from html
        var text = $(this).siblings(".text-description").val();
        var time = $(this).parent().attr("id");

        // saves text and time in local storage
        localStorage.setItem(time, text);
    })

    //function acts to differentiate the labeled times versus the current time
    function timeTrack() {
        // gets the current number of hours
        var timeNow = moment().hour();

        // time loop over set blocks in html
        $(".hour-block").each(function(){
            var hourBlock = parseInt($(this).attr("id").split("hour")[1]);

            //if statement to check time + add classes dependant on time
            if (hourBlock < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (hourBlock === timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })

    };

    // retrieve local storage if present
    $("#hour8 .text-description").val(localStorage.getItem("hour8"));
    $("#hour9 .text-description").val(localStorage.getItem("hour9"));
    $("#hour10 .text-description").val(localStorage.getItem("hour10"));
    $("#hour11 .text-description").val(localStorage.getItem("hour11"));
    $("#hour12 .text-description").val(localStorage.getItem("hour12"));
    $("#hour1 .text-description").val(localStorage.getItem("hour1"));
    $("#hour2 .text-description").val(localStorage.getItem("hour2"));
    $("#hour3 .text-description").val(localStorage.getItem("hour3"));
    $("#hour4 .text-description").val(localStorage.getItem("hour4"));


    // call the function
    timeTrack();
})