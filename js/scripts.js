$(document).ready(function(){
  $("button#light-theme").click(function(){
   $("body").removeClass();
   $("img").removeClass();
  });
  $("button#dark-theme").click(function(){
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
  $("#frame").click(function(){
    $("img").removeClass();
    $("img").addClass("dog-frame");
  });
});
