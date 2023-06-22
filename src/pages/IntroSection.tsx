import { Box, Container, Typography } from "@mui/material";
import { VideoWrapper } from "../components/VideoWrapper";

export function IntroSection() {
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
          Mais informações
        </Typography>
        <Typography>
          Para mais informações navegue pelas seções presentes na barra
          superior.
        </Typography>
      </Box>
    </Container>
  );
}
