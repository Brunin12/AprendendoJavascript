$(function () {
  $('button:first').click(function () {
    var cor = $('#cor').val();
    $('p').css("color", cor);
  });

  $('#vermelho').click(function () {
    $("p").css("color", "red");
  });


  $("#azul").click(function () {
    $("p").css("color", "blue");
  });

});
