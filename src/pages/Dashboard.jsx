import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContext";

// Animation variants for sections
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, type: "spring", stiffness: 50 },
  }),
};

export default function Dashboard() {
  const { isLoggedIn } = useContext(AuthContext);
  const [liveData, setLiveData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState([]);

  // Simulate live data fetching for the user's area after login
  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        try {
          const data = {
            totalCases: 150,
            resolved: 90,
            pending: 60,
            recentCases: [
              { id: 1, title: "Burglary in Downtown", time: "10:30 AM" },
              { id: 2, title: "Vandalism at Central Park", time: "11:00 AM" },
              { id: 3, title: "Car Theft on 5th Avenue", time: "11:30 AM" },
            ],
            topCrimes: [
              { id: 1, type: "Theft", count: 45 },
              { id: 2, type: "Vandalism", count: 30 },
              { id: 3, type: "Assault", count: 25 },
            ],
          };
          setLiveData(data);
          // Initialize notifications with some initial notifications
          setNotifications([
            "Case #23 updated to 'Under Investigation'",
            "New case reported in your area",
          ]);
          setLoading(false);
        } catch (err) {
          setError("Error fetching live data");
          setLoading(false);
        }
      }, 1500);
    }
  }, [isLoggedIn]);

  // Simulate receiving a live notification every 10 seconds
  useEffect(() => {
    if (isLoggedIn) {
      const interval = setInterval(() => {
        const newNotification = `New case reported near your area at ${new Date().toLocaleTimeString()}`;
        // Prepend the new notification to the list
        setNotifications((prev) => [newNotification, ...prev]);
      }, 10000); // every 10 seconds

      return () => clearInterval(interval);
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow p-8 flex items-center justify-center">
          <p className="text-xl text-gray-700">
            Please log in to access the Dashboard.
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow p-8 space-y-10">
        <motion.h1
          className="text-3xl font-bold text-gray-800 mb-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          Dashboard Overview
        </motion.h1>
        {loading ? (
          <motion.div
            className="text-xl text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Loading live data...
          </motion.div>
        ) : error ? (
          <motion.div
            className="text-red-600 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.div>
        ) : (
          <>
            {/* Overview Panel */}
            <motion.section
              initial="hidden"
              animate="visible"
              custom={1}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="bg-white p-6 rounded-md shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">
                  Total Cases
                </h2>
                <p className="text-2xl font-bold text-blue-600">
                  {liveData.totalCases}
                </p>
              </div>
              <div className="bg-white p-6 rounded-md shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">
                  Resolved Cases
                </h2>
                <p className="text-2xl font-bold text-green-600">
                  {liveData.resolved}
                </p>
              </div>
              <div className="bg-white p-6 rounded-md shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">
                  Pending Cases
                </h2>
                <p className="text-2xl font-bold text-red-600">
                  {liveData.pending}
                </p>
              </div>
            </motion.section>

            {/* Live Notifications Section */}
            <motion.section
              initial="hidden"
              animate="visible"
              custom={2}
              variants={containerVariants}
              className="bg-white p-6 rounded-md shadow-md"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Live Notifications
              </h2>
              {notifications.length === 0 ? (
                <p className="text-gray-700">No new notifications.</p>
              ) : (
                <ul className="list-disc list-inside text-gray-700">
                  {notifications.map((note, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 * index }}
                    >
                      {note}
                    </motion.li>
                  ))}
                </ul>
              )}
            </motion.section>

            {/* Recent Activity Section */}
            <motion.section
              initial="hidden"
              animate="visible"
              custom={3}
              variants={containerVariants}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Recent Activity
              </h2>
              <ul className="space-y-4">
                {liveData.recentCases.map((c) => (
                  <motion.li
                    key={c.id}
                    className="bg-white p-4 rounded-md shadow-md flex justify-between items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div>
                      <p className="text-gray-800 font-semibold">{c.title}</p>
                      <p className="text-gray-600 text-sm">{c.time}</p>
                    </div>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                      View
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Top Crimes Section */}
            <motion.section
              initial="hidden"
              animate="visible"
              custom={4}
              variants={containerVariants}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Top Crimes in Your Area
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {liveData.topCrimes.map((crime) => (
                  <motion.div
                    key={crime.id}
                    className="bg-white p-6 rounded-md shadow-md flex flex-col items-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.3 * crime.id,
                      type: "spring",
                      stiffness: 60,
                    }}
                  >
                    <h3 className="text-xl font-semibold text-gray-800">
                      {crime.type}
                    </h3>
                    <p className="text-2xl font-bold text-blue-600">
                      {crime.count}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
