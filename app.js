$(function() {
  // your code here
  // part 1
  $("#toggleButton").on("click", function(){
    $("#myParagraph").toggle();
  });
  // part 2
  $("#colorButton").on("click", function(){
    $("#colorDiv").css("background-color", "yellow");
  });
  // part 3
  $("#addClassButton").on("click", function(){
    $("#classDiv").addClass("newclass")
  }); 
  $("#removeClassButton").on("click", function() {
    $("#classDiv").removeClass("newclass")
  });
  // part 4
  $("#fadeInButton").on("click", function(){
    $("#fadeDiv").fadeIn()
  });
  $("#fadeOutButton").on("click", function(){
    $("#fadeDiv").fadeOut()
  });
  // part 5
  $("#slideUpButton").on("click", function(){
    $("#slideDiv").slideUp()
  })
  $("#slideDownButton").on("click", function(){
    $("#slideDiv").slideDown()
  })

})