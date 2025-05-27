import React, { useState, useEffect, useRef } from "react";
import { FaLinkedinIn, FaBehance, FaTwitter } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element && headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMenuOpen(false);
    }
  };

  return (
    <nav
      ref={headerRef}
      className="bg-gray-900 sticky top-0 left-0 right-0 z-50"
    >
      {/* Mobile menu button */}
      <div className="md:hidden px-4 py-4 flex justify-end relative z-[70]">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none p-2"
          aria-label="Toggle menu"
          style={{ touchAction: "manipulation" }}
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-900 z-[60] ${
          menuOpen ? "block" : "hidden"
        } transition-all duration-300 ease-in-out overflow-y-auto`}
      >
        <div className="min-h-full pt-20 px-6 pb-8 flex flex-col space-y-6">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="text-white text-lg py-2 cursor-pointer"
          >
            Home
          </a>
          <a
            href="#case-studies"
            onClick={(e) => handleScroll(e, "#case-studies")}
            className="text-white text-lg py-2 cursor-pointer"
          >
            Case Studies
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleScroll(e, "#testimonials")}
            className="text-white text-lg py-2 cursor-pointer"
          >
            Testimonials
          </a>
          <a
            href="#recent-work"
            onClick={(e) => handleScroll(e, "#recent-work")}
            className="text-white text-lg py-2 cursor-pointer"
          >
            Recent work
          </a>
          <a
            href="#get-in-touch"
            onClick={(e) => handleScroll(e, "#get-in-touch")}
            className="text-white text-lg py-2 cursor-pointer"
          >
            Get In Touch
          </a>
          <div className="flex space-x-8 pt-4">
            <a
              aria-label="LinkedIn"
              className="text-white text-xl"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              aria-label="Behance"
              className="text-white text-xl"
              href="https://behance.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance />
            </a>
            <a
              aria-label="Twitter"
              className="text-white text-xl"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex justify-center space-x-10 py-4 text-lg max-w-5xl mx-auto px-4">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="text-white transition truncate px-4 cursor-pointer hover:text-gray-300"
        >
          Home
        </a>
        <a
          href="#case-studies"
          onClick={(e) => handleScroll(e, "#case-studies")}
          className="text-white transition truncate px-4 cursor-pointer hover:text-gray-300"
        >
          Case Studies
        </a>
        <a
          href="#testimonials"
          onClick={(e) => handleScroll(e, "#testimonials")}
          className="text-white transition truncate px-4 cursor-pointer hover:text-gray-300"
        >
          Testimonials
        </a>
        <a
          href="#recent-work"
          onClick={(e) => handleScroll(e, "#recent-work")}
          className="text-white transition truncate px-4 cursor-pointer hover:text-gray-300"
        >
          Recent work
        </a>
        <a
          href="#get-in-touch"
          onClick={(e) => handleScroll(e, "#get-in-touch")}
          className="text-white transition truncate px-4 cursor-pointer hover:text-gray-300"
        >
          Get In Touch
        </a>
        <div className="flex space-x-8 ml-8 text-white">
          <a
            aria-label="LinkedIn"
            className="transition font-bold text-xl hover:text-gray-300"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            aria-label="Behance"
            className="transition font-bold text-xl hover:text-gray-300"
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance />
          </a>
          <a
            aria-label="Twitter"
            className="transition font-bold text-xl hover:text-gray-300"
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
