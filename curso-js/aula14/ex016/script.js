function calcular() {
  var inicio = document.getElementById("inicio");
  inicio = Number(inicio.value);
  var fim = document.getElementById("fim");
  fim = Number(fim.value);
  var passo = document.getElementById("passo");
  passo = Number(passo.value);
  var res = document.getElementById("two");
  res.innerHTML = "";

  if (inicio < fim) {
    if (passo <= 0) {
      alert(
        "os passos não podem ser menores ou iguais a zero, irei  conciderar como 1"
      );
      passo = 1;
    }
    while (inicio <= fim) {
      res.innerHTML += inicio + ' \u{1F449} ';
      inicio += passo;
    }
    res.innerHTML += "\u{1F3C1}";
  } else {
    while (inicio >= fim) {
      res.innerHTML += inicio + ' \u{1F449} ';
      inicio -= passo;
    }
    res.innerHTML += '\u{1F3C1}';
  }
}
var btn = document.getElementById("btn");

btn.addEventListener("click", calcular);
