import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiAlertCircle,
  FiCalendar,
  FiMapPin,
  FiFileText,
  FiLock,
  FiUploadCloud,
  FiArrowRight,
} from "react-icons/fi";
import AuthNavbar from "../../components/AuthNavbar";

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AuthRegisterCase() {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <AuthNavbar />
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

          {/* Anonymous Toggle */}
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
            {/* Basic Details Section */}
            <motion.div
              variants={formVariants}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <FiAlertCircle className="w-6 h-6 text-blue-600" />
                Incident Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Crime Type
                  </label>
                  <div className="relative">
                    <select className="w-full pl-4 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white">
                      <option value="">Select crime type</option>
                      <option>Theft</option>
                      <option>Vandalism</option>
                      <option>Assault</option>
                      <option>Burglary</option>
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
                    Date & Time
                  </label>
                  <div className="relative">
                    <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="datetime-local"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter location or address"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <div className="relative">
                    <FiFileText className="absolute left-3 top-4 transform -translate-y-0 text-gray-400" />
                    <textarea
                      placeholder="Provide detailed description of the incident"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      rows="4"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Evidence Section */}
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
