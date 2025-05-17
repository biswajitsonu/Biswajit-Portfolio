import React from "react";

function CaseStudiesSection() {
  return (
    <section className="bg-white text-black px-6 py-10 max-w-7xl mx-auto">
      <section className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="font-extrabold text-2xl md:text-3xl">Case Studies</h2>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-600">
          Showcasing projects developed with React.js, Java, Spring Boot, and MySQL, focused on enhancing user engagement and application performance.
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 items-center">
        <div className="flex flex-col justify-start">
          <button className="inline-block bg-[#fff3e0] text-[#f57c00] font-semibold text-base rounded-full px-6 py-3 mb-4 w-max">
            Creuto Cloud Private Limited
          </button>
          <h3 className="font-extrabold text-2xl mb-4">Order Well (Nov 2023 - July 2024)</h3>
          <p
            className="text-lg leading-relaxed mb-8 max-w-[36rem] break-words text-gray-600"
            style={{ maxWidth: "36rem", wordBreak: "break-word", lineHeight: 1.6 }}
          >
            Developed dynamic, user-centric interfaces using React.js, contributing to a 40% increase in user engagement. Integrated Java and Spring Boot services, ensuring seamless data flow and application functionality.
            <br />
            Enhanced application performance by 30% by optimizing backend services with Spring Boot, including efficient caching strategies that reduced data retrieval times and server load.
            <br />
            Engineered and deployed custom React hooks to manage complex state logic across 10+ components, enhancing code maintainability and streamlining development processes.
            <br />
            Crafted responsive user interfaces using HTML and CSS, ensuring cross-browser compatibility and a consistent user experience.
          </p>
          <button className="bg-[#f57c00] text-white font-semibold text-base rounded px-8 py-3 shadow-[0_0_15px_rgba(245,124,0,0.7)] hover:shadow-[0_0_25px_rgba(245,124,0,0.9)] transition-shadow w-max">
            View case study {'>'}
          </button>
        </div>
        <div>
          <img
            alt="Workspace with UX Store design sketches, keyboard, pens, and orange tools on a desk"
            className="w-full max-w-[892px] h-[400px]"
            height="400"
            src="https://i.postimg.cc/pLZc9hdy/Mask-group.png"
            width="892"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 items-center">
        <div className="order-2 md:order-1">
          <img
            alt="Tablet showing color swatches and design sketches on a desk with computer and mouse"
            className="w-full max-w-[892px] h-[400px]"
            height="400"
            src="https://i.postimg.cc/MThB5SDg/Mask-group-1.png"
            width="892"
          />
        </div>
        <div className="order-1 md:order-2 flex flex-col justify-start">
          <button className="inline-block bg-[#e3f2fd] text-[#1565c0] font-semibold text-base rounded-full px-6 py-3 mb-4 w-max">
            Creuto Cloud Private Limited
          </button>
          <h3 className="font-extrabold text-2xl mb-4">TravelEase (June 2023 - October 2023)</h3>
          <p
            className="text-lg leading-relaxed mb-8 max-w-[36rem] break-words text-gray-600"
            style={{ maxWidth: "36rem", wordBreak: "break-word", lineHeight: 1.6 }}
          >
            Designed and launched TravelEase using React.js, HTML, and CSS, boosting user engagement through an intuitive and responsive interface, serving over 5,000 users.
            <br />
            Developed dynamic interfaces with React.js components, enabling real-time updates and smooth navigation, which reduced page load times by 30%.
            <br />
            Optimized application navigation with React Router, improving user flow and accessibility, leading to a 25% decrease in navigation errors.
            <br />
            Streamlined the ticket booking process by integrating an advanced online reservation system, resulting in a 50% increase in customer satisfaction and a 20% boost in ticket sales within the first quarter, with a 95% system uptime.
          </p>
          <button className="bg-[#1565c0] text-white font-semibold text-base rounded px-8 py-3 shadow-[0_0_15px_rgba(21,101,192,0.7)] hover:shadow-[0_0_25px_rgba(21,101,192,0.9)] transition-shadow w-max">
            View case study {'>'}
          </button>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col justify-start">
          <button className="inline-block bg-[#e0f2f1] text-[#26a69a] font-semibold text-base rounded-full px-6 py-3 mb-4 w-max">
            Creuto Cloud Private Limited
          </button>
          <h3 className="font-extrabold text-2xl mb-4">Smart Inventory System (Jan 2023 - Oct 2023)</h3>
          <p
            className="text-lg leading-relaxed mb-8 max-w-[36rem] break-words text-gray-600"
            style={{ maxWidth: "36rem", wordBreak: "break-word", lineHeight: 1.6 }}
          >
            Developed and maintained scalable web applications using React.js and Spring Boot, improving user engagement and system reliability.
            <br />
            Implemented efficient database schemas and optimized queries in MySQL to enhance data retrieval performance.
            <br />
            Collaborated with cross-functional teams to deliver high-quality software solutions on time.
            <br />
            Ensured responsive design and cross-browser compatibility using HTML and CSS.
          </p>
          <button className="bg-[#26a69a] text-white font-semibold text-base rounded px-8 py-3 shadow-[0_0_15px_rgba(38,166,154,0.7)] hover:shadow-[0_0_25px_rgba(38,166,154,0.9)] transition-shadow w-max">
            View case study {'>'}
          </button>
        </div>
        <div>
          <img
            alt="Computer screen showing UI design components and templates with green plant in foreground"
            className="w-full max-w-[892px] h-[400px]"
            height="400"
            src="https://i.postimg.cc/x1xcgQjg/Mask-group-2.png"
            width="892"
          />
        </div>
      </section>
    </section>
  );
}

export default CaseStudiesSection;
