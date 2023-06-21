import { Box, Container, Typography } from "@mui/material";

export function QueueSection() {
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
            sistema.
          </Typography>
          <Typography>
            Uma fila é composta por uma sequência de elementos, onde a inserção
            ocorre no final da fila e a remoção ocorre no início da fila. Os
            novos elementos são adicionados ao final da fila, enquanto a remoção
            ocorre sempre a partir do elemento que está no início. Dessa forma,
            o primeiro elemento inserido é o primeiro a ser removido, mantendo a
            ordem FIFO.
          </Typography>

          <Typography>
            A operação de inserção em uma fila é chamada de "enqueue", enquanto
            a operação de remoção é chamada de "dequeue". O "enqueue" adiciona
            um elemento ao final da fila, enquanto o "dequeue" remove o elemento
            do início da fila, expondo o próximo elemento na ordem de chegada.
          </Typography>
          <Typography>
            Além disso, as filas podem oferecer a operação "peek", que permite
            acessar o elemento no início da fila sem removê-lo. Essa operação é
            útil para verificar o próximo elemento a ser processado sem
            modificar a estrutura da fila.
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
            Uma variante das filas é a fila de prioridade, na qual cada elemento
            possui uma prioridade associada. Os elementos são processados de
            acordo com sua prioridade, permitindo que elementos com prioridade
            mais alta sejam removidos antes dos de prioridade mais baixa.
          </Typography>
          <Typography>
            É importante mencionar que as filas têm uma complexidade de tempo
            eficiente para as operações básicas "enqueue" e "dequeue", com tempo
            constante O(1). No entanto, o acesso direto a um elemento em uma
            posição específica na fila tem complexidade de tempo O(n), onde n é
            o número de elementos na fila.
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
