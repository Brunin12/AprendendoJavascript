$(function () {
  // Quando a paguina carregar...
  $("#esconder").click(function () {
    // Quando o botão for apertado ..
    $("h1").hide();
    // .. Esconda o "<h1>Ola Mundo!</h1>" Instantaneamente
  });

  $("#esconder2").click(function () {
    // Quando o botão for apertado ..
    $("h1").hide("slow");
    // .. Esconda o "<h1>Ola Mundo!</h1>" Devagar
  });

  $("#esconder3").click(function () {
    // Quando o botão for apertado ..
    $("h1").hide("fast");
    // .. Esconda o "<h1>Ola Mundo!</h1>" Rapido
  });

  $("#alternar").click(function () {
    // Quando o botão for apertado ..
    $("h1").toggle();
    // .. Alterne o "<h1>Ola Mundo!</h1>""
  });
});
