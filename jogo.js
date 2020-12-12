let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;

let clearMosquitoTempo = 1500;
var nivel = window.location.search;
nivel = nivel.replace("?", "");
if (nivel === "normal") {
    //1500
    clearMosquitoTempo = 1500;
} else if (nivel === "dificil") {
    //1000
    clearMosquitoTempo = 1000;
} else if (nivel === "x-hard") {
    //750
    clearMosquitoTempo = 750;
}

function ajustarTamanhoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
  console.log(altura, largura);
}

ajustarTamanhoJogo();

var cronometro = setInterval(function () {
  tempo -= 1;

  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criarMosquito);
    window.location.href = "/vitoria.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);

function posicaoRandom() {
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if (vidas > 3) {
      window.location.href = "/game_over.html";
    } else {
      document.getElementById("v" + vidas).src = "/imagens/coracao_vazio.png";

      vidas++;
    }
  }

  var posicaoX = Math.floor(Math.random() * largura) - 90;
  var posicaoY = Math.floor(Math.random() * altura) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  var mosquito = document.createElement("img");
  mosquito.src = "imagens/mosca.png";
  mosquito.className = ladoAleatorio() + " " + tamanhoAleatorio();
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
}
let criarMosquito = setInterval(function () {
  posicaoRandom();
}, clearMosquitoTempo);

// função que torna o tamanho do mosquito aleatorio
function tamanhoAleatorio() {
  let classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
  }
}

// função que torna dinamico o lado que o mosquito olha
function ladoAleatorio() {
  let classe = Math.floor(Math.random() * 2);
  switch (classe) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
}
