// src/components/Message.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Message = ({ sender, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: sender === "user" ? "flex-end" : "flex-start",
        mb: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: "70%",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: sender === "user" ? "#00796b" : "#f5f5f5",
          color: sender === "user" ? "#fff" : "#000",
        }}
      >
        <Typography>{text}</Typography>
      </Box>
    </Box>
  );
};

export default Message;
