function mudarPersonagem() {
  var num_personagem = select_personagem.value;

  const personagens = {
    shinra: {
      apelido: "(Demônio / Pegadas do Demônio / Herói)",
      gif: '<img src="https://i.pinimg.com/originals/ea/06/2f/ea062f35806cd5cca5a8e05a741a55d9.gif">',
      historia:
        "Shinra é nosso protagonista, ele é um integrante da 8ª brigada de bombeiros especiais. O objetivo dele é se tornar um herói e salvar todas as pessoas da combustão espontânea. Após perder sua mãe e, supostamente, seu irmão quando ainda criança, Shinra despertou seus poderes de 3ª geração, quando mais velho, participou de uma academia de treinamento para e se tornar um bombeiro especial a fim de descobrir a verdade sobre o incêndio que tirou sua família 12 anos atrás e libertar as pessoas do terror das chamas. Mais tarde ele descobre que seu irmão ainda está vivo e que eles dois possuem um raro poder, chamado de Adora Burst. Shinra é o 4ª pilar.",
      geracao: "(Terceira Geração)",
      habilidade:
        "Shinra é capaz de produzir e controlar chamas que saem dos seus pés, dando a ele muita velocidade e mobilidade em combate, sendo capaz de mudar de direção em pleno ar e até mesmo voar. Também é capaz de usar símbolos de máo para mudar o fluxo de suas chamas, ganhando mais velocidade ou poder explosivo. Com a benção da Evangelista, Shinra é capaz de ultrapassar a velocidade da luz.",
    },
    arthur: {
      apelido: "(Cavaleiro Rei / Raio Violeta)",
      gif: '<img src="https://i.pinimg.com/originals/14/a3/01/14a301dd88e82e401bbc4dbb49b2fecd.gif">',
      historia:
        "Arthur, rival do protagonista, também integrante da 8ª brigada de bombeiros especiais. Arthur treinou na mesma academia que Shinra, onde se conheceram e várias vezes discutiram sobre suas crenças (cavaleiro ou herói, quem é mais maneiro). Arthur não possui um objetivo em específico, mas tem um grande senso de justiça e sempre pensa em ficar mais forte para vencer seus desafios. Ele tem uma imaginação/crença muito forte na sua imagem de cavaleiro. Ele enxerga o mundo de uma forma diferente. Quando mais novo, Arthur foi abandonado por seus pais que fugiram por causa de dívidas, mas ele nunca os culpou ou se sentiu zangado. Ele tem muito orgulho de sua Excalibur.",
      geracao: "(Terceira Geração)",
      habilidade:
        "Arthur possui a habilidade de criar chamas com temperatura tão elevadas que alcançam o quarto estado da matéria - plasma, ele utiliza na forma de espada, a qual nomeou de Excalibur, seu poder fica mais forte, ou mais fraco, de acordo com o quão cavaleiro ele se vê. Não consegue usar a espada corretamente se ela estiver em sua mão esquerda.",
    },
    benimaru: {
      apelido: "(Rei da destruição de Asakusa / Waka / O mais forte)",
      gif: '<img src="https://i.pinimg.com/originals/bf/74/5e/bf745e4d45c46c2f7a9b580e64348108.gif">',
      historia:
        "Benimaru é um órfão que foi acolhido por Hibachi Shinmon, por quem foi treinado e recebeu seu sobrenome. Benimaru é reconhecido como “O mais forte”, a força dele está em um nível completamente absurdo, apesar de jovem. Ele é o protetor de Asakusa e capitão da 7ª brigada especial de bombeiros, apesar de ser abertamente contra o império, eles preferem não começar uma guerra contra Benimaru. Serviu de mentor para Shinra, Arthur e até mesmo Tamaki, ensinando diversas técnicas poderosas para eles.",
      geracao: "(Segunda e Terceira Geração)",
      habilidade:
        "Por ser um híbrido, Benimaru pode tanto criar chamas como controlar outras fontes de fogo. Especialista em combate corpo-a-corpo, especialmente por sua dominação do iai chop, técnicas de mão para controlar seu fluxo de chamas.",
    },
    joker: {
      apelido: "(Anti-Herói / 52)",
      gif: '<img src="https://i.pinimg.com/originals/eb/b0/d6/ebb0d68c4ee5446c6e31c2d9a5429e78.gif">',
      historia:
        "Joker é nos apresentado como um cara misterioso e um criminoso do império, aparentando ser um vilão, mas logo descobrimos suas verdadeiras intenções. Quando criança, Joker fazia parte dos guerreiros da “Sombra do sol sagrado” onde era muito maltratado, ele odiava. Quando mais velho, decidiu fugir, mas em sua fuga, se viu cara a cara com Adora, junto à Burns (Capitão da 1ª brigada), o que acabou por deixa-lo cego do olho esquerdo. Desde então, vem tentando encontrar formas de descobrir a verdade sobre o mundo.",
      geracao: "(Segunda Geração)",
      habilidade:
        "Joker manipula as chamas de seu cigarro para criar formas, como cartas e símbolos de baralho, as quais ele utiliza de projéteis para lançar nos adversários. Ele também usa um pó, feito de cinzas de infernais, que explodem ao seu comando, como manobra defensiva",
    },
    obi: {
      apelido: "(Capitão da 8ª brigada)",
      gif: '<img src="https://img.wattpad.com/329be6ee6aaed3a13b23e7cdf97e26bd64d893ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f53494f6c436e73393068762d78673d3d2d333534372e313634323037666330633665336363303332393839333532323739312e676966">',
      historia:
        "Obi já foi um bombeiro comum, que era frequentemente repreendido por desobedecer ordens, mesmo que seja para salvar vidas. Como fruto da sua motivação, Obi conquistou espaço e conseguiu sua própria brigada especial de bombeiros, A 8ª. Muito admirado por todos a sua volta, pela sua grande determinação e honestidade. Obi preza muito pela segurança de seus membros e se orgulha muita do seu batalhão, considera todos os membros como família. Visto por Joker, como alguém essencial para o mundo",
      geracao: "Sem Poder",
      habilidade:
        "Obi não possui habilidades de ignição. Ele possui muita força física e motivação, treina todos os dias.",
    },
    maki: {
      apelido: "(Bruxa / Ogra)",
      gif: '<img src="https://i.pinimg.com/originals/e0/7d/e4/e07de4cac72fe30a30e3260d83c2054a.gif">',
      historia:
        "Maki é filha de um tenente do exército, ela serviu o exército por um bom tempo e durante seu tempo de militar, trabalhava mais do que os soldados normais e passou por um treinamento além do necessário. Após algum tempo, Maki decidiu que ela preferia salvar pessoas do que lutar contra elas, por isso, contra a vontade de seu pai, ela saiu do exército e entrou para a Brigada Especial de Incêndio. Apesar de Maki ser bem forte e poderosa, seu pai e irmão mais velho, são superprotetores e não querem que ela corra perigo, mas isso é inevitável para uma bombeira.",
      geracao: "(Segunda Geração)",
      habilidade:
        'Capaz de manipular e controlar uma grande quantidade de chamas, podendo extinguir e absorver chamas, criando uma bola de fogo gigante. Normalmente é vista com suas pequenas "criaturinhas" de fogo, Pusu Pusu e Mera Mera, as quais ela utiliza para energizar e controlar as unidades gêmeas "Coruja de ferro" par de máquinas feitas por Vulcan(Engenheiro da 8ª brigada). Maki é muito forte fisicamente e possui treinamento militar',
    },
    iris: {
      apelido: "(Irmã)",
      gif: '<img src="https://1.bp.blogspot.com/-1hSu0EsshR8/X6hjkVr81nI/AAAAAAACBXg/lKQ30FvMhXUdMZ-HbTT-fHtR8uE35PjzwCPcBGAsYHg/s1920/Enen%2Bno%2BShouboutai%2BS2%2B-%2BEpisode%2B18%2B-%2BIris%2BFlexes%2BCobra.gif">',
      historia:
        "Iris cresceu em um convento para freiras junto de outras meninas, até que um dia, tudo começou a pegar fogo e somente Hibana(Capitã da 5ª Brigada) e Iris saíram vivas. Iris é uma pessoa muito bondosa e curiosa, como uma freira, ela tem muita fé no Deus Sol e na igreja do sol sagrado. Iris não fazia ideia, mas ela é o 8ª pilar e Doppelganger de Amaterasu(1ª pilar)",
      geracao: "Cavalo e leiro",
      habilidade:
        "Iris não possuí habilidades pirocinéticas nem habilidades de combate",
    },
    tamaki: {
      apelido: "Cavaleiro DEUS",
      gif: '<img src="https://i.pinimg.com/originals/d4/fe/ac/d4feacdc8f7c57fd034d8c92fd8846c7.gif">',
      historia:
        'Tamaki é nos apresentada como uma bombeira da 1ª brigada, sendo bem orgulhosa para uma novata. Ela se mantêm assim até sua luta contra Rekka, onde é humilhada e quase morta, não tendo outra opção alé de clamar pela ajuda de Shinra. Tamaki é colocada aos cuidados do 8ª, para "compensar" por ter cooperado, mesmo sem saber, com plano de Rekka. Tamaki possui uma síndrome, "Síndrome da Luxúria Sortuda", fazendo com que ela tropece, caia, escorregue e de alguma forma, sua roupa rasgue, caia ou voe do seu  corpo. a síndrome faz com que ela constantemente caia em cima das pessoas, do século masculino, em situações constrangedoras.',
      geracao: "(Terceira Geração)",
      habilidade:
        'Tamaki se refere ao seu poder como "Nekomata", quando ativo, suas chamas formam orelhas de gato e uma cauda bifurcada. Tamaki possui uma resistência extrema a chamas, se destacando até mesmo entre a terceira geração que já possui alta resistência',
    },
  };

  var personagem = Object.values(personagens[num_personagem]);

  apelidos.innerHTML = personagem[0];
  gif_personagem.innerHTML = personagem[1];
  historiaPer.innerHTML = personagem[2];
  geracao.innerHTML = personagem[3];
  texto_habiliade.innerHTML = personagem[4];
}