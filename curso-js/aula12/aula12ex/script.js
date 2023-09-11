var data = new Date();
var hora = data.getHours();
var body = document.querySelector("body");
var div1 = document.querySelector("div#one  ");
var section = document.querySelector("section");
var div2 = document.querySelector("div#two");
if (hora < 12) {
  div1.innerHTML = `Agora são ${hora} horas da manha`;
  div2.innerHTML = `<img src="img/manha.jpg">`;
  body.style.background = "#6e5f0a";
  
} else if (hora <= 18) {
  div1.innerHTML = `Agora são ${hora} horas da tarde`;
  div2.innerHTML = `<img src="img/tarde.jpg">`;
  body.style.background = "#ff9100";
  
} else {
  div1.innerHTML = `<p>Agora são ${hora} horas da noite</p>`;
  div2.innerHTML = `<img src="img/noite.jpg">`;
  body.style.background = "#2e2b2c";
  body.style.color = "#fff";
  div1.style.color = "#000";
}
