// // src/components/NavBar.jsx
// import React from "react";
// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         backgroundColor: "#ffffff", // Clean white background
//         color: "#333", // Dark text for contrast
//         boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)", // Light shadow for subtle elevation
//         borderBottom: "1px solid #e0e0e0", // Subtle bottom border for separation
//         zIndex: 1201, // Ensure it's above other content
//       }}
//     >
//       <Toolbar sx={{ maxWidth: "1200px", width: "100%", mx: "auto", px: 2 }}>
//         <Typography
//           variant="h6"
//           component="div"
//           sx={{
//             flexGrow: 1,
//             fontWeight: "bold",
//             color: "#00796b", // Teal color for the brand name
//             fontFamily: "'Roboto', sans-serif", // Modern, clean font family
//             letterSpacing: "0.5px",
//           }}
//         >
//           <Link
//             to="/"
//             style={{
//               textDecoration: "none",
//               color: "inherit",
//               transition: "color 0.3s ease",
//             }}
//             onMouseEnter={(e) => (e.target.style.color = "#004d40")} // Darker on hover
//             onMouseLeave={(e) => (e.target.style.color = "#00796b")}
//           >
//             AfriLLM
//           </Link>
//         </Typography>

//         <Box>
//           <Button
//             component={Link}
//             to="/login"
//             sx={{
//               color: "#00796b", // Teal color for buttons
//               fontWeight: 500,
//               marginRight: 2,
//               padding: "8px 16px",
//               borderRadius: "8px", // Rounded corners for a modern look
//               backgroundColor: "#e0f2f1", // Light teal background
//               transition: "background-color 0.3s ease, color 0.3s ease",
//               "&:hover": {
//                 backgroundColor: "#004d40", // Dark teal on hover
//                 color: "#fff", // White text on hover
//               },
//             }}
//           >
//             Sign In
//           </Button>

//           <Button
//             component={Link}
//             to="/register"
//             sx={{
//               color: "#ffffff",
//               fontWeight: 500,
//               padding: "8px 16px",
//               borderRadius: "8px",
//               backgroundColor: "#00796b", // Teal color for primary button
//               transition: "background-color 0.3s ease",
//               "&:hover": {
//                 backgroundColor: "#004d40", // Dark teal on hover
//               },
//             }}
//           >
//             Sign Up
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { deepOrange } from "@mui/material/colors";

const NavBar = ({ isAuthenticated, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    onLogout(); // Call the onLogout prop to handle logout logic
    handleMenuClose();
    navigate("/"); // Redirect to the homepage
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#ffffff", // Clean white background
        color: "#333", // Dark text for contrast
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)", // Light shadow for subtle elevation
        borderBottom: "1px solid #e0e0e0", // Subtle bottom border for separation
        zIndex: 1201, // Ensure it's above other content
      }}
    >
      <Toolbar sx={{ maxWidth: "1200px", width: "100%", mx: "auto", px: 2 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            color: "#00796b", // Teal color for the brand name
            fontFamily: "'Roboto', sans-serif", // Modern, clean font family
            letterSpacing: "0.5px",
          }}
        >
          <Link
            to={isAuthenticated ? "/stats" : "/"} // Conditional link based on authentication
            style={{
              textDecoration: "none",
              color: "inherit",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#004d40")} // Darker on hover
            onMouseLeave={(e) => (e.target.style.color = "#00796b")}
          >
            AfriLLM
          </Link>
        </Typography>

        <Box>
          {isAuthenticated ? (
            <>
              {/* Avatar and Menu for signed-in users */}
              <IconButton onClick={handleMenuClick} sx={{ padding: 0 }}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  elevation: 4,
                  sx: {
                    mt: 1.5,
                    "& .MuiMenuItem-root": {
                      fontSize: "1rem",
                      padding: "10px 20px",
                      color: "#00796b",
                      "&:hover": {
                        backgroundColor: "#e0f2f1", // Light teal on hover
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem component={Link} to="/profile">
                  Profile
                </MenuItem>
                <MenuItem component={Link} to="/settings">
                  Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              {/* Sign In and Sign Up buttons for non-authenticated users */}
              <Button
                component={Link}
                to="/login"
                sx={{
                  color: "#00796b", // Teal color for buttons
                  fontWeight: 500,
                  marginRight: 2,
                  padding: "8px 16px",
                  borderRadius: "8px", // Rounded corners for a modern look
                  backgroundColor: "#e0f2f1", // Light teal background
                  transition: "background-color 0.3s ease, color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#004d40", // Dark teal on hover
                    color: "#fff", // White text on hover
                  },
                }}
              >
                Sign In
              </Button>

              <Button
                component={Link}
                to="/register"
                sx={{
                  color: "#ffffff",
                  fontWeight: 500,
                  padding: "8px 16px",
                  borderRadius: "8px",
                  backgroundColor: "#00796b", // Teal color for primary button
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#004d40", // Dark teal on hover
                  },
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
