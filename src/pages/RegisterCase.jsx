// import Navbar from "../components/Navbar";

// export default function RegisterCase() {
//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-4xl mx-auto p-6">
//         <h1 className="text-2xl font-bold mb-6">Add New Case</h1>

//         <div className="space-y-6">
//           {/* Basic Details Section */}
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-lg font-semibold mb-4">Basic Details</h2>
//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="Crime Type"
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
//               />
//               <input
//                 type="datetime-local"
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
//               />
//               <input
//                 type="text"
//                 placeholder="Location"
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
//               />
//               <textarea
//                 placeholder="Description"
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 col-span-2"
//                 rows="3"
//               />
//             </div>
//           </div>

//           {/* Supporting Evidence Section */}
//           <div className="bg-white p-6 rounded-lg shadow">
//             <h2 className="text-lg font-semibold mb-4">Supporting Evidence</h2>
//             <div className="space-y-4">
//               <input
//                 type="file"
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 w-full"
//               />
//               <input
//                 type="text"
//                 placeholder="Police Case Number (FIR)"
//                 className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 w-full"
//               />
//             </div>
//           </div>

//           <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full">
//             Submit Case
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Navbar from "../components/Navbar";

export default function RegisterCase() {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Register Case</h1>

        <div className="space-y-6">
          {/* Anonymous Toggle Button */}
          <button
            type="button"
            onClick={() => setIsAnonymous(!isAnonymous)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              isAnonymous
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span>
              {isAnonymous ? "Reporting Anonymously" : "Report Anonymously"}
            </span>
          </button>

          {/* Basic Details Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Basic Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Crime Type"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <input
                type="datetime-local"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <input
                type="text"
                placeholder="Location"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <textarea
                placeholder="Description"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 col-span-2"
                rows="3"
              />
            </div>
          </div>

          {/* Supporting Evidence Section
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Supporting Evidence</h2>
            <div className="space-y-4">
              <input
                type="file"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 w-full"
              />
              <input
                type="text"
                placeholder="Police Case Number (FIR)"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 w-full"
              />
            </div>
          </div> */}

          {/* Supporting Evidence Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Supporting Evidence</h2>
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />
                <label
                  htmlFor="file-upload"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer flex items-center justify-center space-x-1 text-sm w-1/5 truncate"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span>Choose File</span>
                </label>
                <span className="ml-3 text-sm text-gray-500">
                  {selectedFile ? selectedFile.name : "No file chosen"}
                </span>
              </div>

              <input
                type="text"
                placeholder="Police Case Number (FIR)"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </div>

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
