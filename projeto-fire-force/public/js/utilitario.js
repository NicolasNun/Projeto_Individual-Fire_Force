nome_usuario.innerHTML = sessionStorage.NOME_USUARIO;

var fk_personagem = sessionStorage.PERSONAGEM_FAVORITO;

foto_perfil.innerHTML = carregarFoto(fk_personagem);

function carregarFoto(idPersonagem) {
  var endereco_foto;

  if (idPersonagem == 1) {
    endereco_foto = `<img src="../assets/personagens_icon/shinra_icon.jpg">`;
  } else if (idPersonagem == 2) {
    endereco_foto = `<img src="../assets/personagens_icon/arthur_icon.jpg">`;
  } else if (idPersonagem == 3) {
    endereco_foto = `<img src="../assets/personagens_icon/beni_icon.jpg">`;
  } else if (idPersonagem == 4) {
    endereco_foto = `<img src="../assets/personagens_icon/joker_icon.jpg">`;
  } else if (idPersonagem == 5) {
    endereco_foto = `<img src="../assets/personagens_icon/obi_icon.jpg">`;
  } else if (idPersonagem == 6) {
    endereco_foto = `<img src="../assets/personagens_icon/maki_icon.jpg">`;
  } else if (idPersonagem == 7) {
    endereco_foto = `<img src="../assets/personagens_icon/iris_icon.jpeg">`;
  } else {
    endereco_foto = `<img src="../assets/personagens_icon/tamaki_icon.jpg">`;
  }
  return endereco_foto;
}
