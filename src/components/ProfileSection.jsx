import React from "react";
import { FaLinkedinIn, FaBehance, FaTwitter } from "react-icons/fa";

function ProfileSection() {
  return (
    <section
      className="bg-[#121212] text-white font-mono overflow-hidden"
      style={{ margin: "0 auto" }}
    >
      <nav
        className="flex justify-between items-center text-lg tracking-widest rounded-b-md"
        style={{
          margin: "0 auto",
          borderBottomRightRadius: "8px",
          borderBottomLeftRadius: "8px",
          maxWidth: "1300px",
          height: "70px",
          paddingLeft: "3rem",
          paddingRight: "3rem",
          backgroundColor: "#222222",
          color: "#999999",
        }}
      >
        <div className="flex space-x-16 text-gray-400">
          <a className="hover:text-white" href="#">
            Home
          </a>
          <a className="hover:text-white" href="#">
            Case Studies
          </a>
          <a className="hover:text-white" href="#">
            Testimonials
          </a>
          <a className="hover:text-white" href="#">
            Recent work
          </a>
          <a className="hover:text-white" href="#">
            Get In Touch
          </a>
        </div>
        <div className="flex space-x-6 text-gray-600">
          <a aria-label="LinkedIn" className="hover:text-white font-bold text-sm" href="#">
            <FaLinkedinIn className="text-lg" />
          </a>
          <a aria-label="Behance" className="hover:text-white font-bold text-sm" href="#">
            <FaBehance className="text-lg" />
          </a>
          <a aria-label="Twitter" className="hover:text-white font-bold text-sm" href="#">
            <FaTwitter className="text-lg" />
          </a>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto px-6 py-16 flex gap-16 h-[460px]">
        <section className="md:flex-1 flex flex-col justify-center select-text mt-16">
          <h1 className="text-white text-5xl font-extrabold mb-4">Biswajit Sahoo</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
            Associate Software Engineer with 2+ years of experience in HTML, CSS, React.js, Java, MySQL, and Spring Boot. Skilled in developing responsive interfaces and optimizing performance, with a focus on delivering high-quality software solutions. Possesses a strong background in agile methodologies, ensuring efficient and effective project delivery.
          </p>
          <button className="bg-[#3ea300] text-white font-extrabold text-xl px-10 py-5 rounded-md shadow-[0_10px_20px_rgba(62,163,0,0.6)] hover:brightness-110 transition w-max">
            Let’s get started <span className="inline-block ml-1">›</span>
          </button>
        </section>
        <section className="md:flex-1 flex justify-center md:justify-end select-none">
          <img
            alt="Smiling man wearing a light blue checkered button-up shirt, facing forward with a neutral gray background"
            className="rounded-full object-cover w-96 h-96"
            height="400"
            src="https://i.postimg.cc/FRgj1tf2/sonu-pass-photo.png"
            width="400"
          />
        </section>
      </main>
      <section className="max-w-6xl mx-auto px-6 select-none pb-8 mt-12">
        <p className="text-gray-400 text-sm mb-6 font-mono select-text">Worked with</p>
        <div className="flex flex-wrap gap-6 justify-center md:justify-center max-w-5xl mx-auto">
          <img
            alt="Tata Consultancy Services logo"
            className="object-contain grayscale opacity-70"
            height="60"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Tata_Consultancy_Services_Logo.svg"
            width="120"
          />
          <img
            alt="Infosys logo"
            className="object-contain grayscale opacity-70"
            height="60"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Infosys_logo.svg"
            width="120"
          />
          <img
            alt="Wipro logo"
            className="object-contain grayscale opacity-70"
            height="60"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Wipro_Logo.svg"
            width="120"
          />
          <img
            alt="HCL Technologies logo"
            className="object-contain grayscale opacity-70"
            height="60"
            src="https://upload.wikimedia.org/wikipedia/commons/8/8e/HCL_Technologies_Logo.svg"
            width="120"
          />
        </div>
      </section>
    </section>
  );
}

export default ProfileSection;
