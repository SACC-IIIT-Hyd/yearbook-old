'use client'

import React from "react";
import { Typography, Container, Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";

const Error404 = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };

  return (
    <Container sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h1" component="div" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        Oops! The page you're looking for doesn't exist.
      </Typography>
      <Box mt={4} mb={4}>
        <Button variant="contained" color="primary" onClick={handleHomeClick}>
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default Error404;
