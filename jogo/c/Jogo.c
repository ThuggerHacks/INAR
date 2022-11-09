#include <stdio.h>
#include <stdlib.h>
int modeloDeTransicao(int tabuleiro[3][3]);

void main()
{
    int tab[3][3] = {
        {1, 3, 2},
        {0, 4, 6},
        {5, 7, 8}};

    int modelo[3][3][3] = modeloDeTransicao(tab);
    int i, j, k;
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
        {
            for (k = 0; k < 3; k++)
            {
                printf("%d", modelo[i][j][k]);
            }
        }
    }
}

int modeloDeTransicao(int tabuleiro[3][3])
{
    int i, j;
    int copia[3] = tabuleiro;
    int jogadas[4];
    int pos = 0;

    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
        {

            //verificar se existe jogada possivel em frente
            if (tabuleiro[i][j + 1] == 0)
            {
                //fazer troca
                tabuleiro[i][j + 1] = tabuleiro[i][j];
                tabuleiro[i][j] = 0;
                //inserir no tabuleiro de jogadas validas
                jogadas[pos] = tabuleiro;
                //voltar tabuleiro ao estado original
                tabuleiro = copia;
                pos++;
            }

            //verificar se existe jogada possivel a tras
            if (tabuleiro[i][j - 1] == 0)
            {
                //fazer troca
                tabuleiro[i][j - 1] = tabuleiro[i][j];
                tabuleiro[i][j] = 0;
                //inserir no tabuleiro de jogadas validas
                jogadas[pos] = tabuleiro;
                //voltar tabuleiro ao estado original
                tabuleiro = copia;
                pos++;
            }

            //verificar se existe jogada possivel em cima
            if (tabuleiro[i - 1])
            {
                if (tabuleiro[i - 1][j] == 0)
                {
                    //fazer troca
                    tabuleiro[i - 1][j] = tabuleiro[i][j];
                    tabuleiro[i][j] = 0;
                    //inserir no tabuleiro de jogadas validas
                    jogadas[pos] = tabuleiro;
                    //voltar tabuleiro ao estado original
                    tabuleiro = copia;
                    pos++;
                }
            }

            //verificar se existe jogada possivel em baixo
            if (tabuleiro[i + 1])
            {
                if (tabuleiro[i + 1][j] == 0)
                {
                    //fazer troca
                    tabuleiro[i + 1][j] = tabuleiro[i][j];
                    tabuleiro[i][j] = 0;
                    //inserir no tabuleiro de jogadas validas
                    jogadas[pos] = tabuleiro;
                    //voltar tabuleiro ao estado original
                    tabuleiro = copia;
                    pos++;
                }
            }
        }
    }

    return jogadas;
}