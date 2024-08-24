// src/pages/DataEntry.jsx
import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";

const DataEntry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log("Data Entry:", formData);
    // Clear the form after submission
    setFormData({
      name: "",
      email: "",
      date: "",
      additionalInfo: "",
    });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: "bold", color: "primary.main" }}
      >
        Data Entry
      </Typography>
      <Paper
        sx={{
          p: 3,
          backgroundColor: "#f5f5f5",
          boxShadow: "none",
          border: "1px solid #ddd",
        }}
      >
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="date"
                label="Date"
                name="date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.date}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                id="additionalInfo"
                label="Additional Information"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default DataEntry;
