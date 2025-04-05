import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const location = useLocation();

  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      <div className="text-xl font-bold text-gray-800">CrimeWatch</div>
      <nav className="space-x-4">
        {isLoggedIn ? (
          // Logged-in navigation
          <>
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link to="/cases" className="text-gray-600 hover:text-blue-600">
              Cases
            </Link>
            <Link
              to="/register-case"
              className="text-gray-600 hover:text-blue-600"
            >
              Register Case
            </Link>
            <button
              onClick={logout}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ml-4"
            >
              Logout
            </button>
          </>
        ) : (
          // Not logged-in navigation
          <>
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>

            {/* Show Signup button when on login page */}
            {location.pathname === "/login" && (
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Signup
              </Link>
            )}

            {/* Show Login link when on signup page */}
            {location.pathname === "/signup" && (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Login
              </Link>
            )}

            {/* Show both Login/Signup when not on auth pages */}
            {!["/login", "/signup"].includes(location.pathname) && (
              <>
                <Link to="/login" className="text-gray-600 hover:text-blue-600">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Signup
                </Link>
              </>
            )}
          </>
        )}
      </nav>
    </header>
  );
}
