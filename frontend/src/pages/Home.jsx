// src/pages/Home.jsx
import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", // Align items towards the top
        minHeight: "100vh", // Full height of the viewport
        paddingTop: "120px", // Move content up by increasing top padding
        paddingBottom: "40px", // Extra bottom padding
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: "bold",
          color: "#00796b", // Teal color for the title
          mb: 4,
        }}
      >
        Welcome to AfriLLM
      </Typography>

      <Typography
        variant="h5"
        component="p"
        sx={{
          color: "#555", // Soft grey for the subtitle
          mb: 6,
          lineHeight: 1.6, // Increase line height for better readability
          maxWidth: "700px", // Limit text width for readability
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
            padding: "12px 24px",
            fontSize: "1.2rem",
            borderRadius: "8px", // Rounded corners for a modern look
            fontWeight: "bold", // Bold text for emphasis
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
            padding: "12px 24px",
            fontSize: "1.2rem",
            borderRadius: "8px", // Rounded corners for a modern look
            fontWeight: "bold", // Bold text for emphasis
          }}
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
