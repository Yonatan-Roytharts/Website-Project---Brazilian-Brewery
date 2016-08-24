$(document).ready(function(){
  $("#holambier_button").click(function(){
    $("#homepage").hide();
    $("#holambier").css("display", "block");

    $("h4").click(function() {
      $("#desc-box1").css("display", "block");

      $(".description-box span").click(function() {
        $(".description-box").css("display", "none");
      });
    });
  });

  $("#holambra_button").click(function(){
    $("#homepage").hide();
    $("#holambra").css("display", "block");

    $("#sleep").click(function(){
      window.open("https://ca.hotels.com/search.do?destination-id=1902171");
    });

    $("#btn2").click(function() {
      $("#desc-box2").css("display", "block");

      $(".description-box span").click(function() {
        $(".description-box").css("display", "none");
      });
    });
  });

  $("#bieren_button").click(function(){
    $("#homepage").hide();
    $("#bieren").css("display", "block");
  });

  $("#contato_button").click(function(){
    $("#homepage").hide();
    $("#contato").css("display", "block");

    $("#blog").click(function(){
      window.open("https://holambier.wordpress.com/");
    });
  });
});
