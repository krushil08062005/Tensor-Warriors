import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiAlertTriangle,
  FiMap,
  FiFilter,
  FiCalendar,
  FiCheckSquare,
  FiShield,
  FiTruck,
  FiHome,
  FiAlertCircle,
  FiBell,
  FiBarChart2,
  FiPieChart,
} from "react-icons/fi";
import Navbar from "../../components/CitizenNavbar";
import Footer from "../../components/Footer";
import { AuthContext } from "../../context/AuthContext";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 80 },
  }),
};

export default function CitizenDashboard() {
  const { isLoggedIn } = useContext(AuthContext);
  const [liveData, setLiveData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    types: [],
    severity: [],
    verifiedOnly: false,
  });
  const [dateRange, setDateRange] = useState({
    start: "",
    end: "",
  });
  const [timeRange, setTimeRange] = useState("7days");

  const incidentTypes = [
    {
      id: 1,
      name: "Violent",
      icon: FiAlertTriangle,
      bgColor: "bg-red-100",
      borderColor: "border-red-500",
      textColor: "text-red-600",
    },
    {
      id: 2,
      name: "Property",
      icon: FiHome,
      bgColor: "bg-yellow-100",
      borderColor: "border-yellow-500",
      textColor: "text-yellow-600",
    },
    {
      id: 3,
      name: "Public",
      icon: FiShield,
      bgColor: "bg-blue-100",
      borderColor: "border-blue-500",
      textColor: "text-blue-600",
    },
    {
      id: 4,
      name: "Traffic",
      icon: FiTruck,
      bgColor: "bg-green-100",
      borderColor: "border-green-500",
      textColor: "text-green-600",
    },
    {
      id: 5,
      name: "Other",
      icon: FiAlertCircle,
      bgColor: "bg-purple-100",
      borderColor: "border-purple-500",
      textColor: "text-purple-600",
    },
  ];

  useEffect(() => {
    if (isLoggedIn) {
      setTimeout(() => {
        try {
          const data = {
            totalIncidents: 50,
            recentIncidents: [
              {
                id: 1,
                type: "Shooting",
                category: "violent",
                date: "Apr 2, 2025-4:14 PM",
                location: "1557 Haight St",
                verified: true,
              },
              {
                id: 2,
                type: "DUI",
                category: "traffic",
                date: "Apr 1, 2025-4:14 PM",
                location: "831 Valencia St",
                verified: false,
              },
              {
                id: 3,
                type: "Burglary",
                category: "property",
                date: "Mar 30, 2025-2:30 PM",
                location: "450 Market St",
                verified: true,
              },
            ],
            stats: {
              violent: 15,
              property: 18,
              public: 5,
              traffic: 9,
              other: 3,
            },
            timeStats: {
              "7days": {
                total: 11,
                mostCommon: "Property",
                categories: [
                  { name: "Property", percentage: 36 },
                  { name: "Violent", percentage: 36 },
                  { name: "Public", percentage: 9 },
                  { name: "Traffic", percentage: 18 },
                  { name: "Other", percentage: 1 },
                ],
                topTypes: [
                  { name: "Theft", count: 4 },
                  { name: "Robbery", count: 3 },
                  { name: "Assault", count: 2 },
                  { name: "Drugs", count: 1 },
                  { name: "Accident", count: 1 },
                ],
              },
              "30days": {
                total: 42,
                mostCommon: "Violent",
                categories: [
                  { name: "Property", percentage: 32 },
                  { name: "Violent", percentage: 38 },
                  { name: "Public", percentage: 12 },
                  { name: "Traffic", percentage: 15 },
                  { name: "Other", percentage: 3 },
                ],
                topTypes: [
                  { name: "Assault", count: 12 },
                  { name: "Theft", count: 10 },
                  { name: "Vandalism", count: 8 },
                  { name: "DUI", count: 6 },
                  { name: "Burglary", count: 6 },
                ],
              },
              year: {
                total: 487,
                mostCommon: "Property",
                categories: [
                  { name: "Property", percentage: 41 },
                  { name: "Violent", percentage: 29 },
                  { name: "Public", percentage: 15 },
                  { name: "Traffic", percentage: 12 },
                  { name: "Other", percentage: 3 },
                ],
                topTypes: [
                  { name: "Theft", count: 142 },
                  { name: "Burglary", count: 98 },
                  { name: "Assault", count: 87 },
                  { name: "Vandalism", count: 65 },
                  { name: "DUI", count: 45 },
                ],
              },
            },
          };
          setLiveData(data);
          setLoading(false);
        } catch (err) {
          setError("Error fetching live data");
          setLoading(false);
        }
      }, 1500);
    }
  }, [isLoggedIn]);

  const toggleFilter = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow p-8 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl text-gray-700 bg-white p-8 rounded-xl shadow-lg"
          >
            Please log in to access the Dashboard
          </motion.p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow p-8 space-y-8 max-w-7xl mx-auto w-full">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-2"
        >
          <h1 className="text-4xl font-bold text-gray-800">Safety Dashboard</h1>
          <p className="text-gray-600 text-lg">
            Community Incident Reporting and Analytics
          </p>
        </motion.header>

        {loading ? (
          <motion.div
            className="text-xl text-gray-700 bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Loading live data...
          </motion.div>
        ) : error ? (
          <motion.div
            className="text-red-600 text-xl bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.div>
        ) : (
          <div className="space-y-8">
            {/* Filters Section */}
            <motion.section
              initial="hidden"
              animate="visible"
              custom={1}
              variants={containerVariants}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <FiFilter className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">Filters</h2>
                <button
                  onClick={() =>
                    setFilters({ types: [], severity: [], verifiedOnly: false })
                  }
                  className="ml-auto text-blue-600 hover:text-blue-700"
                >
                  Reset
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {incidentTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => toggleFilter("types", type.name)}
                    className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-all ${
                      filters.types.includes(type.name)
                        ? `${type.bgColor} ${type.borderColor}`
                        : "bg-gray-100 border-transparent"
                    }`}
                  >
                    <type.icon className={`w-5 h-5 ${type.textColor}`} />
                    <span className="font-medium">{type.name}</span>
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 md:gap-6 w-full">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="font-medium">Severity:</span>
                  {["Low", "Medium", "High"].map((level) => (
                    <button
                      key={level}
                      onClick={() => toggleFilter("severity", level)}
                      className={`px-4 py-2 rounded-lg ${
                        filters.severity.includes(level)
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>

                {/* Verified Filter - Mobile Responsive */}
                <label className="flex items-center gap-2 md:ml-auto w-full md:w-auto">
                  <FiCheckSquare className="w-5 h-5 text-gray-600 shrink-0" />
                  <input
                    type="checkbox"
                    checked={filters.verifiedOnly}
                    onChange={(e) =>
                      setFilters((prev) => ({
                        ...prev,
                        verifiedOnly: e.target.checked,
                      }))
                    }
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700 text-sm md:text-base">
                    Verified reports only
                  </span>
                </label>
              </div>
            </motion.section>

            {/* Map Section */}
            <motion.section
              initial="hidden"
              animate="visible"
              custom={2}
              variants={containerVariants}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <FiMap className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Incident Map
                </h2>
              </div>
              <div className="h-96 bg-gray-100 rounded-xl flex items-center justify-center">
                <div className="text-center text-gray-600 max-w-md">
                  <FiMap className="w-16 h-16 mx-auto mb-4" />
                  <p className="mb-4">
                    Map configuration required. Please add your Google Maps API
                    key in CrimeMap.jsx
                  </p>
                  <a
                    href="https://developers.google.com/maps/documentation/javascript/get-api-key"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Get API key from Google Cloud Console
                  </a>
                </div>
              </div>
            </motion.section>

            {/* Recent Incidents */}
            <motion.section
              initial="hidden"
              animate="visible"
              custom={3}
              variants={containerVariants}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <FiBell className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Recent Incidents
                  </h2>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <FiCalendar className="w-5 h-5 text-gray-600" />
                    <input
                      type="date"
                      className="bg-gray-100 p-2 rounded-lg"
                      onChange={(e) =>
                        setDateRange((prev) => ({
                          ...prev,
                          start: e.target.value,
                        }))
                      }
                    />
                    <span>to</span>
                    <input
                      type="date"
                      className="bg-gray-100 p-2 rounded-lg"
                      onChange={(e) =>
                        setDateRange((prev) => ({
                          ...prev,
                          end: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <span className="text-gray-600">
                    Showing {liveData.recentIncidents.length} of{" "}
                    {liveData.totalIncidents} incidents
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <AnimatePresence>
                  {liveData.recentIncidents.map((incident) => (
                    <motion.div
                      key={incident.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600 flex items-center justify-between"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <span className="font-semibold text-lg">
                            {incident.type}
                          </span>
                          <span className="text-sm px-2 py-1 rounded-full bg-blue-100 text-blue-600">
                            {incident.category}
                          </span>
                          {incident.verified && (
                            <FiCheckSquare className="w-4 h-4 text-green-600" />
                          )}
                        </div>
                        <div className="text-sm text-gray-600">
                          {incident.date} • {incident.location}
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        View Details
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.section>

            {/* Crime Statistics Section */}
            <motion.section
              initial="hidden"
              animate="visible"
              custom={4}
              variants={containerVariants}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-3 mb-6">
                <FiBarChart2 className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Crime Statistics
                </h2>
              </div>

              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setTimeRange("7days")}
                  className={`px-4 py-2 rounded-lg ${
                    timeRange === "7days"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  Last 7 Days
                </button>
                <button
                  onClick={() => setTimeRange("30days")}
                  className={`px-4 py-2 rounded-lg ${
                    timeRange === "30days"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  Last 30 Days
                </button>
                <button
                  onClick={() => setTimeRange("year")}
                  className={`px-4 py-2 rounded-lg ${
                    timeRange === "year"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  Last Year
                </button>
              </div>

              {liveData &&
                liveData.timeStats &&
                liveData.timeStats[timeRange] && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Total Incidents */}
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Total Incidents
                      </h3>
                      <p className="text-3xl font-bold text-blue-600">
                        {liveData.timeStats[timeRange].total}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Past{" "}
                        {timeRange === "7days"
                          ? "7"
                          : timeRange === "30days"
                          ? "30"
                          : "365"}{" "}
                        days
                      </p>
                    </div>

                    {/* Most Common */}
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h3 className="text-lg font-semibold text-gray-700 mb-2">
                        Most Common
                      </h3>
                      <p className="text-3xl font-bold text-green-600">
                        {liveData.timeStats[timeRange].mostCommon}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Top incident category
                      </p>
                    </div>

                    {/* Incidents by Category */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 col-span-1 md:col-span-3">
                      <div className="flex items-center gap-3 mb-4">
                        <FiPieChart className="w-5 h-5 text-blue-600" />
                        <h3 className="text-lg font-semibold text-gray-700">
                          Incidents by Category
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {liveData.timeStats[timeRange].categories.map(
                          (category, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between"
                            >
                              <span className="text-gray-700">
                                {category.name}
                              </span>
                              <div className="flex items-center gap-4">
                                <div className="w-32 bg-gray-200 rounded-full h-2.5">
                                  <div
                                    className="bg-blue-600 h-2.5 rounded-full"
                                    style={{ width: `${category.percentage}%` }}
                                  ></div>
                                </div>
                                <span className="text-gray-700 font-medium">
                                  {category.percentage}%
                                </span>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Top Incident Types */}
                    <div className="bg-white p-6 rounded-xl border border-gray-200 col-span-1 md:col-span-3">
                      <h3 className="text-lg font-semibold text-gray-700 mb-4">
                        Top Incident Types
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        {liveData.timeStats[timeRange].topTypes.map(
                          (type, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <span className="text-gray-700">{type.name}</span>
                              <div className="w-24 bg-gray-200 rounded-full h-2.5">
                                <div
                                  className="bg-blue-600 h-2.5 rounded-full"
                                  style={{
                                    width: `${
                                      (type.count /
                                        liveData.timeStats[timeRange]
                                          .topTypes[0].count) *
                                      100
                                    }%`,
                                  }}
                                ></div>
                              </div>
                              <span className="text-gray-700 font-medium">
                                {type.count}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}
            </motion.section>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
