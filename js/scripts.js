////Business Logic////
var pingPong = function(count) {

}












////User Interface Logic////
$(document).ready(function() {
  ("form#ping-pong").submit(event){
    event.preventDefault();
    var count = parseInt($("input#number").val());
    var result = pingPong(count);
  
  }
});
