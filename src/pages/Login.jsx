import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("public");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    login();
    navigate("/dashboard");
  };

  const PublicLoginForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-800 font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        />
      </div>
      <div>
        <label className="block text-gray-800 font-medium">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );

  const AuthorityLoginForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-800 font-medium">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        />
      </div>
      <div>
        <label className="block text-gray-800 font-medium">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
          required
        />
      </div>
      <div>
        <label className="block text-gray-800 font-medium">
          Authority Code
        </label>
        <input
          type="text"
          placeholder="Enter your authority code"
          className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow p-8 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Login
          </h1>
          <div className="flex mb-6 border-b">
            <button
              onClick={() => setActiveTab("public")}
              className={`flex-1 pb-2 text-center ${
                activeTab === "public"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Citizen
            </button>
            <button
              onClick={() => setActiveTab("authority")}
              className={`flex-1 pb-2 text-center ${
                activeTab === "authority"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              Authority
            </button>
          </div>
          {activeTab === "public" ? (
            <PublicLoginForm />
          ) : (
            <AuthorityLoginForm />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
