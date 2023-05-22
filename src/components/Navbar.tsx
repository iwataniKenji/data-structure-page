import {
  useTheme,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import { ColorModeContext } from "../App";
import { useContext, useState, MouseEvent } from "react";
import { colors } from "../data/colors";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export function Navbar() {
  const navigate = useNavigate();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isDarkMode = theme.palette.mode === "dark";

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const goToHome = () => {
    navigate("/");
  };

  const goToIntro = () => {
    navigate("/intro");
  };

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [
    { name: "Home", onClick: goToHome },
    { name: "Introdução", onClick: goToIntro },
    // { name: "Listas" },
    // { name: "Pilhas" },
    // { name: "Filas" },
    // { name: "Árvores" },
  ];

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
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Button
                    sx={{ color: "text.primary" }}
                    key={page.name}
                    onClick={page.onClick}
                  >
                    {page.name}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 2 }}
          >
            {pages.map((page) => (
              <Button
                sx={{ color: "text.primary" }}
                key={page.name}
                onClick={page.onClick}
              >
                {page.name}
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
