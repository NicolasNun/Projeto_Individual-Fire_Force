function contarUsu() {
  fetch("/dashboard/listar_quantidade_usu", {
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
  fetch("/dashboard/mais_votado", {
    method: "get",
  }).then(function (resposta) {
    if (resposta.ok) {
      resposta.json().then((json) => {
        img_fav.innerHTML = carregarFoto(json[0].idPersonagem);
      });
    }
  });
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

var dados_gacha = {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        label: "Usuarios por dinheiro",
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


var ctx = document.getElementById("num_escolhas");
var chart_votos = new Chart(ctx, dados_votos);

function votos() {
  fetch("/dashboard/numero_votos", {
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
  fetch("/dashboard/grafi_pontos", {
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

var cty = document.getElementById("qtd_fire_cash");
var chart_gacha = new Chart(cty, dados_gacha);

function qtd_fire_cash() {
  fetch("/dashboard/qtd_fire_cash", {
    method: "get",
  }).then(function (resposta) {
    if (resposta.ok) {
      resposta.json().then((json) => {
        for (var i = 0; i < json.length; i++) {
          dados_gacha.data.datasets[0].data.push(json[i].fireCash);
          dados_gacha.data.labels.push(json[i].usuario);
          chart_gacha.update();
        }
      });
    }
  });
}

function chamarFuncoes() {
  contarUsu();
  contarVotoPersonagem();
  votos();
  pontuacoes_quiz();
  qtd_fire_cash();
}
