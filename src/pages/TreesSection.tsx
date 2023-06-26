import { Box, Container, Typography } from "@mui/material";
import { ImageWrapper } from "../components/ImageWrapper";
import { CodeBoard } from "../components/CodeBoard";
import { VideoWrapper } from "../components/VideoWrapper";
import trees01 from "../assets/trees-01.png";
import trees02 from "../assets/trees-02.jpg";

export function TreesSection() {
  const binaryTreeExample = `  #include <stdio.h>
  #include <stdlib.h>
  
  // definição da struct de um nó
  typedef struct Node {
    int data;
    struct Node* left;
    struct Node* right;
  } Node;
  
  // cria novo nó
  Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    
    // novo nó possui o valor passado por param é aponta para NULL na esquerda e na direita
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    
    return newNode;
  }
  
  Node* insertNode(Node* root, int data) {
    // se a árvore estiver vazia, cria um novo nó e o retorna como a raiz
    if (root == NULL) {
      return createNode(data);
    }
    
    // se o valor passado por param for menor que o valor do nó atual -> insere à subárvore esquerda
    if (data < root->data) {
      root->left = insertNode(root->left, data);
    }

    // se o valor passado por param for maior que o valor do nó atual -> insere à subárvore direita
    else if (data > root->data) {
      root->right = insertNode(root->right, data);
    }
    
    // retorna a root atualizada
    return root;
  }
  
  // função recursiva para percorrer a árvore em ordem
  void printInOrder(Node* root) {
    if (root != NULL) {
      printInOrder(root->left);
      
      printf("%d ", root->data);
      
      printInOrder(root->right);
    }
  }
  
  int main() {
    Node* root = NULL;
    
    root = insertNode(root, 24);
    root = insertNode(root, 10);
    root = insertNode(root, 32);
    
    printf("Valores em ordem: ");
    printInOrder(root);
    
    return 0;
  }`;

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography sx={{ fontSize: 32, fontWeight: 500 }}>Árvores</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography>
            As árvores são estruturas hierárquicas que consistem em nós
            interconectados, possuindo sempre um elemento chamado 'raiz' do qual
            pode possuir outros elementos filhos conectados. Cada um desses nós
            pode ter zero ou mais nós filhos, formando uma estrutura em forma de
            árvore invertida.
          </Typography>
          <Typography>
            Para melhor visualização dessa estrutura imaginemos, por exemplo, a
            árvore a seguir: cada nó é representado por um círculo, sendo o
            elemento '24' o elemento 'root' e pai dos elementos '10' e '32'.
          </Typography>
          <ImageWrapper imageUrl={trees01} />
          <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
            Nomenclatura dos elementos
          </Typography>

          <ul>
            <li>
              <Typography>
                <strong>RAIZ</strong> - elemento principal e pai de todos os
                outros nós ramificados
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>FOLHAS</strong> - nós que não possuem filhos
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>IRMÃOS</strong> - nós que possuem o mesmo nó pai
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>SUBÁRVORE</strong> - relação entre um nó e seus nós
                filhos
              </Typography>
            </li>
          </ul>
          <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
            Árvores binárias
          </Typography>
          <Typography>
            Uma árvore binária é um tipo de árvore em que cada nó pode ter no
            máximo dois nós filhos: um nó filho esquerdo e outro direito. É
            amplamente utilizada por sua vantagem se ser extremamente eficiente
            na busca de elementos e seu funcionamento é bem simples. Na inserção
            de elementos, se o valor a ser inserido for menor que o valor do nó
            atual, o valor é inserido na subárvore esquerda, já se for maior o
            elemento vai para a subárvore a direita. A busca de elementos
            funciona de forma semelhante, fazendo a comparação do valor a ser
            buscado com o valor do nó atual.
          </Typography>

          <Typography>
            Sobre sua aplicabilidade, as árvores binárias são amplamente
            utilizadas, tal como em uma representação de estruturas de
            diretórios em um sistema operacional ou até mesmo a árvore DOM
            (Document Object Model) que nada mais é do que a estrutura básica
            dos elementos HTML das páginas web. Em resumo, seu uso é
            caracterizado por uma hierarquia bem definida entre os elementos,
            possuindo sempre um elemento principal (raiz) e outros elementos que
            são filhos de outros elementos.
          </Typography>

          <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
            Aplicação da árvore binária
          </Typography>
          <Typography>
            Agora, se baseando na representação da árvore na imagem acima, segue
            um exemplo de código de aplicação do nível 0 e nível 1 em código.
          </Typography>
          <CodeBoard codeSnippet={binaryTreeExample} />
          <Typography>
            Fazendo uma descrição superficial das principais partes do algoritmo
            em ordem de execução, temos:
          </Typography>
          <ul>
            <li>
              <Typography>
                <strong>Node* root = NULL</strong> - é declarado a raiz da
                árvore contendo o valor NULL (ou seja, ainda não possuindo
                nenhum elemento);
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>root = insertNode(root, 24)</strong> - após isso, é
                chamado a função para inserir um novo nó de valor '24';
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>if (root == NULL) return createNode(data)</strong> -
                como a árvore está vazia, este número será o valor da raiz. Para
                criar um novo nó ele entra no método 'createNode' e retorna seu
                valor;
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>método 'createNode'</strong> - dentro do método, é
                alocado um espaço na memória referente a estrutura 'Node' e o
                valor passado é atribuído. Além disso, sendo um novo nó ele
                aponta para NULL tanto na esquerda quando direita;
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>root = insertNode(root, 10)</strong> - após a inserção
                do primeiro número, é feito o mesmo processo de chamada de
                funções para os valores conseguintes. Neste caso, o valor '10'
                sendo menor que o valor da raiz, é inserido na subárvore da
                esquerda;
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>root = insertNode(root, 32)</strong> - o mesmo para o
                valor '32', que acaba indo para a subárvore da direita.
              </Typography>
            </li>
            <li>
              <Typography>
                <strong>printInOrder(root)</strong> - nessa linha, dado a o
                elemento 'root', é percorrido toda a árvore. Caso o elemento não
                seja NULL, é chamado a mesma função para o nó esquerdo, depois é
                impresso o valor do nó atual e por fim é chamado a função para o
                nó direito. As funções ficam empilhadas na medida que entram em
                um nó mais inferior, e desempilhadas na medida que saem do nó
                mais a direita.
              </Typography>
            </li>
          </ul>
          <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
            Árvores balanceadas
          </Typography>
          <Typography>
            Árvores balanceadas são estruturas de dados em forma de árvore que
            garantem um equilíbrio adequado entre os nós em termos de altura ou
            fator de balanceamento. Essa propriedade de balanceamento é
            importante porque garante um desempenho eficiente em operações de
            busca, inserção e remoção de elementos na árvore, não necessitando
            empilhar chamadas de funções excessivas para o tratamento de dados
            dado quantia de elementos presentes na árvore.
          </Typography>
          <Typography>
            O balanceamento é alcançado mantendo a altura das subárvores
            esquerda e direita de cada nó dentro de um limite aceitável. Em uma
            árvore balanceada perfeitamente equilibrada, todas as folhas estão
            na mesma altura ou com diferença máxima de uma unidade. No entanto,
            a maioria das árvores balanceadas permite uma diferença maior, como
            duas ou três unidades, para otimizar o desempenho em termos de
            espaço.
          </Typography>
          <Typography>
            A manutenção do balanceamento requer ajustes na estrutura da árvore,
            como rotações e recoloração de nós, dependendo do tipo de árvore
            balanceada. Esses ajustes são realizados automaticamente durante as
            operações de inserção e remoção, garantindo que a árvore permaneça
            balanceada mesmo após as alterações.
          </Typography>
          <ImageWrapper imageUrl={trees02} />

          <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
            Vantagens das árvores balanceadas
          </Typography>
          <Typography>
            A vantagem principal das árvores balanceadas é que elas garantem um
            tempo de execução eficiente e previsível para operações de busca,
            inserção e remoção de elementos, mesmo quando a quantidade de dados
            na árvore é grande. Isso as torna ideais para aplicações que exigem
            uma estrutura de dados rápida e eficiente, como bancos de dados,
            sistemas de arquivos e compiladores.
          </Typography>
          <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
            Mais informações
          </Typography>
          <Typography>
            O tema 'árvores', assim como grafos (tópico não abordado), acaba
            sendo um tópico mais extenso contendo diversas abordagens para
            manipulação e seus algoritmos. Para mais informações, segue um vídeo
            mais explicativo sobre o assunto para quem se interessar.
          </Typography>
          <VideoWrapper videoUrl="https://www.youtube.com/embed/9GdesxWtOgs" />
        </Box>
      </Box>
    </Container>
  );
}
