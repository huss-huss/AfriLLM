// src/pages/Dashboard.jsx
import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: "bold", color: "primary.main" }}
      >
        Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Example Widget 1 */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              boxShadow: "none",
              border: "1px solid #ddd",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Total Users
            </Typography>
            <Typography variant="h4" sx={{ color: "secondary.main" }}>
              1234
            </Typography>
          </Paper>
        </Grid>

        {/* Example Widget 2 */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              boxShadow: "none",
              border: "1px solid #ddd",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Active Sessions
            </Typography>
            <Typography variant="h4" sx={{ color: "secondary.main" }}>
              45
            </Typography>
          </Paper>
        </Grid>

        {/* Example Widget 3 */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              boxShadow: "none",
              border: "1px solid #ddd",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              New Messages
            </Typography>
            <Typography variant="h4" sx={{ color: "secondary.main" }}>
              12
            </Typography>
          </Paper>
        </Grid>

        {/* Example Widget 4 */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              boxShadow: "none",
              border: "1px solid #ddd",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Pending Tasks
            </Typography>
            <Typography variant="h4" sx={{ color: "secondary.main" }}>
              8
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Recent Activity
        </Typography>
        <Paper
          sx={{
            p: 2,
            backgroundColor: "#f5f5f5",
            boxShadow: "none",
            border: "1px solid #ddd",
          }}
        >
          <Typography variant="body1">
            User JohnDoe updated their profile.
          </Typography>
          <Typography variant="body1">
            New data entry submitted by Admin.
          </Typography>
          <Typography variant="body1">
            Server backup completed successfully.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;
