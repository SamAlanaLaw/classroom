$(document).ready(function() {
$(".locations").on("click", function(){
  console.log("It Worked")
  $(".logo").toggleClass("opacity").addClass("jump");
});
$(".logo").on("mousedown", function(){
  $(".locations, .pricing, .features").toggleClass("tilt");
});
$(".login").on("mouseenter", function(){
  $(".signup").css("background-color", "pink");
});
$(".signup").on("mouseenter", function(){
  $(".login").css("color", "blue");
});
});