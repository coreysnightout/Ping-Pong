// Back End //
var pingPong = function(input) {
  var output = [];
  for(var index = 1; index <= input; index++){
  output.push(index);
  }
  return output;
};




// UI Logic //
$(document).ready(function() {
  $(".ping-pong").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#number").val());
    var result = pingPong(userInput);
    console.log(result);
    // console.log(userInput);
    result.forEach(function(listItem) {
      $("#output").append("<li>" + listItem + "</li>");
    });
  });
});
