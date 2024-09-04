// // src/pages/ChatPage.js
// import React, { useState, useEffect, useRef } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Container,
//   Paper,
// } from "@mui/material";
// import Message from "../components/Message";

// const ChatPage = () => {
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hi! How can I help you today?" },
//   ]);
//   const [inputValue, setInputValue] = useState("");
//   const messagesEndRef = useRef(null);

//   // Function to handle sending a new message
//   const handleSendMessage = () => {
//     if (inputValue.trim() === "") return;

//     // Add user's message to the chat
//     const newMessage = { sender: "user", text: inputValue };
//     setMessages([...messages, newMessage]);
//     setInputValue(""); // Clear input field

//     // Simulate bot response
//     setTimeout(() => {
//       handleBotResponse();
//     }, 1000); // 1-second delay for bot response
//   };

//   // Function to simulate a bot response
//   const handleBotResponse = () => {
//     const botResponses = [
//       "I'm here to help!",
//       "Tell me more about what you're looking for.",
//       "That sounds interesting. Can you clarify?",
//       "Let's work through this together.",
//       "I'm happy to assist with that!",
//     ];

//     const randomResponse =
//       botResponses[Math.floor(Math.random() * botResponses.length)];

//     const botMessage = { sender: "bot", text: randomResponse };
//     setMessages((prevMessages) => [...prevMessages, botMessage]);
//   };

//   // Handle "Enter" key to send a message
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   // Scroll to the bottom of the chat when a new message arrives
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   return (
//     <Container
//       maxWidth="md"
//       sx={{
//         height: "90vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         backgroundColor: "#f9f9f9", // Soft neutral background color
//         paddingTop: "20px",
//         paddingBottom: "20px",
//         borderRadius: "12px", // Rounded corners
//         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow for the container
//       }}
//     >
//       <Typography
//         variant="h4"
//         gutterBottom
//         sx={{
//           textAlign: "center",
//           fontWeight: "bold",
//           color: "#333", // Dark grey for title text
//           mb: 4,
//         }}
//       >
//         Chat
//       </Typography>

//       <Paper
//         elevation={3}
//         sx={{
//           flexGrow: 1,
//           padding: "20px",
//           overflowY: "auto",
//           backgroundColor: "#ffffff", // White background for the chat area
//           borderRadius: "12px", // Rounded corners
//           boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)", // Subtle inner shadow
//           marginBottom: "20px",
//         }}
//       >
//         {/* Chat messages feed */}
//         {messages.map((message, index) => (
//           <Message key={index} sender={message.sender} text={message.text} />
//         ))}
//         <div ref={messagesEndRef} />
//       </Paper>

//       {/* Input field for new messages */}
//       <Box
//         component="form"
//         sx={{
//           display: "flex",
//           gap: "10px",
//           alignItems: "center",
//         }}
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleSendMessage();
//         }}
//       >
//         <TextField
//           fullWidth
//           variant="outlined"
//           placeholder="Type a message..."
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleKeyDown}
//           sx={{
//             backgroundColor: "#ffffff", // White background for the input field
//             borderRadius: "8px", // Rounded corners for the input field
//           }}
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={handleSendMessage}
//           sx={{
//             padding: "12px 24px",
//             fontSize: "16px",
//             borderRadius: "8px",
//             backgroundColor: "#00796b", // Teal color for the button
//             "&:hover": {
//               backgroundColor: "#004d40", // Darker teal on hover
//             },
//           }}
//         >
//           Send
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default ChatPage;

import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import Message from "../components/Message";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  // Function to handle sending a new message
  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user's message to the chat
    const newMessage = { sender: "user", text: inputValue };
    setMessages([...messages, newMessage]);
    setInputValue(""); // Clear input field

    // Simulate bot response
    setTimeout(() => {
      handleBotResponse();
    }, 1000); // 1-second delay for bot response
  };

  // Function to simulate a bot response
  const handleBotResponse = () => {
    const botResponses = [
      "I'm here to help!",
      "Tell me more about what you're looking for.",
      "That sounds interesting. Can you clarify?",
      "Let's work through this together.",
      "I'm happy to assist with that!",
    ];

    const randomResponse =
      botResponses[Math.floor(Math.random() * botResponses.length)];

    const botMessage = { sender: "bot", text: randomResponse };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  // Handle "Enter" key to send a message
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Scroll to the bottom of the chat when a new message arrives
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container
      maxWidth="md"
      sx={{
        height: "calc(100vh - 100px)", // Adjust height to fit within the screen without touching navbar
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f9f9f9", // Soft neutral background color
        paddingTop: "20px",
        paddingBottom: "20px",
        marginTop: "80px", // Space below the navbar
        borderRadius: "12px", // Rounded corners
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow for the container
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          color: "#333", // Dark grey for title text
          mb: 2,
        }}
      >
        Chat
      </Typography>

      <Paper
        elevation={3}
        sx={{
          flexGrow: 1,
          padding: "20px",
          overflowY: "auto",
          backgroundColor: "#ffffff", // White background for the chat area
          borderRadius: "12px", // Rounded corners
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.1)", // Subtle inner shadow
          marginBottom: "20px",
        }}
      >
        {/* Chat messages feed */}
        {messages.map((message, index) => (
          <Message key={index} sender={message.sender} text={message.text} />
        ))}
        <div ref={messagesEndRef} />
      </Paper>

      {/* Input field for new messages */}
      <Box
        component="form"
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          sx={{
            backgroundColor: "#ffffff", // White background for the input field
            borderRadius: "8px", // Rounded corners for the input field
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
          sx={{
            padding: "12px 24px",
            fontSize: "16px",
            borderRadius: "8px",
            backgroundColor: "#00796b", // Teal color for the button
            "&:hover": {
              backgroundColor: "#004d40", // Darker teal on hover
            },
          }}
        >
          Send
        </Button>
      </Box>
    </Container>
  );
};

export default ChatPage;
