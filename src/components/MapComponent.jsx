// // import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// // import { useState, useEffect } from "react";

// // const MapComponent = () => {
// //   const [center, setCenter] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   const mapContainerStyle = {
// //     width: "100%",
// //     height: "400px",
// //   };

// //   // Default coordinates (fallback if location access denied)
// //   const defaultCenter = {
// //     lat: 28.6139, // New Delhi coordinates
// //     lng: 77.209,
// //   };

// //   useEffect(() => {
// //     if (navigator.geolocation) {
// //       navigator.geolocation.getCurrentPosition(
// //         (position) => {
// //           setCenter({
// //             lat: position.coords.latitude,
// //             lng: position.coords.longitude,
// //           });
// //           setLoading(false);
// //         },
// //         (error) => {
// //           setError("Location access denied. Using default location.");
// //           setCenter(defaultCenter);
// //           setLoading(false);
// //         }
// //       );
// //     } else {
// //       setError("Geolocation is not supported by this browser.");
// //       setCenter(defaultCenter);
// //       setLoading(false);
// //     }
// //   }, []);

// //   if (loading) {
// //     return <div className="p-4 text-center">Loading map...</div>;
// //   }

// //   return (
// //     <div className="rounded-lg overflow-hidden shadow-lg">
// //       <LoadScript
// //         googleMapsApiKey="AIzaSyBb0aTQ8zdFJF1VkvVzNmRhHq_ER3czVgk"
// //         libraries={["places"]}
// //       >
// //         {error && <div className="text-red-500 p-2">{error}</div>}
// //         <GoogleMap
// //           mapContainerStyle={mapContainerStyle}
// //           zoom={13}
// //           center={center || defaultCenter}
// //         >
// //           <Marker position={center || defaultCenter} />
// //         </GoogleMap>
// //       </LoadScript>
// //     </div>
// //   );
// // };

// // export default MapComponent;

// // components/MapComponent.jsx
// import { useState, useEffect, useRef } from "react";
// import { GoogleMap, LoadScript, useJsApiLoader } from "@react-google-maps/api";

// const MapComponent = () => {
//   const [markers, setMarkers] = useState([]);
//   const mapRef = useRef(null);

//   // Initialize Advanced Markers
//   const initMarkers = (map) => {
//     // Example crime data - replace with your actual data
//     const crimeLocations = [
//       { lat: 28.6139, lng: 77.209, title: "Theft Report" },
//       { lat: 28.6145, lng: 77.2083, title: "Vandalism" },
//     ];

//     const newMarkers = crimeLocations.map((location) => {
//       const marker = new google.maps.marker.AdvancedMarkerElement({
//         map,
//         position: location,
//         title: location.title,
//       });

//       // Add click handler
//       marker.addListener("click", () => {
//         console.log("Marker clicked:", location.title);
//       });

//       return marker;
//     });

//     setMarkers(newMarkers);
//   };

//   // Cleanup markers on unmount
//   useEffect(() => {
//     return () => {
//       markers.forEach((marker) => {
//         marker.map = null;
//       });
//     };
//   }, [markers]);

//   return (
//     <LoadScript
//       googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
//       libraries={["marker"]}
//       version="beta"
//     >
//       <GoogleMap
//         mapContainerStyle={{ width: "100%", height: "400px" }}
//         zoom={13}
//         center={{ lat: 28.6139, lng: 77.209 }} // New Delhi coordinates
//         onLoad={(map) => {
//           mapRef.current = map;
//           initMarkers(map);
//         }}
//       />
//     </LoadScript>
//   );
// };

// export default MapComponent;

// import { useState, useEffect, useMemo } from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
// import { GOOGLE_MAPS_CONFIG } from "../config/maps";

// const MapComponent = () => {
//   const [center, setCenter] = useState(null);
//   const { isLoaded } = useJsApiLoader(GOOGLE_MAPS_CONFIG);

//   const mapContainerStyle = useMemo(
//     () => ({
//       width: "100%",
//       height: "400px",
//     }),
//     []
//   );

//   // Default coordinates (fallback if location access denied)
//   const defaultCenter = {
//     lat: 28.6139, // New Delhi coordinates
//     lng: 77.209,
//   };

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setCenter({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//           setLoading(false);
//         },
//         (error) => {
//           setError("Location access denied. Using default location.");
//           setCenter(defaultCenter);
//           setLoading(false);
//         }
//       );
//     } else {
//       setError("Geolocation is not supported by this browser.");
//       setCenter(defaultCenter);
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     if (isLoaded && center && mapRef.current) {
//       // Clear existing markers
//       markers.forEach((marker) => {
//         marker.map = null;
//       });

//       // Create new markers
//       const newMarkers = [
//         new window.google.maps.marker.AdvancedMarkerElement({
//           position: center,
//           map: mapRef.current,
//           title: "Your Location",
//         }),
//         // Add other crime markers here
//       ];

//       setMarkers(newMarkers);
//     }
//   }, [isLoaded, center]);

//   if (loading || !isLoaded) {
//     return <div className="p-4 text-center">Loading map...</div>;
//   }

//   return (
//     <div className="rounded-lg overflow-hidden shadow-lg">
//       {error && <div className="text-red-500 p-2">{error}</div>}
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center}
//         zoom={13}
//         onLoad={(map) => (mapRef.current = map)}
//       />
//     </div>
//   );
// };

// export default MapComponent;

// import { useState, useEffect, useRef, useMemo } from "react";
// import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
// import { GOOGLE_MAPS_CONFIG } from "../config/maps";

// const MapComponent = () => {
//   const [center, setCenter] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [markers, setMarkers] = useState([]);
//   const mapRef = useRef(null);

//   const { isLoaded } = useJsApiLoader(GOOGLE_MAPS_CONFIG);

//   // Memoize map container style
//   const mapContainerStyle = useMemo(
//     () => ({
//       width: "100%",
//       height: "400px",
//     }),
//     []
//   );

//   // Default coordinates (fallback if location access denied)
//   const defaultCenter = useMemo(
//     () => ({
//       lat: 28.6139, // New Delhi coordinates
//       lng: 77.209,
//     }),
//     []
//   );

//   // Geolocation effect
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setCenter({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//           setLoading(false);
//         },
//         (error) => {
//           setError("Location access denied. Using default location.");
//           setCenter(defaultCenter);
//           setLoading(false);
//         }
//       );
//     } else {
//       setError("Geolocation is not supported by this browser.");
//       setCenter(defaultCenter);
//       setLoading(false);
//     }
//   }, [defaultCenter]);

//   // Marker management effect
//   useEffect(() => {
//     if (!isLoaded || !mapRef.current) return;

//     // Clear existing markers
//     markers.forEach((marker) => {
//       marker.map = null;
//     });

//     // Create new markers
//     const newMarkers = [
//       new window.google.maps.marker.AdvancedMarkerElement({
//         position: center || defaultCenter,
//         map: mapRef.current,
//         title: "Your Location",
//       }),
//     ];

//     setMarkers(newMarkers);

//     // Cleanup function
//     return () => {
//       newMarkers.forEach((marker) => {
//         marker.map = null;
//       });
//     };
//   }, [isLoaded, center, defaultCenter]);

//   if (loading || !isLoaded) {
//     return <div className="p-4 text-center">Loading map...</div>;
//   }

//   return (
//     <div className="rounded-lg overflow-hidden shadow-lg">
//       {error && <div className="text-red-500 p-2">{error}</div>}
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center || defaultCenter}
//         zoom={13}
//         onLoad={(map) => {
//           mapRef.current = map;
//         }}
//       />
//     </div>
//   );
// };

// export default MapComponent;

import { useState, useEffect, useRef, useMemo } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { GOOGLE_MAPS_CONFIG } from "../config/maps";

const MapComponent = () => {
  const [center, setCenter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [markers, setMarkers] = useState([]);
  const mapRef = useRef(null);


  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["marker"],
    version: "beta",
  });

  if (loadError) {
    return <div>Error loading maps: {loadError.message}</div>;
  }
  const mapContainerStyle = useMemo(
    () => ({
      width: "100%",
      height: "400px",
    }),
    []
  );

  const defaultCenter = useMemo(
    () => ({
      lat: 28.6139, 
      lng: 77.209,
    }),
    []
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        (error) => {
          setError("Location access denied. Using default location.");
          setCenter(defaultCenter);
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setCenter(defaultCenter);
      setLoading(false);
    }
  }, [defaultCenter]);

  useEffect(() => {
    if (!isLoaded || !mapRef.current) return;

    markers.forEach((marker) => {
      marker.map = null;
    });

    const newMarkers = [
      new window.google.maps.marker.AdvancedMarkerElement({
        position: center || defaultCenter,
        map: mapRef.current,
        title: "Your Location",
      }),
    ];

    setMarkers(newMarkers);

    return () => {
      newMarkers.forEach((marker) => {
        marker.map = null;
      });
    };
  }, [isLoaded, center, defaultCenter]);

  if (loading || !isLoaded) {
    return <div className="p-4 text-center">Loading map...</div>;
  }

  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      {error && <div className="text-red-500 p-2">{error}</div>}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center || defaultCenter}
        zoom={13}
        onLoad={(map) => {
          mapRef.current = map;
        }}
      />
    </div>
  );
};

export default MapComponent;
