////Business Logic////
var pingPong = function(form) {

  var output = "";
  for(var index = 1; index <= form; index += 1) {

    if (index % 3 === 0){
      output += "ping" + " ";
    } else if (index % 5 === 0){
      output += "pong" + " ";
    } else if (index % 15 === 0){
      output += "ping" + " ";
    } else {
      output += index + " "
    }
  }

  return output;

};



////User Interface Logic////
$(document).ready(function() {
  ("form#ping-pong").submit(event){
    event.preventDefault();
    var count = parseInt($("input#number").val());
    var result = pingPong(count);

  }
});
