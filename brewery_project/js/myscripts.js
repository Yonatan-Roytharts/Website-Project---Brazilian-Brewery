$(document).ready(function(){
  $("#holambier_button").click(function(){
    $("#homepage").hide();
    $("#holambier").css("display", "block");

    $("h4").click(function() {
      $(".description-box").css("display", "block");

      $(".description-box span").click(function() {
        $(".description-box").css("display", "none");
      })
    })
  });

  $("#holambra_button").click(function(){
    $("#homepage").hide();
    $("#holambra").css("display", "block");
  })

  $("#bieren_button").click(function(){
    $("#homepage").hide();
    $("#bieren").css("display", "block");
  })

  $("#contato_button").click(function(){
    $("#homepage").hide();
    $("#contato").css("display", "block");
  })

});
