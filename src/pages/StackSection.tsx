import { Box, Container, Typography } from "@mui/material";

export function StackSection() {
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
            ocorre sempre a partir do topo. Dessa forma, o último elemento
            inserido é o primeiro a ser removido, garantindo a ordem LIFO.
          </Typography>

          <Typography>
            A operação de inserção em uma pilha é chamada de "push", enquanto a
            operação de remoção é chamada de "pop". O "push" adiciona um
            elemento ao topo da pilha, deslocando o elemento anterior para
            baixo, e o "pop" remove o elemento do topo, expondo o elemento que
            estava abaixo.
          </Typography>
          <Typography>
            A principal utilidade das pilhas é o controle de fluxo e o
            gerenciamento de chamadas de função. Quando uma função é chamada, as
            variáveis locais e outros dados relevantes são armazenados em uma
            pilha. À medida que as funções são concluídas, elas são removidas da
            pilha, permitindo o retorno ao contexto anterior.
          </Typography>
          <Typography>
            Além disso, as pilhas são amplamente utilizadas em algoritmos de
            busca e em estruturas de dados mais complexas, como as árvores e
            grafos. Elas podem ser implementadas por meio de um vetor estático,
            onde o topo é controlado por um índice, ou por meio de uma lista
            ligada, onde cada elemento possui um ponteiro para o elemento
            anterior
          </Typography>
          <Typography>
            As pilhas possuem uma propriedade fundamental conhecida como
            "propriedade de ordem". Isso significa que os elementos são
            processados em ordem reversa à ordem em que foram inseridos. Essa
            propriedade é útil em uma variedade de algoritmos e situações onde é
            necessário inverter a ordem original dos elementos.
          </Typography>
          <Typography>
            Em resumo, as pilhas são estruturas de dados que seguem o princípio
            LIFO, permitindo inserção e remoção de elementos somente no topo.
            Elas são úteis em situações em que a ordem de acesso é relevante,
            como em chamadas de função e em algoritmos de busca. As pilhas
            desempenham um papel fundamental em muitas aplicações e são
            amplamente utilizadas na ciência da computação.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
