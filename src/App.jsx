// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import RegisterCase from "./pages/RegisterCase";
// import CaseDetails from "./pages/CaseDetails";
// import Cases from "./pages/Cases";
// import { LoadScript } from "@react-google-maps/api";
// import { GOOGLE_MAPS_CONFIG } from "./config/maps";

// export default function App() {
//   return (
//     <LoadScript {...GOOGLE_MAPS_CONFIG}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cases" element={<Cases />} />
//           <Route path="/register-case" element={<RegisterCase />} />
//           <Route path="/case/:id" element={<CaseDetails />} />
//         </Routes>
//       </Router>
//     </LoadScript>
//   );
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import { GOOGLE_MAPS_CONFIG } from "./config/maps";
import { AuthProvider } from "./context/AuthContext";

// Import page components
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RegisterCase from "./pages/RegisterCase";
import Cases from "./pages/Cases";
import CaseDetails from "./pages/CaseDetails";

function App() {
  return (
    <LoadScript {...GOOGLE_MAPS_CONFIG}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/register-case" element={<RegisterCase />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/case/:id" element={<CaseDetails />} />
          </Routes>
        </Router>
      </AuthProvider>
    </LoadScript>
  );
}

export default App;
