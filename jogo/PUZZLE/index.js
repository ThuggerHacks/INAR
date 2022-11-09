const estadoActual = [
    ["1", "2", "3"],
    ["4", "6", "1"],
    ["6", "7", ""]
]

let estadoFinal = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", ""]
];


class Jogo {

    modeloDeTransicao(pos, estadoActual) {
        let posicoesValidas = [];

        if (estadoActual[pos[0]][pos[1] + 1] == "") {
            posicoesValidas.push("direita");
        }

        if (estadoActual[pos[0]][pos[1] - 1] == "") {
            posicoesValidas.push("esquerda");
        }

        if (estadoActual[pos[0] + 1]) {
            if (estadoActual[pos[0] + 1][pos[1]] == "") {
                posicoesValidas.push("baixo");
            }
        }

        if (estadoActual[pos[0] - 1]) {
            if (estadoActual[pos[0] - 1][pos[1]] == "") {
                posicoesValidas.push("cima");
            }
        }

        return posicoesValidas;
    }

    testeDeObjectivo(estadoFinal, estadoActual) {

        let contador = 0;
        for (let i = 0; i < estadoFinal.length; i++) {
            for (let j = 0; j < estadoActual.length; j++) {
                if (estadoActual[i][j] != estadoFinal[i][j]) {
                    contador++;
                    break;
                }
            }
        }

        if (contador == 0) {
            return true;
        }

        return false;
    }
}


window.onload = () => {

    const jogo = new Jogo();

    console.log(jogo.testeDeObjectivo(estadoFinal, estadoActual));
    console.log(jogo.modeloDeTransicao([1, 1], estadoActual))
}