// // import React from "react";
// // import {
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemIcon,
// //   ListItemText,
// // } from "@mui/material";
// // import { BarChart, Chat, Storage } from "@mui/icons-material";
// // import { Link } from "react-router-dom";

// // const Sidebar = () => {
// //   return (
// //     <Drawer
// //       variant="permanent"
// //       sx={{
// //         width: 240,
// //         flexShrink: 0,
// //         "& .MuiDrawer-paper": {
// //           width: 240,
// //           boxSizing: "border-box",
// //           marginTop: "64px", // Set this to ensure the sidebar starts below the navbar
// //         },
// //       }}
// //     >
// //       <List>
// //         {/* Stats Item */}
// //         <ListItem button component={Link} to="/stats">
// //           <ListItemIcon>
// //             <BarChart />
// //           </ListItemIcon>
// //           <ListItemText primary="Stats" />
// //         </ListItem>

// //         {/* Chat Item */}
// //         <ListItem button component={Link} to="/chat">
// //           <ListItemIcon>
// //             <Chat />
// //           </ListItemIcon>
// //           <ListItemText primary="Chat" />
// //         </ListItem>

// //         {/* Data Item */}
// //         <ListItem button component={Link} to="/data">
// //           <ListItemIcon>
// //             <Storage />
// //           </ListItemIcon>
// //           <ListItemText primary="Data" />
// //         </ListItem>
// //       </List>
// //     </Drawer>
// //   );
// // };

// // export default Sidebar;

// // src/components/Sidebar.js
// import React from "react";
// import {
//   Drawer,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import { BarChart, Chat, Storage } from "@mui/icons-material";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: 240,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: 240,
//           boxSizing: "border-box",
//           marginTop: "75px", // 64px for NavBar height + 4px top margin
//         },
//       }}
//     >
//       <List>
//         {/* Stats Item */}
//         <ListItem button component={Link} to="/stats">
//           <ListItemIcon>
//             <BarChart />
//           </ListItemIcon>
//           <ListItemText primary="Stats" />
//         </ListItem>

//         {/* Data Item */}
//         <ListItem button component={Link} to="/data">
//           <ListItemIcon>
//             <Storage />
//           </ListItemIcon>
//           <ListItemText primary="Data" />
//         </ListItem>

//         {/* Chat Item */}
//         <ListItem button component={Link} to="/chat">
//           <ListItemIcon>
//             <Chat />
//           </ListItemIcon>
//           <ListItemText primary="Chat" />
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;

// src/components/Sidebar.js
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import { BarChart, Chat, Storage } from "@mui/icons-material";
import { Link } from "react-router-dom";

// Dummy chat history data
const chatHistory = [
  { id: 1, name: "Chat with John" },
  { id: 2, name: "Project Discussion" },
  { id: 3, name: "Support Chat" },
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260, // Increased width for a more prominent sidebar
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 260, // Same width for the drawer paper
          boxSizing: "border-box",
          marginTop: "65px", // 64px for NavBar height + additional top margin
          backgroundColor: "#f5f5f5", // Light background color for a modern look
        },
      }}
    >
      <Box sx={{ padding: "10px" }}>
        {/* Navigation Links */}
        <List>
          <ListItem button component={Link} to="/stats">
            <ListItemIcon>
              <BarChart sx={{ color: "#00796b" }} /> {/* Dark teal icon */}
            </ListItemIcon>
            <ListItemText
              primary="Stats"
              sx={{ color: "#333", fontWeight: "bold" }} // Dark text for the label
            />
          </ListItem>

          <ListItem button component={Link} to="/data">
            <ListItemIcon>
              <Storage sx={{ color: "#00796b" }} /> {/* Dark teal icon */}
            </ListItemIcon>
            <ListItemText
              primary="Data"
              sx={{ color: "#333", fontWeight: "bold" }}
            />
          </ListItem>

          <ListItem button component={Link} to="/chat">
            <ListItemIcon>
              <Chat sx={{ color: "#00796b" }} /> {/* Dark teal icon */}
            </ListItemIcon>
            <ListItemText
              primary="Chat"
              sx={{ color: "#333", fontWeight: "bold" }}
            />
          </ListItem>
        </List>

        {/* Divider to separate main links and chat history */}
        <Divider sx={{ my: 3 }} />

        {/* Chat History Section */}
        <Typography
          variant="h6"
          sx={{ paddingLeft: "16px", color: "#444", fontWeight: "bold" }}
        >
          Chat History
        </Typography>
        <List>
          {chatHistory.map((chat) => (
            <ListItem button key={chat.id}>
              <ListItemText
                primary={chat.name}
                sx={{
                  color: "#00796b", // Dark teal color for chat history items
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
