let numeros = [];
let cont = 0;
let div = document.getElementById("two");

function add() {
  let txtn1 = document.getElementById("n1");
  let n1 = Number(txtn1.value);
  let select = document.getElementById("selTab");
  if (n1 > 100 || n1 < 1) {
    alert("erro, digite numeros entre 1 e 100");
  } else {
    if (numeros.indexOf(n1) == -1) {
      numeros.push(n1);
      numeros.sort();
      if (txtn1.value.length == 0) {
        alert("para adicionar um valor e necessario digitar ele primeiro");
      } else {
        let item = document.createElement("option");
        item.text = `numero ${n1} adicionado`;
        item.value = cont;
        select.appendChild(item);
        div.innerHTML = "";
        cont++;
      }
    } else {
      alert("numero existente ou invalido");
    }
  }
}

function finalizar() {
  let soma = 0;
  let maior = 0;
  let menor = 101;
  if (numeros.length > 0) {
    for (let pos in numeros) {
      if (numeros[pos] >= maior) {
        maior = numeros[pos];
      }
      if (numeros[pos] <= menor) {
        menor = numeros[pos];
      }

      soma += numeros[pos];
    }
    let media = soma / numeros.length;
    media.toFixed();
    div.innerHTML = `<br>temos ao todo ${numeros.length} numeros`;
    div.innerHTML += `<br>o maior numero encontrado foi ${maior}`;
    div.innerHTML += `<br>o menor numero encontrado foi ${menor}`;
    div.innerHTML += `<br>somando todos os valores nos temos ${soma}`;
    div.innerHTML += `<br>a media dos valores é ${media}`;
  } else {
    alert("adicione algo primeiro");
  }
}

let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");

btn.addEventListener("click", finalizar);
btn2.addEventListener("click", add);
