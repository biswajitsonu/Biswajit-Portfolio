import React, { useEffect, useState } from "react";

function ProfileSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNameVisible, setIsNameVisible] = useState(false);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const nameText = "Biswajit Sahoo";

  const descriptionText = `Associate Software Engineer with 2+ years of experience in HTML, CSS,
React.js, Java, MySQL, and Spring Boot. Skilled in developing responsive
interfaces and optimizing performance, with a focus on delivering
high-quality software solutions. Possesses a strong background in agile
methodologies, ensuring efficient and effective project delivery.`;

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("home");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setIsNameVisible(false);
          setIsDescriptionVisible(false);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      setIsNameVisible(true);
      const timer = setTimeout(() => {
        setIsDescriptionVisible(true);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setIsNameVisible(false);
      setIsDescriptionVisible(false);
    }
  }, [isVisible]);

  const renderAnimatedText = (text, isVisible) => {
    const cleanedText = text.replace(/\s+/g, ' ').trim();
    const words = cleanedText.split(" ");
    return words.map((word, index) => (
      <span
        key={index}
        className={`inline opacity-0 transform translate-y-2 transition-all duration-500 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : ""
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {word}{index !== words.length - 1 ? " " : ""}
      </span>
    ));
  };

  return (
    <section
      id="home"
      className={`bg-black min-h-screen pt-0 ${
        isVisible ? "animate-fadeIn" : "opacity-0"
      }`}
    >
      <main
        className={`bg-black mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-16 max-w-5xl transition-opacity duration-700 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <section className="flex-1 max-w-lg md:max-w-md" style={{ marginTop: 0 }}>
          <h1
            className={`text-white text-4xl md:text-5xl font-extrabold mb-6 leading-tight transition-opacity duration-700 ease-out transform`}
          >
            {renderAnimatedText(nameText, isNameVisible)}
          </h1>
          <p
            className={`mb-10 leading-relaxed text-base md:text-lg text-white`}
          >
            {renderAnimatedText(descriptionText, isDescriptionVisible)}
          </p>
          <button className="bg-[#3ea300] text-white font-semibold text-base md:text-lg px-8 py-4 rounded-md shadow-[0_10px_20px_rgba(62,163,0,0.6)] hover:shadow-[0_10px_30px_rgba(62,163,0,0.8)] transition flex items-center gap-3">
            <span className="font-bold">Let's get started</span>
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
            alt="Portrait of a man with short hair wearing a dark shirt, smiling with a plain light background"
            className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover"
            height={384}
            src="https://i.postimg.cc/FRgj1tf2/sonu-pass-photo.png"
            width={384}
          />
        </section>
      </main>

      <footer className="max-w-5xl mx-auto px-6 py-6 flex flex-col gap-4 bg-black">
        <p className="text-sm text-gray-400 mb-2">Worked with</p>
        <div className="overflow-hidden relative w-[720px] mx-auto">
          <div
            className="flex animate-slideLeft gap-8"
            onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
            onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
          >
            <a href="https://creuto.com/" target="_blank" rel="noopener noreferrer">
              <img
                alt="Creuto logo in dark gray on black background"
                className="w-[180px] h-[100px] object-contain opacity-60"
                height={100}
                src="https://i.postimg.cc/CxM72x9t/Screenshot-43.png"
                width={180}
              />
            </a>
            <a href="https://indoplus.net/" target="_blank" rel="noopener noreferrer">
              <img
                alt="Indoplus Private Limited logo in dark gray on black background"
                className="w-[180px] h-[100px] object-contain opacity-60"
                height={100}
                src="https://i.postimg.cc/nrgxPWhS/ip.jpg"
                width={180}
              />
            </a>
            <a href="https://www.tcs.com/" target="_blank" rel="noopener noreferrer">
              <img
                alt="TCS logo in dark gray on black background"
                className="w-[180px] h-[100px] object-contain opacity-60"
                height={100}
                src="https://i.postimg.cc/G3kZw9Sh/tcs.png"
                width={180}
              />
            </a>
            <a href="https://www.infosys.com/" target="_blank" rel="noopener noreferrer">
              <img
                alt="Infosys logo in dark gray on black background"
                className="w-[180px] h-[100px] object-contain opacity-60"
                height={100}
                src="https://i.postimg.cc/kM0K8gn8/infy.png"
                width={180}
              />
            </a>
            {/* Repeat logos for seamless loop */}
            <a href="https://creuto.com/" target="_blank" rel="noopener noreferrer">
              <img
                alt="Creuto logo in dark gray on black background"
                className="w-[180px] h-[100px] object-contain opacity-60"
                height={100}
                src="https://i.postimg.cc/CxM72x9t/Screenshot-43.png"
                width={180}
              />
            </a>
            <a href="https://indoplus.net/" target="_blank" rel="noopener noreferrer">
              <img
                alt="Indoplus Private Limited logo in dark gray on black background"
                className="w-[180px] h-[100px] object-contain opacity-60"
                height={100}
                src="https://i.postimg.cc/nrgxPWhS/ip.jpg"
                width={180}
              />
            </a>
            <a href="https://www.tcs.com/" target="_blank" rel="noopener noreferrer">
              <img
                alt="TCS logo in dark gray on black background"
                className="w-[180px] h-[100px] object-contain opacity-60"
                height={100}
                src="https://i.postimg.cc/G3kZw9Sh/tcs.png"
                width={180}
              />
            </a>
            <a href="https://www.infosys.com/" target="_blank" rel="noopener noreferrer">
              <img
                alt="Infosys logo in dark gray on black background"
                className="w-[180px] h-[100px] object-contain opacity-60"
                height={100}
                src="https://i.postimg.cc/kM0K8gn8/infy.png"
                width={180}
              />
            </a>
          </div>
        </div>

        <style>{`
          @keyframes slideLeft {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-slideLeft {
            animation: slideLeft 20s linear infinite;
            animation-play-state: running;
          }
          .animate-slideLeft:hover {
            animation-play-state: paused;
          }
        `}</style>
      </footer>
    </section>
  );
}

export default ProfileSection;
