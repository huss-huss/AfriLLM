// src/pages/ChatRoom.jsx
import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, fontWeight: "bold", color: "primary.main" }}
      >
        Chatroom
      </Typography>

      <Paper
        sx={{
          p: 2,
          height: "400px",
          overflowY: "auto",
          mb: 2,
          backgroundColor: "#f5f5f5",
          boxShadow: "none",
          border: "1px solid #ddd",
        }}
      >
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText primary={msg} />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Box sx={{ display: "flex" }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Container>
  );
};

export default ChatRoom;
