import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  Switch,
  FormControlLabel,
  Divider,
} from "@mui/material";

const Settings = () => {
  const [accountData, setAccountData] = useState({
    email: "john.doe@example.com",
    password: "",
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
  });

  const handleAccountChange = (e) => {
    setAccountData({
      ...accountData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAccountSubmit = (e) => {
    e.preventDefault();
    // Handle account update logic here
    console.log("Account Updated:", accountData);
    // Clear the password field after submission
    setAccountData({
      ...accountData,
      password: "",
    });
  };

  const handleNotificationChange = (e) => {
    setNotifications({
      ...notifications,
      [e.target.name]: e.target.checked,
    });
  };

  const handlePrivacyChange = (e) => {
    setPrivacy({
      ...privacy,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: "#00796b",
          textAlign: "center",
        }}
      >
        Settings
      </Typography>

      {/* Account Settings Section */}
      <Paper
        elevation={4}
        sx={{
          p: 4,
          mb: 4,
          borderRadius: "12px",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
          Account Settings
        </Typography>
        <Box component="form" onSubmit={handleAccountSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                value={accountData.email}
                onChange={handleAccountChange}
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
                value={accountData.password}
                onChange={handleAccountChange}
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
                  borderRadius: "8px",
                }}
              >
                Update Account
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      {/* Notification Settings Section */}
      <Paper
        elevation={4}
        sx={{
          p: 4,
          mb: 4,
          borderRadius: "12px",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
          Notification Settings
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={notifications.emailNotifications}
              onChange={handleNotificationChange}
              name="emailNotifications"
              color="primary"
            />
          }
          label="Email Notifications"
        />
        <Divider sx={{ my: 2 }} />
        <FormControlLabel
          control={
            <Switch
              checked={notifications.pushNotifications}
              onChange={handleNotificationChange}
              name="pushNotifications"
              color="primary"
            />
          }
          label="Push Notifications"
        />
      </Paper>

      {/* Privacy Settings Section */}
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: "12px",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
          Privacy Settings
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={privacy.profileVisible}
              onChange={handlePrivacyChange}
              name="profileVisible"
              color="primary"
            />
          }
          label="Profile Visible to Others"
        />
      </Paper>
    </Container>
  );
};

export default Settings;
