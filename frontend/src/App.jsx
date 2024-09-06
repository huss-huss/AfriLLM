// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
// import NavBar from "./components/NavBar";
// import Home from "./pages/Home";
// import Profile from "./pages/Profile";

// const App = () => {
//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<SignIn />} />
//         <Route path="/register" element={<SignUp />} />

//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// App.js

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Sidebar from "./components/Sidebar";
import StatsPage from "./pages/Stats";
import ChatPage from "./pages/Chat";
import DataPage from "./pages/Data";
import ProtectedLayout from "./components/ProtectedLayout";
import DataFormPage from "./pages/DataForm";
import DataDonePage from "./pages/DataDone";
import DataEnterPage from "./pages/DataEnter";
import Settings from "./pages/Settings";
// import AmharicKeyboard from "./pages/AmharicKeyboard"; 


const App = () => {
  // A simple way to track login status (use a proper auth mechanism in real projects)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false); // Logout logic
  };

  return (
    <Router>
      <NavBar isAuthenticated={isAuthenticated} onLogout={handleLogout} />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<SignIn onLogin={() => setIsAuthenticated(true)} />}
        />
        <Route
          path="/register"
          element={<SignUp onRegister={() => setIsAuthenticated(true)} />}
        />

        {/* Protected Routes (Only accessible when logged in) */}
        <Route
          path="/profile"
          element={
            isAuthenticated ? (
              <ProtectedLayout>
                <Profile />
              </ProtectedLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/stats"
          element={
            isAuthenticated ? (
              <ProtectedLayout>
                <StatsPage />
              </ProtectedLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/chat"
          element={
            isAuthenticated ? (
              <ProtectedLayout>
                <ChatPage />
              </ProtectedLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/data"
          element={
            isAuthenticated ? (
              <ProtectedLayout>
                <DataPage />
              </ProtectedLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/data/form"
          element={
            isAuthenticated ? (
              <ProtectedLayout>
                <DataFormPage />
              </ProtectedLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/data/done"
          element={
            isAuthenticated ? (
              <ProtectedLayout>
                <DataDonePage />
              </ProtectedLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/data/enter"
          element={
            isAuthenticated ? (
              <ProtectedLayout>
                <DataEnterPage />
              </ProtectedLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/settings"
          element={
            isAuthenticated ? (
              <ProtectedLayout>
                <Settings />
              </ProtectedLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
         {/* <Route path="/amharic-keyboard" element={<AmharicKeyboard />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
