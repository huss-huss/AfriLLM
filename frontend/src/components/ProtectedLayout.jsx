// // src/components/ProtectedLayout.js
// import React from "react";
// import Sidebar from "./Sidebar";

// const ProtectedLayout = ({ children }) => {
//   return (
//     <div
//       style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
//     >
//       {/* This empty div makes space for the NavBar height */}
//       <div style={{ height: "64px" }}></div>

//       {/* The layout for sidebar and content, positioned below the navbar */}
//       <div style={{ display: "flex", flexGrow: 1 }}>
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Main content area */}
//         <div style={{ flexGrow: 1, padding: "20px" }}>{children}</div>
//       </div>
//     </div>
//   );
// };

// export default ProtectedLayout;

// src/components/ProtectedLayout.js
import React from "react";
import Sidebar from "./Sidebar";

const ProtectedLayout = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* The main layout for sidebar and content */}
      <div style={{ display: "flex", flexGrow: 1 }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div style={{ flexGrow: 1, padding: "20px", marginTop: "64px" }}>
          {/* Adding marginTop: 64px to ensure it starts below the NavBar */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
