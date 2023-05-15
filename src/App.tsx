import { ThemeProvider, Typography } from "@mui/material";
import defaultTheme from "./data/defaultTheme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Typography>Conteúdo</Typography>
    </ThemeProvider>
  );
}

export default App;
