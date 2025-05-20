import React, { useState } from "react";
import { FaLinkedinIn, FaBehance, FaTwitter } from "react-icons/fa";

function ProfileSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section id="home" className="bg-black min-h-screen pt-20">
      <nav className="bg-gray-900 flex justify-center space-x-10 py-4 text-lg max-w-7xl mx-auto px-6 overflow-hidden whitespace-nowrap fixed top-0 left-0 right-0 z-50">
        <a
          href="#home"
          className="text-white transition truncate px-4 cursor-pointer hover:text-gray-300"
        >
          Home
        </a>
        <a
          href="#case-studies"
          className="text-white transition truncate px-4 cursor-pointer hover:text-gray-300"
        >
          Case Studies
        </a>
        <a
          href="#testimonials"
          className="text-white transition truncate px-4 cursor-pointer hover:text-gray-300"
        >
          Testimonials
        </a>
        <a
          href="#recent-work"
          className="text-white transition truncate px-4 cursor-pointer hover:text-gray-300"
        >
          Recent work
        </a>
        <a
          href="#get-in-touch"
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
      </nav>

      <main className="bg-black mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-16 max-w-5xl">
        <section className="flex-1 max-w-lg md:max-w-md" style={{ marginTop: 0 }}>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Biswajit Sahoo
          </h1>
          <p className="mb-10 leading-relaxed text-base md:text-lg text-white">
            Associate Software Engineer with 2+ years of experience in HTML, CSS,
            React.js, Java, MySQL, and Spring Boot. Skilled in developing responsive
            interfaces and optimizing performance, with a focus on delivering
            high-quality software solutions. Possesses a strong background in agile
            methodologies, ensuring efficient and effective project delivery.
          </p>
          <button className="bg-[#3ea300] text-white font-semibold text-base md:text-lg px-8 py-4 rounded-md shadow-[0_10px_20px_rgba(62,163,0,0.6)] hover:shadow-[0_10px_30px_rgba(62,163,0,0.8)] transition flex items-center gap-3">
            <span className="font-bold">Let’s get started</span>
            <svg
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </section>
        <section className="flex-1 flex justify-center md:justify-end">
          <img
            alt="Portrait photo of a man with short hair wearing a dark shirt, smiling with a plain light background"
            className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover"
            height={384}
            src="https://i.postimg.cc/FRgj1tf2/sonu-pass-photo.png"
            width={384}
          />
        </section>
      </main>

      <footer className="max-w-5xl mx-auto px-6 py-6 flex flex-col items-start gap-4 bg-black">
        <p className="text-sm text-gray-400">Worked with</p>
        <div className="flex items-center justify-start gap-16 w-full pl-20">
          <a href="https://creuto.com/" target="_blank" rel="noopener noreferrer">
            <img
              alt="Creuto logo in dark gray on black background"
              className="w-[100px] opacity-40"
              height={40}
              src="https://i.postimg.cc/CxM72x9t/Screenshot-43.png"
              width={100}
              style={{ height: 40 }}
            />
          </a>
          <img
            alt="Indoplus Private Limited logo in dark gray on black background"
            className="w-[100px] h-[40px] object-contain opacity-40"
            height={40}
            src="https://i.postimg.cc/nrgxPWhS/ip.jpg"
            width={100}
          />
          <img
            alt="TCS logo in dark gray on black background"
            className="w-[100px] h-[40px] object-cover opacity-40"
            height={40}
            src="https://i.postimg.cc/G3kZw9Sh/tcs.png"
            width={100}
          />
          <img
            alt="Infosys logo in dark gray on black background"
            className="w-[100px] h-[40px] object-cover opacity-40"
            height={40}
            src="https://i.postimg.cc/kM0K8gn8/infy.png"
            width={100}
          />
        </div>
      </footer>
    </section>
  );
}
export default ProfileSection;