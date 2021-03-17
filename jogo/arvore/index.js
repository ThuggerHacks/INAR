import { Jogo } from "./jogo.js";
import { Lista } from "./Lista.js";

class No {
  constructor(tabuleiro) {
    this.tabuleiro = tabuleiro;
    this.filhos = new Lista();
    this.caminhos = new Lista();
    this.pai = null;
  }
}

export class Arvore {
  constructor(estadoInicial) {

    this.estadoInicial = estadoInicial;

    this.estadoFinal = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", ""]
    ];

    this.raiz = new No(this.estadoInicial);

    this.pilha = new Lista();

    this.pilha.adicionarFim(this.raiz);

    this.objectivos = new Lista();
  }


  buscaPorProfundidade(arvore, profundidade = 0) {

    if (arvore && profundidade < 4000) {

      let jogo = new Jogo();

      let copia = jogo.copiarValorArray(arvore.tabuleiro);

      //terminou
      if (jogo.testeDeObjectivo(arvore.tabuleiro, this.estadoFinal)) {
        this.objectivos.adicionarFim(arvore);
      }


      let transicao = jogo.modeloDeTransacao(arvore.tabuleiro);
      if (transicao.length > 0) {
        let novoNo;
        for (let i = transicao.length - 1; i >= 0; i--) {
          novoNo = new No(transicao[i]);
          arvore.tabuleiro = copia;
          novoNo.pai = arvore;
          novoNo.caminhos.adicionarFim(novoNo.pai)
          for (let j = 0; j < novoNo.pai.caminhos.tamanho(); j++) {
            novoNo.caminhos.adicionarFim(novoNo.pai.caminhos.meio(j));
          }


          if (arvore.pai) {
            if (jogo.testeDeObjectivo(novoNo.tabuleiro, arvore.pai.tabuleiro) == false) {
              arvore.filhos.adicionarFim(novoNo);
            }

          } else {
            arvore.filhos.adicionarFim(novoNo);
          }

        }
      }

      this.pilha.removerInicio();

      for (let i = 0; i < arvore.filhos.tamanho(); i++) {
        if (arvore.pai) {
          if (jogo.testeDeObjectivo(arvore.pai.tabuleiro, arvore.filhos.meio(i).tabuleiro) == false) {
            this.pilha.adicionarFim(arvore.filhos.meio(i));
          }
        } else {
          this.pilha.adicionarFim(arvore.filhos.meio(i));

        }
      }

      profundidade++;
      this.buscaPorProfundidade(this.pilha.inicio(), profundidade);
    }

    return this.objectivos;
  }

  melhorSolucao(objectivos) {
    let melhor = objectivos;
    for (let i = 0; i < this.objectivos.tamanho(); i++) {
      if (this.objectivos.meio(i).caminhos.tamanho() < melhor.meio(0).caminhos.tamanho()) {
        melhor = this.objectivos.meio(i);
      }
    }

    return melhor;
  }

}

// const arvore = new Arvore([
//   ["1", "2", "3"],
//   ["4", "5", "6"],
//   ["7", "8", ""]
// ]);

// let caminhos = arvore.buscaPorProfundidade(arvore.raiz)

// console.log(caminhos.raiz.tabuleiro.filhos.tamanho())