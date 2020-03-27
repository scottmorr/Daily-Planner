$(document).ready(function() {


//get save button to work
//does saved info go to local storage
//can I refresh page and activities stay
//color code past present and future


 var currentDay = moment().format("MMMM Do YYYY");
$("#currentDay").append(currentDay);




 $(".saveBtn").on('click', function(){
    var activity = $(this).sibling(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, activity)
 });


})


 //localStorage.setItem("key", "value");


















