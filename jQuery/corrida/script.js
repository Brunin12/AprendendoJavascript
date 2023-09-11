$(function () {
  carro1 = 0;
  carro2 = 0;
  velocidade = 30;
  carro1_w = false;
  carro2_w = false;
  pontos1 = 0;
  pontos2 = 0;
  reiniciar();

  $("#resetar").click(function () {
    reiniciar(true);
  });

  $(document).keyup(function (e) {
    if (e.keyCode == 39) {
      andar1();
    }

    if (e.keyCode == 37) {
      voltar1();
    }

    if (e.keyCode == 68) {
      andar2();
    }

    if (e.keyCode == 65) {
      voltar2();
    }
  });
});

function andar1() {
  if (carro1 < 720) {
    carro1 += velocidade;
    if (velocidade <= 100) velocidade += 0.5;
    $("#carro").css("margin-left", carro1);
  }
}

function andar2() {
  if (carro2 < 720) {
    carro2 += velocidade;
    if (velocidade <= 100) velocidade += 0.5;
    $("#carro2").css("margin-left", carro2);
  }
}

function voltar1() {
  if (carro1 > -120) {
    carro1 -= velocidade;

    $("#carro").css("margin-left", carro1);
  }
}

function voltar2() {
  if (carro2 > -120) {
    carro2 -= velocidade;
    $("#carro2").css("margin-left", carro2);
  }
}

function reiniciar(start = false) {
  if (!start) {
    carro1 = 0;
    carro2 = 0;
    velocidade = 30;
    carro1_w = false;
    carro2_w = false;
    $("#carro").css("margin-left", 0);
    $("#carro2").css("margin-left", 0);
  } else {
    if (confirm("reiniciar?")) {
      carro1 = 0;
      carro2 = 0;
      velocidade = 30;
      carro1_w = false;
      carro2_w = false;
      $("#carro").css("margin-left", 0);
      $("#carro2").css("margin-left", 0);
    }
  }
}

setInterval(function () {
  atualizar();
}, 1000);

function atualizar() {
  $("#pontos1").text(pontos1);
  $("#pontos2").text(pontos2);
  $("#vel").text(velocidade);

  if (carro1 >= 720 && carro2_w == false && carro1 > carro2) {
    alert("carro 1 ganhou");
    carro1_w = true;
    carro2_w = false;
    pontos1 += 1;
    reiniciar(true);
  }

  if (carro2 >= 720 && carro1_w == false && carro1 < carro2) {
    alert("carro 2 ganhou");
    carro1_w = false;
    carro2_w = true;
    pontos2 += 1;
    reiniciar(true);
  }
}
