var toggle = 0;
$(document).ready(function() {
  $("#button").onClick(function() {
    toggle = (toggle + 1) % 8;
    
    switch(toggle) {
      case 0:
        $("#title").text("Egg");
        $("#text").text("lovely image of an egg");
        $("#image").attr("src", "img/egg.jpeg");
        break;
      case 1:
        $("#title").text("Boiled Egg");
        $("#text").text("lovely image of a boiled egg");
        $("#image").attr("src", "img/boiled.jpg");
        break;
      case 2:
        $("#title").text("Fried Egg");
        $("#text").text("lovely image of a fried egg");
        $("#image").attr("src", "img/fried.jpeg");
        break;
      case 3:
        $("#title").text("Steamed Egg");
        $("#text").text("lovely image of a steamed egg");
        $("#image").attr("src", "img/steamed.jpg");
        break;
      case 4:
        $("#title").text("Scrambled Egg");
        $("#text").text("lovely image of a scrambled egg");
        $("#image").attr("src", "img/scrambled.jpg");
        break;
      case 5:
        $("#title").text("Omelet Egg");
        $("#text").text("lovely image of a omelet egg");
        $("#image").attr("src", "img/omelet.jpeg");
        break;
      case 6:
        $("#title").text("Century Egg");
        $("#text").text("lovely image of an egg that dont look like egg");
        $("#image").attr("src", "img/century.jpg");
        break;
      case 7:
        $("#title").text("Mastar Egg");
        $("#text").text("lovely image of wisest most knowledgeable most handsome egg of all");
        $("#image").attr("src", "img/mastar.png");
        break;
    }
});
