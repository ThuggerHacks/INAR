import { Arvore } from "./index.js"

const interfaceTabuleiro = document.querySelectorAll("#root div");
const graph = document.querySelector("#graph");

let tabuleiro = [];

const estadoInicial = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", ""]
]
//carregar ao iniciar
window.onload = () => {
    gerarValoresTabuleiro();
}

//pegar estado inicial e colocar na interface
const gerarValoresTabuleiro = () => {

    //converter array bidimensional em dimensional
    for (let i = 0; i < estadoInicial.length; i++) {
        for (let j = 0; j < estadoInicial[i].length; j++) {
            tabuleiro.push(estadoInicial[i][j])
        }
    }

    //passar valores do array para a interface
    for (let i = 0; i < tabuleiro.length; i++) {
        interfaceTabuleiro[i].removeAttribute("onclick");
        interfaceTabuleiro[i].addEventListener("click", () => {
            jogar(i)
        })
        interfaceTabuleiro[i].innerText = tabuleiro[i];
    }
}


//atualizar tabuleiro
const atualizarTabuleiro = (tabuleiroAtualizado) => {
    //passar valores do array para a interface
    for (let i = 0; i < tabuleiroAtualizado.length; i++) {
        interfaceTabuleiro[i].removeAttribute("onclick");
        interfaceTabuleiro[i].innerText = tabuleiroAtualizado[i];
    }
}

//trocar posicoes de valores
const trocar = (posicao, index) => {
    tabuleiro[posicao + index] = tabuleiro[posicao];
    tabuleiro[posicao] = "";
    atualizarTabuleiro(tabuleiro);
    let novoEstado = unidimensionalParaBidimensional(tabuleiro);
    desenharGrafico(novoEstado);
}


const desenharGrafico = (tabuleiroAtual) => {
    let arr = new Arvore(tabuleiroAtual);
    arr.raiz.tabuleiro = tabuleiroAtual;
    arr.estadoInicial = tabuleiroAtual;
    let caminhos = arr.buscaPorProfundidade(arr.raiz);

    graph.innerHTML = ""
    for (let i = caminhos.raiz.tabuleiro.caminhos.tamanho() - 1; i >= 0; i--) {
        let novoEl = document.createElement("div");
        novoEl.classList.add("element")

        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                let path = caminhos.raiz.tabuleiro.caminhos.meio(i).tabuleiro[j][k];
                if (k == 0) {
                    novoEl.innerHTML += '['
                }
                if (k == 2) {
                    novoEl.innerHTML += `${path == "" ? " " : path}&nbsp;]<br>`;
                } else {
                    novoEl.innerHTML += `${path == "" ? " " : path}&nbsp;`;
                }


            }
            if (j == 2) {
                graph.innerHTML += "<div style='font-size:50px;color:red'>&darr;</div>"
            }
        }

        novoEl.innerHTML += `</div>`
        graph.appendChild(novoEl)

    }


    let novoEl = document.createElement("div");
    novoEl.classList.add("solucao")
    graph.innerHTML += "<div style='font-size:50px;color:pink'>&darr;</div>"
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
            let path = caminhos.raiz.tabuleiro.tabuleiro[j][k];
            if (k == 0) {
                novoEl.innerHTML += '['
            }
            if (k == 2) {
                novoEl.innerHTML += `${path == "" ? " " : path}&nbsp;]<br>`;
            } else {
                novoEl.innerHTML += `${path == "" ? " " : path}&nbsp;`;
            }
        }
    }

    novoEl.innerHTML += `</div>`
    graph.appendChild(novoEl)
}


const unidimensionalParaBidimensional = (tabuleiroUnidimensional) => {
    let bidimensional = [];
    let array = [];
    for (let i = 0; i < tabuleiroUnidimensional.length; i++) {
        array.push(tabuleiroUnidimensional[i]);

        if (array.length == 3) {
            bidimensional.push(array);
            array = [];
        }
    }

    return bidimensional;
}

//jogar   quando clicado
const jogar = (posicao) => {

    if (tabuleiro[posicao + 1] == "") {
        trocar(posicao, 1);
    } else if (tabuleiro[posicao - 1] == "") {
        trocar(posicao, -1);
    } else if (tabuleiro[posicao + 3] == "") {
        trocar(posicao, 3);
    } else if (tabuleiro[posicao - 3] == "") {
        trocar(posicao, -3);
    }
}