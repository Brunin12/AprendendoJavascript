let canvas = document.querySelector("#canvas");




class Cobra {
  constructor() {
    this.x = x;
    this.y = y;
    this.face = 1;
    this.color = "#eee";
    this.tamanho = 1;
    this.tampw = 30;
    this.tamph = 30;
    this.velocidade = 30;
    this.ctx = canvas.getContext("2d");
  }

  andar() {
    if (face == 1) {
      this.x += this.velocidade;
    } else if (face == 2) {
      this.y += this.velocidade;
    } else if (face == 3) {
      this.x -= this.velocidade;
    } else if (face == 4) {
      this.y -= this.velocidade;
    }
  }

}

class Maca {
  constructor() {
    this.x = Math.floor(10) * 10;
    this.y = Math.floor(10) * 10;
    this.color = "#f00";
    this.tampw = 30;
    this.tamph = 30;
    this.ctx = canvas.getContext("2d");
  }
}






let ctx = canvas.getContext("2d");
x = 0;
y = 0;
face = 1;

let maca = new Maca();
let cobra = new Cobra();

function draw() {
    ctx.clearRect(0, 0, 600, 600);
    cobra.ctx.fillStyle = cobra.color;
    cobra.ctx.fillRect(x, y, cobra.tampw, cobra.tamph);

        maca.ctx.fillStyle = maca.color;
        maca.ctx.fillRect(x, y, maca.tampw, maca.tamph);
}


document.addEventListener('keydown', (e) => {
  if (e.key == 'd') {
    face = 1;
  } else if (e.key == "w") {
    face = 2;
  } else if (e.key == "a") {
    face = 3;
  } else if (e.key == "s") {
    face = 4;
  }

})

setInterval(() => {
  cobra.andar()
  draw();
}, 100/15);
