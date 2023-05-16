import { Box, Container, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../App";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box sx={{ backgroundColor: "#e8e8e8", py: 2 }}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        maxWidth="xl"
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography>Introdução</Typography>
          <Typography>Listas</Typography>
          <Typography>Pilhas</Typography>
          <Typography>Filas</Typography>
          <Typography>Árvores</Typography>
        </Box>
        <Box>
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
