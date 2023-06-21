import { Box, Container, Typography } from "@mui/material";
import linkedLists01 from "../assets/linked-lists-01.png";
import linkedLists02 from "../assets/linked-lists-02.png";

export function LinkedListSection() {
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
            Uma lista ligada pode ser simplesmente encadeada ou duplamente
            encadeada. Na lista ligada simplesmente encadeada, cada nó possui
            apenas um ponteiro para o próximo nó. Já na lista ligada duplamente
            encadeada, cada nó possui um ponteiro para o próximo nó e outro
            ponteiro para o nó anterior. Essa característica das listas ligadas
            duplamente encadeadas permite percorrer a lista em ambas as
            direções. Segue um exemplo abaixo de lista duplamente encadeada.
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
          <Typography>
            A vantagem das listas ligadas está na flexibilidade para a inserção
            e exclusão de elementos. Essas operações podem ser realizadas de
            maneira eficiente, uma vez que envolvem apenas a atualização dos
            ponteiros dos nós adjacentes. No entanto, o acesso direto a um
            elemento em uma lista ligada não é tão eficiente quanto em um vetor,
            pois requer percorrer a lista a partir do início até o elemento
            desejado.
          </Typography>
          <Typography>
            As listas ligadas são particularmente úteis quando a ordem dos
            elementos e a capacidade de expansão são importantes, ou quando é
            necessário realizar operações de inserção e exclusão com frequência.
            Elas são amplamente utilizadas em diversas aplicações, como a
            implementação de pilhas, filas, árvores e grafos
          </Typography>
          <Typography>
            Dessa forma, as listas ligadas são uma opção valiosa de estrutura de
            dados dinâmica que oferece flexibilidade e eficiência para
            manipulação de elementos, permitindo a criação de soluções
            eficientes para uma ampla gama de problemas na ciência da
            computação.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
