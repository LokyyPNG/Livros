const botaoComecar = document.getElementById("botaoComecar");
const musica = document.getElementById("musica");

const telaInicial = document.getElementById("telaInicial");
const capitulo1 = document.getElementById("capitulo1");

const modalLivro = document.getElementById("modalLivro");
const tituloLivro = document.getElementById("tituloLivro");
const descricaoLivro = document.getElementById("descricaoLivro");
const receitaLivro = document.getElementById("receitaLivro");
const fecharLivro = document.getElementById("fecharLivro");
const continuarLivro = document.getElementById("continuarLivro");

const telaDesbloqueio = document.getElementById("telaDesbloqueio");
const irSetor2 = document.getElementById("irSetor2");
const cortina = document.getElementById("cortina");

const capitulo2 = document.getElementById("capitulo2");
const abrirHistoria = document.getElementById("abrirHistoria");
const modalHistoria = document.getElementById("modalHistoria");
const paginaHistoria = document.getElementById("paginaHistoria");
const proximaPaginaHistoria = document.getElementById("proximaPaginaHistoria");
const puzzleNome = document.getElementById("puzzleNome");
const respostaNome = document.getElementById("respostaNome");
const confirmarNome = document.getElementById("confirmarNome");
const mensagemNome = document.getElementById("mensagemNome");

const capitulo3 = document.getElementById("capitulo3");
const arquivosPersonagens = document.getElementById("arquivosPersonagens");
const modalArquivo = document.getElementById("modalArquivo");
const tituloArquivo = document.getElementById("tituloArquivo");
const descricaoArquivo = document.getElementById("descricaoArquivo");
const respostaArquivo = document.getElementById("respostaArquivo");
const confirmarArquivo = document.getElementById("confirmarArquivo");
const fecharArquivo = document.getElementById("fecharArquivo");
const mensagemArquivo = document.getElementById("mensagemArquivo");

const telaDesbloqueio2 = document.getElementById("telaDesbloqueio2");
const irSetor3 = document.getElementById("irSetor3");

const capitulo4 = document.getElementById("capitulo4");
const ecosContainer = document.getElementById("ecos");
const modalEco = document.getElementById("modalEco");
const tituloEco = document.getElementById("tituloEco");
const textoEco = document.getElementById("textoEco");
const opcoesEco = document.getElementById("opcoesEco");
const mensagemEco = document.getElementById("mensagemEco");
const fecharEco = document.getElementById("fecharEco");

const capituloFinal = document.getElementById("capituloFinal");
const botaoSim = document.getElementById("botaoSim");
const botaoNao = document.getElementById("botaoNao");
const respostaFinal = document.getElementById("respostaFinal");

const livros = {
  ervas: {
    titulo: "Compêndio das Ervas Esquecidas",
    descricao: "Uma coletânea de ervas raras utilizadas por alquimistas, curandeiros e viajantes que conheciam os caminhos entre um reino e outro.",
    receita: `
      <h3>Chá de Lavanda Lunar</h3>

      <p>Durante séculos, viajantes carregaram pequenas porções desta mistura em bolsas de couro presas ao cinto.</p>

      <p>Dizem que o aroma da lavanda colhida sob a lua cheia era capaz de acalmar até mesmo os pensamentos mais inquietos.</p>

      <p>Muitos afirmavam que, ao beber uma xícara deste chá antes de dormir, sonhos esquecidos retornavam com uma clareza impossível de explicar.</p>

      <h4>Ingredientes</h4>

      <ul>
        <li>Flores de lavanda lunar</li>
        <li>Mel silvestre</li>
        <li>Água de nascente</li>
        <li>Uma noite silenciosa</li>
      </ul>

      <p><em>É uma boa receita, mas não parece ser a chave desta sala.</em></p>
    `,
    correto: false
  },

  pao: {
    titulo: "Os Segredos do Pão Real",
    descricao: "Receitas protegidas durante séculos pelas cozinhas dos antigos reinos, passadas apenas para aqueles que sabiam ouvir antes de provar.",
    receita: `
      <h3>Pão Dourado da Coroa</h3>

      <p>Preparado apenas durante grandes celebrações, este pão era servido nas mesas dos reis muito antes dos mapas registrarem os nomes dos reinos.</p>

      <p>Sua crosta dourada simbolizava prosperidade, enquanto o aroma da manteiga recém-derretida anunciava tempos de abundância.</p>

      <p>Algumas lendas afirmam que nenhum tratado de paz foi assinado sem que este pão estivesse presente à mesa.</p>

      <h4>Ingredientes</h4>

      <ul>
        <li>Farinha refinada</li>
        <li>Manteiga fresca</li>
        <li>Mel dourado</li>
        <li>Uma pitada de paciência real</li>
      </ul>

      <p><em>As páginas são antigas, mas nenhuma delas parece chamar por você.</em></p>
    `,
    correto: false
  },

  chas: {
    titulo: "Enciclopédia dos Chás Lunares",
    descricao: "Um estudo delicado sobre bebidas preparadas sob diferentes fases da lua e seus efeitos sobre viajantes, poetas e corações inquietos.",
    receita: `
      <h3>Infusão da Lua Crescente</h3>

      <p>Uma bebida tradicional entre exploradores e estudiosos que passavam meses longe de casa.</p>

      <p>Acreditava-se que sua preparação durante a fase crescente da lua fortalecia a coragem necessária para atravessar territórios desconhecidos.</p>

      <p>Embora ninguém tenha conseguido provar tal efeito, a tradição permaneceu viva através das gerações.</p>

      <h4>Ingredientes</h4>

      <ul>
        <li>Hortelã fresca</li>
        <li>Casca de limão</li>
        <li>Mel claro</li>
        <li>Um mapa ainda incompleto</li>
      </ul>

      <p><em>Bonito, delicado, mas ainda não é este.</em></p>
    `,
    correto: false
  },

  redvelvet: {
    titulo: "Red Velvet — Edição Anotada",
    descricao: "Um livro tão consultado que suas páginas carregam marcas de uso, pequenas manchas de farinha e observações escritas à mão.",
    receita: `
      <h3>Red Velvet</h3>

      <p>Diferente das demais receitas desta estante, esta apresenta sinais evidentes de uso frequente.</p>

      <p>Algumas páginas foram dobradas inúmeras vezes, como se alguém sempre voltasse exatamente para este ponto.</p>

      <p>Pequenas anotações foram escritas nas margens. Algumas parecem instruções. Outras parecem lembranças.</p>

      <p>E certas manchas sugerem que o livro já permaneceu aberto sobre bancadas durante longas tardes, enquanto alguém tentava acertar o ponto da receita.</p>

      <p>O bolo em si é conhecido por seu equilíbrio incomum: aparência marcante, textura delicada e sabor suave.</p>

      <p>Por esse motivo, costuma ser reservado para ocasiões especiais.</p>

      <h4>Ingredientes</h4>

      <ul>
        <li>Farinha</li>
        <li>Açúcar</li>
        <li>Cacau</li>
        <li>Corante vermelho</li>
        <li>Baunilha</li>
        <li>Leitelho</li>
        <li>Alguém paciente para orientar a receita</li>
      </ul>

      <p class="texto-anotacao">
  Entre os ingredientes existe uma anotação escrita com outra caligrafia.
</p>

<p class="manuscrito">
  "Existe um ingrediente que não pode ser medido."
</p>
    `,
    correto: true
  },

  conservas: {
    titulo: "Conservas para Tempos Difíceis",
    descricao: "Técnicas antigas de preservação usadas por vilarejos que precisavam guardar sabores, memórias e pequenos verões em potes de vidro.",
    receita: `
      <h3>Compota de Frutas Rubras</h3>

      <p>Desenvolvida para suportar os longos invernos do norte, esta receita surgiu em vilarejos onde a neve permanecia por meses.</p>

      <p>As frutas eram cuidadosamente armazenadas para preservar não apenas seu sabor, mas também as lembranças associadas aos dias mais quentes.</p>

      <p>Muitos acreditavam que cada pote guardava um pequeno fragmento do verão.</p>

      <h4>Ingredientes</h4>

      <ul>
        <li>Frutas vermelhas</li>
        <li>Açúcar</li>
        <li>Suco de limão</li>
        <li>Um pote limpo de saudade</li>
      </ul>

      <p><em>Esta receita sabe guardar coisas. Mas não sabe abrir portas.</em></p>
    `,
    correto: false
  },

  doces: {
    titulo: "Doces das Terras Distantes",
    descricao: "Sobremesas coletadas por exploradores em regiões remotas, onde os ingredientes mudam de nome conforme a estação e a memória de quem cozinha.",
    receita: `
      <h3>Torta de Frutas Estelares</h3>

      <p>Uma sobremesa encontrada em relatos de exploradores que atravessaram desertos, mares e montanhas em busca de ingredientes raros.</p>

      <p>As frutas utilizadas nesta receita mudam de região para região, motivo pelo qual nenhuma versão é exatamente igual à outra.</p>

      <p>Talvez seja justamente isso que a torna especial: ela nunca se repete da mesma forma, mesmo quando alguém tenta seguir a receita à risca.</p>

      <h4>Ingredientes</h4>

      <ul>
        <li>Massa doce</li>
        <li>Creme leve</li>
        <li>Frutas estelares</li>
        <li>Um pouco de curiosidade</li>
      </ul>

      <p><em>Por um instante, parece quase certo. Mas só quase.</em></p>
    `,
    correto: false
  }
};

botaoComecar.addEventListener("click", () => {

  musica.volume = 0;
  musica.play();

  let volume = 0;

  const fadeAudio = setInterval(() => {
    volume += 0.05;

    if (volume >= 0.4) {
      volume = 0.4;
      clearInterval(fadeAudio);
    }

    musica.volume = volume;
  }, 300);

  telaInicial.classList.add("fade-out");

  setTimeout(() => {

    telaInicial.classList.add("escondido");

    capitulo1.classList.remove("escondido");
    capitulo1.classList.add("fade-in");

  }, 1500);

});

document.querySelectorAll(".livro-estante").forEach((botao) => {
  botao.addEventListener("click", () => {
    const livroEscolhido = botao.dataset.livro;
    const livro = livros[livroEscolhido];

    const posicao = botao.getBoundingClientRect();
    const clone = botao.cloneNode(true);

    clone.classList.add("livro-animando");

    clone.style.left = posicao.left + "px";
    clone.style.top = posicao.top + "px";
    clone.style.width = posicao.width + "px";
    clone.style.height = posicao.height + "px";

    document.body.appendChild(clone);

    botao.style.opacity = "0";

    setTimeout(() => {
      clone.classList.add("abrindo");
    }, 50);

    setTimeout(() => {
      tituloLivro.innerText = livro.titulo;
      descricaoLivro.innerText = livro.descricao;
      receitaLivro.innerHTML = livro.receita;

      modalLivro.classList.remove("escondido");

      if (livro.correto) {
        continuarLivro.classList.remove("escondido");
      } else {
        continuarLivro.classList.add("escondido");
      }

      clone.remove();
      botao.style.opacity = "1";
    }, 850);
  });
});

fecharLivro.addEventListener("click", () => {
  modalLivro.classList.add("escondido");
});

continuarLivro.addEventListener("click", () => {
  receitaLivro.innerHTML = `
    <h3>A anotação continua...</h3>
    <p>
      Ingrediente adicional:
      <br>
      <strong>tempo compartilhado.</strong>
    </p>

    <p>
      Quantidade necessária:
      <br>
      <strong>ainda sendo calculada.</strong>
    </p>


    <p>
      Curioso.
      <br>
      Você encontrou exatamente o livro que eu esperava.
    </p>

    <p>
      — O Autor
    </p>
  `;

  continuarLivro.classList.add("escondido");
  fecharLivro.innerText = "Fechar o livro";

 fecharLivro.innerText = "Ir para o próximo setor";
fecharLivro.onclick = () => {
  cortina.classList.remove("escondido");

  setTimeout(() => {
    cortina.classList.add("ativa");
  }, 50);

  setTimeout(() => {
    modalLivro.classList.add("escondido");
    capitulo1.classList.add("escondido");

    telaDesbloqueio.classList.remove("escondido");
    telaDesbloqueio.classList.add("fade-in");

    cortina.classList.remove("ativa");

    setTimeout(() => {
      cortina.classList.add("escondido");
    }, 800);
  }, 900);
};

});

irSetor2.addEventListener("click", () => {
  cortina.classList.remove("escondido");

  setTimeout(() => {
    cortina.classList.add("ativa");
  }, 50);

  setTimeout(() => {
    telaDesbloqueio.classList.add("escondido");

    capitulo2.classList.remove("escondido");
    capitulo2.classList.add("fade-in");

    cortina.classList.remove("ativa");

    setTimeout(() => {
      cortina.classList.add("escondido");
    }, 800);
  }, 900);
});

let paginaAtualHistoria = 0;

const paginasHistoria = [
  `
    <div class="pagina-esquerda">
      <p class="pagina-revelada">
        Em uma cidade onde as histórias eram mais valiosas que ouro, existia uma biblioteca tão antiga que ninguém mais se lembrava de quem havia construído suas primeiras estantes.
      </p>

      <p class="pagina-revelada">
        Seus corredores pareciam intermináveis.
        <br>
        Seus livros eram incontáveis.
      </p>
    </div>

    <div class="pagina-direita">
      <p class="pagina-revelada">
        E, entre milhares de histórias diferentes, existia uma leitora que sempre voltava.
      </p>

      <p class="pagina-revelada">
        Não porque procurava respostas.
        <br>
        Mas porque gostava de encontrar novos mundos escondidos entre páginas esquecidas.
      </p>
    </div>
  `,

  `
    <div class="pagina-esquerda">
      <p class="pagina-revelada">
        Ela atravessava romances, fantasias e tragédias como quem atravessa portas.
      </p>

      <p class="pagina-revelada">
        Algumas histórias a faziam sorrir.
        <br>
        Outras deixavam cicatrizes.
      </p>
    </div>

    <div class="pagina-direita">
      <p class="pagina-revelada">
        E havia aquelas raras histórias que conseguiam fazer as duas coisas ao mesmo tempo.
      </p>

      <p class="pagina-revelada">
        Eram essas que permaneciam com ela por mais tempo.
        <br>
        Muito depois da última página.
      </p>
    </div>
  `,

  `
    <div class="pagina-esquerda">
      <p class="pagina-revelada">
        Certo dia, enquanto caminhava entre estantes que não apareciam em nenhum mapa da biblioteca, ela encontrou um livro diferente dos demais.
      </p>

      <p class="pagina-revelada">
        Não possuía capa.
        <br>
        Não possuía título.
        <br>
        E nenhuma informação sobre seu autor.
      </p>
    </div>

    <div class="pagina-direita">
      <p class="pagina-revelada">
        Ainda assim...
      </p>

      <p class="pagina-revelada">
        Havia algo estranhamente familiar nele.
        <br>
        Como se aquele livro já a estivesse esperando.
      </p>
    </div>
  `,

  `
    <div class="pagina-esquerda">
      <p class="pagina-revelada">
        Ela o abriu.
      </p>

      <p class="pagina-revelada">
        E encontrou apenas uma única frase escrita na primeira página:
      </p>

      <p class="manuscrito">
        "Toda história precisa de uma personagem."
      </p>
    </div>

    <div class="pagina-direita">
      <p class="pagina-revelada">
        Abaixo da frase existia um espaço vazio.
        <br>
        Como se alguém tivesse esquecido de escrever um nome.
      </p>
    </div>
  `
];

abrirHistoria.addEventListener("click", () => {
  paginaAtualHistoria = 0;

  paginaHistoria.innerHTML = paginasHistoria[paginaAtualHistoria];
paginaHistoria.classList.remove("virando-pagina");

void paginaHistoria.offsetWidth;

paginaHistoria.classList.add("virando-pagina");

  proximaPaginaHistoria.classList.remove("escondido");
  puzzleNome.classList.add("escondido");
  mensagemNome.innerText = "";
  respostaNome.value = "";

  modalHistoria.classList.remove("escondido");
});

proximaPaginaHistoria.addEventListener("click", () => {
  paginaAtualHistoria++;

  if (paginaAtualHistoria < paginasHistoria.length) {
  paginaHistoria.innerHTML = paginasHistoria[paginaAtualHistoria];

  paginaHistoria.classList.remove("virando-pagina");
  void paginaHistoria.offsetWidth;
  paginaHistoria.classList.add("virando-pagina");
}

if (paginaAtualHistoria === paginasHistoria.length - 1) {
  proximaPaginaHistoria.innerText = "Tentar escrever o nome";
}

if (paginaAtualHistoria >= paginasHistoria.length) {
  proximaPaginaHistoria.classList.add("escondido");

  paginaHistoria.innerHTML = `
    <div class="pagina-esquerda">
      <p class="manuscrito">
        "Toda história precisa de uma personagem."
      </p>

      <p class="pagina-revelada">
        A frase permanecia ali, imóvel, como se aguardasse uma resposta.
      </p>
    </div>

    <div class="pagina-direita">
    </div>
  `;

  const paginaDireita = document.querySelector(".pagina-direita");
  paginaDireita.appendChild(puzzleNome);

  puzzleNome.classList.remove("escondido");
}
});

confirmarNome.addEventListener("click", () => {
  const resposta = respostaNome.value.trim().toLowerCase();

  if (resposta === "julie" || resposta === "julia") {
    paginaHistoria.innerHTML = `
  <div class="pagina-esquerda">

    <p class="manuscrito">
      "Toda história precisa de uma personagem."
    </p>

    <p class="pagina-revelada">
      E pela primeira vez, o espaço vazio deixou de estar vazio.
    </p>

    <p class="manuscrito">
      ${respostaNome.value}
    </p>

  </div>

  <div class="pagina-direita">

    <p class="pagina-revelada">
      A tinta começou a se mover lentamente.
    </p>

    <p class="pagina-revelada">
      Letras surgiram onde antes existia apenas papel em branco.
    </p>

    <p class="pagina-revelada">
      Como se a própria história estivesse sendo escrita naquele instante.
    </p>

    <p class="manuscrito">
      Finalmente.
    </p>

    <p class="manuscrito">
      Depois de tanto tempo.
    </p>

    <p class="manuscrito">
      O livro havia encontrado sua personagem.
    </p>

    <p class="assinatura-autor">
      — O Autor
    </p>

  </div>
`;

const botaoFinalCapitulo2 = document.createElement("button");
botaoFinalCapitulo2.innerText = "Continuar";
botaoFinalCapitulo2.classList.add("botao-final-capitulo");

document.querySelector("#modalHistoria .pagina").appendChild(botaoFinalCapitulo2);

botaoFinalCapitulo2.addEventListener("click", () => {
  cortina.classList.remove("escondido");

  setTimeout(() => {
    cortina.classList.add("ativa");
  }, 50);

  setTimeout(() => {
    modalHistoria.classList.add("escondido");
    capitulo2.classList.add("escondido");

    telaDesbloqueio2.classList.remove("escondido");
    telaDesbloqueio2.classList.add("fade-in");

    cortina.classList.remove("ativa");

    setTimeout(() => {
      cortina.classList.add("escondido");
    }, 800);
  }, 900);
});

    puzzleNome.classList.add("escondido");
  } else {
    mensagemNome.innerText = "A tinta permanece imóvel. Talvez esse ainda não seja o nome certo.";
  }
});

irSetor3.addEventListener("click", () => {
  cortina.classList.remove("escondido");

  setTimeout(() => {
    cortina.classList.add("ativa");
  }, 50);

  setTimeout(() => {
    telaDesbloqueio2.classList.add("escondido");

    capitulo3.classList.remove("escondido");
    capitulo3.classList.add("fade-in");

    cortina.classList.remove("ativa");

    setTimeout(() => {
      cortina.classList.add("escondido");
    }, 800);
  }, 900);
});

let arquivoAtual = null;

const arquivos = [
  {
    id: "zayne",
    titulo: "Arquivo 014 — O Guardião do Inverno",
    resposta: "zayne",
    concluido: false,
    descricao: `
      <p>Alguns personagens são lembrados pelas palavras que dizem.</p>
      <p>Outros pelas promessas que cumprem.</p>
      <p>Este parece carregar o peso do mundo sem reclamar.</p>
      <p>Reservado e disciplinado, raramente permite que suas emoções apareçam na superfície.</p>
      <p>Ainda assim, demonstra cuidado através de ações silenciosas, quase imperceptíveis.</p>
      <p>Sua presença transmite segurança.</p>
      <p>O frio parece acompanhá-lo onde quer que vá.</p>
    `
  },

  {
    id: "xavier",
    titulo: "Arquivo 027 — A Estrela Errante",
    resposta: "xavier",
    concluido: false,
    descricao: `
      <p>Costuma parecer despreocupado.</p>
      <p>Quase distraído.</p>
      <p>Como alguém que observa o mundo por uma perspectiva diferente da maioria.</p>
      <p>Mas por trás dessa calma existe alguém disposto a atravessar tempo e distância para proteger aquilo que considera importante.</p>
      <p>Algumas pessoas são guiadas pela luz.</p>
      <p>Outras parecem carregá-la consigo.</p>
    `
  },

  {
    id: "rafayel",
    titulo: "Arquivo 033 — O Pintor das Marés",
    resposta: "rafayel",
    concluido: false,
    descricao: `
      <p>Artista.</p>
      <p>Dramático.</p>
      <p>Excessivamente consciente da própria presença.</p>
      <p>Costuma transformar sentimentos em arte e esconder vulnerabilidades atrás de brincadeiras.</p>
      <p>É difícil saber quando está sendo sincero.</p>
      <p>Talvez porque nem ele próprio tenha certeza às vezes.</p>
      <p>O oceano aparece repetidamente em sua história.</p>
    `
  },

  {
    id: "caleb",
    titulo: "Arquivo 041 — O Primeiro Companheiro",
    resposta: "caleb",
    concluido: false,
    descricao: `
      <p>Algumas pessoas entram em nossas vidas.</p>
      <p>Outras parecem ter estado lá desde o começo.</p>
      <p>Este registro pertence a alguém familiar.</p>
      <p>Protetor.</p>
      <p>Alguém que se preocupa com os outros com uma naturalidade quase irritante.</p>
      <p>Como se colocá-los em segurança fosse algo tão automático quanto respirar.</p>
      <p>Muitas histórias começam com heróis.</p>
      <p>Esta começou com um amigo.</p>
    `
  },

  {
    id: "sylus",
    titulo: "Arquivo S-017 — O Corvo de Obsidiana",
    resposta: "sylus",
    especial: true,
    concluido: false,
    descricao: `
      <p><strong>Registro danificado.</strong></p>
      <p>Informações parcialmente recuperadas.</p>
      <p>Líder.</p>
      <p>Estrategista.</p>
      <p>Alguém que parece perigoso à primeira vista.</p>
      <p>Alguém que raramente demonstra fraqueza.</p>
      <p>Costuma esconder cuidado atrás de provocações.</p>
      <p>Parece confortável nas sombras.</p>
      <p>Mas presta mais atenção ao mundo ao seu redor do que deixa transparecer.</p>
      <p>Possui uma estranha afeição por criaturas abandonadas.</p>
      <p>E por pessoas determinadas demais para desistir.</p>
    `
  }
];

function criarArquivos() {
  arquivosPersonagens.innerHTML = "";

  arquivos.forEach((arquivo) => {
    const botao = document.createElement("button");
    if (arquivo.concluido) {
  botao.classList.add("concluido");
}

    botao.classList.add("cartao-arquivo");

    if (arquivo.especial) {
      botao.classList.add("sylus");
    }

    botao.innerHTML = `
  <strong>${arquivo.titulo}</strong>

  <span class="status-arquivo">
    ${
      arquivo.concluido
        ? "✓ Registro Restaurado"
        : "Status: aguardando restauração"
    }
  </span>
`;

    botao.addEventListener("click", () => {
      if (arquivo.concluido) {
  return;
}
      arquivoAtual = arquivo;
      
      if (arquivo.concluido) {

  respostaArquivo.classList.add("escondido");
  confirmarArquivo.classList.add("escondido");

} else {

  respostaArquivo.classList.remove("escondido");
  confirmarArquivo.classList.remove("escondido");

}

      tituloArquivo.innerText = arquivo.titulo;
      descricaoArquivo.innerHTML = arquivo.descricao;
      respostaArquivo.value = "";
      mensagemArquivo.innerHTML = "";

      respostaArquivo.classList.remove("escondido");
      confirmarArquivo.classList.remove("escondido");

      modalArquivo.classList.remove("escondido");
    });

    arquivosPersonagens.appendChild(botao);
  });
}

criarArquivos();

confirmarArquivo.addEventListener("click", () => {
  const resposta = respostaArquivo.value.trim().toLowerCase();

  if (resposta === arquivoAtual.resposta) {
    arquivoAtual.concluido = true;
    if (arquivoAtual.id === "sylus") {
      descricaoArquivo.innerHTML = `
        <p class="pagina-revelada">Restaurando registro...</p>

        <p class="pagina-revelada">Registro restaurado.</p>

        <p class="pagina-revelada">
          Curiosamente, este não é o arquivo mais acessado da biblioteca.
        </p>

        <p class="pagina-revelada">
          Mas é o mais acessado por uma visitante específica.
        </p>

        <p class="manuscrito">
          Eu imaginei que você encontraria este primeiro.
        </p>

        <p class="manuscrito">
          Algumas escolhas continuam não sendo tão aleatórias quanto parecem.
        </p>

        <p class="assinatura-autor">
          — O Autor
        </p>
      `;
    } else {
      mensagemArquivo.innerHTML = `
        <p class="manuscrito">
          Arquivo restaurado.
        </p>
      `;
    }

    respostaArquivo.classList.add("escondido");
    confirmarArquivo.classList.add("escondido");

    criarArquivos();

    verificarConclusaoSetor3();

  } else {
    mensagemArquivo.innerText = "O arquivo permanece instável. Esse nome não parece pertencer a este registro.";
  }
});

fecharArquivo.addEventListener("click", () => {
  modalArquivo.classList.add("escondido");
});

function verificarConclusaoSetor3() {

  const todosConcluidos = arquivos.every(
    (arquivo) => arquivo.concluido
  );

  if (todosConcluidos) {

    const botaoFinalSetor3 = document.createElement("button");
    botaoFinalSetor3.innerText = "Continuar para o próximo setor";
    botaoFinalSetor3.classList.add("botao-final-capitulo");

    descricaoArquivo.appendChild(botaoFinalSetor3);

    botaoFinalSetor3.addEventListener("click", () => {
cortina.classList.remove("escondido");

setTimeout(() => {
  cortina.classList.add("ativa");
}, 50);

setTimeout(() => {
  modalArquivo.classList.add("escondido");
  capitulo3.classList.add("escondido");

  capitulo4.classList.remove("escondido");
  capitulo4.classList.add("fade-in");

  cortina.classList.remove("ativa");

  setTimeout(() => {
    cortina.classList.add("escondido");
  }, 800);
}, 900);
    });

  }

}

let ecoAtual = null;

const ecos = [
  {
    id: "receita",
    titulo: "Eco I — A Receita Compartilhada",
    texto: `
      Um destes registros foi preparado através de uma ligação.
      <br>
      Enquanto uma pessoa ensinava.
      <br>
      E a outra fingia saber o que estava fazendo.
    `,
    opcoes: ["Feijoada", "Brigadeiro", "Bolo de Cenoura", "Strogonoff"],
    resposta: "Strogonoff",
    sucesso: `
      Registro confirmado.
      <br><br>
      Curiosamente, este arquivo contém uma anotação adicional:
      <br><br>
      <strong>"Dourar o frango antes faz diferença."</strong>
      <br><br>
      — Anotação encontrada no registro
    `,
    concluido: false
  },

  {
    id: "jogo",
    titulo: "Eco II — O Jogo Aberto",
    texto: `
      Alguns registros apresentam diversão.
      <br>
      Outros apresentam sofrimento.
      <br>
      Este registro aparentemente contém ambos.
    `,
    opcoes: ["Minecraft", "Valorant", "League of Legends", "Overwatch"],
    resposta: "Overwatch",
    sucesso: `
      Registro confirmado.
      <br><br>
      Apesar das inúmeras reclamações registradas,
      os participantes continuaram retornando ao mesmo registro.
    `,
    concluido: false
  },

  {
    id: "chamada",
    titulo: "Eco III — A Chamada",
    texto: `
      Alguns registros duram minutos.
      <br>
      Alguns registros duram horas.
      <br>
      Um deles simplesmente esqueceu de terminar.
    `,
    opcoes: [
      "Uma ligação rápida",
      "Uma conversa esquecida aberta",
      "Uma chamada que atravessou a madrugada",
      "Uma conversa sobre assuntos aleatórios"
    ],
    resposta: "Uma chamada que atravessou a madrugada",
    sucesso: `
      Registro confirmado.
      <br><br>
      O sistema não conseguiu determinar em qual momento esta conversa deveria ter terminado.
    `,
    concluido: false
  }
];

function criarEcos() {
  ecosContainer.innerHTML = "";

  ecos.forEach((eco) => {
    const botao = document.createElement("button");
    botao.classList.add("cartao-eco");

    if (eco.concluido) {
      botao.classList.add("concluido");
    }

    botao.innerHTML = `
      <strong>${eco.titulo}</strong>
      <span class="status-arquivo">
        ${eco.concluido ? "✓ Eco restaurado" : "Status: eco instável"}
      </span>
    `;

    botao.addEventListener("click", () => {
      if (eco.concluido) {
        return;
      }

      ecoAtual = eco;

      tituloEco.innerText = eco.titulo;
      textoEco.innerHTML = eco.texto;
      mensagemEco.innerHTML = "";
      opcoesEco.innerHTML = "";

      eco.opcoes.forEach((opcao) => {
        const botaoOpcao = document.createElement("button");
        botaoOpcao.classList.add("opcao-eco");
        botaoOpcao.innerText = opcao;

        botaoOpcao.addEventListener("click", () => {
          if (opcao === eco.resposta) {
            eco.concluido = true;

            mensagemEco.innerHTML = eco.sucesso;
            opcoesEco.innerHTML = "";

            criarEcos();
            verificarConclusaoSetor4();
       } else {
  ecos.forEach((eco) => {
    eco.concluido = false;
  });

  criarEcos();

  opcoesEco.innerHTML = "";

  mensagemEco.innerHTML = `
    <p class="manuscrito">
      O eco se partiu.
    </p>

    <p>
      A biblioteca perdeu a sincronização dos registros.
      <br>
      Será necessário restaurar todos os Ecos novamente.
    </p>
  `;
}
        });

        opcoesEco.appendChild(botaoOpcao);
      });

      modalEco.classList.remove("escondido");
    });

    ecosContainer.appendChild(botao);
  });
}

function verificarConclusaoSetor4() {
  const todosConcluidos = ecos.every((eco) => eco.concluido);

  if (todosConcluidos) {
    const botaoFinalSetor4 = document.createElement("button");
    botaoFinalSetor4.innerText = "Abrir Arquivo do Autor";
    botaoFinalSetor4.classList.add("botao-final-capitulo");

    mensagemEco.innerHTML += `
      <br><br>
      <p class="manuscrito">
        Todos os Ecos foram sincronizados.
      </p>

      <p class="manuscrito">
        Curioso.
        <br>
        Nenhum destes momentos parecia extraordinário quando aconteceu.
        <br>
        Mas a maioria das coisas importantes raramente parece.
      </p>

      <p class="assinatura-autor">
        — O Autor
      </p>
    `;

    mensagemEco.appendChild(botaoFinalSetor4);

botaoFinalSetor4.addEventListener("click", () => {
  cortina.classList.remove("escondido");

  setTimeout(() => {
    cortina.classList.add("ativa");
  }, 50);

  setTimeout(() => {
    modalEco.classList.add("escondido");
    capitulo4.classList.add("escondido");

    capituloFinal.classList.remove("escondido");
    capituloFinal.classList.add("fade-in");

    cortina.classList.remove("ativa");

    setTimeout(() => {
      cortina.classList.add("escondido");
    }, 800);
  }, 900);
});
  }
}

fecharEco.addEventListener("click", () => {
  modalEco.classList.add("escondido");
});

criarEcos();

function fugirBotaoNao() {
  const area = document.querySelector(".botoes-pedido");

  const larguraArea = area.offsetWidth;
  const alturaArea = area.offsetHeight;

  const larguraBotao = botaoNao.offsetWidth;
  const alturaBotao = botaoNao.offsetHeight;

  const novaEsquerda = Math.random() * (larguraArea - larguraBotao);
  const novoTopo = Math.random() * (alturaArea - alturaBotao);

  botaoNao.style.left = novaEsquerda + "px";
  botaoNao.style.top = novoTopo + "px";
}

botaoNao.addEventListener("mouseenter", fugirBotaoNao);
botaoNao.addEventListener("click", fugirBotaoNao);

botaoSim.addEventListener("click", () => {
  respostaFinal.classList.remove("escondido");

  botaoSim.classList.add("escondido");
  botaoNao.classList.add("escondido");

  const texto = document.getElementById("textoProcessamento");
  const processamentoContrato = document.getElementById("processamentoContrato");
  const conteudoFinal = document.getElementById("conteudoFinal");
  const videoFinal = document.getElementById("videoFinal");

  setTimeout(() => {
    texto.innerText = "Validando cláusulas...";
  }, 1000);

  setTimeout(() => {
    texto.innerText = "Consultando a biblioteca...";
  }, 2000);

  setTimeout(() => {
    texto.innerText = "Contrato aprovado.";
  }, 3000);

  setTimeout(() => {
    processamentoContrato.classList.add("escondido");
    conteudoFinal.classList.remove("escondido");

    if (videoFinal) {
      videoFinal.load();

      videoFinal.play().catch(() => {
        console.log("Autoplay bloqueado. Clique no play do vídeo.");
      });
    }
  }, 4200);
});