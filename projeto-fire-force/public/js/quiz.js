nome_usuario.innerHTML = sessionStorage.NOME_USUARIO

    var fk_personagem = sessionStorage.PERSONAGEM_FAVORITO

    if (fk_personagem == 1) {
        foto_perfil.innerHTML = `<img src="./assets/personagens_icon/shinra_icon.jpg">`
    } else if (fk_personagem == 2) {
        foto_perfil.innerHTML = `<img src="./assets/personagens_icon/arthur_icon.jpg">`
    } else if (fk_personagem == 3) {
        foto_perfil.innerHTML = `<img src="./assets/personagens_icon/beni_icon.jpg">`
    } else if (fk_personagem == 4) {
        foto_perfil.innerHTML = `<img src="./assets/personagens_icon/joker_icon.jpg">`
    } else if (fk_personagem == 5) {
        foto_perfil.innerHTML = `<img src="./assets/personagens_icon/obi_icon.jpg">`
    } else if (fk_personagem == 6) {
        foto_perfil.innerHTML = `<img src="./assets/personagens_icon/maki_icon.jpg">`
    } else if (fk_personagem == 7) {
        foto_perfil.innerHTML = `<img src="./assets/personagens_icon/iris_icon.jpeg">`
    } else {
        foto_perfil.innerHTML = `<img src="./assets/personagens_icon/tamaki_icon.jpg">`
    }

    var pontos = 0;

    // Questões no caminho. VÁ PARA A LINHA 289
    var quest1 = `
    <div class="imagem_pergunta img_pergunta_um">
        <h2>1 - A QUAL BATALHÃO SHINRA PERTENCE?</h2>
    </div>
    <div class="opcoes">
        <div class="alternativa" id="A">
            <button class="opcao" onclick="responder(this, this.value)" value="0">1ª Batalhão</button>
        </div>
        <div class="alternativa" id="B">
            <button class="opcao" onclick="responder(this, this.value)" value="0">5ª Batalhão</button>
        </div>
        <div class="alternativa" id="C">
            <button class="opcao" onclick="responder(this, this.value)" value="0">4ª Batalhão</button>
        </div>
        <div class="alternativa" id="D">
            <button class="opcao" onclick="responder(this, this.value)" value="1">8ª Batalhão</button>
        </div>
        <div class="alternativa" id="E">
            <button class="opcao" onclick="responder(this, this.value)" value="0">7ª Batalhão</button>
        </div>
    </div>`
    var quest2 = `
    <div class="imagem_pergunta img_pergunta_dois">
        <h2>2 - QUANTOS SÃO OS PILARES?</h2>
    </div>
    <div class="opcoes">
        <div class="alternativa" id="A">
            <button class="opcao" onclick="responder(this, this.value)" value="0">2</button>
        </div>
        <div class="alternativa" id="B">
            <button class="opcao" onclick="responder(this, this.value)" value="1">8</button>
        </div>
        <div class="alternativa" id="C">
            <button class="opcao" onclick="responder(this, this.value)" value="0">4</button>
        </div>
        <div class="alternativa" id="D">
        <button class="opcao" onclick="responder(this, this.value)" value="0">5</button>
        </div>
        <div class="alternativa" id="E">
            <button class="opcao" onclick="responder(this, this.value)" value="0">7</button>
        </div>
    </div>`
    var quest3 = `
    <div class="imagem_pergunta img_pergunta_treis">
        <h2>3 - QUEM É O IRMÃO DE SHINRA?</h2>
    </div>
    <div class="opcoes">
        <div class="alternativa" id="A">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Athur</button>
        </div>
        <div class="alternativa" id="B">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Joker</button>
        </div>
        <div class="alternativa" id="C">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Benimaru</button>
        </div>
        <div class="alternativa" id="D">
            <button class="opcao" onclick="responder(this, this.value)" value="1">Sho</button>
        </div>
        <div class="alternativa" id="E">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Obi</button>
        </div>
    </div>`

    var quest4 = `
    <div class="imagem_pergunta img_pergunta_quatro">
        <h2>4 - QUEM É O QUINTO PILAR?</h2>
    </div>
    <div class="opcoes">
        <div class="alternativa" id="A">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Shinra Kusakabe</button>
        </div>
        <div class="alternativa" id="B">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Haumea</button>
        </div>
        <div class="alternativa" id="C">
            <button class="opcao" onclick="responder(this, this.value)" value="1">Inca Kasugatani</button>
        </div>
        <div class="alternativa" id="D">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Sho Kusakabe</button>
        </div>
        <div class="alternativa" id="E">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Benimaru Shinmon</button>
        </div>
    </div>`

    var quest5 = `
    <div class="imagem_pergunta img_pergunta_cinco">
        <h2>5 - QUEM ERA O TRAIDOR DA 1ª BRIGADA?</h2>
    </div>
    <div class="opcoes">
        <div class="alternativa" id="A">
            <button class="opcao" onclick="responder(this, this.value)" value="1">Rekka hoshimya</button>
        </div>
        <div class="alternativa" id="B">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Leonard Burns</button>
        </div>
        <div class="alternativa" id="C">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Tamaki Kotatsu</button>
        </div>
        <div class="alternativa" id="D">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Karim Fulham</button>
        </div>
        <div class="alternativa" id="E">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Foien Li</button>
        </div>
    </div>`

    var quest6 = `
    <div class="imagem_pergunta img_pergunta_seis">
        <h2>6 - QUEM É O CAPITÃO DA 4ª BRIGADA?</h2>
    </div>
    <div class="opcoes">
        <div class="alternativa" id="A">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Gustav Honda</button>
        </div>
        <div class="alternativa" id="B">
            <button class="opcao" onclick="responder(this, this.value)" value="1">Soichiro Hague</button>
        </div>
        <div class="alternativa" id="C">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Hibana</button>
        </div>
        <div class="alternativa" id="D">
            <button class="opcao" onclick="responder(this, this.value)" value="0">DR. Giovanni</button>
        </div>
        <div class="alternativa" id="E">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Kayoko Huang</button>
        </div>
    </div>`

    var quest7 = `
    <div class="imagem_pergunta img_pergunta_sete">
        <h2>7 - QUEM SOBREVIVEU JUNTO DE IRIS AO INCÊNDIO NO CONVENTO?</h2>
    </div>
    <div class="opcoes">
        <div class="alternativa" id="A">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Shinra</button>
        </div>
        <div class="alternativa" id="B">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Maki</button>
        </div>
        <div class="alternativa" id="C">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Tamaki</button>
        </div>
        <div class="alternativa" id="D">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Irmã Sumire</button>
        </div>
        <div class="alternativa" id="E">
            <button class="opcao" onclick="responder(this, this.value)" value="1">Hibana</button>
        </div>
    </div>`

    var quest8 = `
    <div class="imagem_pergunta img_pergunta_oito">
        <h2>8 - COMO MAKI ENTROU PARA A 8ª BRIGADA?</h2>
    </div>
    <div class="opcoes">
        <div class="alternativa" id="A">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Convidada por Akitaru Obi</button>
        </div>
        <div class="alternativa" id="B">
            <button class="opcao" onclick="responder(this, this.value)" value="1">Convidada por Takehisa Hinawa</button>
        </div>
        <div class="alternativa" id="C">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Foi designada para lá</button>
        </div>
        <div class="alternativa" id="D">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Mandada por seu pai, general Oze</button>
        </div>
        <div class="alternativa" id="E">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Entrou através de testes</button>
        </div>
    </div>`

    var quest9 = `
    <div class="imagem_pergunta img_pergunta_nove">
        <h2>9 - O QUE O ARTHUR IMAGINA SER?</h2>
    </div>
    <div class="opcoes">
        <div class="alternativa" id="A">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Rei</button>
        </div>
        <div class="alternativa" id="B">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Herói</button>
        </div>
        <div class="alternativa" id="C">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Cavaleiro</button>
        </div>
        <div class="alternativa" id="D">
            <button class="opcao" onclick="responder(this, this.value)" value="1">Cavaleiro Rei</button>
        </div>
        <div class="alternativa" id="E">
            <button class="opcao" onclick="responder(this, this.value)" value="0">Rei Cavaleiro</button>
        </div>
    </div>`

    var quest10 = `
    <div class="imagem_pergunta img_pergunta_dez">
        <h2>10 - QUAL O OBJETIVO DE SHINRA?</h2>
    </div>
    <div class="opcoes">
        <div class="alternativa" id="A">
            <button class="opcao" onclick="responder(this, this.value), pontuar()" value="0">Desvendar o mistério da combustão espontânea de corpos</button>
        </div>
        <div class="alternativa" id="B">
            <button class="opcao" onclick="responder(this, this.value), pontuar()" value="1">Ser um herói e salvar todas as pessoas do terror das chamas</button>
        </div>
        <div class="alternativa" id="C">
            <button class="opcao" onclick="responder(this, this.value), pontuar()" value="0">Se tornar o bombeiro mais forte de todos</button>
        </div>
        <div class="alternativa" id="D">
            <button class="opcao" onclick="responder(this, this.value), pontuar()" value="0">Fundar sua própria brigada especial de bombeiros</button>
        </div>
        <div class="alternativa" id="E">
            <button class="opcao" onclick="responder(this, this.value), pontuar()" value="0">Matar o demônio que tirou sua família</button>
        </div>
    </div>`

    function comecar() {
        pergunta.innerHTML = quest1
    }

    var bt_alternativa = document.getElementsByClassName("opcao");

    function bloquear() {
        for (var i = 0; i < bt_alternativa.length; i++) {
            bt_alternativa[i].classList.add("bloqueado");
        }
    }

    function liberar() {
        for (var i = 0; i < bt_alternativa.length; i++) {
            bt_alternativa[i].classList.remove("bloqueado")
        }
    }

    var questoes = [quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10]
    var quest_atual = 0

    var idUsuarioVar = Number(sessionStorage.ID_USUARIO);
    console.log(sessionStorage.ID_USUARIO)
    var nome = sessionStorage.NOME_USUARIO;

    function responder(botao, resposta) {
        bloquear();
        var bt_alternativa = document.getElementsByClassName("opcao");
        var correta = '';

        for (var i = 0; i < bt_alternativa.length; i++) {
            if (bt_alternativa[i].value == 1) {
                correta = bt_alternativa[i];
            }
        }

        if (resposta == 1) {
            pontos++
        } else {
            botao.classList.add("errado")
        }

        correta.classList.add("certo");

        setTimeout(() => {
            if (quest_atual < questoes.length) {
                pergunta.innerHTML = questoes[quest_atual]
                quest_atual++
            } else {
                if (pontos == 0) {
                    pergunta.innerHTML = `
                    <div class="imagem_pergunta_final img_pontuacao_zero">
                        <div class="pontuacao">
                            <span class="pontos">${pontos}</span>
                            / 10
                        </div>
                    </div>
                    <div class="text_final">
                        <h2>${pontos} - ACERTOS</h2>
                        <p>VOCÊ FOI MUITO MAL, MAIS SORTE NA PROXIMA!</p>
                    </div>`
                } else if (pontos <= 4) {
                    pergunta.innerHTML = `
                    <div class="imagem_pergunta_final img_pontuacao_umAquatro">
                        <div class="pontuacao">
                            <span class="pontos">${pontos}</span>
                            / 10
                        </div>
                    </div>
                    <div class="text_final">
                        <h2>${pontos} - ACERTOS</h2>
                        <p>JÁ É UM COMEÇO!</p>
                    </div>`
                } else if (pontos == 5) {
                    pergunta.innerHTML = `
                    <div class="imagem_pergunta_final img_pontuacao_cinco">
                        <div class="pontuacao">
                            <span class="pontos">${pontos}</span>
                            / 10
                        </div>
                    </div>
                    <div class="text_final">
                        <h2>${pontos} - ACERTOS</h2>
                        <p>ACERTOU METADE, FOI BEM!</p>
                    </div>`
                } else if (pontos <= 7) {
                    pergunta.innerHTML = `
                    <div class="imagem_pergunta_final img_pontuacao_seisAsete">
                        <div class="pontuacao">
                            <span class="pontos">${pontos}</span>
                            / 10
                        </div>
                    </div>
                    <div class="text_final">
                        <h2>${pontos} - ACERTOS</h2>
                        <p>VOCÊ SABE BEM DAS COIAS!</p>
                    </div>`
                } else if (pontos <= 9) {
                    pergunta.innerHTML = `
                    <div class="imagem_pergunta_final img_pontuacao_oitoAnove">
                        <div class="pontuacao">
                            <span class="pontos">${pontos}</span>
                            / 10
                        </div>
                    </div>
                    <div class="text_final">
                        <h2>${pontos} - ACERTOS</h2>
                        <p>MUITO QUASE, MAS VOCÊ MANJA!</p>
                    </div>`
                } else {
                    pergunta.innerHTML = `
                    <div class="imagem_pergunta_final img_pontuacao_dez">
                        <div class="pontuacao">
                            <span class="pontos">${pontos}</span>
                            / 10
                        </div>
                    </div>
                    <div class="text_final">
                        <h2>${pontos} - ACERTOS</h2>
                        <p>PARABÉNS, VOCÊ É O FIRE FORCE!</p>
                    </div>`
                }
            }
            liberar()
        }, 1500);
    }
    function pontuar() {
        fetch("/quiz/placar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.j
                idUsuarioServer: idUsuarioVar,
                pontosServer: pontos
            })
        }).then(function (resposta) {

            console.log("resposta: ", resposta);

            if (resposta.ok) {
                setTimeout(function () {
                    window.location = "placar.html";
                }, 4000);
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

        return false;
    }