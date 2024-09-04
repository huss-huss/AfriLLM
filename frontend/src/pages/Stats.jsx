// // src/pages/StatsPage.js
// import React from "react";
// import { Box, Typography, Paper, Grid } from "@mui/material";

// const StatsPage = () => {
//   // Sample numbers, which can later be replaced with actual database values
//   const numberOfQuestions = 42;
//   const numberOfTopics = 5;
//   const stats = {
//     validated: 15,
//     underReview: 20, // Default under review
//     rejected: 7,
//   };

//   return (
//     <Box sx={{ padding: "20px" }}>
//       <Typography variant="h4" gutterBottom>
//         Stats Page
//       </Typography>
//       <Typography variant="body1" gutterBottom>
//         This is where you can display statistical data or visualizations.
//       </Typography>

//       <Grid container spacing={2} mt={4}>
//         {/* Number of Questions */}
//         <Grid item xs={12} md={4}>
//           <Paper elevation={3} sx={{ padding: "20px" }}>
//             <Typography variant="h6">Number of Questions</Typography>
//             <Typography variant="h4" color="primary">
//               {numberOfQuestions}
//             </Typography>
//           </Paper>
//         </Grid>

//         {/* Number of Topics */}
//         <Grid item xs={12} md={4}>
//           <Paper elevation={3} sx={{ padding: "20px" }}>
//             <Typography variant="h6">Number of Topics</Typography>
//             <Typography variant="h4" color="primary">
//               {numberOfTopics}
//             </Typography>
//           </Paper>
//         </Grid>

//         {/* Features: Validated, Under Review, Rejected */}
//         <Grid item xs={12} md={4}>
//           <Paper elevation={3} sx={{ padding: "20px" }}>
//             <Typography variant="h6">Status Overview</Typography>

//             <Box sx={{ mt: 2 }}>
//               <Typography variant="body1" color="textSecondary">
//                 Validated:
//               </Typography>
//               <Typography variant="h5" color="success.main">
//                 {stats.validated}
//               </Typography>
//             </Box>

//             <Box sx={{ mt: 2 }}>
//               <Typography variant="body1" color="textSecondary">
//                 Under Review:
//               </Typography>
//               <Typography variant="h5" color="warning.main">
//                 {stats.underReview}
//               </Typography>
//             </Box>

//             <Box sx={{ mt: 2 }}>
//               <Typography variant="body1" color="textSecondary">
//                 Rejected:
//               </Typography>
//               <Typography variant="h5" color="error.main">
//                 {stats.rejected}
//               </Typography>
//             </Box>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default StatsPage;

// src/pages/StatsPage.js
import React from "react";
import { Box, Typography, Paper, Grid, Container } from "@mui/material";

const StatsPage = () => {
  // Sample numbers, which can later be replaced with actual database values
  const numberOfQuestions = 42;
  const numberOfTopics = 5;
  const stats = {
    validated: 15,
    underReview: 20, // Default under review
    rejected: 7,
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper
        elevation={4}
        sx={{
          padding: "40px",
          borderRadius: "12px",
          backgroundColor: "#fafafa", // Light grey background for consistency
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#00796b", // Dark teal for the title
            textAlign: "center",
            mb: 4,
          }}
        >
          Stats Overview
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ textAlign: "center", mb: 4 }}
        >
          Here you can view statistics about the data you've provided.
        </Typography>

        <Grid container spacing={3}>
          {/* Number of Questions */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                padding: "30px",
                borderRadius: "8px",
                textAlign: "center",
                backgroundColor: "#f0f4f8", // Light blue-grey background for card
              }}
            >
              <Typography variant="h6" gutterBottom>
                Number of Questions
              </Typography>
              <Typography variant="h3" color="primary" fontWeight="bold">
                {numberOfQuestions}
              </Typography>
            </Paper>
          </Grid>

          {/* Number of Topics */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                padding: "30px",
                borderRadius: "8px",
                textAlign: "center",
                backgroundColor: "#f0f4f8",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Number of Topics
              </Typography>
              <Typography variant="h3" color="primary" fontWeight="bold">
                {numberOfTopics}
              </Typography>
            </Paper>
          </Grid>

          {/* Status Overview */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                padding: "30px",
                borderRadius: "8px",
                textAlign: "center",
                backgroundColor: "#f0f4f8",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Status Overview
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Typography variant="body1" color="textSecondary">
                  Validated:
                </Typography>
                <Typography
                  variant="h5"
                  color="success.main"
                  fontWeight="bold"
                  gutterBottom
                >
                  {stats.validated}
                </Typography>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant="body1" color="textSecondary">
                  Under Review:
                </Typography>
                <Typography
                  variant="h5"
                  color="warning.main"
                  fontWeight="bold"
                  gutterBottom
                >
                  {stats.underReview}
                </Typography>
              </Box>

              <Box sx={{ mt: 2 }}>
                <Typography variant="body1" color="textSecondary">
                  Rejected:
                </Typography>
                <Typography
                  variant="h5"
                  color="error.main"
                  fontWeight="bold"
                  gutterBottom
                >
                  {stats.rejected}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default StatsPage;
