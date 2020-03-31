$(document).ready(function () {


   //get save button to work
   //does saved info go to local storage
   //can I refresh page and activities stay
   //color code past present and future

   //added date
   var currentDay = moment().format('lll');
   $("#currentDay").append(currentDay);


   //local storage
   $(".saveBtn").on('click', function () {
      var activity = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      window.localStorage.setItem(time, JSON.stringify(activity))
      console.log(activity);
      var item = localStorage.getItem(time, 'activity');
      var parsed = JSON.parse(item);
   });

   //loop through hours and allows activities to be saved when page refreshes     
     for (var i = 0; i < 9; i++) {
      document.getElementById('box-' + i).innerText = JSON.parse(localStorage.getItem('hour-' + i));

   }





   //color codes page by time 
   function hourUpdater() {
      var currentHour = moment().hours();
      // var currentHour =  moment().format('lll'); leaving this line for now.  Not sure which var works best. line 36 or 37
      $(".time-block").each(function () {
         var blockHour = parseInt($(this).attr("id").split("-")[1])


         if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
         } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
         } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");


         }
      })
   }
   hourUpdater();
   var interval = setInterval(hourUpdater, 15000);


});


