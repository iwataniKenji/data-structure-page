import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export function ContentSection() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ pt: 4, pb: 6, color: "text.primary" }}>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
}
