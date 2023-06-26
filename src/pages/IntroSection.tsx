import { Box, Container, Typography } from "@mui/material";
import { VideoWrapper } from "../components/VideoWrapper";
import { CodeBoard } from "../components/CodeBoard";
import recursion01 from "../assets/recursion-01.png";
import { ImageWrapper } from "../components/ImageWrapper";

export function IntroSection() {
  const recursionExample = `  #include <stdio.h>

  int factorial(int number) {
    // 0! é igual a 1
    if (number == 0) return 1;
    
    //
    return number * factorial(number - 1);
  }
  
  int main() {
    int num = 4;
    int result = factorial(num);

    printf("%d! = %d", num, result);
        
    return 0;
  }`;

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
          Introdução
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography>
            As estruturas de dados são um componente essencial na área da
            ciência da computação, sendo amplamente utilizadas para armazenar,
            organizar e manipular informações de maneira eficiente. Elas
            desempenham um papel fundamental na resolução de problemas complexos
            e na otimização do uso dos recursos computacionais. Essa melhoria de
            desempenho está diretamente relacionada à escolha adequada das
            estruturas para representar e organizar os dados, além da utilização
            de algoritmos eficientes para realizar operações sobre essas
            informações. Ao estruturar os dados de forma correta, é possível
            obter um melhor desempenho de processamento durante as operações.
          </Typography>
          <Typography>
            Na ciência da computação, o estudo das estruturas de dados é
            considerado um tópico relevante e é frequentemente abordado em
            faculdades e cursos de programação. É um conhecimento necessário e
            fundamental para os profissionais da área, uma vez que a escolha
            adequada da estrutura de dados pode influenciar significativamente a
            eficiência e o desempenho de um programa.
          </Typography>
        </Box>

        <Typography sx={{ fontSize: 32, fontWeight: 500 }}>Tipos</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography>
            Existem diversas estruturas de dados comumente utilizadas. Entre as
            principais, destacam-se os vetores (arrays), as listas, as pilhas
            (stacks), as filas (queues) e as árvores. Cada uma dessas estruturas
            possui características específicas que a tornam adequada para
            diferentes tipos de problemas e operações.
          </Typography>

          <Typography>
            Abaixo segue um vídeo introdutório sobre as principais estruturas de
            dados e algumas aplicações:
          </Typography>
          <VideoWrapper videoUrl="https://www.youtube.com/embed/EfF1M7myAyY" />
        </Box>

        <Typography sx={{ fontSize: 32, fontWeight: 500 }}>
          Recursividade
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography>
            A recursividade é um conceito na programação em que uma função pode
            chamar a si mesma, seja diretamente ou indiretamente. Isso permite
            que a função resolva problemas maiores, dividindo-os em subproblemas
            menores. É um tópico importante para compreender o funcionamento das
            estruturas de dados que serão passados nas próximas seções.
          </Typography>
          <Typography>
            Para entender melhor o conceito, segue um exemplo de um código para
            calculo do fatorial de dado valor inteiro (nesse caso, o número
            '3').
          </Typography>
          <CodeBoard codeSnippet={recursionExample} />
          <Typography>
            Segue a ilustração da chamada do método 'recursion' apresentado
            acima. A estrutura apresentada é a de pilha (do qual será explicada
            com mais aprofundamento na sua respectiva seção).
          </Typography>
          <Typography>
            Resumindo o funcionamento desse algoritmo, a primeira chamada da
            função 'factorial' é passado com o valor '4', fazendo com que esse
            valor seja multiplicado com o resultado da chamada do método
            'factorial' com o valor '3'. Como o resultado da primeira chamada
            depende do valor da segunda chamada, ela fica em uma pilha de
            chamadas até que chegue no valor '0', do qual não irá chamar o
            próprio método e iniciará o processo de desempilhamento, retornando
            os valores aguardados.
          </Typography>
          <ImageWrapper imageUrl={recursion01} />
        </Box>
      </Box>
    </Container>
  );
}
