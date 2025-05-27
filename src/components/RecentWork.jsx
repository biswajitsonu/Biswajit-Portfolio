import React, { useEffect, useState } from 'react';

function RecentWork() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('recent-work');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="recent-work"
      className={`bg-white min-h-screen px-4 py-20 ${
        isVisible ? 'animate-fadeIn' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-extrabold text-4xl text-gray-900">
          Recent Work
        </h2>
        <p
          className="text-center text-black font-mono text-sm mt-2 max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Roboto Mono', monospace" }}
        >
          Developed responsive web apps using React.js and Java, focusing on UI design, performance optimization, and seamless frontend-backend integration.
        </p>
        <div className="mt-10 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 justify-center">
          <div className="md:w-1/2">
            <img
              alt="Modern inventory dashboard interface on a laptop screen with clean UI and charts"
              className="rounded-md w-full h-56 object-cover"
              src="https://i.postimg.cc/GtpdnQHB/O.jpg"
            />
            <h3 className="font-extrabold text-gray-900 mt-4 text-lg">
              Order Well – Inventory Management Dashboard
            </h3>
            <p
              className="text-black font-mono text-sm mt-2 leading-relaxed"
              style={{ fontFamily: "'Roboto Mono', monospace" }}
            >
              Built a responsive inventory dashboard with React.js, managing stock, orders, and supplier data efficiently.
            </p>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-3 px-6 rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center space-x-2">
              <span>Know more</span>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full h-56 rounded-md overflow-hidden">
              <img
                alt="Travel planning app interface displayed on a laptop with scenic travel photos and maps"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://i.postimg.cc/HsRHFbHx/T.png"
              />
            </div>
            <h3 className="font-extrabold text-gray-900 mt-4 text-lg">
              TravelEase – Trip Planner Web App
            </h3>
            <p
              className="text-black font-mono text-sm mt-2 leading-relaxed"
              style={{ fontFamily: "'Roboto Mono', monospace" }}
            >
              Developed a trip planner app using React.js, enabling itinerary creation, destination search.
            </p>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm py-3 px-6 rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center space-x-2">
              <span>Know more</span>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentWork;
