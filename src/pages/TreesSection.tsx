import { Box, Container, Typography } from "@mui/material";
import { ImageWrapper } from "../components/ImageWrapper";
import { CodeBoard } from "../components/CodeBoard";
import trees01 from "../assets/trees-01.png";

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
  void percorrerEmOrdem(Node* root) {
    if (root != NULL) {
      percorrerEmOrdem(root->left);
      
      printf("%d ", root->data);
      
      percorrerEmOrdem(root->right);
    }
  }
  
  int main() {
    Node* root = NULL;
    
    root = insertNode(root, 50);
    root = insertNode(root, 30);
    root = insertNode(root, 70);
    
    printf("Valores em ordem: ");
    percorrerEmOrdem(root);
    
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
          <CodeBoard codeSnippet={binaryTreeExample} />
          <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
            Árvores balanceadas
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
