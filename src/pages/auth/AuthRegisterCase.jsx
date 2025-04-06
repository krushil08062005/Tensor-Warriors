// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import {
// //   FiAlertCircle,
// //   FiCalendar,
// //   FiMapPin,
// //   FiFileText,
// //   FiLock,
// //   FiUploadCloud,
// //   FiArrowRight,
// // } from "react-icons/fi";
// // import AuthNavbar from "../../components/AuthNavbar";

// // const formVariants = {
// //   hidden: { opacity: 0, y: 20 },
// //   visible: { opacity: 1, y: 0 },
// // };

// // export default function RegisterCase() {
// //   const [isAnonymous, setIsAnonymous] = useState(false);
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     // Simulate submission
// //     setTimeout(() => {
// //       setIsSubmitting(false);
// //     }, 2000);
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
// //       <AuthNavbar />
// //       <motion.main
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         className="max-w-4xl mx-auto p-6"
// //       >
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="bg-white rounded-2xl shadow-xl p-8"
// //         >
// //           <h1 className="text-3xl font-bold text-gray-800 mb-2">
// //             Report Incident
// //           </h1>
// //           <p className="text-gray-600 mb-8">
// //             Help keep your community safe by reporting incidents
// //           </p>

// //           {/* Anonymous Toggle */}
// //           <motion.button
// //             whileHover={{ scale: 1.02 }}
// //             whileTap={{ scale: 0.98 }}
// //             onClick={() => setIsAnonymous(!isAnonymous)}
// //             className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl mb-8 transition-colors ${
// //               isAnonymous
// //                 ? "bg-blue-100 text-blue-600"
// //                 : "bg-gray-100 text-gray-600 hover:bg-gray-200"
// //             }`}
// //           >
// //             <FiLock className="w-5 h-5" />
// //             <span className="font-medium">
// //               {isAnonymous ? "Reporting Anonymously" : "Report Anonymously"}
// //             </span>
// //           </motion.button>

// //           <form onSubmit={handleSubmit} className="space-y-8">
// //             {/* Basic Details Section */}
// //             <motion.div
// //               variants={formVariants}
// //               className="bg-gray-50 p-6 rounded-xl"
// //             >
// //               <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
// //                 <FiAlertCircle className="w-6 h-6 text-blue-600" />
// //                 Incident Details
// //               </h2>

// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Crime Type
// //                   </label>
// //                   <div className="relative">
// //                     <select className="w-full pl-4 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white">
// //                       <option value="">Select crime type</option>
// //                       <option>Theft</option>
// //                       <option>Vandalism</option>
// //                       <option>Assault</option>
// //                       <option>Burglary</option>
// //                     </select>
// //                     <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
// //                       <svg
// //                         className="w-5 h-5 text-gray-400"
// //                         fill="none"
// //                         stroke="currentColor"
// //                         viewBox="0 0 24 24"
// //                       >
// //                         <path
// //                           strokeLinecap="round"
// //                           strokeLinejoin="round"
// //                           strokeWidth={2}
// //                           d="M19 9l-7 7-7-7"
// //                         />
// //                       </svg>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Date & Time
// //                   </label>
// //                   <div className="relative">
// //                     <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //                     <input
// //                       type="datetime-local"
// //                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="md:col-span-2">
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Location
// //                   </label>
// //                   <div className="relative">
// //                     <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
// //                     <input
// //                       type="text"
// //                       placeholder="Enter location or address"
// //                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
// //                     />
// //                   </div>
// //                 </div>

// //                 <div className="md:col-span-2">
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Description
// //                   </label>
// //                   <div className="relative">
// //                     <FiFileText className="absolute left-3 top-4 transform -translate-y-0 text-gray-400" />
// //                     <textarea
// //                       placeholder="Provide detailed description of the incident"
// //                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
// //                       rows="4"
// //                     />
// //                   </div>
// //                 </div>
// //               </div>
// //             </motion.div>

// //             {/* Evidence Section */}
// //             <motion.div
// //               variants={formVariants}
// //               className="bg-gray-50 p-6 rounded-xl"
// //             >
// //               <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
// //                 <FiUploadCloud className="w-6 h-6 text-blue-600" />
// //                 Supporting Evidence
// //               </h2>

// //               <div className="space-y-6">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Upload Evidence
// //                   </label>
// //                   <div className="relative">
// //                     <input
// //                       type="file"
// //                       id="file-upload"
// //                       className="hidden"
// //                       onChange={(e) => setSelectedFile(e.target.files[0])}
// //                     />
// //                     <label
// //                       htmlFor="file-upload"
// //                       className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-blue-500 transition-colors cursor-pointer"
// //                     >
// //                       <FiUploadCloud className="w-12 h-12 text-gray-400 mb-4" />
// //                       <span className="text-blue-600 font-medium">
// //                         Click to upload
// //                       </span>
// //                       <span className="text-sm text-gray-500 mt-1">
// //                         or drag and drop files here
// //                       </span>
// //                     </label>
// //                     {selectedFile && (
// //                       <span className="block mt-2 text-sm text-gray-600">
// //                         Selected file: {selectedFile.name}
// //                       </span>
// //                     )}
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-2">
// //                     Police Case Number (FIR)
// //                   </label>
// //                   <input
// //                     type="text"
// //                     placeholder="Enter official case number if available"
// //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
// //                   />
// //                 </div>
// //               </div>
// //             </motion.div>

// //             <motion.button
// //               whileHover={{ scale: 1.02 }}
// //               whileTap={{ scale: 0.98 }}
// //               type="submit"
// //               disabled={isSubmitting}
// //               className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-medium hover:from-blue-700 hover:to-blue-600 transition-all flex items-center justify-center gap-2"
// //             >
// //               {isSubmitting ? (
// //                 <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
// //               ) : (
// //                 <>
// //                   Submit Report
// //                   <FiArrowRight className="w-5 h-5" />
// //                 </>
// //               )}
// //             </motion.button>
// //           </form>
// //         </motion.div>
// //       </motion.main>
// //     </div>
// //   );
// // }
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   FiAlertCircle,
//   FiCalendar,
//   FiMapPin,
//   FiFileText,
//   FiLock,
//   FiUploadCloud,
//   FiArrowRight,
//   FiNavigation,
//   FiCheck,
//   FiAlertTriangle,
// } from "react-icons/fi";
// import Navbar from "../../components/AuthNavbar";
// import {supabase} from "../../lib/supabase";

// const formVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

// export default function RegisterCase() {
//   const [isAnonymous, setIsAnonymous] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [coordinates, setCoordinates] = useState({
//     lat: null,
//     lng: null,
//   });
//   const [address, setAddress] = useState("");
//   const [mapLoaded, setMapLoaded] = useState(false);
//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);
//   const [locationPermissionGranted, setLocationPermissionGranted] = useState(false);
//   const [crimeType, setCrimeType] = useState("");
//   const [dateTime, setDateTime] = useState("");
//   const [description, setDescription] = useState("");
//   const [caseNumber, setCaseNumber] = useState("");
//   const [submissionStatus, setSubmissionStatus] = useState({
//     status: null, // null, "success", "error"
//     message: "",
//   });

//   // Request user location on component mount
//   useEffect(() => {
//     // Initialize the map API script
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAJhahxWbFbZAulh7fmS-ANazqzHKOV09k&libraries=places`;
//     script.async = true;
//     script.defer = true;
//     script.onload = () => setMapLoaded(true);
//     document.head.appendChild(script);

//     // Request user location
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setCoordinates({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//           setLocationPermissionGranted(true);
//         },
//         (error) => {
//           console.error("Error getting location:", error);
//           // Default to a central location if permission denied
//           setCoordinates({ lat: 40.7128, lng: -74.0060 }); // New York as default
//         }
//       );
//     }

//     return () => {
//       // Clean up script if component unmounts
//       if (document.head.contains(script)) {
//         document.head.removeChild(script);
//       }
//     };
//   }, []);

//   // Initialize map when API loads and coordinates are available
//   useEffect(() => {
//     if (mapLoaded && coordinates.lat && coordinates.lng) {
//       const mapInstance = new window.google.maps.Map(
//         document.getElementById("map"),
//         {
//           center: { lat: coordinates.lat, lng: coordinates.lng },
//           zoom: 15,
//           mapTypeControl: false,
//           streetViewControl: false,
//           fullscreenControl: false,
//         }
//       );

//       // Create marker at initial location
//       const markerInstance = new window.google.maps.Marker({
//         position: { lat: coordinates.lat, lng: coordinates.lng },
//         map: mapInstance,
//         draggable: true,
//         animation: window.google.maps.Animation.DROP,
//       });

//       // Update address field with initial location
//       reverseGeocode(coordinates.lat, coordinates.lng);

//       // Add click listener to map for dropping pin
//       mapInstance.addListener("click", (e) => {
//         const clickedLat = e.latLng.lat();
//         const clickedLng = e.latLng.lng();

//         // Update marker position
//         markerInstance.setPosition({
//           lat: clickedLat,
//           lng: clickedLng,
//         });

//         // Update state with new coordinates
//         setCoordinates({
//           lat: clickedLat,
//           lng: clickedLng,
//         });

//         // Get address from coordinates
//         reverseGeocode(clickedLat, clickedLng);
//       });

//       // Add drag end listener to marker
//       markerInstance.addListener("dragend", () => {
//         const position = markerInstance.getPosition();
//         const newLat = position.lat();
//         const newLng = position.lng();

//         setCoordinates({
//           lat: newLat,
//           lng: newLng,
//         });

//         reverseGeocode(newLat, newLng);
//       });

//       // Add search box
//       const input = document.getElementById("location-input");
//       const searchBox = new window.google.maps.places.Autocomplete(input);
//       searchBox.addListener("place_changed", () => {
//         const place = searchBox.getPlace();
//         if (!place.geometry || !place.geometry.location) return;

//         // Update map and marker
//         mapInstance.setCenter(place.geometry.location);
//         markerInstance.setPosition(place.geometry.location);

//         // Update coordinates
//         setCoordinates({
//           lat: place.geometry.location.lat(),
//           lng: place.geometry.location.lng(),
//         });

//         // Set address
//         setAddress(place.formatted_address);
//       });

//       setMap(mapInstance);
//       setMarker(markerInstance);
//     }
//   }, [mapLoaded, coordinates.lat, coordinates.lng]);

//   // Reverse geocode - get address from coordinates
//   const reverseGeocode = async (lat, lng) => {
//     if (!window.google) return;

//     const geocoder = new window.google.maps.Geocoder();
//     const latlng = { lat, lng };

//     geocoder.geocode({ location: latlng }, (results, status) => {
//       if (status === "OK" && results[0]) {
//         setAddress(results[0].formatted_address);
//       } else {
//         setAddress(`Latitude: ${lat.toFixed(6)}, Longitude: ${lng.toFixed(6)}`);
//       }
//     });
//   };

//   // Upload file to Supabase storage
//   const uploadFile = async (file) => {
//     if (!file) return null;

//     const fileExt = file.name.split('.').pop();
//     const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
//     const filePath = `evidence/${fileName}`;

//     const { data, error } = await supabase.storage
//       .from('incident-evidence')
//       .upload(filePath, file);

//     if (error) {
//       console.error('Error uploading file:', error);
//       throw new Error(`Error uploading file: ${error.message}`);
//     }

//     // Return the URL for the uploaded file
//     const { data: urlData } = supabase.storage
//       .from('incident-evidence')
//       .getPublicUrl(filePath);

//     return urlData.publicUrl;
//   };

//   // Submit form data to Supabase
//   const submitToSupabase = async (formData) => {
//     try {
//       // Upload file first if one is selected
//       let fileUrl = null;
//       if (selectedFile) {
//         fileUrl = await uploadFile(selectedFile);
//       }

//       // Add the incident data to the incidents table
//       const { data, error } = await supabase
//         .from('reports')
//         .insert([
//           {
//             crime_type: formData.crimeType.toLowerCase(),
//             title: formData.crimeType,
//             // datetime: formData.dateTime,
//             address: formData.address,
//             latitude: formData.coordinates.lat,
//             longitude: formData.coordinates.lng,
//             description: formData.description,
//             // is_anonymous: formData.isAnonymous,
//             // police_case_number: formData.caseNumber,
//             severity:'low',
//             // evidence_url: fileUrl,
//             status: 'pending',
//             reported_at: new Date().toISOString(),
//             updated_at : new Date().toISOString()
//           },
//         ])
//         .select();

//       if (error) throw error;

//       return { success: true, data };
//     } catch (error) {
//       console.error('Error submitting to Supabase:', error);
//       return { success: false, error: error.message };
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmissionStatus({ status: null, message: "" });

//     // Validate required fields
//     if (!crimeType || !dateTime || !description || !coordinates.lat || !coordinates.lng) {
//       setIsSubmitting(false);
//       setSubmissionStatus({
//         status: "error",
//         message: "Please fill in all required fields and select a location on the map."
//       });
//       return;
//     }

//     // Collect form data
//     const formData = {
//       isAnonymous,
//       crimeType,
//       dateTime,
//       coordinates,
//       address,
//       description,
//       caseNumber,
//     };

//     try {
//       // Submit data to Supabase
//       const result = await submitToSupabase(formData);

//       if (result.success) {
//         setSubmissionStatus({
//           status: "success",
//           message: "Your incident report has been submitted successfully."
//         });

//         // Reset form after successful submission
//         setTimeout(() => {
//           setCrimeType("");
//           setDateTime("");
//           setDescription("");
//           setCaseNumber("");
//           setSelectedFile(null);
//           // Don't reset location as the user might want to report another incident at the same place
//         }, 3000);
//       } else {
//         setSubmissionStatus({
//           status: "error",
//           message: `Failed to submit report: ${result.error}`
//         });
//       }
//     } catch (error) {
//       setSubmissionStatus({
//         status: "error",
//         message: `An unexpected error occurred: ${error.message}`
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Handle manual address input change
//   const handleAddressChange = (e) => {
//     setAddress(e.target.value);
//   };

//   // Center map on user's current location
//   const centerOnUserLocation = () => {
//     if (navigator.geolocation && map) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const userLocation = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };

//           map.setCenter(userLocation);
//           marker.setPosition(userLocation);
//           setCoordinates(userLocation);
//           reverseGeocode(userLocation.lat, userLocation.lng);
//         },
//         (error) => {
//           console.error("Error getting current location:", error);
//         }
//       );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
//       <Navbar />
//       <motion.main
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="max-w-4xl mx-auto p-6"
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-2xl shadow-xl p-8"
//         >
//           <h1 className="text-3xl font-bold text-gray-800 mb-2">
//             Report Incident
//           </h1>
//           <p className="text-gray-600 mb-8">
//             Help keep your community safe by reporting incidents
//           </p>

//           {/* Submission Status Alert */}
//           {submissionStatus.status && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className={`p-4 mb-6 rounded-lg flex items-center gap-3 ${
//                 submissionStatus.status === "success"
//                   ? "bg-green-100 text-green-800"
//                   : "bg-red-100 text-red-800"
//               }`}
//             >
//               {submissionStatus.status === "success" ? (
//                 <FiCheck className="w-5 h-5" />
//               ) : (
//                 <FiAlertTriangle className="w-5 h-5" />
//               )}
//               <span>{submissionStatus.message}</span>
//             </motion.div>
//           )}

//           {/* Anonymous Toggle */}
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => setIsAnonymous(!isAnonymous)}
//             className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl mb-8 transition-colors ${
//               isAnonymous
//                 ? "bg-blue-100 text-blue-600"
//                 : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//             }`}
//           >
//             <FiLock className="w-5 h-5" />
//             <span className="font-medium">
//               {isAnonymous ? "Reporting Anonymously" : "Report Anonymously"}
//             </span>
//           </motion.button>

//           <form onSubmit={handleSubmit} className="space-y-8">
//             {/* Basic Details Section */}
//             <motion.div
//               variants={formVariants}
//               className="bg-gray-50 p-6 rounded-xl"
//             >
//               <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
//                 <FiAlertCircle className="w-6 h-6 text-blue-600" />
//                 Incident Details
//               </h2>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Crime Type <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <select
//                       className="w-full pl-4 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white"
//                       value={crimeType}
//                       onChange={(e) => setCrimeType(e.target.value)}
//                       required
//                     >
//                       <option value="">Select crime type</option>
//                       <option value="theft">Theft</option>
//                       <option value="vandalism">Vandalism</option>
//                       <option value="assault">Assault</option>
//                       <option value="burglary">Burglary</option>
//                       <option value="fraud">Fraud</option>
//                       <option value="harassment">Harassment</option>
//                       <option value="traffic">Traffic Incident</option>
//                       <option value="other">Other</option>
//                     </select>
//                     <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
//                       <svg
//                         className="w-5 h-5 text-gray-400"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Date & Time <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                     <input
//                       type="datetime-local"
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
//                       value={dateTime}
//                       onChange={(e) => setDateTime(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Location Section with Map */}
//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Location <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative mb-4">
//                     <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                     <input
//                       id="location-input"
//                       type="text"
//                       placeholder="Search for a location or address"
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//                       value={address}
//                       onChange={handleAddressChange}
//                       required
//                     />
//                     <button
//                       type="button"
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800"
//                       onClick={centerOnUserLocation}
//                       title="Use current location"
//                     >
//                       <FiNavigation className="w-5 h-5" />
//                     </button>
//                   </div>

//                   {/* Map Container */}
//                   <div
//                     id="map"
//                     className="w-full h-64 rounded-lg border border-gray-300 overflow-hidden mb-2"
//                   ></div>

//                   {/* Coordinates Display */}
//                   {coordinates.lat && coordinates.lng && (
//                     <div className="text-sm text-gray-600 flex gap-4">
//                       <span>Latitude: {coordinates.lat.toFixed(6)}</span>
//                       <span>Longitude: {coordinates.lng.toFixed(6)}</span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Description <span className="text-red-500">*</span>
//                   </label>
//                   <div className="relative">
//                     <FiFileText className="absolute left-3 top-4 transform -translate-y-0 text-gray-400" />
//                     <textarea
//                       placeholder="Provide detailed description of the incident"
//                       className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//                       rows="4"
//                       value={description}
//                       onChange={(e) => setDescription(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Evidence Section */}
//             <motion.div
//               variants={formVariants}
//               className="bg-gray-50 p-6 rounded-xl"
//             >
//               <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
//                 <FiUploadCloud className="w-6 h-6 text-blue-600" />
//                 Supporting Evidence
//               </h2>

//               <div className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Upload Evidence
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="file"
//                       id="file-upload"
//                       className="hidden"
//                       onChange={(e) => setSelectedFile(e.target.files[0])}
//                     />
//                     <label
//                       htmlFor="file-upload"
//                       className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-blue-500 transition-colors cursor-pointer"
//                     >
//                       <FiUploadCloud className="w-12 h-12 text-gray-400 mb-4" />
//                       <span className="text-blue-600 font-medium">
//                         Click to upload
//                       </span>
//                       <span className="text-sm text-gray-500 mt-1">
//                         or drag and drop files here
//                       </span>
//                     </label>
//                     {selectedFile && (
//                       <span className="block mt-2 text-sm text-gray-600">
//                         Selected file: {selectedFile.name}
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Police Case Number (FIR)
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter official case number if available"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//                     value={caseNumber}
//                     onChange={(e) => setCaseNumber(e.target.value)}
//                   />
//                 </div>
//               </div>
//             </motion.div>

//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-medium hover:from-blue-700 hover:to-blue-600 transition-all flex items-center justify-center gap-2"
//             >
//               {isSubmitting ? (
//                 <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
//               ) : (
//                 <>
//                   Submit Report
//                   <FiArrowRight className="w-5 h-5" />
//                 </>
//               )}
//             </motion.button>
//           </form>
//         </motion.div>
//       </motion.main>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiAlertCircle,
  FiCalendar,
  FiMapPin,
  FiFileText,
  FiLock,
  FiUploadCloud,
  FiArrowRight,
  FiNavigation,
  FiCheck,
  FiAlertTriangle,
} from "react-icons/fi";
import Navbar from "../../components/AuthNavbar";
import { supabase } from "../../lib/supabase";

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function RegisterCase() {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [address, setAddress] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const [locationPermissionGranted, setLocationPermissionGranted] =
    useState(false);
  const [crimeType, setCrimeType] = useState("");
  const [title, setTitle] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [speechError, setSpeechError] = useState(null);
  const [interimTranscript, setInterimTranscript] = useState("");
  const [dateTime, setDateTime] = useState(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  });
  const [description, setDescription] = useState("");
  const [caseNumber, setCaseNumber] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState({
    status: null,
    message: "",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAJhahxWbFbZAulh7fmS-ANazqzHKOV09k&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setMapLoaded(true);
    document.head.appendChild(script);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLocationPermissionGranted(true);
        },
        (error) => {
          console.error("Error getting location:", error);
          setCoordinates({ lat: 40.7128, lng: -74.006 });
        }
      );
    }

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onresult = (event) => {
          const transcript = Array.from(event.results)
            .map((result) => result[0])
            .map((result) => result.transcript)
            .join("");

          if (event.results[0].isFinal) {
            setDescription((prev) => prev + " " + transcript);
            setInterimTranscript("");
          } else {
            setInterimTranscript(transcript);
          }
        };

        recognition.onerror = (event) => {
          setSpeechError("Error occurred in recognition: " + event.error);
          setIsListening(false);
        };

        recognition.onstart = () => {
          setIsListening(true);
          setSpeechError(null);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        return () => {
          recognition.stop();
        };
      } else {
        setSpeechError("Speech recognition not supported in this browser");
      }
    }
  }, []);
  useEffect(() => {
    if (mapLoaded && coordinates.lat && coordinates.lng) {
      const mapInstance = new window.google.maps.Map(
        document.getElementById("map"),
        {
          center: { lat: coordinates.lat, lng: coordinates.lng },
          zoom: 15,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        }
      );

      const markerInstance = new window.google.maps.Marker({
        position: { lat: coordinates.lat, lng: coordinates.lng },
        map: mapInstance,
        draggable: true,
        animation: window.google.maps.Animation.DROP,
      });

      reverseGeocode(coordinates.lat, coordinates.lng);
      mapInstance.addListener("click", (e) => {
        const clickedLat = e.latLng.lat();
        const clickedLng = e.latLng.lng();

        markerInstance.setPosition({
          lat: clickedLat,
          lng: clickedLng,
        });

        setCoordinates({
          lat: clickedLat,
          lng: clickedLng,
        });

        reverseGeocode(clickedLat, clickedLng);
      });

      markerInstance.addListener("dragend", () => {
        const position = markerInstance.getPosition();
        const newLat = position.lat();
        const newLng = position.lng();

        setCoordinates({
          lat: newLat,
          lng: newLng,
        });

        reverseGeocode(newLat, newLng);
      });

      const input = document.getElementById("location-input");
      const searchBox = new window.google.maps.places.Autocomplete(input);
      searchBox.addListener("place_changed", () => {
        const place = searchBox.getPlace();
        if (!place.geometry || !place.geometry.location) return;

        mapInstance.setCenter(place.geometry.location);
        markerInstance.setPosition(place.geometry.location);

        setCoordinates({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });

        setAddress(place.formatted_address);
      });

      setMap(mapInstance);
      setMarker(markerInstance);
    }
  }, [mapLoaded, coordinates.lat, coordinates.lng]);

  const reverseGeocode = async (lat, lng) => {
    if (!window.google) return;

    const geocoder = new window.google.maps.Geocoder();
    const latlng = { lat, lng };

    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === "OK" && results[0]) {
        setAddress(results[0].formatted_address);
      } else {
        setAddress(`Latitude: ${lat.toFixed(6)}, Longitude: ${lng.toFixed(6)}`);
      }
    });
  };

  const uploadFile = async (file) => {
    if (!file) return null;

    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()
      .toString(36)
      .substring(2, 15)}_${Date.now()}.${fileExt}`;
    const filePath = `evidence/${fileName}`;

    const { data, error } = await supabase.storage
      .from("incident-evidence")
      .upload(filePath, file);

    if (error) {
      console.error("Error uploading file:", error);
      throw new Error(`Error uploading file: ${error.message}`);
    }

    const { data: urlData } = supabase.storage
      .from("incident-evidence")
      .getPublicUrl(filePath);

    return urlData.publicUrl;
  };

  const submitToSupabase = async (formData) => {
    try {
      let fileUrl = null;
      if (selectedFile) {
        fileUrl = await uploadFile(selectedFile);
      }

      const { data, error } = await supabase
        .from("reports")
        .insert([
          {
            crime_type: formData.crimeType.toLowerCase(),
            title: formData.title,
            address: formData.address,
            latitude: formData.coordinates.lat,
            longitude: formData.coordinates.lng,
            description: formData.description,
            severity: "low",
            status: "pending",
            reported_at: formData.dateTime,
            updated_at: new Date().toISOString(),
          },
        ])
        .select();

      if (error) throw error;

      return { success: true, data };
    } catch (error) {
      console.error("Error submitting to Supabase:", error);
      return { success: false, error: error.message };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus({ status: null, message: "" });

    if (
      !crimeType ||
      !dateTime ||
      !description ||
      !coordinates.lat ||
      !coordinates.lng
    ) {
      setIsSubmitting(false);
      setSubmissionStatus({
        status: "error",
        message:
          "Please fill in all required fields and select a location on the map.",
      });
      return;
    }

    const formData = {
      isAnonymous,
      crimeType,
      title,
      dateTime,
      coordinates,
      address,
      description,
      caseNumber,
    };

    try {
      const result = await submitToSupabase(formData);

      if (result.success) {
        setSubmissionStatus({
          status: "success",
          message: "Your incident report has been submitted successfully.",
        });

        setTimeout(() => {
          setCrimeType("");
          setDateTime("");
          setDescription("");
          setCaseNumber("");
          setSelectedFile(null);
        }, 3000);
      } else {
        setSubmissionStatus({
          status: "error",
          message: `Failed to submit report: ${result.error}`,
        });
      }
    } catch (error) {
      setSubmissionStatus({
        status: "error",
        message: `An unexpected error occurred: ${error.message}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const centerOnUserLocation = () => {
    if (navigator.geolocation && map) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          map.setCenter(userLocation);
          marker.setPosition(userLocation);
          setCoordinates(userLocation);
          reverseGeocode(userLocation.lat, userLocation.lng);
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto p-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Report Incident
          </h1>
          <p className="text-gray-600 mb-8">
            Help keep your community safe by reporting incidents
          </p>

          {submissionStatus.status && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 mb-6 rounded-lg flex items-center gap-3 ${
                submissionStatus.status === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submissionStatus.status === "success" ? (
                <FiCheck className="w-5 h-5" />
              ) : (
                <FiAlertTriangle className="w-5 h-5" />
              )}
              <span>{submissionStatus.message}</span>
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsAnonymous(!isAnonymous)}
            className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl mb-8 transition-colors ${
              isAnonymous
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <FiLock className="w-5 h-5" />
            <span className="font-medium">
              {isAnonymous ? "Reporting Anonymously" : "Report Anonymously"}
            </span>
          </motion.button>

          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div
              variants={formVariants}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FiAlertCircle className="w-6 h-6 text-blue-600" />
                Incident Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter a brief title for the incident"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Crime Type <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      className="w-full pl-4 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white"
                      value={crimeType}
                      onChange={(e) => setCrimeType(e.target.value)}
                      required
                    >
                      <option value="">Select crime type</option>
                      <option value="theft">Theft</option>
                      <option value="vandalism">Vandalism</option>
                      <option value="assault">Assault</option>
                      <option value="burglary">Burglary</option>
                      <option value="fraud">Fraud</option>
                      <option value="harassment">Harassment</option>
                      <option value="traffic">Traffic Incident</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date & Time <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="datetime-local"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                      value={dateTime}
                      onChange={(e) => setDateTime(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative mb-4">
                    <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      id="location-input"
                      type="text"
                      placeholder="Search for a location or address"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      value={address}
                      onChange={handleAddressChange}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800"
                      onClick={centerOnUserLocation}
                      title="Use current location"
                    >
                      <FiNavigation className="w-5 h-5" />
                    </button>
                  </div>

                  <div
                    id="map"
                    className="w-full h-64 rounded-lg border border-gray-300 overflow-hidden mb-2"
                  ></div>

                  {coordinates.lat && coordinates.lng && (
                    <div className="text-sm text-gray-600 flex gap-4">
                      <span>Latitude: {coordinates.lat.toFixed(6)}</span>
                      <span>Longitude: {coordinates.lng.toFixed(6)}</span>
                    </div>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FiFileText className="absolute left-3 top-4 transform -translate-y-0 text-gray-400" />
                    <textarea
                      placeholder="Provide detailed description of the incident"
                      className="w-full pl-10 pr-16 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      rows="4"
                      value={
                        description +
                        (interimTranscript ? " " + interimTranscript : "")
                      }
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (!isListening) {
                          const recognition = new (window.SpeechRecognition ||
                            window.webkitSpeechRecognition)();
                          recognition.start();
                        }
                      }}
                      className={`absolute right-3 top-4 p-2 rounded-full ${
                        isListening
                          ? "text-red-600 animate-pulse"
                          : "text-gray-600 hover:text-blue-600"
                      } transition-colors`}
                      title={
                        isListening ? "Stop recording" : "Start voice input"
                      }
                      disabled={
                        !(
                          "SpeechRecognition" in window ||
                          "webkitSpeechRecognition" in window
                        )
                      }
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                    </button>
                  </div>
                  {speechError && (
                    <p className="text-red-500 text-sm mt-2">{speechError}</p>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={formVariants}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FiUploadCloud className="w-6 h-6 text-blue-600" />
                Supporting Evidence
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Evidence
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      onChange={(e) => setSelectedFile(e.target.files[0])}
                    />
                    <label
                      htmlFor="file-upload"
                      className="w-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-8 hover:border-blue-500 transition-colors cursor-pointer"
                    >
                      <FiUploadCloud className="w-12 h-12 text-gray-400 mb-4" />
                      <span className="text-blue-600 font-medium">
                        Click to upload
                      </span>
                      <span className="text-sm text-gray-500 mt-1">
                        or drag and drop files here
                      </span>
                    </label>
                    {selectedFile && (
                      <span className="block mt-2 text-sm text-gray-600">
                        Selected file: {selectedFile.name}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Police Case Number (FIR)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter official case number if available"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    value={caseNumber}
                    onChange={(e) => setCaseNumber(e.target.value)}
                  />
                </div>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-xl font-medium hover:from-blue-700 hover:to-blue-600 transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              ) : (
                <>
                  Submit Report
                  <FiArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.main>
    </div>
  );
}
