// import React, { useState } from "react";
// import {
//   Button,
//   TextField,
//   Typography,
//   Container,
//   Paper,
//   Box,
// } from "@mui/material";
// import { useLocation, useNavigate } from "react-router-dom";

// const DataEnterPage = () => {
//   const { state } = useLocation();
//   const { questions } = state; // Get the number of questions from state

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [qaList, setQaList] = useState([]);

//   const navigate = useNavigate();

//   // Handle moving to the next question
//   const handleNext = () => {
//     const newQa = { question, answer };

//     // Update the QA list or replace the existing question/answer if revisiting
//     const updatedQaList = [...qaList];
//     updatedQaList[currentQuestionIndex - 1] = newQa;
//     setQaList(updatedQaList);

//     // Reset the fields for the next question
//     setQuestion("");
//     setAnswer("");

//     // If there are more questions, increment the index, otherwise navigate to done page
//     if (currentQuestionIndex < questions) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//       const nextQa = updatedQaList[currentQuestionIndex] || {
//         question: "",
//         answer: "",
//       };
//       setQuestion(nextQa.question);
//       setAnswer(nextQa.answer);
//     } else {
//       navigate("/data/done");
//     }
//   };

//   // Handle moving to the previous question
//   const handlePrevious = () => {
//     if (currentQuestionIndex > 1) {
//       const previousQa = qaList[currentQuestionIndex - 2] || {
//         question: "",
//         answer: "",
//       };
//       setQuestion(previousQa.question);
//       setAnswer(previousQa.answer);
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Paper
//         elevation={4}
//         sx={{
//           padding: "40px",
//           borderRadius: "12px",
//           backgroundColor: "#fafafa", // Light grey background
//         }}
//       >
//         <Box sx={{ mb: 4 }}>
//           <Typography
//             variant="h5"
//             component="h1"
//             gutterBottom
//             sx={{
//               fontWeight: "bold",
//               color: "#00796b", // Dark teal color for the title
//               mb: 2,
//               textAlign: "center",
//             }}
//           >
//             Enter Question {currentQuestionIndex} of {questions}
//           </Typography>
//           <Typography
//             variant="body1"
//             color="textSecondary"
//             sx={{ textAlign: "center" }}
//           >
//             Please provide the question and its corresponding answer below.
//           </Typography>
//         </Box>

//         <form>
//           {/* Question input */}
//           <TextField
//             label="Question"
//             fullWidth
//             margin="normal"
//             value={question}
//             onChange={(e) => setQuestion(e.target.value)}
//             sx={{ mb: 3 }} // Spacing
//           />

//           {/* Answer input */}
//           <TextField
//             label="Answer"
//             fullWidth
//             margin="normal"
//             multiline
//             rows={3}
//             value={answer}
//             onChange={(e) => setAnswer(e.target.value)}
//             sx={{ mb: 3 }}
//           />

//           <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
//             <Button
//               variant="outlined"
//               color="primary"
//               size="large"
//               onClick={handlePrevious}
//               sx={{
//                 padding: "10px 20px",
//                 fontSize: "16px",
//                 borderRadius: "8px",
//                 visibility: currentQuestionIndex > 1 ? "visible" : "hidden", // Hide button on the first question
//               }}
//             >
//               Previous
//             </Button>

//             <Button
//               variant="contained"
//               color="primary"
//               size="large"
//               onClick={handleNext}
//               sx={{
//                 padding: "12px 28px",
//                 fontSize: "18px",
//                 borderRadius: "8px",
//                 backgroundColor: "#00796b", // Teal color for the button
//                 "&:hover": {
//                   backgroundColor: "#004d40", // Darker teal on hover
//                 },
//               }}
//             >
//               {currentQuestionIndex < questions ? "Next Data" : "Finish"}
//             </Button>
//           </Box>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default DataEnterPage;

// src/pages/DataEnterPage.js
import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Box,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const DataEnterPage = () => {
  const { state } = useLocation();
  const { questions } = state; // Get the number of questions from state

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [qaList, setQaList] = useState([]);

  const navigate = useNavigate();

  // Handle moving to the next question
  const handleNext = () => {
    const newQa = { question, answer };

    // Update the QA list or replace the existing question/answer if revisiting
    const updatedQaList = [...qaList];
    updatedQaList[currentQuestionIndex - 1] = newQa;
    setQaList(updatedQaList);

    // Reset the fields for the next question
    setQuestion("");
    setAnswer("");

    // If there are more questions, increment the index, otherwise navigate to done page
    if (currentQuestionIndex < questions) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      const nextQa = updatedQaList[currentQuestionIndex] || {
        question: "",
        answer: "",
      };
      setQuestion(nextQa.question);
      setAnswer(nextQa.answer);
    } else {
      navigate("/data/done");
    }
  };

  // Handle moving to the previous question
  const handlePrevious = () => {
    if (currentQuestionIndex > 1) {
      const previousQa = qaList[currentQuestionIndex - 2] || {
        question: "",
        answer: "",
      };
      setQuestion(previousQa.question);
      setAnswer(previousQa.answer);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Handle going back to the DataFormPage
  const handleBack = () => {
    navigate("/data/form");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper
        elevation={4}
        sx={{
          padding: "40px",
          borderRadius: "12px",
          backgroundColor: "#fafafa", // Light grey background
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#00796b", // Dark teal color for the title
              mb: 2,
              textAlign: "center",
            }}
          >
            Enter Question {currentQuestionIndex} of {questions}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ textAlign: "center" }}
          >
            Please provide the question and its corresponding answer below.
          </Typography>
        </Box>

        <form>
          {/* Question input */}
          <TextField
            label="Question"
            fullWidth
            margin="normal"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            sx={{ mb: 3 }} // Spacing
          />

          {/* Answer input */}
          <TextField
            label="Answer"
            fullWidth
            margin="normal"
            multiline
            rows={3}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            sx={{ mb: 3 }}
          />

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            {/* Show "Back" button if it's the first question */}
            {currentQuestionIndex === 1 ? (
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={handleBack}
                sx={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "8px",
                }}
              >
                Back
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={handlePrevious}
                sx={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "8px",
                }}
              >
                Previous
              </Button>
            )}

            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleNext}
              sx={{
                padding: "12px 28px",
                fontSize: "18px",
                borderRadius: "8px",
                backgroundColor: "#00796b", // Teal color for the button
                "&:hover": {
                  backgroundColor: "#004d40", // Darker teal on hover
                },
              }}
            >
              {currentQuestionIndex < questions ? "Next Data" : "Finish"}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default DataEnterPage;
