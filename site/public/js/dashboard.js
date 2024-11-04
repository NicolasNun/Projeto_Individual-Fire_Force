nome_usuario.innerHTML = sessionStorage.NOME_USUARIO;

var fk_personagem = sessionStorage.PERSONAGEM_FAVORITO;

if (fk_personagem == 1) {
  foto_perfil.innerHTML = `<img src="./assets/personagens_icon/shinra_icon.jpg">`;
} else if (fk_personagem == 2) {
  foto_perfil.innerHTML = `<img src="./assets/personagens_icon/arthur_icon.jpg">`;
} else if (fk_personagem == 3) {
  foto_perfil.innerHTML = `<img src="./assets/personagens_icon/beni_icon.jpg">`;
} else if (fk_personagem == 4) {
  foto_perfil.innerHTML = `<img src="./assets/personagens_icon/joker_icon.jpg">`;
} else if (fk_personagem == 5) {
  foto_perfil.innerHTML = `<img src="./assets/personagens_icon/obi_icon.jpg">`;
} else if (fk_personagem == 6) {
  foto_perfil.innerHTML = `<img src="./assets/personagens_icon/maki_icon.jpg">`;
} else if (fk_personagem == 7) {
  foto_perfil.innerHTML = `<img src="./assets/personagens_icon/iris_icon.jpeg">`;
} else {
  foto_perfil.innerHTML = `<img src="./assets/personagens_icon/tamaki_icon.jpg">`;
}

var dados_votos = {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        label: "Número de escolhas",
        data: [],
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
      },
    },
    backgroundColor: [
      "rgb(255, 51, 0)",
      "rgb(255, 90, 0)",
      "rgb(255, 129, 0)",
      "rgb(255, 129, 0)",
      "rgb(255, 193, 0)",
      "rgb(255, 193, 0)",
      "rgb(255, 244, 0)",
      "rgb(255, 244, 0)",
    ],
  },
};

var dados_quiz = {
  type: "bar",
  data: {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "Usuários por pontuação",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        borderWidth: 1,
      },
    ],
  },
  options: {
    beginAtZero: true,
    backgroundColor: "rgb(198, 38, 14)",
  },
};

function contarUsu() {
  fetch("/usuarios/listar_quantidade_usu", {
    method: "get",
  }).then(function (resposta) {
    if (resposta.ok) {
      resposta.json().then((json) => {
        numero_de_usuarios.innerHTML = `${json[0].qtdUsu}`;
      });
    }
  });
}

function contarVotoPersonagem() {
  fetch("/usuarios/mais_votado", {
    method: "get",
  }).then(function (resposta) {
    if (resposta.ok) {
      resposta.json().then((json) => {
        if (json[0].idPersonagem == 1) {
          img_fav.innerHTML = `<img src="./assets/personagens_icon/shinra_icon.jpg">`;
        } else if (json[0].idPersonagem == 2) {
          img_fav.innerHTML = `<img src="./assets/personagens_icon/arthur_icon.jpg">`;
        } else if (json[0].idPersonagem == 3) {
          img_fav.innerHTML = `<img src="./assets/personagens_icon/beni_icon.jpg">`;
        } else if (json[0].idPersonagem == 4) {
          img_fav.innerHTML = `<img src="./assets/personagens_icon/joker_icon.jpg">`;
        } else if (json[0].idPersonagem == 5) {
          img_fav.innerHTML = `<img src="./assets/personagens_icon/obi_icon.jpg">`;
        } else if (json[0].idPersonagem == 6) {
          img_fav.innerHTML = `<img src="./assets/personagens_icon/maki_icon.jpg">`;
        } else if (json[0].idPersonagem == 7) {
          img_fav.innerHTML = `<img src="./assets/personagens_icon/iris_icon.jpeg">`;
        } else {
          img_fav.innerHTML = `<img src="./assets/personagens_icon/tamaki_icon.jpg">`;
        }
      });
    }
  });
}

var ctx = document.getElementById("num_escolhas");
var chart_votos = new Chart(ctx, dados_votos);
function votos() {
  fetch("/usuarios/numero_votos", {
    method: "get",
  }).then(function (resposta) {
    if (resposta.ok) {
      resposta.json().then((json) => {
        for (var i = 0; i < json.length; i++) {
          dados_votos.data.datasets[0].data.push(json[i].voto);
          dados_votos.data.labels.push(json[i].nomePersonagem);
          chart_votos.update();
        }
      });
    }
  });
}

var ct = document.getElementById("pontuacoes");
var chart_quiz = new Chart(ct, dados_quiz);
function pontuacoes_quiz() {
  fetch("/usuarios/grafi_pontos", {
    method: "get",
  }).then(function (resposta) {
    if (resposta.ok) {
      resposta.json().then((json) => {
        for (var i = 0; i < json.length; i++) {
          if (json[i].pontuacao == 0) {
            dados_quiz.data.datasets[0].data[0] = json[i].qtd_usu;
          } else if (json[i].pontuacao == 1) {
            dados_quiz.data.datasets[0].data[1] = json[i].qtd_usu;
          } else if (json[i].pontuacao == 2) {
            dados_quiz.data.datasets[0].data[2] = json[i].qtd_usu;
          } else if (json[i].pontuacao == 3) {
            dados_quiz.data.datasets[0].data[3] = json[i].qtd_usu;
          } else if (json[i].pontuacao == 4) {
            dados_quiz.data.datasets[0].data[4] = json[i].qtd_usu;
          } else if (json[i].pontuacao == 5) {
            dados_quiz.data.datasets[0].data[5] = json[i].qtd_usu;
          } else if (json[i].pontuacao == 6) {
            dados_quiz.data.datasets[0].data[6] = json[i].qtd_usu;
          } else if (json[i].pontuacao == 7) {
            dados_quiz.data.datasets[0].data[7] = json[i].qtd_usu;
          } else if (json[i].pontuacao == 8) {
            dados_quiz.data.datasets[0].data[8] = json[i].qtd_usu;
          } else if (json[i].pontuacao == 9) {
            dados_quiz.data.datasets[0].data[9] = json[i].qtd_usu;
          } else if (json[i].pontuacao == 10) {
            dados_quiz.data.datasets[0].data[10] = json[i].qtd_usu;
          }
          chart_quiz.update();
        }
      });
    }
  });
}

votos();

setInterval(() => {
  contarVotoPersonagem();
  contarUsu();
}, 2000);

setInterval(() => {
  votos();
  dados_votos.data.datasets[0].data = [];
  dados_votos.data.labels = [];
  chart_votos.update;
  pontuacoes_quiz();
  dados_quiz.data.datasets[0].data = [];
  chart_quiz.update;
}, 30000);
