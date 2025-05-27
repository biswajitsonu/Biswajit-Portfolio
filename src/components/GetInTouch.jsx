import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";

function GetInTouch() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("get-in-touch");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main
      id="get-in-touch"
      className={`bg-black text-white min-h-screen flex flex-col justify-between px-4 pt-24 transition-opacity duration-700 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-full w-full flex-grow">
        <div className="max-w-full w-full">
          <h1 className="font-extrabold text-2xl text-center mb-3">Get In Touch</h1>
          {/* <p
            className="text-gray-400 mb-10"
            style={{
              maxWidth: "60rem",
              marginLeft: "auto",
              marginRight: "auto",
              fontFamily: "'IBM Plex Mono', monospace",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "24px",
              textAlign: "center",
              whiteSpace: "normal",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
          <form className="space-y-5 mx-auto" style={{ maxWidth: "20rem" }}>
            <div>
              <label htmlFor="email" className="block text-xs font-bold mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Please enter your email"
                className="w-full rounded-md text-xs text-gray-700 px-3 py-2 focus:outline-none"
                style={{ height: "3rem" }}
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-xs font-bold mb-1">
                Mobile
              </label>
              <input
                id="mobile"
                type="tel"
                placeholder="Enter mobile"
                className="w-full rounded-md text-xs text-gray-700 px-3 py-2 focus:outline-none"
                style={{ height: "3rem" }}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows="7"
                placeholder="Enter your message"
                className="w-full rounded-md text-xs text-gray-700 px-3 py-2 resize-none focus:outline-none"
                style={{ height: "7.5rem" }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full font-bold text-xs rounded-md transition-shadow shadow-[0_10px_15px_rgba(44,128,0,0.6)]"
              style={{ backgroundColor: "#3F8E00", paddingTop: "1rem", paddingBottom: "1rem" }}
            >
              Submit {'>'}
            </button>
          </form>
        </div>
      </div>
      <footer className="bg-[#1B1B1B] py-4 mt-10">
        <div className="text-center text-gray-400 flex items-center justify-center space-x-2">
          <span>Made with</span>
          <FaHeart className="text-red-600" />
        </div>
      </footer>
    </main>
  );
}

export default GetInTouch;
