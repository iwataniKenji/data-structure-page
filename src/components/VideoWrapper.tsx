import { Box } from "@mui/material";

type Props = {
  videoUrl: string;
};

export function VideoWrapper({ videoUrl }: Props) {
  return (
    <Box
      sx={{
        margin: "0 auto",
        width: { sx: 365, sm: 420, md: 560 },
        height: { xs: 205, sm: 236, md: 315 },
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </Box>
  );
}
