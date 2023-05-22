import { createTheme } from "@mui/material";

export function getMuiTheme(mode: "light" | "dark") {
  return createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // light mode
            background: {
              default: "#f5f5f5",
              paper: "#ffffff",
            },
          }
        : {
            // dark mode
            background: {
              default: "#38444c",
              paper: "#303030",
            },
          }),
      primary: {
        main: "#6d7d8c",
      },
    },
  });
}
