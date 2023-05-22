import {
  useTheme,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import { ColorModeContext } from "../App";
import { useContext, useState, MouseEvent } from "react";
import { colors } from "../data/colors";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const pages = ["Home", "Introdução", "Listas", "Pilhas", "Filas", "Árvores"];

export function Navbar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isDarkMode = theme.palette.mode === "dark";

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ backgroundColor: "background.default" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            borderBottom: "1px solid",
            borderColor: colors.light,
          }}
        >
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              sx={{ color: isDarkMode ? colors.light : colors.dark }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 2 }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "text.primary", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box>
            <IconButton
              sx={{ ml: 1 }}
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <DarkModeIcon sx={{ color: colors.light }} />
              ) : (
                <LightModeIcon sx={{ color: colors.dark }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}
