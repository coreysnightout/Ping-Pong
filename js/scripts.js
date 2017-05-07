var pingPong = function(userInput)


$(document).ready(function() {
  $(".ping-pong").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    var output = pingPong(userInput);
    console.log(userInput);

    $("#output").append(userInput);
  });
});
