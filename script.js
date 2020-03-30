$(document).ready(function () {


   //get save button to work
   //does saved info go to local storage
   //can I refresh page and activities stay
   //color code past present and future

   //added date
   var currentDay = moment().format("MMMM Do YYYY");
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
     $(".time-block").each(function(){
      var blockHour = parseInt($(this).attr("id").split("-")[1]) 

      if(blockHour < currentHour) {
         $(this).addClass("past");
      }else if(blockHour === currentHour) {
         $(this).removeClass("past");
         $(this).addClass("present");
      }else{
         $(this).removeClass("past");
         $(this).removeClass("present");
         $(this).addClass("future");
      }
     })
  }
    hourUpdater();
     var interval = setInterval(hourUpdater,15000);

//   $("#hour-0 .description").val(localStorage.getItem("hour-0"));

//   $("#hour-1 .description").val(localStorage.getItem("hour-1"));
//   $("#hour-2 .description").val(localStorage.getItem("hour-2"));
//   $("#hour-3 .description").val(localStorage.getItem("hour-3"));
//   $("#hour-4 .description").val(localStorage.getItem("hour-4"));
//   $("#hour-5 .description").val(localStorage.getItem("hour-5"));
//   $("#hour-6 .description").val(localStorage.getItem("hour-6"));
//   $("#hour-7 .description").val(localStorage.getItem("hour-7"));
//   $("#hour-8 .description").val(localStorage.getItem("hour-8"));


   


   
});

   
