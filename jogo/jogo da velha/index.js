const tabuleiro = [
    ["X", "X", "X", "X", "", "", "", "O", "O", "O", "O", "O", "", "", "", "", "O", "", "X", ""],
    ["X", "X", "X", "X", "", "", "", "O", "O", "O", "O", "O", "X", "X", "X", "X", "X", "X", "X", ""],
    ["X", "X", "X", "X", "", "", "", "O", "O", "O", "O", "O", "X", "X", "X", "X", "O", "X", "X", ""],
    ["X", "X", "X", "X", "", "", "", "O", "O", "O", "O", "O", "X", "X", "X", "X", "X", "X", "X", ""],
    ["X", "X", "X", "X", "", "", "", "O", "O", "O", "O", "O", "X", "X", "X", "X", "O", "X", "X", ""],
    ["X", "X", "X", "X", "X", "", "", "O", "O", "O", "O", "O", "X", "X", "X", "X", "O", "X", "X", ""],
    ["X", "X", "", "", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ""],
    ["X", "X", "X", "X", "", "", "X", "O", "O", "O", "O", "X", "X", "X", "X", "X", "O", "X", "X", ""],
    ["X", "X", "X", "X", "", "", "", "X", "O", "O", "X", "X", "X", "X", "X", "X", "O", "X", "X", ""],
    ["X", "X", "X", "X", "", "", "", "O", "X", "X", "X", "O", "X", "X", "X", "X", "O", "X", "X", ""],
    ["X", "X", "X", "X", "", "", "", "O", "X", "X", "O", "O", "X", "X", "X", "X", "O", "X", "X", ""],
    ["X", "X", "X", "X", "", "", "", "X", "X", "O", "X", "O", "X", "X", "X", "X", "O", "X", "X", ""],
    ["X", "X", "X", "X", "", "", "X", "X", "O", "O", "O", "X", "X", "X", "", "X", "O", "X", "X", ""],
    ["X", "X", "X", "X", "", "X", "X", "O", "O", "O", "O", "O", "X", "X", "X", "X", "O", "X", "X", ""],
    ["X", "X", "X", "X", "X", "X", "", "O", "O", "O", "O", "O", "", "", "X", "X", "O", "X", "X", ""],
    ["X", "X", "X", "X", "X", "", "", "O", "O", "O", "O", "O", "X", "X", "X", "X", "O", "X", "X", ""],
    ["", "X", "X", "X", "", "", "", "O", "O", "O", "O", "O", "X", "X", "X", "X", "O", "X", "", ""],
    ["X", "X", "X", "X", "", "", "", "O", "O", "O", "O", "O", "X", "X", "X", "X", "O", "X", "X", ""],
    ["X", "X", "", "X", "", "", "", "O", "O", "O", "O", "O", "", "", "", "", "O", "", "", "X"],
    ["X", "", "", "X", "", "", "", "O", "O", "O", "O", "O", "", "", "", "", "O", "", "", "X"],
];

class Jogo {
    //verifica termino do jogo
    testeDeObjectivo() {
        let linha = 0;
        //linha
        for (let i = 0; i < tabuleiro.length; i++) {
            linha = 0;
            for (let j = 0; j < tabuleiro[i].length; j++) {
                if (tabuleiro[i][j] == "X") {
                    linha++;
                }
            }

            if (linha == tabuleiro[i].length) {
                return true;
            }
        }

        //colunas
        let coluna = 0;
        for (let i = 0; i < tabuleiro.length; i++) {
            coluna = 0;
            for (let j = 0; j < tabuleiro.length; j++) {
                if (tabuleiro[j][i] == "X") {
                    coluna++;
                }
            }
            if (coluna == tabuleiro.length) {
                return true;
            }
        }

        //diagonal1
        let diagonal = 0;
        for (let i = 0; i < tabuleiro.length; i++) {
            if (tabuleiro[i][i] == "X") {
                diagonal++;
            }
        }

        if (diagonal == tabuleiro.length) {
            return true;
        }

        //diagonal2
        let diagonal2 = 0;
        for (
            let i = 0, j = tabuleiro.length - 1;
            i < tabuleiro.length && j >= 0;
            i++, j--
        ) {
            if (tabuleiro[i][j] == "X") {
                diagonal2++;
            }
        }

        if (diagonal2 == tabuleiro.length) {
            return true;
        }

        //nenhuma das condicoes

        return false;
    }

    //verifica jogadas
    modeloDeTransicao() {
        let jogadasValidas = [];

        for (let i = 0; i < tabuleiro.length; i++) {
            for (let j = 0; j < tabuleiro[i].length; j++) {
                if (tabuleiro[i][j] == "") {
                    jogadasValidas.push([i, j]);
                }
            }
        }

        return jogadasValidas;
    }
}

let jogo = new Jogo();

console.log(jogo.testeDeObjectivo());
