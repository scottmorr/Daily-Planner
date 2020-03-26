$(document).ready(function() {

 $(".saveBtn").on('click', function(){
    var activity = $(this).sibling(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, activity)
 });
























})