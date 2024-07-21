import React from "react";
import Link from "next/link";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { Stack } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";

const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#0b1120",
        borderBottom: "1px solid #1565c0",
      }}
    >
      <Link href={"/"} style={{ textDecoration: "none" }}>
        <Box>
          <Stack
            sx={{ minHeight: "4rem" }}
            direction="row"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <img src="/logo.png" alt="logo" width="60px" />
            <Typography variant="h5" color="white">
              SACC-IIIT H
            </Typography>
          </Stack>
        </Box>
      </Link>
      <Stack>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Link href="/">
            <Button>Home</Button>
          </Link>
          <Link href="/profile">
            <Button>Profile</Button>
          </Link>
          <Link href="/aboutme">
            <Button>About Me</Button>
          </Link>
          <Link href="/photowall">
            <Button>Photo Wall</Button>
          </Link>
          <Link href="/Testimonials">
            <Button>Testimonials</Button>
          </Link>
          <Link href="/developers">
            <Button>Developers</Button>
          </Link>
        </ButtonGroup>
      </Stack>
      <Stack>
        <a href="/api/login">
          {" "}
          <Button variant="outlined">Log In</Button>
        </a>
      </Stack>
    </Box>
  );
};

export default Navbar;
