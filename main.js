var toggle = 0;
$(document).ready(function() {
  $("#button").onClick(function() {
    toggle++;
    
    switch(toggle) {
      case 0:
        $("#title").text("Crocodile Crocodied");
        $("#text").text("lovely image of dead crocodile");
        $("#image").attr("src", "img/dead.jpg");
        break;
    }
});
