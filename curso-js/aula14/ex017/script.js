function confirmar() {
  num = document.getElementById("n1");
  n = Number(num.value);

  if (num.value.length == 0) {
    alert("por favor digite um numero");
  } else {
    let tab = document.getElementById("selTab");
    let c = 1;
    tab.innerHTML = "";

    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `tab${c}`
      tab.appendChild(item);
      c++;
    }
  }
}

let btn = document.getElementById("btn");

btn.addEventListener("click", confirmar);
