import { Box, Container, Typography } from "@mui/material";
import { CodeBoard } from "../components/CodeBoard";
import linkedLists01 from "../assets/linked-lists-01.png";
import linkedLists02 from "../assets/linked-lists-02.png";

export function LinkedListSection() {
  const linkedListExample = `  #include <stdio.h>
  #include <stdlib.h>
  
  typedef struct Node {
    int data;               
    struct Node* next; // ponteiro para o próximo nó na lista
  } Node;

  int main() {
    Node* node1 = NULL;
    Node* node2 = NULL;
    Node* node3 = NULL; 
    
    node1 = malloc(sizeof(Node));
    node2 = malloc(sizeof(Node));
    node3 = malloc(sizeof(Node));

    // atribui valores
    node1->data = 1;
    node2->data = 2;
    node3->data = 3;

    // encadeia os nós
    node1->next = node2;
    node2->next = node3;
    node3->next = NULL;

    // imprime os valores
    printf("%d ", node1->data); // 1
    printf("%d ", node1->next->data); // 2
    printf("%d ", node1->next->next->data); // 3

    return 0;
  }`;

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
          Listas ligadas
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography>
            As listas ligadas são estruturas de dados dinâmicas que permitem a
            inserção e a exclusão de elementos de forma flexível. Cada elemento
            em uma lista ligada é representado por um nó, que contém um valor e
            um ponteiro para o próximo nó na sequência. Diferentemente dos
            vetores, as listas ligadas não exigem que os elementos sejam
            armazenados em posições consecutivas de memória.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src={linkedLists01}
              sx={{
                width: "60%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography>
            Segue um exemplo de código sobre lista encadeada simples. Em uma
            explicação sucinta, é criado 3 estruturas chamados 'node' que contém
            um valor inteiro e um ponteiro para o próximo nó. Após declaração e
            alocação de memória, os nós são encadeados em fila com um nó
            apontando para o próximo, resultando em "1 2 3" na impressão dos
            valores.
          </Typography>
          <CodeBoard codeSnippet={linkedListExample} />
          <Typography>
            Essas listas podem ser simplesmente encadeada ou duplamente
            encadeada. Na simplesmente encadeada, cada nó possui apenas um
            ponteiro para o próximo nó. Já na duplamente encadeada, cada nó
            possui um ponteiro para o próximo nó e outro ponteiro para o nó
            anterior. Essa característica das listas duplamente encadeadas
            permite percorrer a lista em ambas as direções. Segue um exemplo
            visível dela logo abaixo.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src={linkedLists02}
              sx={{
                width: "60%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
            Vantagens
          </Typography>
          <Typography>
            A vantagem do uso dessa estrutura está na flexibilidade para a
            inserção e exclusão de elementos. Essas operações podem ser
            realizadas de maneira eficiente, uma vez que envolvem apenas a
            atualização dos ponteiros dos nós adjacentes. A desvantagem é que o
            acesso direto a um elemento em uma lista ligada não é tão eficiente
            quanto em um vetor, pois requer percorrer a lista a partir do início
            até o elemento desejado.
          </Typography>
          <Typography>
            Ou seja, as listas ligadas são particularmente úteis quando a ordem
            dos elementos e a capacidade de expansão são importantes, ou quando
            é necessário realizar operações de inserção e exclusão com
            frequência. Elas são amplamente utilizadas em diversas aplicações,
            como a implementação de pilhas, filas, árvores e grafos
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
