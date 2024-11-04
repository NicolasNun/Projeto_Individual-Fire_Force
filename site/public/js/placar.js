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

function update_pontos() {
  //aguardar();
  fetch("/usuarios/listar_pontos")
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
            // // cria um novo elemento div
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

          // finalizarAguardar();
        });
      } else {
        swal("Ops", "Houve um erro na API!", "warning");
      }
    })
    .catch(function (resposta) {
      console.error(resposta);
      // finalizarAguardar();
    });
}

function foto_podio(idPersonagem) {
  var endereco_foto;

  if (idPersonagem == 1) {
    endereco_foto = `<img src="./assets/personagens_icon/shinra_icon.jpg">`;
  } else if (idPersonagem == 2) {
    endereco_foto = `<img src="./assets/personagens_icon/arthur_icon.jpg">`;
  } else if (idPersonagem == 3) {
    endereco_foto = `<img src="./assets/personagens_icon/beni_icon.jpg">`;
  } else if (idPersonagem == 4) {
    endereco_foto = `<img src="./assets/personagens_icon/joker_icon.jpg">`;
  } else if (idPersonagem == 5) {
    endereco_foto = `<img src="./assets/personagens_icon/obi_icon.jpg">`;
  } else if (idPersonagem == 6) {
    endereco_foto = `<img src="./assets/personagens_icon/maki_icon.jpg">`;
  } else if (idPersonagem == 7) {
    endereco_foto = `<img src="./assets/personagens_icon/iris_icon.jpeg">`;
  } else {
    endereco_foto = `<img src="./assets/personagens_icon/tamaki_icon.jpg">`;
  }
  return endereco_foto;
}

function gerar_podio() {
  //aguardar();
  fetch("/usuarios/podio")
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          throw "Nenhum resultado encontrado!!";
        }
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          nome_usu_primeiro.innerHTML = resposta[0].usuario;
          nome_usu_segundo.innerHTML = resposta[1].usuario;
          nome_usu_terceiro.innerHTML = resposta[2].usuario;

          img_primeiro.innerHTML = foto_podio(resposta[0].fkPersonagem);
          img_segundo.innerHTML = foto_podio(resposta[1].fkPersonagem);
          img_terceiro.innerHTML = foto_podio(resposta[2].fkPersonagem);
          // finalizarAguardar();
        });
      } else {
        swal("Ops", "Houve um erro na API!", "warning");
      }
    })
    .catch(function (resposta) {
      console.error(resposta);
      // finalizarAguardar();
    });
}

function primeiro_a_acertar() {
  //aguardar();
  fetch("/usuarios/primeiro_a_gabaritar")
    .then(function (resposta) {
      if (resposta.ok) {
        if (resposta.status == 204) {
          throw "Nenhum resultado encontrado!!";
        }
        resposta.json().then(function (resposta) {
          console.log("Dados recebidos: ", JSON.stringify(resposta));
          nome_usu_primeiro_a_gabaritar.innerHTML = resposta[0].usuario;
          img_primeiro_a_gabaritar.innerHTML = foto_podio(
            resposta[0].fkPersonagem
          );
          // finalizarAguardar();
        });
      } else {
        swal("Ops", "Houve um erro na API!", "warning");
      }
    })
    .catch(function (resposta) {
      console.error(resposta);
      // finalizarAguardar();
    });
}

function chamar_funcoes() {
  update_pontos();
  foto_podio();
  gerar_podio();
  update_pontos();

  setInterval(() => {
    chamar_funcoes();
  }, 2000);
}
