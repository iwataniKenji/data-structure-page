import { Box, Container, Typography } from "@mui/material";
import { ImageWrapper } from "../components/ImageWrapper";
import { CodeBoard } from "../components/CodeBoard";
import queue01 from "../assets/queue-01.png";

export function QueueSection() {
  const queueExample = `  #include <stdio.h>
  #include <stdlib.h>

  typedef struct Node {
    int data;
    struct Node* next;
  } Node;

  typedef struct Queue {
    Node* front; // aponta para o primeiro nó da fila
    Node* rear;  // aponta para o último nó da fila
  } Queue;

  // cria novo nó
  Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    
    newNode->data = data;
    newNode->next = NULL;
    
    return newNode;
  }

  // cria uma nova fila vazia
  Queue* createQueue() {
    Queue* queue = (Queue*)malloc(sizeof(Queue));
    
    queue->front = NULL;
    queue->rear = NULL;
    
    return queue;
  }

  // verifica se a fila está vazia (ou seja, se o front é NULL)
  int isEmpty(Queue* queue) {
    return (queue->front == NULL);
  }

  // adiciona elemento no final
  void enqueue(Queue* queue, int data) {
    Node* newNode = createNode(data);

    // se fila estiver vazia, elemento será o primeiro e último
    if (isEmpty(queue)) {
      queue->front = newNode;
      queue->rear = newNode;

      return;
    }

    // adiciona elemento no final
    queue->rear->next = newNode;
    queue->rear = newNode;
  }

  // remove elemento do início
  void dequeue(Queue* queue) {
    if (isEmpty(queue)) {
      printf("A fila está vazia.");
      return -1; // retorno que indica erro
    }

    Node* temp = queue->front; // temporário recebe o primeiro da fila
    queue->front = queue->front->next;

    // caso o nó removido seja o último nó da fila, atualiza o rear para NULL
    if (queue->front == NULL) {
      queue->rear = NULL;
    }

    // libera memória do nó removido
    free(temp);
  }

  int main() {
    Queue* queue = createQueue();

    enqueue(queue, 10);
    enqueue(queue, 20);
    enqueue(queue, 30);
    
    // fila atual: 10 (primeiro), 20 (segundo) e 30 (terceiro)

    dequeue(queue); // retira 10
    dequeue(queue); // retira 20
    
    // fila atual: 30 (único elemento)

    return 0;
  }`;

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
          Filas (Queues)
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography>
            As filas são estruturas de dados que seguem o princípio do primeiro
            a entrar, primeiro a sair (FIFO - First-In, First-Out). Elas
            permitem a inserção de elementos no final da fila e a remoção no
            início da fila, tornando-as adequadas para situações em que a ordem
            de chegada é importante, como o processamento de tarefas em um
            sistema. Um exemplo para fácil visualização desse tipo de
            funcionamento são as filas de bancos, onde os clientes são atendidos
            de acordo com a ordem de chegada.
          </Typography>
          <Typography>
            A operação de inserção em uma fila é chamada de "enqueue", enquanto
            a operação de remoção é chamada de "dequeue". O "enqueue" adiciona
            um elemento ao final da fila, enquanto o "dequeue" remove o elemento
            do início da fila, expondo o próximo elemento na ordem de chegada.
          </Typography>
          <ImageWrapper imageUrl={queue01} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
            Utilização
          </Typography>
          <Typography>
            As filas são amplamente utilizadas em diversas aplicações, como
            sistemas de gerenciamento de tarefas, algoritmos de busca e
            simulações. Elas podem ser implementadas por meio de um vetor
            estático, onde o início e o final da fila são controlados por
            índices, ou por meio de uma lista ligada, onde cada elemento possui
            um ponteiro para o próximo elemento.
          </Typography>
          <Typography>
            Segue abaixo um exemplo com listas ligadas do qual o elemento de
            estrutura Queue (fila) gerencia quem é o último e o primeiro nó,
            possibilitando o uso dos métodos de enqueue e dequeue para
            manipulação dos elementos da fila.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <CodeBoard codeSnippet={queueExample} />
          <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
            Conclusão
          </Typography>
          <Typography>
            Em resumo, as filas são estruturas de dados que seguem o princípio
            FIFO, permitindo a inserção no final da fila e a remoção no início
            da fila. Elas são úteis em situações em que a ordem de chegada é
            relevante, como no processamento de tarefas. As filas desempenham um
            papel importante em diversas aplicações e são amplamente utilizadas
            na ciência da computação.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
