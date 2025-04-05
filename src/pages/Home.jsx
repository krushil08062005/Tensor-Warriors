import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // For sliding ads/announcements
import { GoogleMap, Marker } from "@react-google-maps/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContext";

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Map container style
const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const defaultCenter = { lat: 37.7749, lng: -122.4194 }; // Fallback (San Francisco)

export default function Home() {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [locationError, setLocationError] = useState("");
  const [showProblem, setShowProblem] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          setLocationError(error.message);
          // Use default center if error occurs
          setCurrentPosition(defaultCenter);
        }
      );
    } else {
      setLocationError("Geolocation not supported by this browser.");
      setCurrentPosition(defaultCenter);
    }
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Use local images from public/images folder
  const slides = [
    {
      id: 1,
      title: "Stay Vigilant",
      description: "Always report suspicious activities.",
      img: "/images/img8.webp",
    },
    {
      id: 2,
      title: "Community Matters",
      description: "Together, we reduce crime rates.",
      img: "/images/img12.webp",
    },
    {
      id: 3,
      title: "Quick Updates",
      description: "Real-time alerts keep you informed.",
      img: "/images/img7.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-gray-100 py-12 px-8 flex flex-col md:flex-row items-center md:justify-between">
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Stay Informed, Stay Safe!
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Join our community to keep your neighborhood safe. Reporting crime
            has never been easier.
          </p>
          {/* Show different call-to-action based on login status */}
          <AuthContext.Consumer>
            {({ isLoggedIn }) =>
              isLoggedIn ? (
                <a
                  href="/add-case"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
                >
                  Register Case
                </a>
              ) : (
                <a
                  href="/login"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
                >
                  Report Crime
                </a>
              )
            }
          </AuthContext.Consumer>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="/images/img112.jpg"
            alt="Hero"
            className="rounded-md shadow-md w-60 h-60 object-cover"
          />
        </div>
      </section>

      {/* SLIDING ADS / ANNOUNCEMENTS */}
      <section className="py-8 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <Slider {...sliderSettings}>
            {slides.map((slide) => (
              <div key={slide.id} className="px-2">
                <div className="bg-gray-100 rounded-md overflow-hidden shadow-md flex flex-col md:flex-row items-center">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="w-full md:w-1/2 h-[210px] object-cover"
                  />
                  <div className="p-6 md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                      {slide.title}
                    </h3>
                    <p className="text-gray-700">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* COLLAPSIBLE PROBLEM STATEMENT */}
      <section className="px-8 py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              About Our Mission
            </h2>
            <button
              onClick={() => setShowProblem(!showProblem)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              {showProblem ? "Hide" : "Show"}
            </button>
          </div>
          {showProblem && (
            <div className="bg-white rounded-md p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Problem
              </h3>
              <p className="text-gray-700 mb-4">
                Many neighborhoods suffer from delayed crime reporting.
                CrimeWatch bridges the gap between citizens and law enforcement
                by offering a real-time reporting system with an interactive
                map.
              </p>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Our Approach
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>
                  <strong>Live Map Visualization:</strong> See incidents as they
                  happen.
                </li>
                <li>
                  <strong>Anonymous Reporting:</strong> Report without fear.
                </li>
                <li>
                  <strong>AI Insights:</strong> Analyze trends using machine
                  learning.
                </li>
                <li>
                  <strong>Community Collaboration:</strong> Work together for
                  safety.
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* EXTRA FEATURES / BENEFITS */}
      <section className="py-12 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
            Key Benefits & Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-md shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Real-Time Alerts
              </h3>
              <p className="text-gray-700">
                Instant notifications about local incidents.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-md shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Data-Driven Insights
              </h3>
              <p className="text-gray-700">
                Access detailed crime statistics and trends.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-md shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Mobile-Friendly
              </h3>
              <p className="text-gray-700">
                Seamless experience on any device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE WORLD MAP */}
      <section className="py-12 px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            World Map - Your Current Location
          </h2>
          {locationError ? (
            <p className="text-red-600 mb-4">{locationError}</p>
          ) : (
            <p className="text-gray-700 mb-4">
              Your current location is marked on the map below.
            </p>
          )}
          {currentPosition ? (
            <div className="w-full h-[500px] rounded-md overflow-hidden shadow-md">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={currentPosition}
                zoom={14} // Closer view for current location
              >
                <Marker position={currentPosition} />
              </GoogleMap>
            </div>
          ) : (
            <div className="flex justify-center items-center h-64">
              Loading your location...
            </div>
          )}
        </div>
      </section>

      {/* COLLAPSIBLE CONTACT FORM */}
      <section className="py-12 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-md shadow-md">
            <button
              onClick={() => setShowContactForm(!showContactForm)}
              className="w-full px-8 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                Get in Touch
              </h2>
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  showContactForm ? "rotate-180" : ""
                }`}
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
            </button>

            {showContactForm && (
              <div className="px-8 pb-8 pt-4">
                <p className="text-gray-700 mb-6">
                  Have questions or feedback? We’re here to help!
                </p>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-800 font-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-800 font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-800 font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Your message..."
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
