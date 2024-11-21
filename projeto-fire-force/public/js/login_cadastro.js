function entrar() {
  var emailVar = input_usuario.value;
  var senhaVar = input_senha.value;

  if (emailVar == "" || senhaVar == "") {
    swal("Ops", "Preencha todos os campos!", "error");
    finalizarAguardar();
    return false;
  } else {
    swal("Parabéns", "Login realizado com sucesso!", "success");
    setInterval("...", 2000);

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailServer: emailVar,
        senhaServer: senhaVar,
      }),
    })
      .then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!");

        if (resposta.ok) {
          console.log(resposta);

          resposta.json().then((json) => {
            console.log(json);
            console.log(JSON.stringify(json));

            sessionStorage.EMAIL_USUARIO = json.email;
            sessionStorage.NOME_USUARIO = json.usuario;
            sessionStorage.ID_USUARIO = json.idUsuario;
            sessionStorage.PERSONAGEM_FAVORITO = json.fkPersonagem;

            setTimeout(function () {
              window.location = "./dashboard.html";
            }, 3000); // apenas para exibir o loading
          });
        } else {
          swal("Ops", "Email e/ou senha inválido(s)", "error");

          resposta.text().then((texto) => {
            console.error(texto);
            finalizarAguardar(texto);
          });
        }
      })
      .catch(function (erro) {
        console.log(erro);
      });

    return false;
  }
}

function cadastrar() {
  var usuarioVar = input_username.value;
  var emailVar = input_email.value;
  var senhaVar = input_senha.value;
  var confirmarSenhavar = input_confirmar_senha.value;
  var personagemVar = select_personagem_favorito.value;

  if (
    usuarioVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confirmarSenhavar == "" ||
    personagemVar == ""
  ) {
    swal("Ops", "Preencha todos os campos!", "error");

    finalizarAguardar();
    return false;
  } else if (usuarioVar.length < 5 || usuarioVar.length > 10) {
    swal(
      "Ops",
      "Nome de usuário inválido. Por favor, insira um nome de 5 a 10 caracteres",
      "warning"
    );
  } else if (
    emailVar.indexOf("@") == -1 ||
    emailVar.indexOf(".") == -1 ||
    emailVar.length < 7
  ) {
    swal("Ops", "Por favor, insira um e-mail válido", "warning");
  } else if (senhaVar.length < 4) {
    swal(
      "Ops",
      "Por favor,insira uma senha com pelo menos 4 caracteres",
      "warning"
    );
  } else if (confirmarSenhavar != senhaVar) {
    swal("Ops", "As senhas não correspondem", "warning");
  } else {
    setInterval("oi", 5000);

    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuarioServer: usuarioVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
        personagemServer: personagemVar,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          swal(
            "Parábens",
            "Cadastro realizado com sucesso redirecionando a tela de login 😄...!",
            "success"
          );

          setTimeout(() => {
            window.location = "login.html";
          }, 3000);

          limparFormulario();
          finalizarAguardar();
        } else {
          swal("Ops", "Mais de um usuário com o mesmo login e senha 😭!");
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
      });

    return false;
  }
}

function fotoPersonagem() {
  img_personagem.className = "";
  var num_personagem_favorito = select_personagem_favorito.value;

  if (num_personagem_favorito == 1) {
    img_personagem.classList.add(`shinra`);
  } else if (num_personagem_favorito == 2) {
    img_personagem.classList.add(`arthur`);
  } else if (num_personagem_favorito == 3) {
    img_personagem.classList.add(`benimaru`);
  } else if (num_personagem_favorito == 4) {
    img_personagem.classList.add(`joker`);
  } else if (num_personagem_favorito == 5) {
    img_personagem.classList.add(`obi`);
  } else if (num_personagem_favorito == 6) {
    img_personagem.classList.add(`maki`);
  } else if (num_personagem_favorito == 7) {
    img_personagem.classList.add(`iris`);
  } else {
    img_personagem.classList.add(`tamaki`);
  }
}
