import { Box, Container, Typography } from "@mui/material";

export function ContentSection() {
  return (
    <Box sx={{ height: "100vh", backgroundColor: "background.default" }}>
      <Container maxWidth="xl">
        <Typography sx={{ py: 10, color: "text.primary" }}>Assunto</Typography>
      </Container>
    </Box>
  );
}
