import Navbar from "../components/Navbar";

export default function CaseDetails() {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Fire in VR Mall Parking</h1>

        {/* Crime Details */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="space-y-4">
            <div>
              <label className="text-gray-600">Crime Type</label>
              <p className="font-semibold">Fire Incident</p>
            </div>
            <div>
              <label className="text-gray-600">Date & Time</label>
              <p className="font-semibold">March 19, 2025 at 3:45 PM</p>
            </div>
            <div>
              <label className="text-gray-600">Location</label>
              <p className="font-semibold">VR Mall, Basement Parking Area</p>
            </div>
            <div>
              <label className="text-gray-600">Description</label>
              <p className="text-gray-700">
                Fire broke out in the parking area of VR Mall, causing damage...
              </p>
            </div>
          </div>
        </div>

        {/* Updates Timeline */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Official Updates</h2>
          <div className="space-y-4 border-l-2 border-blue-600 pl-4">
            {updates.map((update, index) => (
              <div key={index} className="relative pl-6">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[9px] top-2" />
                <p className="font-semibold">{update.time}</p>
                <p className="text-gray-600">{update.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
