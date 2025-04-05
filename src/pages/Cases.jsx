import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cases() {
  // Sample data; in a real application, fetch from your backend
  const caseList = [
    { id: 1, title: "Burglary in Downtown" },
    { id: 2, title: "Vandalism at Central Park" },
    { id: 3, title: "Car Theft on 5th Avenue" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Cases</h1>
        <ul className="space-y-4">
          {caseList.map((c) => (
            <li key={c.id} className="p-4 bg-white rounded-md shadow-md">
              <h2 className="text-xl font-semibold text-gray-800">{c.title}</h2>
              <Link
                to={`/case/${c.id}`}
                className="text-gray-500 hover:text-blue-500"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
