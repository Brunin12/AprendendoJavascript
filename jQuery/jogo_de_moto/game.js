$(document).ready(function () {
  if (!gameover) {
    // Obter o jogador e o obstáculo do DOM
    var gameover = false;
    var player = $("#player");
    var obstacle = $("#obstacle");
    var obstacle2 = $("#obstacle2");
    var velocimetro = $("#velocity > p");
    var velocidade = 0;
    // Definir a largura da pista
    var trackWidth = $("#game").width();
    var gameHeight = $("#game").height();
    var posicao = Math.floor(Math.random() * trackWidth - 51);
    var posicao2 = Math.floor(Math.random() * trackWidth - 51);

    // Define as colisões
    var playerColisionBox = player[0].getBoundingClientRect();
    var obstacleColisionBox = obstacle[0].getBoundingClientRect();
    var obstacleColisionBox2 = obstacle2[0].getBoundingClientRect();
    var gameColisionBox = $("#game")[0].getBoundingClientRect();

    // Definir a posição inicial do jogador e do obstáculo
    var obstacleHeight = obstacle.height();
    var obstacleTop = obstacle.position().top;
    var obstacleHeight2 = obstacle2.height();
    var obstacleTop2 = obstacle2.position().top;
    var playerPosition = 175;
    player.css("bottom", 50 + "px");
    var obstaclePosition = 0;
    obstacle.css("top", obstaclePosition + "px");
    obstacle.css("left", posicao + "px");
    var obstaclePosition2 = 0;
    obstacle2.css("top", obstaclePosition2 + "px");
    obstacle2.css("left", posicao2 + "px");

    // Definir a velocidade do jogador e do obstáculo
    var playerSpeed = 0;
    var obstacleSpeed = 2;
    var obstacleSpeed2 = 7;

    // Lidar com o evento de teclado para mover o jogador
    $(document).keydown(function (event) {
      if (event.keyCode == 37) {
        var moveu = true;
        // seta esquerda
        playerSpeed = -5;
      } else if (event.keyCode == 39) {
        var moveu = true;
        // seta direita
        playerSpeed = 5;
      }
      if (moveu) {
        playerPosition += playerSpeed;
        player.css("left", playerPosition + "px");
        velocidade += 0.1;
        velocimetro.text(parseInt(velocidade));
      }
    });

    // Lidar com o evento de teclado para parar o jogador
    $(document).keyup(function (event) {
      if (event.keyCode == 32) {
        alert("Jogo pausado.");
      }
        if (event.keyCode == 37 || event.keyCode == 39) {
          playerSpeed = 0;
        }
    });
    setInterval(() => {}, 1000);

    // Animar o jogo
    setInterval(function () {
      posicao = Math.floor(Math.random() * trackWidth);
      posicao2 = Math.floor(Math.random() * trackWidth);
      // Mover o jogador
      playerPosition += playerSpeed;
      player.css("left", playerPosition + "px");
      playerColisionBox = player[0].getBoundingClientRect();

      if (playerColisionBox.right > gameColisionBox.right) {
        playerColisionBox.left =
          gameColisionBox.right - playerColisionBox.width;
      }
      if (playerColisionBox.left < gameColisionBox.left) {
        playerColisionBox.left = gameColisionBox.left;
      }

      obstacleColisionBox = obstacle[0].getBoundingClientRect();


      if (obstaclePosition + obstacleHeight >= gameHeight) {
        obstacle2.css("top", "0px");
        obstacle2.css("left", posicao2 + "px");
      }

      obstacleColisionBox2 = obstacle2[0].getBoundingClientRect();
      if (obstaclePosition2 + obstacleHeight2 >= gameHeight) {
        obstacle2.css("top", "0px");
        obstacle2.css("left", posicao2 + "px");
      }

      // Mover os obstáculos
      obstacleSpeed += 0.01;
      obstaclePosition += obstacleSpeed;
      obstacle.css("top", obstaclePosition + "px");
      if (obstaclePosition > trackWidth + 120) {
        obstaclePosition = 0;
        obstacle.css("top", obstaclePosition + "px");
        obstacle.css("left", posicao + "px");
      }

      obstacleSpeed2 += 0.02;
      obstaclePosition2 += obstacleSpeed2;
      obstacle2.css("top", obstaclePosition2 + "px");
      if (obstaclePosition2 > trackWidth + 120) {
        obstaclePosition2 = 0;
        obstacle2.css("top", obstaclePosition2 + "px");
        obstacle2.css("left", posicao2 + "px");
      }

      // Detectar colisão entre o jogador e o obstáculo
      playerColisionBox = player[0].getBoundingClientRect();
      obstacleColisionBox = obstacle[0].getBoundingClientRect();
      if (
        (playerColisionBox.right >= obstacleColisionBox.left &&
          playerColisionBox.left <= obstacleColisionBox.right &&
          playerColisionBox.bottom >= obstacleColisionBox.top &&
          playerColisionBox.top <= obstacleColisionBox.bottom) ||
        (playerColisionBox.right >= obstacleColisionBox2.left &&
          playerColisionBox.left <= obstacleColisionBox2.right &&
          playerColisionBox.bottom >= obstacleColisionBox2.top &&
          playerColisionBox.top <= obstacleColisionBox2.bottom)
      ) {
        if (!gameover) {
          gameover = true;
          location.reload();
          alert("Game over!");
        }
      }
    }, 30);
  }
});
