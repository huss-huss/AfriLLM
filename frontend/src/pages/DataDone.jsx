// src/pages/DataDonePage.js
import React, { useEffect } from "react";
import { Typography, Container, Paper, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DataDonePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the stats page after 3 seconds
    const timer = setTimeout(() => {
      navigate("/stats");
    }, 3000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

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
              color: "#00796b", // Dark teal color
            }}
          >
            All Done!
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ mt: 2, mb: 4 }}
          >
            Your data has been submitted successfully! You will be redirected to
            the stats page shortly.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default DataDonePage;
