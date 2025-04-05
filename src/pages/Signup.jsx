import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow p-8 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Sign Up
          </h1>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-800 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-medium">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Signup
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
