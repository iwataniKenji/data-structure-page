import { Box } from "@mui/material";

type Props = {
  imageUrl: string;
};

export function ImageWrapper({ imageUrl }: Props) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        component="img"
        src={imageUrl}
        sx={{
          width: { xs: "100%", md: "60%" },
          objectFit: "contain",
        }}
      />
    </Box>
  );
}
