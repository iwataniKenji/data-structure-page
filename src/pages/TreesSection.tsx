import { Box, Container, Typography } from "@mui/material";

export function TreesSection() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography sx={{ fontSize: 32, fontWeight: 500 }}>Árvores</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography>
            As árvores são estruturas de dados hierárquicas que consistem em nós
            interconectados. Cada nó pode ter zero ou mais nós filhos, formando
            uma estrutura em forma de árvore. Os nós são conectados por meio de
            arestas, que representam as relações entre eles.
          </Typography>
          <Typography>
            Uma árvore tem um nó especial chamado de "raiz", que é o nó
            principal e não possui nenhum nó pai. Os nós que não possuem filhos
            são chamados de "folhas". Os nós que possuem o mesmo nó pai são
            chamados de "irmãos". A relação entre um nó e seus nós filhos é
            chamada de "subárvore".
          </Typography>

          <Typography>
            Uma árvore binária é um tipo de árvore em que cada nó pode ter no
            máximo dois nós filhos: um nó filho esquerdo e um nó filho direito.
            Essa estrutura é amplamente utilizada em algoritmos e estruturas de
            dados.
          </Typography>
          <Typography>
            As árvores binárias têm várias aplicações, como a representação de
            estruturas de diretórios em um sistema operacional, a implementação
            de expressões matemáticas e a organização de dados hierárquicos.
          </Typography>
          <Typography>
            Outros tipos de árvores incluem árvores balanceadas, como as árvores
            AVL e as árvores rubro-negras, que mantêm uma altura balanceada para
            otimizar o tempo de busca. Além disso, existem as árvores de busca
            binária, que possuem a propriedade de ter valores menores na
            subárvore esquerda e valores maiores na subárvore direita,
            facilitando a busca de elementos.
          </Typography>
          <Typography>
            Em resumo, as árvores são estruturas de dados hierárquicas compostas
            por nós interconectadas. As árvores binárias são um tipo comum de
            árvore, em que cada nó pode ter no máximo dois nós filhos. Elas têm
            diversas aplicações na ciência da computação e são utilizadas para
            representar relações hierárquicas entre os dados.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
