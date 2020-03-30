$(document).ready(function () {


   //get save button to work
   //does saved info go to local storage
   //can I refresh page and activities stay
   //color code past present and future

   //added date
   var currentDay = moment().format("MMMM Do YYYY");
   $("#currentDay").append(currentDay);


   console.log('hi');

   $(".saveBtn").on('click', function () {
      var activity = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      window.localStorage.setItem(time, JSON.stringify(activity))
      console.log(activity);
      var item = localStorage.getItem(time, 'activity');
      var parsed = JSON.parse(item);
   });

   //loop through hours      
   for (var i = 0; i < 9; i++) {
      document.getElementById('box-' + i).innerText = JSON.parse(localStorage.getItem('hour-' + i));

   }


   //for color coding save button
   //for (var i = 0; i < 9; i++) {
      $("button").click(function () {
         $(".saveBtn").css("background-color", "yellow");
      });



   });


