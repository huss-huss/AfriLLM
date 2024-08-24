// src/pages/SignIn.jsx
import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Box,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic here (e.g., API call)
    console.log("Sign In Data:", formData);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            letterSpacing: 2,
            mb: 2,
            textAlign: "center",
            position: "relative",
            "&::after": {
              content: '""',
              width: "60px",
              height: "4px",
              backgroundColor: "secondary.main",
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
            },
          }}
        >
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2, // Margin top for spacing
            }}
          >
            <Typography variant="body2" sx={{ mr: 1 }}>
              No account?
            </Typography>
            <Link
              component={RouterLink}
              to="/register"
              variant="body2"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                "&:hover": {
                  color: "secondary.main",
                },
              }}
            >
              Create one!
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
