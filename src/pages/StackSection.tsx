import { Box, Container, Typography } from "@mui/material";
import { CodeBoard } from "../components/CodeBoard";
import { ImageWrapper } from "../components/ImageWrapper";
import stacks01 from "../assets/stacks-01.jpg";
import stacks02 from "../assets/stacks-02.png";
import stacks03 from "../assets/stacks-03.png";

export function StackSection() {
  const stackManipulationExample = `  #include <stdio.h>
    #include <stdlib.h>

    typedef struct Node {
      int data;
      struct Node* next;
    } Node;

    typedef struct {
      Node* top;
    } Stack;

    void initializeStack(Stack* stack) {
      // dado que o primeiro índice de elemento é 0, valor -1 indica uma pilha vazia
      stack->top = NULL;
    }

    // método de inserção na pilha
    void push(Stack* stack, int data) {
      // alocação de memória do novo nó
      Node* newNode = (Node*)malloc(sizeof(Node));

      // atribui valor para o nó recém criado 
      newNode->data = data;
      
      // novo nó aponta para o topo e antigo topo aponta para o novo nó
      newNode->next = stack->top;
      stack->top = newNode;
    }

    // método de remoção
    void pop(Stack* stack) {
      // stack->top é o apontamento para o nó do topo da pilha
      Node* temp = stack->top;
    
      int data = temp->data;
      stack->top = stack->top->next;
      free(temp);
    }

    int main() {
      Stack stack;
      initializeStack(&stack);
      
      push(&stack, 10);
      push(&stack, 20);
      push(&stack, 30);
      
      // nesse momento a pilha se apresenta nessa ordem: 30 em cima de 20 e 20 em cima de 10
      
      pop(&stack); // retira o valor 30
      pop(&stack); // retira o valor 20

      // resultado final é a pilha com apenas o valor 10
      
      return 0;
  }`;

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
          Pilhas (Stacks)
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography>
            As pilhas são estruturas de dados que seguem o princípio do último a
            entrar, primeiro a sair (LIFO - Last-In, First-Out). Elas permitem
            inserir e remover elementos somente no topo da pilha, o que as torna
            adequadas em situações em que a ordem de acesso é relevante, como a
            execução de chamadas de função.
          </Typography>
          <Typography>
            Uma pilha é composta por uma sequência de elementos, onde o topo
            representa a posição mais recente. Novos elementos podem ser
            adicionados à pilha apenas no topo, enquanto a remoção de elementos
            ocorre sempre a partir do topo. Um exemplo prático para se
            visualizar essa abordagem no cotidiano seria uma pilha de louças
            sujas, onde os novos pratos são colocados no topo e os pratos limpos
            são retirados do topo.
          </Typography>
          <ImageWrapper imageUrl={stacks01} />
          <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
            Utilidade
          </Typography>
          <Typography>
            O principal contexto de utilização das stacks é o controle de fluxo
            e o gerenciamento de chamadas de função. Quando uma função é
            chamada, as variáveis locais e outros dados relevantes são
            armazenados em uma pilha chamada 'call stack'. À medida que as
            funções são concluídas, elas são removidas da pilha, permitindo o
            retorno ao contexto anterior.
          </Typography>
          <Typography>
            Além disso, as pilhas são amplamente utilizadas em algoritmos de
            busca e em estruturas de dados mais complexas, como as árvores e
            grafos.
          </Typography>
          <ImageWrapper imageUrl={stacks02} />

          <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
            No código
          </Typography>
          <Typography>
            A operação de inserção em uma pilha é chamada de "push", enquanto a
            operação de remoção é chamada de "pop". O "push" adiciona um
            elemento ao topo da pilha, deslocando o elemento anterior para
            baixo, e o "pop" remove o elemento do topo, expondo o elemento que
            estava abaixo.
          </Typography>
          <ImageWrapper imageUrl={stacks03} />
          <Typography>
            Para exemplificar temos um código mostrando uma implementação com
            ponteiros. Complementando a explicação acima, o método 'push'
            adiciona o apontamento do último elemento para um novo elemento
            recém alocado em memória. No caso do método 'pop', após a remoção do
            último elemento, o ponteiro do penúltimo elemento é ajustado para
            NULL, indicando que não elemento conseguinte.
          </Typography>
          <CodeBoard codeSnippet={stackManipulationExample} />
        </Box>
      </Box>
    </Container>
  );
}
