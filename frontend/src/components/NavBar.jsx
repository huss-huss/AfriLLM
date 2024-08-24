// src/components/NavBar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        mb: 4,
        backgroundColor: "#f5f5f5", // Light grey/off-white background
        color: "#333", // Darker text color for contrast
        boxShadow: "none", // Remove shadow for a flat design
        borderBottom: "1px solid #ddd", // Add a subtle bottom border
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            color: "#444", // Slightly darker text for the title
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            AfriLLM
          </Link>
        </Typography>
        <Box>
          <Button
            color="inherit"
            component={Link}
            to="/login"
            sx={{
              color: "#00796b", // A pleasant teal color
              fontWeight: "500", // Medium font weight for better readability
              marginRight: 2, // Space between buttons
              "&:hover": {
                backgroundColor: "#e0f2f1", // Light teal background on hover
              },
            }}
          >
            Sign In
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/register"
            sx={{
              color: "#00796b",
              fontWeight: "500",
              "&:hover": {
                backgroundColor: "#e0f2f1",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
