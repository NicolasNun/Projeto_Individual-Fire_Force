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

function mudarChute() {
  if (span_chute_cartas_repetidas.innerHTML == 2) {
    span_chute_cartas_repetidas.innerHTML = 3;
    return;
  }

  span_chute_cartas_repetidas.innerHTML = 2;
}

function exibirOpcoesCartas() {
  if (painel_escolha_carta.style.display == "grid") {
    painel_escolha_carta.style.display = "none";
    return;
  }

  painel_escolha_carta.style.display = "grid";
}

const opcoes_cartas = {
  opcao_carta_um: "./assets/img_gacha/arthur.jpg",
  opcao_carta_dois: "./assets/img_gacha/victor.jpg",
  opcao_carta_tres: "./assets/img_gacha/iris.jpg",
  opcao_carta_quatro: "./assets/img_gacha/hibana.jpg",
  opcao_carta_cinco: "./assets/img_gacha/burns.jpg",
  opcao_carta_seis: "./assets/img_gacha/obi.jpg",
  opcao_carta_sete: "./assets/img_gacha/vulcan.jpg",
  opcao_carta_oito: "./assets/img_gacha/hinawa.jpg",
  opcao_carta_nove: "./assets/img_gacha/benimaru.jpg",
  opcao_carta_dez: "./assets/img_gacha/konro.jpg",
  opcao_carta_onze: "./assets/img_gacha/tamaki.jpg",
  opcao_carta_doze: "./assets/img_gacha/ogun.jpg",
  opcao_carta_treze: "./assets/img_gacha/pan.jpg",
  opcao_carta_quatorze: "./assets/img_gacha/kurono.jpg",
  opcao_carta_quinze: "./assets/img_gacha/kayoko.jpg",
  opcao_carta_dezesseis: "./assets/img_gacha/shinra.jpg",
  opcao_carta_dezessete: "./assets/img_gacha/joker.jpg",
  opcao_carta_dezoito: "./assets/img_gacha/rekka.jpg",
  opcao_carta_dezenove: "./assets/img_gacha/karim.jpg",
  opcao_carta_vinte: "./assets/img_gacha/li.jpg",
  opcao_carta_vinte_um: "./assets/img_gacha/asako.jpg",
  opcao_carta_vinte_dois: "./assets/img_gacha/sho.jpg",
};

function mudarPersonagemBonus(opcao_carta) {
  img_personagem_bonus.src = opcoes_cartas[opcao_carta];

  painel_escolha_carta.style.display = "none";
}

function avancar_regras(instrucao) {
  if (instrucao == "jogar") {
    tela_gacha_regras.style.display = "none";
    tela_gacha.style.display = "flex";
    botao_girar_cartas.style.display = "flex";
    return;
  }

  div_regras_iniciais.style.display = "none";
  div_regras_finais.style.display = "flex";
}

// 22 cartas
const carta_arthur = '<img src="./assets/img_gacha/arthur.jpg">';
const carta_victor = '<img src="./assets/img_gacha/victor.jpg">';
const carta_iris = '<img src="./assets/img_gacha/iris.jpg">';
const carta_hibana = '<img src="./assets/img_gacha/hibana.jpg">';
const carta_burns = '<img src="./assets/img_gacha/burns.jpg">';
const carta_obi = '<img src="./assets/img_gacha/obi.jpg">';
const carta_vulcan_family = '<img src="./assets/img_gacha/vulcan.jpg">';
const carta_hinawa = '<img src="./assets/img_gacha/hinawa.jpg">';
const carta_benimaru = '<img src="./assets/img_gacha/benimaru.jpg">';
const carta_konro = '<img src="./assets/img_gacha/konro.jpg">';
const carta_tamaki = '<img src="./assets/img_gacha/tamaki.jpg">';
const carta_ogun = '<img src="./assets/img_gacha/ogun.jpg">';
const carta_pan = '<img src="./assets/img_gacha/pan.jpg">';
const carta_kurono = '<img src="./assets/img_gacha/kurono.jpg">';
const carta_kayoko = '<img src="./assets/img_gacha/kayoko.jpg">';
const carta_shinra = '<img src="./assets/img_gacha/shinra.jpg">';
const carta_joker = '<img src="./assets/img_gacha/joker.jpg">';
const carta_rekka = '<img src="./assets/img_gacha/rekka.jpg">';
const carta_karim = '<img src="./assets/img_gacha/karim.jpg">';
const carta_li = '<img src="./assets/img_gacha/li.jpg">';
const carta_asako = '<img src="./assets/img_gacha/asako.jpg">';
const carta_sho = '<img src="./assets/img_gacha/sho.jpg">';

const cartas = [
  carta_arthur,
  carta_victor,
  carta_iris,
  carta_hibana,
  carta_burns,
  carta_obi,
  carta_vulcan_family,
  carta_hinawa,
  carta_benimaru,
  carta_konro,
  carta_tamaki,
  carta_ogun,
  carta_pan,
  carta_kurono,
  carta_kayoko,
  carta_shinra,
  carta_joker,
  carta_rekka,
  carta_karim,
  carta_li,
  carta_asako,
  carta_sho,
];

var fire_cash = 100;

span_fire_cash.innerHTML = fire_cash;

function girar() {
  // const personagem_bonus = Number(select_personagem_bonus.value);
  const chute_cartas_repetidas = Number(span_chute_cartas_repetidas.value);

  if (fire_cash < 10) {
    alert("Fire cash insuficiente");
    div_resultado.innerHTML =
      "<b>Recarregue a pagína para jogar novamente.</b>";
  } else {
    fire_cash -= 10;
    span_fire_cash.innerHTML = fire_cash;
    var primeira_carta = 0;
    var segunda_carta = 0;
    var terceira_carta = 0;

    for (var i = 1; i <= 3; i++) {
      var numero_aleatorio = parseInt(Math.random() * cartas.length);
      console.log(cartas[numero_aleatorio]);

      if (i == 1) {
        carta_um.innerHTML = cartas[numero_aleatorio];
      } else if (i == 2) {
        carta_dois.innerHTML = cartas[numero_aleatorio];
      } else {
        carta_tres.innerHTML = cartas[numero_aleatorio];
      }

      if (primeira_carta == 0) {
        primeira_carta = numero_aleatorio;
      } else if (segunda_carta == 0) {
        segunda_carta = numero_aleatorio;
      } else {
        terceira_carta = numero_aleatorio;
      }
    }

    // if (
    //   personagem_bonus == primeira_carta &&
    //   personagem_bonus == segunda_carta &&
    //   personagem_bonus == terceira_carta
    // ) {
    //   fire_cash += 100;
    // } else if (
    //   (personagem_bonus == primeira_carta &&
    //     personagem_bonus == segunda_carta) ||
    //   (personagem_bonus == primeira_carta &&
    //     personagem_bonus == terceira_carta) ||
    //   (personagem_bonus == segunda_carta && personagem_bonus == terceira_carta)
    // ) {
    //   fire_cash += 50;
    // } else if (
    //   personagem_bonus == primeira_carta ||
    //   personagem_bonus == segunda_carta ||
    //   personagem_bonus == terceira_carta
    // ) {
    //   fire_cash += 20;
    // } else {
    //   fire_cash = fire_cash;
    // }

    // if (
    //   primeira_carta == segunda_carta &&
    //   primeira_carta == terceira_carta &&
    //   chute_cartas_repetidas == 3
    // ) {
    //   fire_cash += 50;
    // } else if (
    //   primeira_carta == segunda_carta ||
    //   primeira_carta == terceira_carta ||
    //   (segunda_carta == terceira_carta && chute_cartas_repetidas == 2)
    // ) {
    //   fire_cash += 25;
    // }

    span_fire_cash.innerHTML = fire_cash;
  }
}
