function update_pontos() {
  fetch("/placar/listar_pontos")
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          throw "Nenhum resultado encontrado!!";
        }
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));

          var table = document.getElementById("infos");
          for (var contador = 0; contador < resposta.length; contador++) {
            var publicacao = resposta[contador];
            // criando e manipulando elementos do HTML via JavaScript

            console.log(publicacao);
            // cria um novo elemento div
            // e dá à ele conteúdo
            var tdUsuario = document.createElement("td");
            var tdpontuacao = document.createElement("td");
            var tdPercent = document.createElement("td");
            var tableTr = document.createElement("tr");
            var hr = document.createElement("hr");

            tdUsuario.className = "text";
            tdpontuacao.className = "text";
            tdPercent.className = "text";

            tdUsuario.innerHTML = `${publicacao.usuario}`;
            tdpontuacao.innerHTML = `${publicacao.pontuacao}`;
            tdPercent.innerText = `${publicacao.percent}%`;

            // (APPENDCHILD) Cria um novo elemento de parágrafo e adiciona-o ao final do documento

            tableTr.appendChild(tdUsuario);
            tableTr.appendChild(tdpontuacao);
            tableTr.appendChild(tdPercent);
            table.appendChild(tableTr);
          }
        });
      } else {
        swal("Ops", "Houve um erro na API!", "warning");
      }
    })
    .catch(function (resposta) {
      console.error(resposta);
    });
}

function gerar_podio() {
  fetch("/placar/podio")
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          throw "Nenhum resultado encontrado!!";
        }
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          if (resposta.length == 3) {
            nome_usu_primeiro.innerHTML = resposta[0].usuario;
            nome_usu_segundo.innerHTML = resposta[1].usuario;
            nome_usu_terceiro.innerHTML = resposta[2].usuario;

            img_primeiro.innerHTML = carregarFoto(resposta[0].fkPersonagem);
            img_segundo.innerHTML = carregarFoto(resposta[1].fkPersonagem);
            img_terceiro.innerHTML = carregarFoto(resposta[2].fkPersonagem);
          } else if (resposta.length == 2) {
            nome_usu_primeiro.innerHTML = resposta[0].usuario;
            nome_usu_segundo.innerHTML = resposta[1].usuario;

            img_primeiro.innerHTML = carregarFoto(resposta[0].fkPersonagem);
            img_segundo.innerHTML = carregarFoto(resposta[1].fkPersonagem);
          } else {
            nome_usu_primeiro.innerHTML = resposta[0].usuario;

            img_primeiro.innerHTML = carregarFoto(resposta[0].fkPersonagem);
          }
        });
      } else {
        swal("Ops", "Houve um erro na API!", "warning");
      }
    })
    .catch(function (resposta) {
      console.error(resposta);
    });
}

function maisRico() {
  fetch("/placar/maisRico")
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          throw "Nenhum resultado encontrado!!";
        }
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          nome_mais_rico.innerHTML = resposta[0].usuario;
          img_mais_rico.innerHTML = carregarFoto(resposta[0].fkPersonagem);
        });
      } else {
        swal("Ops", "Houve um erro na API!", "warning");
      }
    })
    .catch(function (resposta) {
      console.error(resposta);
    });
}

function chamar_funcoes() {
  update_pontos();
  gerar_podio();
  maisRico();
}
