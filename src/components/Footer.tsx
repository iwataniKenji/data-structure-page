import { Box, Container, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const socialMediaInfo = [
  {
    href: "https://www.linkedin.com/in/kleverson-kenji-iwatani/",
    icon: <LinkedInIcon />,
  },
  {
    href: "https://github.com/iwataniKenji",
    icon: <GitHubIcon />,
  },
  {
    href: "https://instagram.com/kleverson.iwatani",
    icon: <InstagramIcon />,
  },
];

export function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        py: { xs: 6, sm: 10 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 16, fontWeight: 500, color: "white" }}>
            Desenvolvido por Kenji Iwatani
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {socialMediaInfo.map((socialMedia) => (
              <IconButton
                href={socialMedia.href}
                target="_blank"
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#38444c",
                  "&:hover": {
                    backgroundColor: "#e8e8e8",
                    transition: "background-color 0.3s",
                  },
                }}
              >
                {socialMedia.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
