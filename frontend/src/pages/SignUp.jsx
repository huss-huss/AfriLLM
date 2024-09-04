// // src/pages/SignUp.jsx
// import React, { useState } from "react";
// import {
//   TextField,
//   Button,
//   Typography,
//   Container,
//   Grid,
//   Box,
//   Link,
// } from "@mui/material";
// import { Link as RouterLink, useNavigate } from "react-router-dom";

// const SignUp = ({ onRegister }) => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate(); // Hook for programmatic navigation

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate sign-up logic (e.g., call to an API)
//     console.log("Sign Up Data:", formData);

//     // If registration is successful, call onRegister and navigate to stats
//     onRegister(); // Call the onRegister prop to mark the user as registered (authenticated)
//     navigate("/stats"); // Redirect to the Stats page after registration
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography
//           component="h1"
//           variant="h4"
//           sx={{
//             fontWeight: "bold",
//             color: "primary.main",
//             letterSpacing: 2,
//             mb: 2,
//             textAlign: "center",
//             position: "relative",
//             "&::after": {
//               content: '""',
//               width: "60px",
//               height: "4px",
//               backgroundColor: "secondary.main",
//               position: "absolute",
//               bottom: "-10px",
//               left: "50%",
//               transform: "translateX(-50%)",
//             },
//           }}
//         >
//           Sign Up
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="username"
//                 label="Username"
//                 name="username"
//                 autoComplete="username"
//                 value={formData.username}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Sign Up
//           </Button>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               mt: 2, // Margin top for spacing
//             }}
//           >
//             <Typography variant="body2" sx={{ mr: 1 }}>
//               Already have an account?
//             </Typography>
//             <Link
//               component={RouterLink}
//               to="/login"
//               variant="body2"
//               sx={{
//                 color: "primary.main",
//                 fontWeight: "bold",
//                 "&:hover": {
//                   color: "secondary.main",
//                 },
//               }}
//             >
//               Sign In
//             </Link>
//           </Box>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default SignUp;

// src/pages/SignUp.jsx
import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Box,
  Paper,
  Link,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const SignUp = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sign-up logic (e.g., call to an API)
    console.log("Sign Up Data:", formData);

    // If registration is successful, call onRegister and navigate to stats
    onRegister(); // Call the onRegister prop to mark the user as registered (authenticated)
    navigate("/stats"); // Redirect to the Stats page after registration
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Full viewport height to center the card
        paddingTop: "80px", // Padding to account for the fixed navbar
        paddingBottom: "40px", // Extra padding for spacing
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: "40px",
          borderRadius: "12px",
          backgroundColor: "#ffffff", // Clean white background for the card
        }}
      >
        <Box
          sx={{
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
              color: "#00796b", // Teal color for the title
              letterSpacing: 2,
              mb: 2,
              textAlign: "center",
              position: "relative",
              "&::after": {
                content: '""',
                width: "60px",
                height: "4px",
                backgroundColor: "#ff7043", // Secondary color (orange)
                position: "absolute",
                bottom: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
              },
            }}
          >
            Sign Up
          </Typography>

          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ textAlign: "center", mb: 4 }}
          >
            Create your account to access all features.
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={formData.username}
                  onChange={handleChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#b0bec5", // Grey border
                      },
                      "&:hover fieldset": {
                        borderColor: "#00796b", // Teal border on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#00796b", // Teal border on focus
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
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#b0bec5", // Grey border
                      },
                      "&:hover fieldset": {
                        borderColor: "#00796b", // Teal border on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#00796b", // Teal border on focus
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
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#b0bec5", // Grey border
                      },
                      "&:hover fieldset": {
                        borderColor: "#00796b", // Teal border on hover
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#00796b", // Teal border on focus
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                padding: "12px 0",
                backgroundColor: "#00796b", // Teal background for button
                "&:hover": {
                  backgroundColor: "#004d40", // Dark teal on hover
                },
                fontWeight: "bold",
                fontSize: "16px",
                borderRadius: "8px",
              }}
            >
              Sign Up
            </Button>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
              }}
            >
              <Typography variant="body2" sx={{ mr: 1 }}>
                Already have an account?
              </Typography>
              <Link
                component={RouterLink}
                to="/login"
                variant="body2"
                sx={{
                  color: "#00796b",
                  fontWeight: "bold",
                  "&:hover": {
                    color: "#ff7043", // Hover color for Sign In link
                  },
                }}
              >
                Sign In
              </Link>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;
