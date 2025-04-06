// // // import React, { useState, useEffect, useContext } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import {
// // //   FiMap,
// // //   FiAlertCircle,
// // //   FiCheckCircle,
// // //   FiActivity,
// // //   FiMapPin,
// // //   FiBell,
// // //   FiClock,
// // //   FiBarChart2,
// // // } from "react-icons/fi";
// // // import AuthNavbar from "../../components/AuthNavbar";
// // // import Footer from "../../components/Footer";
// // // import Navbar from "../../components/AuthNavbar";
// // // import { AuthContext } from "../../context/AuthContext";
// // // import { Link } from "react-router-dom";

// // // const containerVariants = {
// // //   hidden: { opacity: 0, y: 20 },
// // //   visible: (i = 1) => ({
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: { delay: i * 0.2, type: "spring", stiffness: 80 },
// // //   }),
// // // };

// // // export default function Dashboard() {
// // //   const { isLoggedIn } = useContext(AuthContext);
// // //   const [liveData, setLiveData] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [notifications, setNotifications] = useState([]);

// // //   useEffect(() => {
// // //     if (isLoggedIn) {
// // //       setTimeout(() => {
// // //         try {
// // //           const data = {
// // //             totalCases: 150,
// // //             resolved: 90,
// // //             pending: 60,
// // //             recentCases: [
// // //               {
// // //                 id: 1,
// // //                 title: "Burglary in Downtown",
// // //                 time: "10:30 AM",
// // //                 status: "Under Investigation",
// // //               },
// // //               {
// // //                 id: 2,
// // //                 title: "Vandalism at Central Park",
// // //                 time: "11:00 AM",
// // //                 status: "Reported",
// // //               },
// // //               {
// // //                 id: 3,
// // //                 title: "Car Theft on 5th Avenue",
// // //                 time: "11:30 AM",
// // //                 status: "Resolved",
// // //               },
// // //             ],
// // //             topCrimes: [
// // //               { id: 1, type: "Theft", count: 45 },
// // //               { id: 2, type: "Vandalism", count: 30 },
// // //               { id: 3, type: "Assault", count: 25 },
// // //             ],
// // //           };
// // //           setLiveData(data);
// // //           setNotifications([
// // //             "Case #23 updated to 'Under Investigation'",
// // //             "New case reported in your area",
// // //           ]);
// // //           setLoading(false);
// // //         } catch (err) {
// // //           setError("Error fetching live data");
// // //           setLoading(false);
// // //         }
// // //       }, 1500);
// // //     }
// // //   }, [isLoggedIn]);

// // //   useEffect(() => {
// // //     if (isLoggedIn) {
// // //       const interval = setInterval(() => {
// // //         const newNotification = `New case reported near your area at ${new Date().toLocaleTimeString()}`;
// // //         setNotifications((prev) => [newNotification, ...prev.slice(0, 4)]);
// // //       }, 10000);

// // //       return () => clearInterval(interval);
// // //     }
// // //   }, [isLoggedIn]);

// // //   if (!isLoggedIn) {
// // //     return (
// // //       <div className="min-h-screen flex flex-col bg-gray-50">
// // //         <AuthNavbar />
// // //         <main className="flex-grow p-8 flex items-center justify-center">
// // //           <motion.p
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             className="text-xl text-gray-700 bg-white p-8 rounded-xl shadow-lg"
// // //           >
// // //             Please log in to access the Dashboard
// // //           </motion.p>
// // //         </main>
// // //         <Footer />
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
// // //       <Navbar />
// // //       <main className="flex-grow p-8 space-y-10 max-w-7xl mx-auto w-full">
// // //         <motion.header
// // //           initial="hidden"
// // //           animate="visible"
// // //           variants={containerVariants}
// // //           className="space-y-2"
// // //         >
// // //           <h1 className="text-4xl font-bold text-gray-800">Safety Dashboard</h1>
// // //           <p className="text-gray-600 text-lg">
// // //             Real-time community safety overview
// // //           </p>
// // //         </motion.header>

// // //         {loading ? (
// // //           <motion.div
// // //             className="text-xl text-gray-700 bg-white p-6 rounded-xl shadow-md"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //           >
// // //             Loading live data...
// // //           </motion.div>
// // //         ) : error ? (
// // //           <motion.div
// // //             className="text-red-600 text-xl bg-white p-6 rounded-xl shadow-md"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //           >
// // //             {error}
// // //           </motion.div>
// // //         ) : (
// // //           <div className="space-y-10">
// // //             {/* // Update the stats section in Dashboard.jsx */}
// // //             <motion.section
// // //               initial="hidden"
// // //               animate="visible"
// // //               custom={1}
// // //               variants={containerVariants}
// // //               className="grid grid-cols-1 md:grid-cols-4 gap-6"
// // //             >
// // //               <Link to="/cases/total">
// // //                 <motion.div
// // //                   className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
// // //                   whileHover={{ scale: 1.02 }}
// // //                 >
// // //                   <div className="flex items-center justify-between">
// // //                     <div>
// // //                       <h2 className="text-xl font-semibold mb-2">
// // //                         Total Cases
// // //                       </h2>
// // //                       <p className="text-3xl font-bold">
// // //                         {liveData.totalCases}
// // //                       </p>
// // //                     </div>
// // //                     <FiAlertCircle className="w-12 h-12 opacity-80" />
// // //                   </div>
// // //                   <div className="mt-4 h-1 bg-blue-400 rounded-full">
// // //                     <div className="h-full bg-white w-3/4 rounded-full" />
// // //                   </div>
// // //                 </motion.div>
// // //               </Link>

// // //               <Link to="/resolved">
// // //                 <motion.div
// // //                   className="bg-gradient-to-br from-green-600 to-green-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
// // //                   whileHover={{ scale: 1.02 }}
// // //                 >
// // //                   <div className="flex items-center justify-between">
// // //                     <div>
// // //                       <h2 className="text-xl font-semibold mb-2">Resolved</h2>
// // //                       <p className="text-3xl font-bold">{liveData.resolved}</p>
// // //                     </div>
// // //                     <FiCheckCircle className="w-12 h-12 opacity-80" />
// // //                   </div>
// // //                   <div className="mt-4 h-1 bg-green-400 rounded-full">
// // //                     <div className="h-full bg-white w-1/2 rounded-full" />
// // //                   </div>
// // //                 </motion.div>
// // //               </Link>

// // //               <Link to="/approved">
// // //                 <motion.div
// // //                   className="bg-gradient-to-br from-yellow-600 to-yellow-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
// // //                   whileHover={{ scale: 1.02 }}
// // //                 >
// // //                   <div className="flex items-center justify-between">
// // //                     <div>
// // //                       <h2 className="text-xl font-semibold mb-2">Approved</h2>
// // //                       <p className="text-3xl font-bold">{liveData.resolved}</p>
// // //                     </div>
// // //                     <FiCheckCircle className="w-12 h-12 opacity-80" />
// // //                   </div>
// // //                   <div className="mt-4 h-1 bg-yellow-400 rounded-full">
// // //                     <div className="h-full bg-white w-1/2 rounded-full" />
// // //                   </div>
// // //                 </motion.div>
// // //               </Link>

// // //               <Link to="/pending">
// // //                 <motion.div
// // //                   className="bg-gradient-to-br from-red-600 to-red-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
// // //                   whileHover={{ scale: 1.02 }}
// // //                 >
// // //                   <div className="flex items-center justify-between">
// // //                     <div>
// // //                       <h2 className="text-xl font-semibold mb-2">Pending</h2>
// // //                       <p className="text-3xl font-bold">{liveData.pending}</p>
// // //                     </div>
// // //                     <FiClock className="w-12 h-12 opacity-80" />
// // //                   </div>
// // //                   <div className="mt-4 h-1 bg-red-400 rounded-full">
// // //                     <div className="h-full bg-white w-1/3 rounded-full" />
// // //                   </div>
// // //                 </motion.div>
// // //               </Link>
// // //             </motion.section>
// // //             {/* Map Section */}
// // //             <motion.section
// // //               initial="hidden"
// // //               animate="visible"
// // //               custom={2}
// // //               variants={containerVariants}
// // //               className="bg-white p-6 rounded-xl shadow-md"
// // //             >
// // //               <div className="flex items-center gap-3 mb-6">
// // //                 <FiMap className="w-6 h-6 text-blue-600" />
// // //                 <h2 className="text-2xl font-bold text-gray-800">
// // //                   Incident Map
// // //                 </h2>
// // //               </div>
// // //               <div className="h-96 bg-gray-100 rounded-xl flex items-center justify-center">
// // //                 <div className="text-center text-gray-600 max-w-md">
// // //                   <FiMap className="w-16 h-16 mx-auto mb-4" />
// // //                   <p className="mb-4">
// // //                     Map configuration required. Please add your Google Maps API
// // //                     key in CrimeMap.jsx
// // //                   </p>
// // //                   <a
// // //                     href="https://maps.googleapis.com/maps/api/js?key=AIzaSyAJhahxWbFbZAulh7fmS-ANazqzHKOV09k&libraries=places"
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                     className="text-blue-600 hover:underline"
// // //                   >
// // //                     Get API key from Google Cloud Console
// // //                   </a>
// // //                 </div>
// // //               </div>
// // //             </motion.section>
// // //             {/* Live Feed Section */}
// // //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //               {/* Notifications Panel */}
// // //               <motion.section
// // //                 initial="hidden"
// // //                 animate="visible"
// // //                 custom={2}
// // //                 variants={containerVariants}
// // //                 className="lg:col-span-1 bg-white rounded-2xl shadow-xl p-6"
// // //               >
// // //                 <div className="flex items-center gap-3 mb-6">
// // //                   <FiBell className="w-6 h-6 text-blue-600" />
// // //                   <h2 className="text-2xl font-bold text-gray-800">
// // //                     Live Alerts
// // //                   </h2>
// // //                 </div>
// // //                 <div className="space-y-6 max-h-96 overflow-y-auto">
// // //                   <AnimatePresence>
// // //                     {notifications.map((note, index) => (
// // //                       <motion.div
// // //                         key={index}
// // //                         initial={{ opacity: 0, x: -20 }}
// // //                         animate={{ opacity: 1, x: 0 }}
// // //                         exit={{ opacity: 0 }}
// // //                         className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600"
// // //                       >
// // //                         <div className="flex items-start gap-3">
// // //                           <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
// // //                           <p className="text-gray-700">{note}</p>
// // //                         </div>
// // //                       </motion.div>
// // //                     ))}
// // //                   </AnimatePresence>
// // //                 </div>
// // //               </motion.section>

// // //               {/* Recent Activity */}
// // //               <motion.section
// // //                 initial="hidden"
// // //                 animate="visible"
// // //                 custom={3}
// // //                 variants={containerVariants}
// // //                 className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6"
// // //               >
// // //                 <div className="flex items-center gap-3 mb-6">
// // //                   <FiActivity className="w-6 h-6 text-blue-600" />
// // //                   <h2 className="text-2xl font-bold text-gray-800">
// // //                     Recent Activity
// // //                   </h2>
// // //                 </div>
// // //                 <div className="space-y-4">
// // //                   <AnimatePresence>
// // //                     {liveData.recentCases.map((c) => (
// // //                       <motion.div
// // //                         key={c.id}
// // //                         initial={{ opacity: 0, y: 10 }}
// // //                         animate={{ opacity: 1, y: 0 }}
// // //                         exit={{ opacity: 0 }}
// // //                         className="group flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors"
// // //                       >
// // //                         <div className="flex items-center gap-4">
// // //                           <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
// // //                             <FiMapPin className="w-6 h-6 text-blue-600" />
// // //                           </div>
// // //                           <div>
// // //                             <h3 className="font-semibold text-gray-800">
// // //                               {c.title}
// // //                             </h3>
// // //                             <div className="flex items-center gap-2 mt-1">
// // //                               <span className="text-sm text-gray-600">
// // //                                 {c.time}
// // //                               </span>
// // //                               <span className="text-sm px-2 py-1 rounded-full bg-blue-100 text-blue-600">
// // //                                 {c.status}
// // //                               </span>
// // //                             </div>
// // //                           </div>
// // //                         </div>
// // //                         <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
// // //                           Details
// // //                         </button>
// // //                       </motion.div>
// // //                     ))}
// // //                   </AnimatePresence>
// // //                 </div>
// // //               </motion.section>
// // //             </div>
// // //             {/* Crime Analytics */}
// // //             <motion.section
// // //               initial="hidden"
// // //               animate="visible"
// // //               custom={4}
// // //               variants={containerVariants}
// // //               className="bg-white rounded-2xl shadow-xl p-6"
// // //             >
// // //               <div className="flex items-center gap-3 mb-6">
// // //                 <FiBarChart2 className="w-6 h-6 text-blue-600" />
// // //                 <h2 className="text-2xl font-bold text-gray-800">
// // //                   Crime Statistics
// // //                 </h2>
// // //               </div>
// // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //                 {liveData.topCrimes.map((crime) => (
// // //                   <motion.div
// // //                     key={crime.id}
// // //                     initial={{ scale: 0.9, opacity: 0 }}
// // //                     animate={{ scale: 1, opacity: 1 }}
// // //                     className="p-6 bg-gray-50 rounded-xl"
// // //                   >
// // //                     <div className="flex items-center justify-between mb-4">
// // //                       <h3 className="text-lg font-semibold text-gray-800">
// // //                         {crime.type}
// // //                       </h3>
// // //                       <span className="text-2xl font-bold text-blue-600">
// // //                         {crime.count}
// // //                       </span>
// // //                     </div>
// // //                     <div className="w-full bg-gray-200 rounded-full h-2">
// // //                       <div
// // //                         className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full"
// // //                         style={{ width: `${(crime.count / 45) * 100}%` }}
// // //                       />
// // //                     </div>
// // //                   </motion.div>
// // //                 ))}
// // //               </div>
// // //             </motion.section>
// // //           </div>
// // //         )}
// // //       </main>
// // //       <Footer />
// // //     </div>
// // //   );
// // // }


// // // import React, { useState, useEffect, useContext } from "react";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import {
// // //   FiMap,
// // //   FiAlertCircle,
// // //   FiCheckCircle,
// // //   FiActivity,
// // //   FiMapPin,
// // //   FiBell,
// // //   FiClock,
// // //   FiBarChart2,
// // // } from "react-icons/fi";
// // // import AuthNavbar from "../../components/AuthNavbar";
// // // import Footer from "../../components/Footer";
// // // import { AuthContext } from "../../context/AuthContext";
// // // import { Link } from "react-router-dom";
// // // import { supabase } from "../../lib/supabase";

// // // const containerVariants = {
// // //   hidden: { opacity: 0, y: 20 },
// // //   visible: (i = 1) => ({
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: { delay: i * 0.2, type: "spring", stiffness: 80 },
// // //   }),
// // // };

// // // export default function AuthDashboard() {
// // //   const { isLoggedIn, user } = useContext(AuthContext);
// // //   const [dashboardData, setDashboardData] = useState({
// // //     totalCases: 0,
// // //     resolved: 0,
// // //     pending: 0,
// // //     approved: 0,
// // //     recentCases: [],
// // //     topCrimes: [],
// // //   });
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [notifications, setNotifications] = useState([]);

// // //   useEffect(() => {
// // //     if (!isLoggedIn) return;

// // //     const fetchData = async () => {
// // //       try {
// // //         // Fetch all reports count
// // //         const { count: totalCases } = await supabase
// // //           .from('reports')
// // //           .select('*', { count: 'exact' });

// // //         // Fetch resolved reports count
// // //         const { count: resolved } = await supabase
// // //           .from('reports')
// // //           .select('*', { count: 'exact' })
// // //           .eq('status', 'resolved');

// // //         // Fetch pending reports count
// // //         const { count: pending } = await supabase
// // //           .from('reports')
// // //           .select('*', { count: 'exact' })
// // //           .eq('status', 'pending');

// // //         // Fetch approved reports count (assuming 'under investigation' is approved)
// // //         const { count: approved } = await supabase
// // //           .from('reports')
// // //           .select('*', { count: 'exact' })
// // //           .eq('status', 'under investigation');

// // //         // Fetch recent cases (last 5)
// // //         const { data: recentCases } = await supabase
// // //           .from('reports')
// // //           .select('*')
// // //           .order('reported_at', { ascending: false })
// // //           .limit(5);

// // //         // Fetch crime statistics
// // //         const { data: crimeStats } = await supabase
// // //           .from('crime_statistics')
// // //           .select('crime_type, total_reports')
// // //           .order('total_reports', { ascending: false })
// // //           .limit(3);

// // //         // Fetch notifications
// // //         const { data: userNotifications } = await supabase
// // //           .from('notifications')
// // //           .select('*')
// // //           .eq('user_id', user.id)
// // //           .order('created_at', { ascending: false })
// // //           .limit(5);

// // //         setDashboardData({
// // //           totalCases: totalCases || 0,
// // //           resolved: resolved || 0,
// // //           pending: pending || 0,
// // //           approved: approved || 0,
// // //           recentCases: recentCases || [],
// // //           topCrimes: crimeStats || [],
// // //         });

// // //         setNotifications(
// // //           userNotifications?.map(n => n.message) || []
// // //         );
// // //         setLoading(false);
// // //       } catch (err) {
// // //         setError("Error fetching live data");
// // //         setLoading(false);
// // //         console.error(err);
// // //       }
// // //     };

// // //     fetchData();

// // //     // Set up realtime subscription
// // //     const reportsSubscription = supabase
// // //       .channel('reports_changes')
// // //       .on('postgres_changes', {
// // //         event: '*',
// // //         schema: 'public',
// // //         table: 'reports'
// // //       }, payload => {
// // //         fetchData(); // Refresh data when reports change
// // //       })
// // //       .subscribe();

// // //     const notificationsSubscription = supabase
// // //       .channel('notifications_changes')
// // //       .on('postgres_changes', {
// // //         event: 'INSERT',
// // //         schema: 'public',
// // //         table: 'notifications',
// // //         filter: `user_id=eq.${user.id}`
// // //       }, payload => {
// // //         setNotifications(prev => [payload.new.message, ...prev.slice(0, 4)]);
// // //       })
// // //       .subscribe();

// // //     return () => {
// // //       supabase.removeChannel(reportsSubscription);
// // //       supabase.removeChannel(notificationsSubscription);
// // //     };
// // //   }, [isLoggedIn, user?.id]);

// // //   if (!isLoggedIn) {
// // //     return (
// // //       <div className="min-h-screen flex flex-col bg-gray-50">
// // //         <AuthNavbar />
// // //         <main className="flex-grow p-8 flex items-center justify-center">
// // //           <motion.p
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             className="text-xl text-gray-700 bg-white p-8 rounded-xl shadow-lg"
// // //           >
// // //             Please log in to access the Dashboard
// // //           </motion.p>
// // //         </main>
// // //         <Footer />
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
// // //       <AuthNavbar />
// // //       <main className="flex-grow p-8 space-y-10 max-w-7xl mx-auto w-full">
// // //         <motion.header
// // //           initial="hidden"
// // //           animate="visible"
// // //           variants={containerVariants}
// // //           className="space-y-2"
// // //         >
// // //           <h1 className="text-4xl font-bold text-gray-800">Safety Dashboard</h1>
// // //           <p className="text-gray-600 text-lg">
// // //             Real-time community safety overview
// // //           </p>
// // //         </motion.header>

// // //         {loading ? (
// // //           <motion.div
// // //             className="text-xl text-gray-700 bg-white p-6 rounded-xl shadow-md"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //           >
// // //             Loading live data...
// // //           </motion.div>
// // //         ) : error ? (
// // //           <motion.div
// // //             className="text-red-600 text-xl bg-white p-6 rounded-xl shadow-md"
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //           >
// // //             {error}
// // //           </motion.div>
// // //         ) : (
// // //           <div className="space-y-10">
// // //             <motion.section
// // //               initial="hidden"
// // //               animate="visible"
// // //               custom={1}
// // //               variants={containerVariants}
// // //               className="grid grid-cols-1 md:grid-cols-4 gap-6"
// // //             >
// // //               <Link to="/total">
// // //                 <motion.div
// // //                   className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
// // //                   whileHover={{ scale: 1.02 }}
// // //                 >
// // //                   <div className="flex items-center justify-between">
// // //                     <div>
// // //                       <h2 className="text-xl font-semibold mb-2">
// // //                         Total Cases
// // //                       </h2>
// // //                       <p className="text-3xl font-bold">
// // //                         {dashboardData.totalCases}
// // //                       </p>
// // //                     </div>
// // //                     <FiAlertCircle className="w-12 h-12 opacity-80" />
// // //                   </div>
// // //                   <div className="mt-4 h-1 bg-blue-400 rounded-full">
// // //                     <div 
// // //                       className="h-full bg-white rounded-full" 
// // //                       style={{ width: `${Math.min(100, dashboardData.totalCases / 200 * 100)}%` }}
// // //                     />
// // //                   </div>
// // //                 </motion.div>
// // //               </Link>

// // //               <Link to="/resolved">
// // //                 <motion.div
// // //                   className="bg-gradient-to-br from-green-600 to-green-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
// // //                   whileHover={{ scale: 1.02 }}
// // //                 >
// // //                   <div className="flex items-center justify-between">
// // //                     <div>
// // //                       <h2 className="text-xl font-semibold mb-2">Resolved</h2>
// // //                       <p className="text-3xl font-bold">{dashboardData.resolved}</p>
// // //                     </div>
// // //                     <FiCheckCircle className="w-12 h-12 opacity-80" />
// // //                   </div>
// // //                   <div className="mt-4 h-1 bg-green-400 rounded-full">
// // //                     <div 
// // //                       className="h-full bg-white rounded-full" 
// // //                       style={{ width: `${dashboardData.totalCases > 0 ? (dashboardData.resolved / dashboardData.totalCases * 100) : 0}%` }}
// // //                     />
// // //                   </div>
// // //                 </motion.div>
// // //               </Link>

// // //               <Link to="/approved">
// // //                 <motion.div
// // //                   className="bg-gradient-to-br from-yellow-600 to-yellow-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
// // //                   whileHover={{ scale: 1.02 }}
// // //                 >
// // //                   <div className="flex items-center justify-between">
// // //                     <div>
// // //                       <h2 className="text-xl font-semibold mb-2">Approved</h2>
// // //                       <p className="text-3xl font-bold">{dashboardData.approved}</p>
// // //                     </div>
// // //                     <FiCheckCircle className="w-12 h-12 opacity-80" />
// // //                   </div>
// // //                   <div className="mt-4 h-1 bg-yellow-400 rounded-full">
// // //                     <div 
// // //                       className="h-full bg-white rounded-full" 
// // //                       style={{ width: `${dashboardData.totalCases > 0 ? (dashboardData.approved / dashboardData.totalCases * 100) : 0}%` }}
// // //                     />
// // //                   </div>
// // //                 </motion.div>
// // //               </Link>

// // //               <Link to="/pending">
// // //                 <motion.div
// // //                   className="bg-gradient-to-br from-red-600 to-red-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
// // //                   whileHover={{ scale: 1.02 }}
// // //                 >
// // //                   <div className="flex items-center justify-between">
// // //                     <div>
// // //                       <h2 className="text-xl font-semibold mb-2">Pending</h2>
// // //                       <p className="text-3xl font-bold">{dashboardData.pending}</p>
// // //                     </div>
// // //                     <FiClock className="w-12 h-12 opacity-80" />
// // //                   </div>
// // //                   <div className="mt-4 h-1 bg-red-400 rounded-full">
// // //                     <div 
// // //                       className="h-full bg-white rounded-full" 
// // //                       style={{ width: `${dashboardData.totalCases > 0 ? (dashboardData.pending / dashboardData.totalCases * 100) : 0}%` }}
// // //                     />
// // //                   </div>
// // //                 </motion.div>
// // //               </Link>
// // //             </motion.section>

// // //             {/* Map Section - Remains the same as it requires Google Maps API */}
// // //             <motion.section
// // //   initial="hidden"
// // //   animate="visible"
// // //   custom={2}
// // //   variants={containerVariants}
// // //   className="bg-white p-6 rounded-xl shadow-md"
// // // >
// // //   <div className="flex items-center gap-3 mb-6">
// // //     <FiMap className="w-6 h-6 text-blue-600" />
// // //     <h2 className="text-2xl font-bold text-gray-800">Incident Map</h2>
// // //   </div>
// // //   <div className="h-96 bg-gray-100 rounded-xl overflow-hidden">
// // //     <LoadScript
// // //       googleMapsApiKey="AIzaSyAJhahxWbFbZAulh7fmS-ANazqzHKOV09k" // Replace with your actual API key
// // //       libraries={["visualization"]}
// // //     >
// // //       <GoogleMap
// // //         mapContainerStyle={{ width: "100%", height: "100%" }}
// // //         center={{ lat: 12.9716, lng: 77.5946 }} // Default to Bangalore coordinates
// // //         zoom={12}
// // //         options={{
// // //           streetViewControl: false,
// // //           mapTypeControl: false,
// // //           fullscreenControl: false,
// // //         }}
// // //       >
// // //         {liveData && liveData.recentIncidents
// // //           .filter(incident => {
// // //             // Apply the same filters as the recent incidents list
// // //             if (filters.types.length > 0 && !filters.types.includes(incident.category)) {
// // //               return false;
// // //             }
// // //             if (filters.severity.length > 0 && !filters.severity.includes(incident.severity)) {
// // //               return false;
// // //             }
// // //             if (filters.verifiedOnly && !incident.verified) {
// // //               return false;
// // //             }
// // //             return true;
// // //           })
// // //           .map((incident) => {
// // //             // Get coordinates from incident data (assuming location is stored as {lat, lng} in your database)
// // //             // If your data doesn't have coordinates, you'll need to geocode the addresses first
// // //             const position = incident.location?.coordinates || { 
// // //               lat: 12.9716 + (Math.random() * 0.1 - 0.05), 
// // //               lng: 77.5946 + (Math.random() * 0.1 - 0.05) 
// // //             };
            
// // //             // Get icon and color based on incident type
// // //             const incidentType = incidentTypes.find(type => type.name === incident.category);
// // //             const iconColor = incidentType ? incidentType.color : 'gray';
            
// // //             return (
// // //               <Marker
// // //                 key={incident.id}
// // //                 position={position}
// // //                 icon={{
// // //                   path: google.maps.SymbolPath.CIRCLE,
// // //                   fillColor: iconColor,
// // //                   fillOpacity: 1,
// // //                   strokeWeight: 0,
// // //                   scale: 8,
// // //                 }}
// // //                 title={`${incident.type} (${incident.category})`}
// // //                 options={{
// // //                   // Additional marker options if needed
// // //                 }}
// // //               />
// // //             );
// // //           })}
// // //       </GoogleMap>
// // //     </LoadScript>
// // //   </div>
// // // </motion.section>

// // //             {/* Live Feed Section */}
// // //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// // //               {/* Notifications Panel */}
// // //               <motion.section
// // //                 initial="hidden"
// // //                 animate="visible"
// // //                 custom={2}
// // //                 variants={containerVariants}
// // //                 className="lg:col-span-1 bg-white rounded-2xl shadow-xl p-6"
// // //               >
// // //                 <div className="flex items-center gap-3 mb-6">
// // //                   <FiBell className="w-6 h-6 text-blue-600" />
// // //                   <h2 className="text-2xl font-bold text-gray-800">
// // //                     Live Alerts
// // //                   </h2>
// // //                 </div>
// // //                 <div className="space-y-6 max-h-96 overflow-y-auto">
// // //                   <AnimatePresence>
// // //                     {notifications.map((note, index) => (
// // //                       <motion.div
// // //                         key={index}
// // //                         initial={{ opacity: 0, x: -20 }}
// // //                         animate={{ opacity: 1, x: 0 }}
// // //                         exit={{ opacity: 0 }}
// // //                         className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600"
// // //                       >
// // //                         <div className="flex items-start gap-3">
// // //                           <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
// // //                           <p className="text-gray-700">{note}</p>
// // //                         </div>
// // //                       </motion.div>
// // //                     ))}
// // //                   </AnimatePresence>
// // //                 </div>
// // //               </motion.section>

// // //               {/* Recent Activity */}
// // //               <motion.section
// // //                 initial="hidden"
// // //                 animate="visible"
// // //                 custom={3}
// // //                 variants={containerVariants}
// // //                 className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6"
// // //               >
// // //                 <div className="flex items-center gap-3 mb-6">
// // //                   <FiActivity className="w-6 h-6 text-blue-600" />
// // //                   <h2 className="text-2xl font-bold text-gray-800">
// // //                     Recent Activity
// // //                   </h2>
// // //                 </div>
// // //                 <div className="space-y-4">
// // //                   <AnimatePresence>
// // //                     {dashboardData.recentCases.map((c) => (
// // //                       <motion.div
// // //                         key={c.id}
// // //                         initial={{ opacity: 0, y: 10 }}
// // //                         animate={{ opacity: 1, y: 0 }}
// // //                         exit={{ opacity: 0 }}
// // //                         className="group flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors"
// // //                       >
// // //                         <div className="flex items-center gap-4">
// // //                           <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
// // //                             <FiMapPin className="w-6 h-6 text-blue-600" />
// // //                           </div>
// // //                           <div>
// // //                             <h3 className="font-semibold text-gray-800">
// // //                               {c.title}
// // //                             </h3>
// // //                             <div className="flex items-center gap-2 mt-1">
// // //                               <span className="text-sm text-gray-600">
// // //                                 {new Date(c.reported_at).toLocaleString()}
// // //                               </span>
// // //                               <span className={`text-sm px-2 py-1 rounded-full ${
// // //                                 c.status === 'resolved' 
// // //                                   ? 'bg-green-100 text-green-700' 
// // //                                   : c.status === 'pending' 
// // //                                   ? 'bg-yellow-100 text-yellow-700' 
// // //                                   : 'bg-blue-100 text-blue-600'
// // //                               }`}>
// // //                                 {c.status}
// // //                               </span>
// // //                             </div>
// // //                           </div>
// // //                         </div>
// // //                         <Link 
// // //                           to={`/case/${c.id}`}
// // //                           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
// // //                         >
// // //                           Details
// // //                         </Link>
// // //                       </motion.div>
// // //                     ))}
// // //                   </AnimatePresence>
// // //                 </div>
// // //               </motion.section>
// // //             </div>

// // //             {/* Crime Analytics */}
// // //             <motion.section
// // //               initial="hidden"
// // //               animate="visible"
// // //               custom={4}
// // //               variants={containerVariants}
// // //               className="bg-white rounded-2xl shadow-xl p-6"
// // //             >
// // //               <div className="flex items-center gap-3 mb-6">
// // //                 <FiBarChart2 className="w-6 h-6 text-blue-600" />
// // //                 <h2 className="text-2xl font-bold text-gray-800">
// // //                   Crime Statistics
// // //                 </h2>
// // //               </div>
// // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //                 {dashboardData.topCrimes.map((crime) => (
// // //                   <motion.div
// // //                     key={crime.crime_type}
// // //                     initial={{ scale: 0.9, opacity: 0 }}
// // //                     animate={{ scale: 1, opacity: 1 }}
// // //                     className="p-6 bg-gray-50 rounded-xl"
// // //                   >
// // //                     <div className="flex items-center justify-between mb-4">
// // //                       <h3 className="text-lg font-semibold text-gray-800">
// // //                         {crime.crime_type}
// // //                       </h3>
// // //                       <span className="text-2xl font-bold text-blue-600">
// // //                         {crime.total_reports}
// // //                       </span>
// // //                     </div>
// // //                     <div className="w-full bg-gray-200 rounded-full h-2">
// // //                       <div
// // //                         className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full"
// // //                         style={{ 
// // //                           width: `${(crime.total_reports / Math.max(1, dashboardData.topCrimes[0]?.total_reports || 1)) * 100}%` 
// // //                         }}
// // //                       />
// // //                     </div>
// // //                   </motion.div>
// // //                 ))}
// // //               </div>
// // //             </motion.section>
// // //           </div>
// // //         )}
// // //       </main>
// // //       <Footer />
// // //     </div>
// // //   );
// // // }
// // import React, { useState, useEffect, useContext } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   FiMap,
// //   FiAlertCircle,
// //   FiCheckCircle,
// //   FiActivity,
// //   FiMapPin,
// //   FiBell,
// //   FiClock,
// //   FiBarChart2,
// // } from "react-icons/fi";
// // import AuthNavbar from "../../components/AuthNavbar";
// // import Footer from "../../components/Footer";
// // import { AuthContext } from "../../context/AuthContext";
// // import { Link } from "react-router-dom";
// // import { supabase } from "../../lib/supabase";
// // import AuthCrimeCharts from "./AuthCrimeCharts";

// // const containerVariants = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: (i = 1) => ({
// //     opacity: 1,
// //     y: 0,
// //     transition: { delay: i * 0.2, type: "spring", stiffness: 80 },
// //   }),
// // };

// // export default function AuthDashboard() {
// //   const { isLoggedIn, user } = useContext(AuthContext);
// //   const [dashboardData, setDashboardData] = useState({
// //     totalCases: 0,
// //     resolved: 0,
// //     pending: 0,
// //     approved: 0,
// //     recentCases: [],
// //     topCrimes: [],
// //   });
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [notifications, setNotifications] = useState([]);

// //   useEffect(() => {
// //     if (!isLoggedIn) return;

// //     const fetchData = async () => {
// //       try {
// //         // Fetch all reports count
// //         const { count: totalCases } = await supabase
// //           .from("reports")
// //           .select("*", { count: "exact" });

// //         // Fetch resolved reports count
// //         const { count: resolved } = await supabase
// //           .from("reports")
// //           .select("*", { count: "exact" })
// //           .eq("status", "resolved");

// //         // Fetch pending reports count
// //         const { count: pending } = await supabase
// //           .from("reports")
// //           .select("*", { count: "exact" })
// //           .eq("status", "pending");

// //         // Fetch approved reports count (assuming 'under investigation' is approved)
// //         const { count: approved } = await supabase
// //           .from("reports")
// //           .select("*", { count: "exact" })
// //           .eq("status", "under investigation");

// //         // Fetch recent cases (last 5)
// //         const { data: recentCases } = await supabase
// //           .from("reports")
// //           .select("*")
// //           .order("reported_at", { ascending: false })
// //           .limit(5);

// //         // Fetch crime statistics
// //         const { data: crimeStats } = await supabase
// //           .from("crime_statistics")
// //           .select("crime_type, total_reports")
// //           .order("total_reports", { ascending: false })
// //           .limit(3);

// //         // Fetch notifications
// //         const { data: userNotifications } = await supabase
// //           .from("notifications")
// //           .select("*")
// //           .eq("user_id", user.id)
// //           .order("created_at", { ascending: false })
// //           .limit(5);

// //         setDashboardData({
// //           totalCases: totalCases || 0,
// //           resolved: resolved || 0,
// //           pending: pending || 0,
// //           approved: approved || 0,
// //           recentCases: recentCases || [],
// //           topCrimes: crimeStats || [],
// //         });

// //         setNotifications(userNotifications?.map((n) => n.message) || []);
// //         setLoading(false);
// //       } catch (err) {
// //         setError("Error fetching live data");
// //         setLoading(false);
// //         console.error(err);
// //       }
// //     };

// //     fetchData();

// //     // Set up realtime subscription
// //     const reportsSubscription = supabase
// //       .channel("reports_changes")
// //       .on(
// //         "postgres_changes",
// //         {
// //           event: "*",
// //           schema: "public",
// //           table: "reports",
// //         },
// //         (payload) => {
// //           fetchData(); // Refresh data when reports change
// //         }
// //       )
// //       .subscribe();

// //     const notificationsSubscription = supabase
// //       .channel("notifications_changes")
// //       .on(
// //         "postgres_changes",
// //         {
// //           event: "INSERT",
// //           schema: "public",
// //           table: "notifications",
// //           filter: `user_id=eq.${user.id}`,
// //         },
// //         (payload) => {
// //           setNotifications((prev) => [
// //             payload.new.message,
// //             ...prev.slice(0, 4),
// //           ]);
// //         }
// //       )
// //       .subscribe();

// //     return () => {
// //       supabase.removeChannel(reportsSubscription);
// //       supabase.removeChannel(notificationsSubscription);
// //     };
// //   }, [isLoggedIn, user?.id]);

// //   if (!isLoggedIn) {
// //     return (
// //       <div className="min-h-screen flex flex-col bg-gray-50">
// //         <AuthNavbar />
// //         <main className="flex-grow p-8 flex items-center justify-center">
// //           <motion.p
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             className="text-xl text-gray-700 bg-white p-8 rounded-xl shadow-lg"
// //           >
// //             Please log in to access the Dashboard
// //           </motion.p>
// //         </main>
// //         <Footer />
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
// //       <AuthNavbar />
// //       <main className="flex-grow p-8 space-y-10 max-w-7xl mx-auto w-full">
// //         <motion.header
// //           initial="hidden"
// //           animate="visible"
// //           variants={containerVariants}
// //           className="space-y-2"
// //         >
// //           <h1 className="text-4xl font-bold text-gray-800">Safety Dashboard</h1>
// //           <p className="text-gray-600 text-lg">
// //             Real-time community safety overview
// //           </p>
// //         </motion.header>

// //         {loading ? (
// //           <motion.div
// //             className="text-xl text-gray-700 bg-white p-6 rounded-xl shadow-md"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //           >
// //             Loading live data...
// //           </motion.div>
// //         ) : error ? (
// //           <motion.div
// //             className="text-red-600 text-xl bg-white p-6 rounded-xl shadow-md"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //           >
// //             {error}
// //           </motion.div>
// //         ) : (
// //           <div className="space-y-10">
// //             <motion.section
// //               initial="hidden"
// //               animate="visible"
// //               custom={1}
// //               variants={containerVariants}
// //               className="grid grid-cols-1 md:grid-cols-4 gap-6"
// //             >
// //               <Link to="/total">
// //                 <motion.div
// //                   className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
// //                   whileHover={{ scale: 1.02 }}
// //                 >
// //                   <div className="flex items-center justify-between">
// //                     <div>
// //                       <h2 className="text-xl font-semibold mb-2">
// //                         Total Cases
// //                       </h2>
// //                       <p className="text-3xl font-bold">
// //                         {dashboardData.totalCases}
// //                       </p>
// //                     </div>
// //                     <FiAlertCircle className="w-12 h-12 opacity-80" />
// //                   </div>
// //                   <div className="mt-4 h-1 bg-blue-400 rounded-full">
// //                     <div
// //                       className="h-full bg-white rounded-full"
// //                       style={{
// //                         width: `${Math.min(
// //                           100,
// //                           (dashboardData.totalCases / 200) * 100
// //                         )}%`,
// //                       }}
// //                     />
// //                   </div>
// //                 </motion.div>
// //               </Link>

// //               <Link to="/resolved">
// //                 <motion.div
// //                   className="bg-gradient-to-br from-green-600 to-green-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
// //                   whileHover={{ scale: 1.02 }}
// //                 >
// //                   <div className="flex items-center justify-between">
// //                     <div>
// //                       <h2 className="text-xl font-semibold mb-2">Resolved</h2>
// //                       <p className="text-3xl font-bold">
// //                         {dashboardData.resolved}
// //                       </p>
// //                     </div>
// //                     <FiCheckCircle className="w-12 h-12 opacity-80" />
// //                   </div>
// //                   <div className="mt-4 h-1 bg-green-400 rounded-full">
// //                     <div
// //                       className="h-full bg-white rounded-full"
// //                       style={{
// //                         width: `${
// //                           dashboardData.totalCases > 0
// //                             ? (dashboardData.resolved /
// //                                 dashboardData.totalCases) *
// //                               100
// //                             : 0
// //                         }%`,
// //                       }}
// //                     />
// //                   </div>
// //                 </motion.div>
// //               </Link>

// //               <Link to="/approved">
// //                 <motion.div
// //                   className="bg-gradient-to-br from-yellow-600 to-yellow-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
// //                   whileHover={{ scale: 1.02 }}
// //                 >
// //                   <div className="flex items-center justify-between">
// //                     <div>
// //                       <h2 className="text-xl font-semibold mb-2">Approved</h2>
// //                       <p className="text-3xl font-bold">
// //                         {dashboardData.approved}
// //                       </p>
// //                     </div>
// //                     <FiCheckCircle className="w-12 h-12 opacity-80" />
// //                   </div>
// //                   <div className="mt-4 h-1 bg-yellow-400 rounded-full">
// //                     <div
// //                       className="h-full bg-white rounded-full"
// //                       style={{
// //                         width: `${
// //                           dashboardData.totalCases > 0
// //                             ? (dashboardData.approved /
// //                                 dashboardData.totalCases) *
// //                               100
// //                             : 0
// //                         }%`,
// //                       }}
// //                     />
// //                   </div>
// //                 </motion.div>
// //               </Link>

// //               <Link to="/pending">
// //                 <motion.div
// //                   className="bg-gradient-to-br from-red-600 to-red-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
// //                   whileHover={{ scale: 1.02 }}
// //                 >
// //                   <div className="flex items-center justify-between">
// //                     <div>
// //                       <h2 className="text-xl font-semibold mb-2">Pending</h2>
// //                       <p className="text-3xl font-bold">
// //                         {dashboardData.pending}
// //                       </p>
// //                     </div>
// //                     <FiClock className="w-12 h-12 opacity-80" />
// //                   </div>
// //                   <div className="mt-4 h-1 bg-red-400 rounded-full">
// //                     <div
// //                       className="h-full bg-white rounded-full"
// //                       style={{
// //                         width: `${
// //                           dashboardData.totalCases > 0
// //                             ? (dashboardData.pending /
// //                                 dashboardData.totalCases) *
// //                               100
// //                             : 0
// //                         }%`,
// //                       }}
// //                     />
// //                   </div>
// //                 </motion.div>
// //               </Link>
// //             </motion.section>

// //             {/* Map Section - Remains the same as it requires Google Maps API */}
// //             <motion.section
// //               initial="hidden"
// //               animate="visible"
// //               custom={2}
// //               variants={containerVariants}
// //               className="bg-white p-6 rounded-xl shadow-md"
// //             >
// //               <div className="flex items-center gap-3 mb-6">
// //                 <FiMap className="w-6 h-6 text-blue-600" />
// //                 <h2 className="text-2xl font-bold text-gray-800">
// //                   Incident Map
// //                 </h2>
// //               </div>
// //               <div className="h-96 bg-gray-100 rounded-xl flex items-center justify-center">
// //                 <div className="text-center text-gray-600 max-w-md">
// //                   <FiMap className="w-16 h-16 mx-auto mb-4" />
// //                   <p className="mb-4">
// //                     Map configuration required. Please add your Google Maps API
// //                     key in CrimeMap.jsx
// //                   </p>
// //                   <a
// //                     href="https://developers.google.com/maps/documentation/javascript/get-api-key"
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-blue-600 hover:underline"
// //                   >
// //                     Get API key from Google Cloud Console
// //                   </a>
// //                 </div>
// //               </div>
// //             </motion.section>

// //             {/* Live Feed Section */}
// //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
// //               {/* Notifications Panel */}
// //               <motion.section
// //                 initial="hidden"
// //                 animate="visible"
// //                 custom={2}
// //                 variants={containerVariants}
// //                 className="lg:col-span-1 bg-white rounded-2xl shadow-xl p-6"
// //               >
// //                 <div className="flex items-center gap-3 mb-6">
// //                   <FiBell className="w-6 h-6 text-blue-600" />
// //                   <h2 className="text-2xl font-bold text-gray-800">
// //                     Live Alerts
// //                   </h2>
// //                 </div>
// //                 <div className="space-y-6 max-h-96 overflow-y-auto">
// //                   <AnimatePresence>
// //                     {notifications.map((note, index) => (
// //                       <motion.div
// //                         key={index}
// //                         initial={{ opacity: 0, x: -20 }}
// //                         animate={{ opacity: 1, x: 0 }}
// //                         exit={{ opacity: 0 }}
// //                         className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600"
// //                       >
// //                         <div className="flex items-start gap-3">
// //                           <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
// //                           <p className="text-gray-700">{note}</p>
// //                         </div>
// //                       </motion.div>
// //                     ))}
// //                   </AnimatePresence>
// //                 </div>
// //               </motion.section>

// //               {/* Recent Activity */}
// //               <motion.section
// //                 initial="hidden"
// //                 animate="visible"
// //                 custom={3}
// //                 variants={containerVariants}
// //                 className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6"
// //               >
// //                 <div className="flex items-center gap-3 mb-6">
// //                   <FiActivity className="w-6 h-6 text-blue-600" />
// //                   <h2 className="text-2xl font-bold text-gray-800">
// //                     Recent Activity
// //                   </h2>
// //                 </div>
// //                 <div className="space-y-4">
// //                   <AnimatePresence>
// //                     {dashboardData.recentCases.map((c) => (
// //                       <motion.div
// //                         key={c.id}
// //                         initial={{ opacity: 0, y: 10 }}
// //                         animate={{ opacity: 1, y: 0 }}
// //                         exit={{ opacity: 0 }}
// //                         className="group flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors"
// //                       >
// //                         <div className="flex items-center gap-4">
// //                           <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
// //                             <FiMapPin className="w-6 h-6 text-blue-600" />
// //                           </div>
// //                           <div>
// //                             <h3 className="font-semibold text-gray-800">
// //                               {c.title}
// //                             </h3>
// //                             <div className="flex items-center gap-2 mt-1">
// //                               <span className="text-sm text-gray-600">
// //                                 {new Date(c.reported_at).toLocaleString()}
// //                               </span>
// //                               <span
// //                                 className={`text-sm px-2 py-1 rounded-full ${
// //                                   c.status === "resolved"
// //                                     ? "bg-green-100 text-green-700"
// //                                     : c.status === "pending"
// //                                     ? "bg-yellow-100 text-yellow-700"
// //                                     : "bg-blue-100 text-blue-600"
// //                                 }`}
// //                               >
// //                                 {c.status}
// //                               </span>
// //                             </div>
// //                           </div>
// //                         </div>
// //                         <Link
// //                           to={`/case/${c.id}`}
// //                           className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
// //                         >
// //                           Details
// //                         </Link>
// //                       </motion.div>
// //                     ))}
// //                   </AnimatePresence>
// //                 </div>
// //               </motion.section>
// //             </div>
// //             <AuthCrimeCharts />
// //             {/* Crime Analytics */}
// //             <motion.section
// //               initial="hidden"
// //               animate="visible"
// //               custom={4}
// //               variants={containerVariants}
// //               className="bg-white rounded-2xl shadow-xl p-6"
// //             >
// //               <div className="flex items-center gap-3 mb-6">
// //                 <FiBarChart2 className="w-6 h-6 text-blue-600" />
// //                 <h2 className="text-2xl font-bold text-gray-800">
// //                   Crime Statistics
// //                 </h2>
// //               </div>
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                 {dashboardData.topCrimes.map((crime) => (
// //                   <motion.div
// //                     key={crime.crime_type}
// //                     initial={{ scale: 0.9, opacity: 0 }}
// //                     animate={{ scale: 1, opacity: 1 }}
// //                     className="p-6 bg-gray-50 rounded-xl"
// //                   >
// //                     <div className="flex items-center justify-between mb-4">
// //                       <h3 className="text-lg font-semibold text-gray-800">
// //                         {crime.crime_type}
// //                       </h3>
// //                       <span className="text-2xl font-bold text-blue-600">
// //                         {crime.total_reports}
// //                       </span>
// //                     </div>
// //                     <div className="w-full bg-gray-200 rounded-full h-2">
// //                       <div
// //                         className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full"
// //                         style={{
// //                           width: `${
// //                             (crime.total_reports /
// //                               Math.max(
// //                                 1,
// //                                 dashboardData.topCrimes[0]?.total_reports || 1
// //                               )) *
// //                             100
// //                           }%`,
// //                         }}
// //                       />
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </motion.section>
// //           </div>
// //         )}
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }
// import React, { useState, useEffect, useContext } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FiMap,
//   FiAlertCircle,
//   FiCheckCircle,
//   FiActivity,
//   FiMapPin,
//   FiBell,
//   FiClock,
//   FiBarChart2,
// } from "react-icons/fi";
// import AuthNavbar from "../../components/AuthNavbar";
// import IncidentMap from "../../components/IncidentMap";
// import Footer from "../../components/Footer";
// import { AuthContext } from "../../context/AuthContext";
// import { Link } from "react-router-dom";
// import { supabase } from "../../lib/supabase";
// import AuthCrimeCharts from "./AuthCrimeCharts";

// const containerVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, type: "spring", stiffness: 80 },
//   }),
// };

// export default function AuthDashboard() {
//   const { isLoggedIn, user } = useContext(AuthContext);
//   const [dashboardData, setDashboardData] = useState({
//     totalCases: 0,
//     resolved: 0,
//     pending: 0,
//     approved: 0,
//     recentCases: [],
//     topCrimes: [],
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     if (!isLoggedIn) return;

//     const fetchData = async () => {
//       try {
//         // Fetch all reports count
//         const { count: totalCases } = await supabase
//           .from("reports")
//           .select("*", { count: "exact" });

//         // Fetch resolved reports count
//         const { count: resolved } = await supabase
//           .from("reports")
//           .select("*", { count: "exact" })
//           .eq("status", "resolved");

//         // Fetch pending reports count
//         const { count: pending } = await supabase
//           .from("reports")
//           .select("*", { count: "exact" })
//           .eq("status", "pending");

//         // Fetch approved reports count (assuming 'under investigation' is approved)
//         const { count: approved } = await supabase
//           .from("reports")
//           .select("*", { count: "exact" })
//           .eq("status", "under investigation");

//         // Fetch recent cases (last 5)
//         const { data: recentCases } = await supabase
//           .from("reports")
//           .select("*")
//           .order("reported_at", { ascending: false })
//           .limit(5);

//         // Fetch crime statistics
//         const { data: crimeStats } = await supabase
//           .from("crime_statistics")
//           .select("crime_type, total_reports")
//           .order("total_reports", { ascending: false })
//           .limit(3);

//         // Fetch notifications
//         const { data: userNotifications } = await supabase
//           .from("notifications")
//           .select("*")
//           .eq("user_id", user.id)
//           .order("created_at", { ascending: false })
//           .limit(5);

//         setDashboardData({
//           totalCases: totalCases || 0,
//           resolved: resolved || 0,
//           pending: pending || 0,
//           approved: approved || 0,
//           recentCases: recentCases || [],
//           topCrimes: crimeStats || [],
//         });

//         setNotifications(userNotifications?.map((n) => n.message) || []);
//         setLoading(false);
//       } catch (err) {
//         setError("Error fetching live data");
//         setLoading(false);
//         console.error(err);
//       }
//     };

//     fetchData();

//     // Set up realtime subscription
//     const reportsSubscription = supabase
//       .channel("reports_changes")
//       .on(
//         "postgres_changes",
//         {
//           event: "*",
//           schema: "public",
//           table: "reports",
//         },
//         (payload) => {
//           fetchData(); // Refresh data when reports change
//         }
//       )
//       .subscribe();

//     const notificationsSubscription = supabase
//       .channel("notifications_changes")
//       .on(
//         "postgres_changes",
//         {
//           event: "INSERT",
//           schema: "public",
//           table: "notifications",
//           filter: `user_id=eq.${user.id}`,
//         },
//         (payload) => {
//           setNotifications((prev) => [
//             payload.new.message,
//             ...prev.slice(0, 4),
//           ]);
//         }
//       )
//       .subscribe();

//     return () => {
//       supabase.removeChannel(reportsSubscription);
//       supabase.removeChannel(notificationsSubscription);
//     };
//   }, [isLoggedIn, user?.id]);

//   if (!isLoggedIn) {
//     return (
//       <div className="min-h-screen flex flex-col bg-gray-50">
//         <AuthNavbar />
//         <main className="flex-grow p-8 flex items-center justify-center">
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-xl text-gray-700 bg-white p-8 rounded-xl shadow-lg"
//           >
//             Please log in to access the Dashboard
//           </motion.p>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
//       <AuthNavbar />
//       <main className="flex-grow p-8 space-y-10 max-w-7xl mx-auto w-full">
//         <motion.header
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="space-y-2"
//         >
//           <h1 className="text-4xl font-bold text-gray-800">Safety Dashboard</h1>
//           <p className="text-gray-600 text-lg">
//             Real-time community safety overview
//           </p>
//         </motion.header>

//         {loading ? (
//           <motion.div
//             className="text-xl text-gray-700 bg-white p-6 rounded-xl shadow-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             Loading live data...
//           </motion.div>
//         ) : error ? (
//           <motion.div
//             className="text-red-600 text-xl bg-white p-6 rounded-xl shadow-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             {error}
//           </motion.div>
//         ) : (
//           <div className="space-y-10">
//             <motion.section
//               initial="hidden"
//               animate="visible"
//               custom={1}
//               variants={containerVariants}
//               className="grid grid-cols-1 md:grid-cols-4 gap-6"
//             >
//               <Link to="/total">
//                 <motion.div
//                   className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h2 className="text-xl font-semibold mb-2">
//                         Total Cases
//                       </h2>
//                       <p className="text-3xl font-bold">
//                         {dashboardData.totalCases}
//                       </p>
//                     </div>
//                     <FiAlertCircle className="w-12 h-12 opacity-80" />
//                   </div>
//                   <div className="mt-4 h-1 bg-blue-400 rounded-full">
//                     <div
//                       className="h-full bg-white rounded-full"
//                       style={{
//                         width: `${Math.min(
//                           100,
//                           (dashboardData.totalCases / 200) * 100
//                         )}%`,
//                       }}
//                     />
//                   </div>
//                 </motion.div>
//               </Link>

//               <Link to="/resolved">
//                 <motion.div
//                   className="bg-gradient-to-br from-green-600 to-green-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h2 className="text-xl font-semibold mb-2">Resolved</h2>
//                       <p className="text-3xl font-bold">
//                         {dashboardData.resolved}
//                       </p>
//                     </div>
//                     <FiCheckCircle className="w-12 h-12 opacity-80" />
//                   </div>
//                   <div className="mt-4 h-1 bg-green-400 rounded-full">
//                     <div
//                       className="h-full bg-white rounded-full"
//                       style={{
//                         width: `${
//                           dashboardData.totalCases > 0
//                             ? (dashboardData.resolved /
//                                 dashboardData.totalCases) *
//                               100
//                             : 0
//                         }%`,
//                       }}
//                     />
//                   </div>
//                 </motion.div>
//               </Link>

//               <Link to="/approved">
//                 <motion.div
//                   className="bg-gradient-to-br from-yellow-600 to-yellow-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h2 className="text-xl font-semibold mb-2">Approved</h2>
//                       <p className="text-3xl font-bold">
//                         {dashboardData.approved}
//                       </p>
//                     </div>
//                     <FiCheckCircle className="w-12 h-12 opacity-80" />
//                   </div>
//                   <div className="mt-4 h-1 bg-yellow-400 rounded-full">
//                     <div
//                       className="h-full bg-white rounded-full"
//                       style={{
//                         width: `${
//                           dashboardData.totalCases > 0
//                             ? (dashboardData.approved /
//                                 dashboardData.totalCases) *
//                               100
//                             : 0
//                         }%`,
//                       }}
//                     />
//                   </div>
//                 </motion.div>
//               </Link>

//               <Link to="/pending">
//                 <motion.div
//                   className="bg-gradient-to-br from-red-600 to-red-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h2 className="text-xl font-semibold mb-2">Pending</h2>
//                       <p className="text-3xl font-bold">
//                         {dashboardData.pending}
//                       </p>
//                     </div>
//                     <FiClock className="w-12 h-12 opacity-80" />
//                   </div>
//                   <div className="mt-4 h-1 bg-red-400 rounded-full">
//                     <div
//                       className="h-full bg-white rounded-full"
//                       style={{
//                         width: `${
//                           dashboardData.totalCases > 0
//                             ? (dashboardData.pending /
//                                 dashboardData.totalCases) *
//                               100
//                             : 0
//                         }%`,
//                       }}
//                     />
//                   </div>
//                 </motion.div>
//               </Link>
//             </motion.section>

//             <motion.section
//               initial="hidden"
//               animate="visible"
//               custom={2}
//               variants={containerVariants}
//               className="bg-white p-6 rounded-xl shadow-md"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <FiMap className="w-6 h-6 text-blue-600" />
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   Incident Map
//                 </h2>
//               </div>
//               <IncidentMap />
//             </motion.section>
//             {/* Live Feed Section */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               {/* Notifications Panel */}
//               <motion.section
//                 initial="hidden"
//                 animate="visible"
//                 custom={2}
//                 variants={containerVariants}
//                 className="lg:col-span-1 bg-white rounded-2xl shadow-xl p-6"
//               >
//                 <div className="flex items-center gap-3 mb-6">
//                   <FiBell className="w-6 h-6 text-blue-600" />
//                   <h2 className="text-2xl font-bold text-gray-800">
//                     Live Alerts
//                   </h2>
//                 </div>
//                 <div className="space-y-6 max-h-96 overflow-y-auto">
//                   <AnimatePresence>
//                     {notifications.map((note, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0 }}
//                         className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600"
//                       >
//                         <div className="flex items-start gap-3">
//                           <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
//                           <p className="text-gray-700">{note}</p>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </AnimatePresence>
//                 </div>
//               </motion.section>

//               {/* Recent Activity */}
//               <motion.section
//                 initial="hidden"
//                 animate="visible"
//                 custom={3}
//                 variants={containerVariants}
//                 className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6"
//               >
//                 <div className="flex items-center gap-3 mb-6">
//                   <FiActivity className="w-6 h-6 text-blue-600" />
//                   <h2 className="text-2xl font-bold text-gray-800">
//                     Recent Activity
//                   </h2>
//                 </div>
//                 <div className="space-y-4">
//                   <AnimatePresence>
//                     {dashboardData.recentCases.map((c) => (
//                       <motion.div
//                         key={c.id}
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0 }}
//                         className="group flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors"
//                       >
//                         <div className="flex items-center gap-4">
//                           <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                             <FiMapPin className="w-6 h-6 text-blue-600" />
//                           </div>
//                           <div>
//                             <h3 className="font-semibold text-gray-800">
//                               {c.title}
//                             </h3>
//                             <div className="flex items-center gap-2 mt-1">
//                               <span className="text-sm text-gray-600">
//                                 {new Date(c.reported_at).toLocaleString()}
//                               </span>
//                               <span
//                                 className={`text-sm px-2 py-1 rounded-full ${
//                                   c.status === "resolved"
//                                     ? "bg-green-100 text-green-700"
//                                     : c.status === "pending"
//                                     ? "bg-yellow-100 text-yellow-700"
//                                     : "bg-blue-100 text-blue-600"
//                                 }`}
//                               >
//                                 {c.status}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </AnimatePresence>
//                 </div>
//               </motion.section>
//             </div>
//             <AuthCrimeCharts />
//             {/* Crime Analytics */}
//             <motion.section
//               initial="hidden"
//               animate="visible"
//               custom={4}
//               variants={containerVariants}
//               className="bg-white rounded-2xl shadow-xl p-6"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <FiBarChart2 className="w-6 h-6 text-blue-600" />
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   Crime Statistics
//                 </h2>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {dashboardData.topCrimes.map((crime) => (
//                   <motion.div
//                     key={crime.crime_type}
//                     initial={{ scale: 0.9, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     className="p-6 bg-gray-50 rounded-xl"
//                   >
//                     <div className="flex items-center justify-between mb-4">
//                       <h3 className="text-lg font-semibold text-gray-800">
//                         {crime.crime_type}
//                       </h3>
//                       <span className="text-2xl font-bold text-blue-600">
//                         {crime.total_reports}
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div
//                         className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full"
//                         style={{
//                           width: `${
//                             (crime.total_reports /
//                               Math.max(
//                                 1,
//                                 dashboardData.topCrimes[0]?.total_reports || 1
//                               )) *
//                             100
//                           }%`,
//                         }}
//                       />
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.section>
//           </div>
//         )}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// import React, { useState, useEffect, useContext } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FiMap,
//   FiAlertCircle,
//   FiCheckCircle,
//   FiActivity,
//   FiMapPin,
//   FiBell,
//   FiClock,
//   FiBarChart2,
// } from "react-icons/fi";
// import AuthNavbar from "../../components/AuthNavbar";
// import IncidentMap from "../../components/IncidentMap";
// import Footer from "../../components/Footer";
// import { AuthContext } from "../../context/AuthContext";
// import { Link } from "react-router-dom";
// import { supabase } from "../../lib/supabase";
// import AuthCrimeCharts from "./AuthCrimeCharts";

// const containerVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, type: "spring", stiffness: 80 },
//   }),
// };

// export default function AuthDashboard() {
//   const { isLoggedIn, user } = useContext(AuthContext);
//   const [dashboardData, setDashboardData] = useState({
//     totalCases: 0,
//     resolved: 0,
//     pending: 0,
//     approved: 0,
//     recentCases: [],
//     topCrimes: [],
//   });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [notifications, setNotifications] = useState([]);

//   useEffect(() => {
//     if (!isLoggedIn) return;

//     const fetchData = async () => {
//       try {
//         // Fetch all reports count
//         const { count: totalCases } = await supabase
//           .from("reports")
//           .select("*", { count: "exact" });

//         // Fetch resolved reports count
//         const { count: resolved } = await supabase
//           .from("reports")
//           .select("*", { count: "exact" })
//           .eq("status", "resolved");

//         // Fetch pending reports count
//         const { count: pending } = await supabase
//           .from("reports")
//           .select("*", { count: "exact" })
//           .eq("status", "pending");

//         // Fetch approved reports count (assuming 'under investigation' is approved)
//         const { count: approved } = await supabase
//           .from("reports")
//           .select("*", { count: "exact" })
//           .eq("status", "under investigation");

//         // Fetch recent cases (last 5)
//         const { data: recentCases } = await supabase
//           .from("reports")
//           .select("*")
//           .order("reported_at", { ascending: false })
//           .limit(5);

//         // Fetch crime statistics
//         const { data: crimeStats } = await supabase
//           .from("crime_statistics")
//           .select("crime_type, total_reports")
//           .order("total_reports", { ascending: false })
//           .limit(3);

//         // Fetch notifications
//         const { data: userNotifications } = await supabase
//           .from("notifications")
//           .select("*")
//           .eq("user_id", user.id)
//           .order("created_at", { ascending: false })
//           .limit(5);

//         setDashboardData({
//           totalCases: totalCases || 0,
//           resolved: resolved || 0,
//           pending: pending || 0,
//           approved: approved || 0,
//           recentCases: recentCases || [],
//           topCrimes: crimeStats || [],
//         });

//         setNotifications(userNotifications?.map((n) => n.message) || []);
//         setLoading(false);
//       } catch (err) {
//         setError("Error fetching live data");
//         setLoading(false);
//         console.error(err);
//       }
//     };

//     fetchData();

//     // Set up realtime subscription
//     const reportsSubscription = supabase
//       .channel("reports_changes")
//       .on(
//         "postgres_changes",
//         {
//           event: "*",
//           schema: "public",
//           table: "reports",
//         },
//         (payload) => {
//           fetchData(); // Refresh data when reports change
//         }
//       )
//       .subscribe();

//     const notificationsSubscription = supabase
//       .channel("notifications_changes")
//       .on(
//         "postgres_changes",
//         {
//           event: "INSERT",
//           schema: "public",
//           table: "notifications",
//           filter: `user_id=eq.${user.id}`,
//         },
//         (payload) => {
//           setNotifications((prev) => [
//             payload.new.message,
//             ...prev.slice(0, 4),
//           ]);
//         }
//       )
//       .subscribe();

//     return () => {
//       supabase.removeChannel(reportsSubscription);
//       supabase.removeChannel(notificationsSubscription);
//     };
//   }, [isLoggedIn, user?.id]);

//   if (!isLoggedIn) {
//     return (
//       <div className="min-h-screen flex flex-col bg-gray-50">
//         <AuthNavbar />
//         <main className="flex-grow p-8 flex items-center justify-center">
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-xl text-gray-700 bg-white p-8 rounded-xl shadow-lg"
//           >
//             Please log in to access the Dashboard
//           </motion.p>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
//       <AuthNavbar />
//       <main className="flex-grow p-8 space-y-10 max-w-7xl mx-auto w-full">
//         <motion.header
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="space-y-2"
//         >
//           <h1 className="text-4xl font-bold text-gray-800">Safety Dashboard</h1>
//           <p className="text-gray-600 text-lg">
//             Real-time community safety overview
//           </p>
//         </motion.header>

//         {loading ? (
//           <motion.div
//             className="text-xl text-gray-700 bg-white p-6 rounded-xl shadow-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             Loading live data...
//           </motion.div>
//         ) : error ? (
//           <motion.div
//             className="text-red-600 text-xl bg-white p-6 rounded-xl shadow-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             {error}
//           </motion.div>
//         ) : (
//           <div className="space-y-10">
//             <motion.section
//               initial="hidden"
//               animate="visible"
//               custom={1}
//               variants={containerVariants}
//               className="grid grid-cols-1 md:grid-cols-4 gap-6"
//             >
//               <Link to="/total">
//                 <motion.div
//                   className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h2 className="text-xl font-semibold mb-2">
//                         Total Cases
//                       </h2>
//                       <p className="text-3xl font-bold">
//                         {dashboardData.totalCases}
//                       </p>
//                     </div>
//                     <FiAlertCircle className="w-12 h-12 opacity-80" />
//                   </div>
//                   <div className="mt-4 h-1 bg-blue-400 rounded-full">
//                     <div
//                       className="h-full bg-white rounded-full"
//                       style={{
//                         width: `${Math.min(
//                           100,
//                           (dashboardData.totalCases / 200) * 100
//                         )}%`,
//                       }}
//                     />
//                   </div>
//                 </motion.div>
//               </Link>

//               <Link to="/resolved">
//                 <motion.div
//                   className="bg-gradient-to-br from-green-600 to-green-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h2 className="text-xl font-semibold mb-2">Resolved</h2>
//                       <p className="text-3xl font-bold">
//                         {dashboardData.resolved}
//                       </p>
//                     </div>
//                     <FiCheckCircle className="w-12 h-12 opacity-80" />
//                   </div>
//                   <div className="mt-4 h-1 bg-green-400 rounded-full">
//                     <div
//                       className="h-full bg-white rounded-full"
//                       style={{
//                         width: `${
//                           dashboardData.totalCases > 0
//                             ? (dashboardData.resolved /
//                                 dashboardData.totalCases) *
//                               100
//                             : 0
//                         }%`,
//                       }}
//                     />
//                   </div>
//                 </motion.div>
//               </Link>

//               <Link to="/approved">
//                 <motion.div
//                   className="bg-gradient-to-br from-yellow-600 to-yellow-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h2 className="text-xl font-semibold mb-2">Approved</h2>
//                       <p className="text-3xl font-bold">
//                         {dashboardData.approved}
//                       </p>
//                     </div>
//                     <FiCheckCircle className="w-12 h-12 opacity-80" />
//                   </div>
//                   <div className="mt-4 h-1 bg-yellow-400 rounded-full">
//                     <div
//                       className="h-full bg-white rounded-full"
//                       style={{
//                         width: `${
//                           dashboardData.totalCases > 0
//                             ? (dashboardData.approved /
//                                 dashboardData.totalCases) *
//                               100
//                             : 0
//                         }%`,
//                       }}
//                     />
//                   </div>
//                 </motion.div>
//               </Link>

//               <Link to="/pending">
//                 <motion.div
//                   className="bg-gradient-to-br from-red-600 to-red-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <h2 className="text-xl font-semibold mb-2">Pending</h2>
//                       <p className="text-3xl font-bold">
//                         {dashboardData.pending}
//                       </p>
//                     </div>
//                     <FiClock className="w-12 h-12 opacity-80" />
//                   </div>
//                   <div className="mt-4 h-1 bg-red-400 rounded-full">
//                     <div
//                       className="h-full bg-white rounded-full"
//                       style={{
//                         width: `${
//                           dashboardData.totalCases > 0
//                             ? (dashboardData.pending /
//                                 dashboardData.totalCases) *
//                               100
//                             : 0
//                         }%`,
//                       }}
//                     />
//                   </div>
//                 </motion.div>
//               </Link>
//             </motion.section>

//             <motion.section
//               initial="hidden"
//               animate="visible"
//               custom={2}
//               variants={containerVariants}
//               className="bg-white p-6 rounded-xl shadow-md"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <FiMap className="w-6 h-6 text-blue-600" />
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   Incident Map
//                 </h2>
//               </div>
//               <IncidentMap />
//             </motion.section>
//             {/* Live Feed Section */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//               {/* Notifications Panel */}
//               <motion.section
//                 initial="hidden"
//                 animate="visible"
//                 custom={2}
//                 variants={containerVariants}
//                 className="lg:col-span-1 bg-white rounded-2xl shadow-xl p-6"
//               >
//                 <div className="flex items-center gap-3 mb-6">
//                   <FiBell className="w-6 h-6 text-blue-600" />
//                   <h2 className="text-2xl font-bold text-gray-800">
//                     Live Alerts
//                   </h2>
//                 </div>
//                 <div className="space-y-6 max-h-96 overflow-y-auto">
//                   <AnimatePresence>
//                     {notifications.map((note, index) => (
//                       <motion.div
//                         key={index}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0 }}
//                         className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600"
//                       >
//                         <div className="flex items-start gap-3">
//                           <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
//                           <p className="text-gray-700">{note}</p>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </AnimatePresence>
//                 </div>
//               </motion.section>

//               {/* Recent Activity */}
//               <motion.section
//                 initial="hidden"
//                 animate="visible"
//                 custom={3}
//                 variants={containerVariants}
//                 className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6"
//               >
//                 <div className="flex items-center gap-3 mb-6">
//                   <FiActivity className="w-6 h-6 text-blue-600" />
//                   <h2 className="text-2xl font-bold text-gray-800">
//                     Recent Activity
//                   </h2>
//                 </div>
//                 <div className="space-y-4">
//                   <AnimatePresence>
//                     {dashboardData.recentCases.map((c) => (
//                       <motion.div
//                         key={c.id}
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0 }}
//                         className="group flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors"
//                       >
//                         <div className="flex items-center gap-4">
//                           <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                             <FiMapPin className="w-6 h-6 text-blue-600" />
//                           </div>
//                           <div>
//                             <h3 className="font-semibold text-gray-800">
//                               {c.title}
//                             </h3>
//                             <div className="flex items-center gap-2 mt-1">
//                               <span className="text-sm text-gray-600">
//                                 {new Date(c.reported_at).toLocaleString()}
//                               </span>
//                               <span
//                                 className={`text-sm px-2 py-1 rounded-full ${
//                                   c.status === "resolved"
//                                     ? "bg-green-100 text-green-700"
//                                     : c.status === "pending"
//                                     ? "bg-yellow-100 text-yellow-700"
//                                     : "bg-blue-100 text-blue-600"
//                                 }`}
//                               >
//                                 {c.status}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </motion.div>
//                     ))}
//                   </AnimatePresence>
//                 </div>
//               </motion.section>
//             </div>
//             <AuthCrimeCharts />

//           </div>
//         )}
//       </main>
//       <Footer />
//     </div>
//   );
// }
import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMap,
  FiAlertCircle,
  FiCheckCircle,
  FiActivity,
  FiMapPin,
  FiBell,
  FiClock,
  FiBarChart2,
} from "react-icons/fi";
import AuthNavbar from "../../components/AuthNavbar";
import IncidentMap from "../../components/IncidentMap";
import Footer from "../../components/Footer";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabase";
import AuthCrimeCharts from "./AuthCrimeCharts";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: "spring", stiffness: 80 },
  }),
};

export default function AuthDashboard() {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [dashboardData, setDashboardData] = useState({
    totalCases: 0,
    resolved: 0,
    pending: 0,
    approved: 0,
    recentCases: [],
    topCrimes: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications((prev) =>
        prev.filter((note) => Date.now() - note.id < 15000)
      );
    }, 50000000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (!isLoggedIn) return;

    const fetchData = async () => {
      try {
        const { count: totalCases } = await supabase
          .from("reports")
          .select("*", { count: "exact" });

        const { count: resolved } = await supabase
          .from("reports")
          .select("*", { count: "exact" })
          .eq("status", "resolved");

        const { count: pending } = await supabase
          .from("reports")
          .select("*", { count: "exact" })
          .eq("status", "pending");

        const { count: approved } = await supabase
          .from("reports")
          .select("*", { count: "exact" })
          .eq("status", "under investigation");

        const { data: recentCases } = await supabase
          .from("reports")
          .select("*")
          .order("reported_at", { ascending: false })
          .limit(5);

        const { data: crimeStats } = await supabase
          .from("crime_statistics")
          .select("crime_type, total_reports")
          .order("total_reports", { ascending: false })
          .limit(3);

        const { data: userNotifications } = await supabase
          .from("notifications")
          .select("*")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false })
          .limit(5);

        setDashboardData({
          totalCases: totalCases || 0,
          resolved: resolved || 0,
          pending: pending || 0,
          approved: approved || 0,
          recentCases: recentCases || [],
          topCrimes: crimeStats || [],
        });

        setNotifications(userNotifications?.map((n) => n.message) || []);
        setLoading(false);
      } catch (err) {
        setError("Error fetching live data");
        setLoading(false);
        console.error(err);
      }
    };

    fetchData();
    const reportsAlertsSubscription = supabase
      .channel("reports_alerts")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "reports",
        },
        (payload) => {
          const newReport = payload.new;
          const alertMessage = `New case reported: ${
            newReport.report_id
          } - ${new Date(newReport.reported_at).toLocaleString()}`;
          setNotifications((prev) => [alertMessage, ...prev.slice(0, 4)]);
        }
      )
      .subscribe();

    const reportsSubscription = supabase
      .channel("reports_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "reports",
        },
        (payload) => {
          fetchData(); 
        }
      )
      .subscribe();

    const notificationsSubscription = supabase
      .channel("notifications_changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "notifications",
          filter: `user_id=eq.${user.id}`,
        },
        (payload) => {
          setNotifications((prev) => [
            payload.new.message,
            ...prev.slice(0, 4),
          ]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(reportsSubscription);
      supabase.removeChannel(notificationsSubscription);
      supabase.removeChannel(reportsAlertsSubscription);
    };
  }, [isLoggedIn, user?.id]);

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <AuthNavbar />
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <AuthNavbar />
      <main className="flex-grow p-8 space-y-10 max-w-7xl mx-auto w-full">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-2"
        >
          <h1 className="text-4xl font-bold text-gray-800">Safety Dashboard</h1>
          <p className="text-gray-600 text-lg">
            Real-time community safety overview
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
          <div className="space-y-10">
            <motion.section
              initial="hidden"
              animate="visible"
              custom={1}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              <Link to="/total">
                <motion.div
                  className="bg-gradient-to-br from-blue-600 to-blue-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">
                        Total Cases
                      </h2>
                      <p className="text-3xl font-bold">
                        {dashboardData.totalCases}
                      </p>
                    </div>
                    <FiAlertCircle className="w-12 h-12 opacity-80" />
                  </div>
                  <div className="mt-4 h-1 bg-blue-400 rounded-full">
                    <div
                      className="h-full bg-white rounded-full"
                      style={{
                        width: `${Math.min(
                          100,
                          (dashboardData.totalCases / 200) * 100
                        )}%`,
                      }}
                    />
                  </div>
                </motion.div>
              </Link>

              <Link to="/resolved">
                <motion.div
                  className="bg-gradient-to-br from-green-600 to-green-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Resolved</h2>
                      <p className="text-3xl font-bold">
                        {dashboardData.resolved}
                      </p>
                    </div>
                    <FiCheckCircle className="w-12 h-12 opacity-80" />
                  </div>
                  <div className="mt-4 h-1 bg-green-400 rounded-full">
                    <div
                      className="h-full bg-white rounded-full"
                      style={{
                        width: `${
                          dashboardData.totalCases > 0
                            ? (dashboardData.resolved /
                                dashboardData.totalCases) *
                              100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </motion.div>
              </Link>

              <Link to="/approved">
                <motion.div
                  className="bg-gradient-to-br from-yellow-600 to-yellow-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Approved</h2>
                      <p className="text-3xl font-bold">
                        {dashboardData.approved}
                      </p>
                    </div>
                    <FiCheckCircle className="w-12 h-12 opacity-80" />
                  </div>
                  <div className="mt-4 h-1 bg-yellow-400 rounded-full">
                    <div
                      className="h-full bg-white rounded-full"
                      style={{
                        width: `${
                          dashboardData.totalCases > 0
                            ? (dashboardData.approved /
                                dashboardData.totalCases) *
                              100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </motion.div>
              </Link>

              <Link to="/pending">
                <motion.div
                  className="bg-gradient-to-br from-red-600 to-red-500 p-6 rounded-2xl text-white shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Pending</h2>
                      <p className="text-3xl font-bold">
                        {dashboardData.pending}
                      </p>
                    </div>
                    <FiClock className="w-12 h-12 opacity-80" />
                  </div>
                  <div className="mt-4 h-1 bg-red-400 rounded-full">
                    <div
                      className="h-full bg-white rounded-full"
                      style={{
                        width: `${
                          dashboardData.totalCases > 0
                            ? (dashboardData.pending /
                                dashboardData.totalCases) *
                              100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </motion.div>
              </Link>
            </motion.section>

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
              <IncidentMap />
            </motion.section>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.section
                initial="hidden"
                animate="visible"
                custom={2}
                variants={containerVariants}
                className="lg:col-span-1 bg-white rounded-2xl shadow-xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <FiBell className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Live Alerts
                  </h2>
                </div>
                <div className="space-y-6 max-h-96 overflow-y-auto">
                  <AnimatePresence>
                    {notifications.map((note, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                          <p className="text-gray-700">{note}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.section>

              <motion.section
                initial="hidden"
                animate="visible"
                custom={3}
                variants={containerVariants}
                className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <FiActivity className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Recent Activity
                  </h2>
                </div>
                <div className="space-y-4">
                  <AnimatePresence>
                    {dashboardData.recentCases.map((c) => (
                      <motion.div
                        key={c.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="group flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FiMapPin className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">
                              {c.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-sm text-gray-600">
                                {new Date(c.reported_at).toLocaleString()}
                              </span>
                              <span
                                className={`text-sm px-2 py-1 rounded-full ${
                                  c.status === "resolved"
                                    ? "bg-green-100 text-green-700"
                                    : c.status === "pending"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-blue-100 text-blue-600"
                                }`}
                              >
                                {c.status}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.section>
            </div>
            <AuthCrimeCharts />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
