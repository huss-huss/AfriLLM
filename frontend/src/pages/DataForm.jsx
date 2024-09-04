// src/pages/DataFormPage.js
import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const DataFormPage = () => {
  const [questions, setQuestions] = useState(1);
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("en");

  const navigate = useNavigate();

  const handleNext = () => {
    // Navigate to the question entry page with form data
    navigate("/data/enter", {
      state: { questions, topic, description, language },
    });
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper
        elevation={4}
        sx={{
          padding: "40px",
          borderRadius: "12px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#00796b", // Dark teal color for the title
              mb: 2,
              textAlign: "center",
            }}
          >
            Enter Data Details
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ textAlign: "center" }}
          >
            Please provide the required details for the data you're submitting.
          </Typography>
        </Box>

        <form>
          {/* Number of Questions */}
          <TextField
            label="Number of Questions"
            fullWidth
            margin="normal"
            type="number"
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}
            InputProps={{
              inputProps: { min: 1, max: 100 },
            }}
          />

          {/* Topic */}
          <TextField
            label="Topic"
            fullWidth
            margin="normal"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />

          {/* Description */}
          <TextField
            label="Topic Description"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Language */}
          <TextField
            label="Language"
            fullWidth
            margin="normal"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            helperText="Enter the language code (e.g., en for English, fr for French)"
          />

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleNext}
            sx={{
              mt: 4,
              padding: "10px 24px",
              fontSize: "18px",
              borderRadius: "8px",
              backgroundColor: "#00796b",
              "&:hover": {
                backgroundColor: "#004d40",
              },
              display: "block",
              width: "100%",
              textAlign: "center",
            }}
          >
            Next
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default DataFormPage;
