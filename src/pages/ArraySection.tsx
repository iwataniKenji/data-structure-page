import { Box, Container, Typography } from "@mui/material";
import { CodeBoard } from "../components/CodeBoard";

export function ArraySection() {
  const vetorMatrizExample = `  #include <stdio.h>
  #include <stdlib.h>
  #include <time.h>

  int main() {
    // vetor unidimensional com tamanho 5
    int vetor[5]; 
    int i;

    // atribui valores ao array em um loop
    for (i = 0; i < 5; i++) {
      vetor[i] = i + 1;
    }

    // matriz bidimensional com 3 linhas e 3 colunas
    int matriz[3][3]; 
    int j;

    // atribuindo valores aos elementos da matriz
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            matriz[i][j] = (i + 1) * (j + 1);
        }
    }
  
    return 0;
  }
  `;

  const mallocReallocExample = `  #include <stdio.h>
  #include <stdlib.h>
  #include <time.h>

  int main() {
    int *vetor, dimensao = 3;
  
    srand(time(NULL));
  
    // malloc -> alocação de memoria
    vetor = malloc(dimensao * sizeof(int));
  
    // insere números aleatórios
    for (i = 0; i < dimensao; i++) {
      vetor[i] = rand() / 100 + 1;
    }
  
    // realocação -> muda dimensão do array
    vetor = realloc(vetor, dimensao * 2 * sizeof(int));
  
    // limpa memoria do array
    free(vetor);
  
    return 0;
  }
`;

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography sx={{ fontSize: 32, fontWeight: 500 }}>Vetores</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography>
            Os vetores, também conhecidos como arrays, são estruturas de dados
            sequenciais que permitem armazenar um conjunto de elementos em
            posições consecutivas na memória. Eles são úteis para acessar
            rapidamente elementos em posições específicas, utilizando um índice
            (a variar da linguagem de programação utilizada, o primeiro índice
            geralmente é o zero).
          </Typography>
          <Typography>
            Nessa estrutura todos os elementos têm o mesmo tipo de dado, sendo
            assim ocupam a mesma quantidade de espaço na memória e possuem mesma
            quantidade de bytes. Essa característica facilita o acesso direto
            aos elementos, uma vez que é possível calcular a posição de memória
            de um elemento com base no seu índice e no tamanho do tipo de dado
            armazenado.
          </Typography>
          <Typography>
            Além disso, um array pode ser tanto unidimensional quanto
            bidimensional (chamado de matriz), do qual essa última possui dois
            índices que geralmente são representados em linhas e colunas. Segue
            abaixo um exemplo de ambos os tipos de vetores:
          </Typography>
          <CodeBoard codeSnippet={vetorMatrizExample} />
        </Box>
        <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
          Vantagens e desvantagens
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography>
            Uma das principais vantagens dos vetores está na eficiência do
            acesso aos elementos. Isso ocorre porque é possível calcular
            diretamente o endereço de memória do elemento desejado
          </Typography>
          <Typography>
            Além disso, elas também permitem realizar operações como inserção,
            exclusão e atualização de elementos em posições específicas. No
            entanto, essas operações podem ser menos eficientes em relação ao
            acesso aos elementos. Inserir ou excluir um elemento em uma posição
            intermediária do vetor requer deslocar todos os elementos
            subsequentes o que pode não ser tão performático
          </Typography>
          <Typography>
            Outra limitação está na sua capacidade fixa de armazenamento. Uma
            vez que o tamanho do vetor é definido no momento da criação, pode
            ser necessário redimensioná-lo ou criar um novo vetor com um tamanho
            maior caso seja necessário armazenar mais elementos do que o vetor
            suporta inicialmente. Para isso, na linguagem C, utilizamos os
            métodos malloc para alocar espaço na memória e realloc para mudar a
            dimensão do vetor caso seja necessário. Veja o código a seguir
            exemplificando a abordagem e m C.
          </Typography>
          <CodeBoard codeSnippet={mallocReallocExample} />
        </Box>

        <Typography sx={{ fontSize: 32, fontWeight: 500 }}>Resumo</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography>
            Em resumo, os vetores são estruturas de dados sequenciais que
            oferecem acesso rápido aos elementos por meio de um índice. Eles são
            eficientes para operações de acesso direto, mas podem ser menos
            eficientes para inserção e exclusão de elementos. Os vetores são
            amplamente utilizados e são fundamentais no desenvolvimento de
            programas e algoritmos eficientes.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
