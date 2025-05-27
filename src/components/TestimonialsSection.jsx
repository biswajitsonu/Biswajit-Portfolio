import React, { useEffect, useState } from "react";

function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("testimonials");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="testimonials"
      className={`bg-gray-900 text-white w-full transition-opacity duration-700 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ margin: "0", paddingTop: "6rem", paddingBottom: "6rem", width: "100%" }}
    >
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-center font-extrabold text-white text-2xl md:text-3xl">Testimonials</h2>
        <p className="text-center text-gray-400 mt-3 max-w-xl mx-auto text-sm md:text-base leading-relaxed two-line-truncate">
          Hear from some of our valued clients from leading Indian companies.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="border border-gray-700 rounded-md p-6 relative">
            <div className="mb-2">
              <i className="fas fa-quote-left text-white text-2xl"></i>
            </div>
            <p className="text-gray-300 leading-relaxed mb-10">
              "The team delivered exceptional quality and met all our project deadlines. Their expertise in React and Spring Boot helped us scale our platform efficiently."
            </p>
            <div className="flex items-center space-x-4">
              <img
                alt="Portrait of Rajesh Kumar, CTO of Infosys"
                className="w-10 h-10 rounded-full object-cover"
                height="40"
                src="https://randomuser.me/api/portraits/men/75.jpg"
                width="40"
              />
              <span className="font-semibold text-white">Rajesh Kumar</span>
            </div>
            <p className="text-gray-400 text-sm mt-1">CTO, Infosys</p>
          </article>
          <article className="border border-gray-700 rounded-md p-6 relative">
            <div className="mb-2">
              <i className="fas fa-quote-left text-white text-2xl"></i>
            </div>
            <p className="text-gray-300 leading-relaxed mb-10">
              "Their innovative solutions and agile approach significantly improved our product delivery timelines. Highly recommended for any tech project."
            </p>
            <div className="flex items-center space-x-4">
              <img
                alt="Portrait of Anjali Sharma, Product Manager at Tata Consultancy Services"
                className="w-10 h-10 rounded-full object-cover"
                height="40"
                src="https://randomuser.me/api/portraits/women/65.jpg"
                width="40"
              />
              <span className="font-semibold text-white">Anjali Sharma</span>
            </div>
            <p className="text-gray-400 text-sm mt-1">Product Manager, Tata Consultancy Services</p>
          </article>
          <article className="border border-gray-700 rounded-md p-6 relative">
            <div className="mb-2">
              <i className="fas fa-quote-left text-white text-2xl"></i>
            </div>
            <p className="text-gray-300 leading-relaxed mb-10">
              "Professional, reliable, and highly skilled. Their work on our backend services was instrumental in achieving our business goals."
            </p>
            <div className="flex items-center space-x-4">
              <img
                alt="Portrait of Vikram Singh, Head of Engineering at Wipro"
                className="w-10 h-10 rounded-full object-cover"
                height="40"
                src="https://randomuser.me/api/portraits/men/85.jpg"
                width="40"
              />
              <span className="font-semibold text-white">Vikram Singh</span>
            </div>
            <p className="text-gray-400 text-sm mt-1">Head of Engineering, Wipro</p>
          </article>
          <article className="border border-gray-700 rounded-md p-6 relative">
            <div className="mb-2">
              <i className="fas fa-quote-left text-white text-2xl"></i>
            </div>
            <p className="text-gray-300 leading-relaxed mb-10">
              "Their dedication and technical expertise helped us launch our new platform ahead of schedule. A pleasure to work with."
            </p>
            <div className="flex items-center space-x-4">
              <img
                alt="Portrait of Priya Patel, CEO of HCL Technologies"
                className="w-10 h-10 rounded-full object-cover"
                height="40"
                src="https://randomuser.me/api/portraits/women/75.jpg"
                width="40"
              />
              <span className="font-semibold text-white">Priya Patel</span>
            </div>
            <p className="text-gray-400 text-sm mt-1">CEO, HCL Technologies</p>
          </article>
        </div>
      </section>
    </section>
  );
}

export default TestimonialsSection;
