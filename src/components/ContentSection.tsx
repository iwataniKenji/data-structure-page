import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export function ContentSection() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "background.default",
        py: 3,
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ py: 10, color: "text.primary" }}>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
}
