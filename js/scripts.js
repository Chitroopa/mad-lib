$(document).ready(function() {
  $("#formOne").submit(function(event) {
   var allId = ["person1", "person2","animal","exclamation","verb","noun","bird"];


   allId.forEach(function(all){
     var userInput = $("input#" + all).val();
     alert(userInput);
     $("." + all).text(userInput);

   });
  
    $("#story").show();

    event.preventDefault();
  });
});
