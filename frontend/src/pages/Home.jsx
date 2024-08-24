// src/pages/Home.jsx
import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: "bold",
          color: "#333",
          mb: 4,
        }}
      >
        Welcome to AfriLLM
      </Typography>
      <Typography
        variant="h5"
        component="p"
        sx={{
          color: "#555",
          mb: 6,
        }}
      >
        Unlock the potential of large language models designed specifically for
        Africa. Sign up today to get started, or sign in to continue exploring!
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/register"
          sx={{
            backgroundColor: "#00796b",
            "&:hover": {
              backgroundColor: "#004d40",
            },
            padding: "10px 20px",
            fontSize: "1.2rem",
          }}
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/login"
          sx={{
            borderColor: "#00796b",
            color: "#00796b",
            "&:hover": {
              borderColor: "#004d40",
              color: "#004d40",
            },
            padding: "10px 20px",
            fontSize: "1.2rem",
          }}
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
