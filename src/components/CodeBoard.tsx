import { Box, useTheme, Container } from "@mui/material";

type Props = {
  codeSnippet: string;
};

export function CodeBoard({ codeSnippet }: Props) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Container
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Courier New, monospace",
          fontSize: 14,
          pr: 1,
          border: "1px solid #ccc",
          resize: "none",
          background: isDarkMode ? "#333" : "#fff",
          color: isDarkMode ? "#fff" : "#333",
        }}
      >
        <pre>{codeSnippet}</pre>
      </Box>
    </Container>
  );
}
