var btnM = document.querySelector("input#mcl");
var btnF = document.querySelector("input#fmn");
var btnS = document.querySelector("input#sbm");

isM = false;
isF = false;

btnM.addEventListener("click", () => {
  isM = true;
  isF = false;
});

btnF.addEventListener("click", () => {
  isF = true;
  isM = false;
});

btnS.addEventListener("click", () => {
  var txtN = document.querySelector("input#txtNascimento");
  var N = Number(txtN.value).toFixed();
  var text = document.querySelector("div#one");
  var res = document.querySelector("div#two");
  var data = new Date();
  var ano = data.getFullYear();
  var idade = ano - N;
  if (isM) {
    if (idade > 0) {
      if (idade < 12) {
        res.innerHTML = `detectamos uma criança de ${idade} anos`;
        res.innerHTML += `<img src="img/criancaM.jpg">`;
      } else if (idade < 18) {
        res.innerHTML = `detectamos um adolecente de ${idade} anos`;
        res.innerHTML += `<img src="img/adolecenteM.jpg">`;
      } else if (idade < 50) {
        res.innerHTML = `detectamos um homem de ${idade} anos`;
        res.innerHTML += `<img src="img/adultoM.jpg">`;
      } else if (idade < 125) {
        res.innerHTML = `detectamos um idoso de ${idade} anos`;
        res.innerHTML += `<img src="img/idosoM.jpg">`;
      } else {
        alert("erro, verifique os dados e tente novamente");
      }
    } else {
      alert("erro, verifique os dados e tente novamente");
    }
  } else if (isF) {
    if (idade > 0) {
      if (idade < 12) {
        res.innerHTML = `detectamos uma criança de ${idade} anos`;
        res.innerHTML += `<img src="img/criancaF.jpg">`;
      } else if (idade < 18) {
        res.innerHTML = `detectamos uma adolecente de ${idade} anos`;
        res.innerHTML += `<img src="img/adolecenteF.jpg">`;
      } else if (idade < 50) {
        res.innerHTML = `detectamos uma mulher de ${idade} anos`;
        res.innerHTML += `<img src="img/adultaF.jpg">`;
      } else if (idade < 135) {
        res.innerHTML = `detectamos uma idosa de ${idade} anos`;
        res.innerHTML += `<img src="img/idosaF.jpg">`;
      } else {
        alert("erro, verifique os dados e tente novamente");
      }
    } else {
      alert("erro, verifique os dados e tente novamente");
    }
  } else {
    alert("erro, verifique os dados e tente novamente");
  }
});
