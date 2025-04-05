import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadScript } from "@react-google-maps/api";
import { GOOGLE_MAPS_CONFIG } from "./config/maps";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home";
import CitizenDashboard from "./pages/citizen/CitizenDashboard";
import AuthDashboard from "./pages/auth/AuthDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CitizenRegisterCase from "./pages/citizen/CitizenRegisterCase";
import AuthRegisterCase from "./pages/auth/AuthRegisterCase";
import CitizenCases from "./pages/citizen/CitizenCases";
import AuthCases from "./pages/auth/AuthCases";
import CitizenCaseDetails from "./pages/citizen/CitizenCaseDetails";
import AuthCaseDetails from "./pages/auth/AuthCaseDetails";
import TotalCases from "./pages/auth/TotalCases";
import ResolvedCases from "./pages/auth/ResolvedCases";
import ApprovedCases from "./pages/auth/ApprovedCases";
import PendingCases from "./pages/auth/PendingCases";

function App() {
  return (
    <LoadScript {...GOOGLE_MAPS_CONFIG}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/citizen-dashboard" element={<CitizenDashboard />} />
            <Route path="/auth-dashboard" element={<AuthDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/citizen-register-case"
              element={<CitizenRegisterCase />}
            />
            <Route path="/auth-register-case" element={<AuthRegisterCase />} />
            <Route path="/citizen-cases" element={<CitizenCases />} />
            <Route path="/auth-cases" element={<AuthCases />} />
            <Route path="/case/:id" element={<AuthCaseDetails />} />
            <Route path="/total" element={<TotalCases />} />
            <Route path="/resolved" element={<ResolvedCases />} />
            <Route path="/approved" element={<ApprovedCases />} />
            <Route path="/pending" element={<PendingCases />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </LoadScript>
  );
}

export default App;

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { LoadScript } from "@react-google-maps/api";
// import { GOOGLE_MAPS_CONFIG } from "./config/maps";
// import { AuthProvider, useAuth } from "./context/AuthContext";

// // Components
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// // Citizen Components
// import CitizenDashboard from "./pages/citizen/CitizenDashboard";
// import CitizenRegisterCase from "./pages/citizen/CitizenRegisterCase";
// import CitizenCases from "./pages/citizen/CitizenCases";
// import CitizenCaseDetails from "./pages/citizen/CitizenCaseDetails";

// // Authority Components
// import AuthDashboard from "./pages/auth/AuthDashboard";
// import AuthRegisterCase from "./pages/auth/AuthRegisterCase";
// import AuthCases from "./pages/auth/AuthCases";
// import AuthCaseDetails from "./pages/auth/AuthCaseDetails";
// import TotalCases from "./pages/auth/TotalCases";
// import ResolvedCases from "./pages/auth/ResolvedCases";
// import ApprovedCases from "./pages/auth/ApprovedCases";
// import PendingCases from "./pages/auth/PendingCases";

// // Protected Route Component
// const ProtectedRoute = ({ children, allowedRoles }) => {
//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }

//   if (!allowedRoles.includes(user.role)) {
//     return (
//       <Navigate
//         to={user.role === "citizen" ? "/citizen/dashboard" : "/auth/dashboard"}
//         replace
//       />
//     );
//   }

//   return children;
// };

// function App() {
//   return (
//     <LoadScript {...GOOGLE_MAPS_CONFIG}>
//       <AuthProvider>
//         <Router>
//           <Routes>
//             {/* Public Routes */}
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />

//             {/* Citizen Routes */}
//             <Route path="/citizen">
//               <Route
//                 path="dashboard"
//                 element={
//                   <ProtectedRoute allowedRoles={["citizen"]}>
//                     <CitizenDashboard />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="register-case"
//                 element={
//                   <ProtectedRoute allowedRoles={["citizen"]}>
//                     <CitizenRegisterCase />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="cases"
//                 element={
//                   <ProtectedRoute allowedRoles={["citizen"]}>
//                     <CitizenCases />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="cases/:id"
//                 element={
//                   <ProtectedRoute allowedRoles={["citizen"]}>
//                     <CitizenCaseDetails />
//                   </ProtectedRoute>
//                 }
//               />
//             </Route>

//             {/* Authority Routes */}
//             <Route path="/auth">
//               <Route
//                 path="dashboard"
//                 element={
//                   <ProtectedRoute allowedRoles={["authority"]}>
//                     <AuthDashboard />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="register-case"
//                 element={
//                   <ProtectedRoute allowedRoles={["authority"]}>
//                     <AuthRegisterCase />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="cases"
//                 element={
//                   <ProtectedRoute allowedRoles={["authority"]}>
//                     <AuthCases />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="cases/:id"
//                 element={
//                   <ProtectedRoute allowedRoles={["authority"]}>
//                     <AuthCaseDetails />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="total-cases"
//                 element={
//                   <ProtectedRoute allowedRoles={["authority"]}>
//                     <TotalCases />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="resolved-cases"
//                 element={
//                   <ProtectedRoute allowedRoles={["authority"]}>
//                     <ResolvedCases />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="approved-cases"
//                 element={
//                   <ProtectedRoute allowedRoles={["authority"]}>
//                     <ApprovedCases />
//                   </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="pending-cases"
//                 element={
//                   <ProtectedRoute allowedRoles={["authority"]}>
//                     <PendingCases />
//                   </ProtectedRoute>
//                 }
//               />
//             </Route>

//             {/* Catch-all Route */}
//             <Route path="*" element={<Navigate to="/" replace />} />
//           </Routes>
//         </Router>
//       </AuthProvider>
//     </LoadScript>
//   );
// }

// export default App;