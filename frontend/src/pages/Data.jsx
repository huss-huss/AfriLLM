// src/pages/DataPage.js
import React from "react";
import { Button, Typography, Container, Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DataPage = () => {
  const navigate = useNavigate();

  const handleStartGivingData = () => {
    navigate("/data/form");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper
        elevation={4}
        sx={{
          padding: "40px",
          borderRadius: "12px",
          backgroundColor: "#f9f9f9",
          textAlign: "center",
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#00796b", // Dark teal color for the title
              mb: 2,
            }}
          >
            Manage Your Data
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Welcome to the data management page. Here, you can input, edit, and
            manage the data for your project. Get started by clicking the button
            below.
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            padding: "10px 24px",
            fontSize: "18px",
            borderRadius: "8px",
            backgroundColor: "#00796b",
            "&:hover": {
              backgroundColor: "#004d40",
            },
          }}
          onClick={handleStartGivingData}
        >
          Start Giving Data
        </Button>
      </Paper>
    </Container>
  );
};

export default DataPage;
