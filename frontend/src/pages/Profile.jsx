import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  Avatar,
  IconButton,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
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
    // Handle profile update logic here (e.g., send data to backend)
    console.log("Profile Updated:", formData);
    // Clear the password field after submission
    setFormData({
      ...formData,
      password: "",
    });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: "#00796b",
          textAlign: "center",
        }}
      >
        Profile
      </Typography>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: "12px", // Rounded corners for modern look
          backgroundColor: "#ffffff", // Clean white background
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 4,
          }}
        >
          <Avatar
            sx={{
              width: 80,
              height: 80,
              mr: 2,
              bgcolor: "#00796b",
              color: "#fff",
            }}
          >
            {/* You can dynamically show the user's initials or profile image */}
            JD
          </Avatar>
          <IconButton
            color="primary"
            component="label"
            sx={{
              backgroundColor: "#e0f2f1",
              padding: "10px",
              borderRadius: "50%",
            }}
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
        </Box>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#b0bec5",
                    },
                    "&:hover fieldset": {
                      borderColor: "#00796b",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00796b",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#b0bec5",
                    },
                    "&:hover fieldset": {
                      borderColor: "#00796b",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00796b",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#b0bec5",
                    },
                    "&:hover fieldset": {
                      borderColor: "#00796b",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00796b",
                    },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  padding: "12px 0",
                  backgroundColor: "#00796b",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#004d40",
                  },
                  borderRadius: "8px", // Rounded corners for the button
                }}
              >
                Update Profile
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Profile;
