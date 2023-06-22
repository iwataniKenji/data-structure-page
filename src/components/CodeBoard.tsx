import { Box, useTheme, Container } from "@mui/material";

type Props = {
  codeSnippet: string;
};

export function CodeBoard({ codeSnippet }: Props) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          fontFamily: "Courier New, monospace",
          fontSize: 14,
          px: 2,
          py: 4,
          border: "1px solid #ccc",
          resize: "none",
          background: isDarkMode ? "#333" : "#fff",
          color: isDarkMode ? "#fff" : "#333",
          width: "100%",
          overflowX: "auto",
        }}
      >
        <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>{codeSnippet}</pre>
      </Box>
    </Container>
  );
}
