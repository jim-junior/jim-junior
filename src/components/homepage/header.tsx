import React from "react";
import { Box, Typography, Sheet, AspectRatio } from "@mui/joy";
import { Link } from "react-router-dom";
import { typographyClasses } from "@mui/joy/Typography";
import photo from "../../assets/passport_photo.jpg";

const Header = () => {
  return (
    <Box
      sx={[
        (theme) => ({
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          py: 1,
          gap: 2,
          [theme.breakpoints.up(834)]: {
            flexDirection: "row",
            gap: 2,
          },
          [theme.breakpoints.up(1199)]: {
            gap: 2,
          },
        }),
        { flexDirection: "column" },
      ]}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          maxWidth: "50ch",
          textAlign: "center",
          flexShrink: 999,
          [theme.breakpoints.up(834)]: {
            minWidth: 420,
            alignItems: "flex-start",
            textAlign: "initial",
          },
          [`& .${typographyClasses.root}`]: {
            textWrap: "balance",
          },
        })}
      >
        <Typography level="h1">Hello, I'm Beingana Jim Junior</Typography>
        <Typography level="h3">
          I'm a Software Engineering student and a tech enthusiast.
        </Typography>
        <Typography level="body-lg">
          I build open source software to implement various standards and
          technologies in the fields of Cloud Computing, DevOps, and Web
          Development and Distributed Systems in order to solve fundamental
          problems in the tech industry. I also write about my experiences and
          share my knowledge with the community. I am passonate obout the future
          of computing and the role of technology in solving global problems and
          advancing humanity.
        </Typography>
      </Box>
      <Box sx={{ width: 400, height: 400, borderRadius: 10, ml: "auto" }}>
        <img
          src={photo}
          alt="Beingana Jim Junior Profile photo"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default Header;
