import React from 'react';

// ✅ CONFIGURATION CONSTANTS
const HERO_CONFIG = {
  bgFrom: '#3a3a3a',
  bgTo: '#1f1f1f',
  circleOpacity: '0.03',
  svgWaveColor: '#ffffff',

  titleLine1: 'LOREM IPSUM IS SIMPLY DUMMY',
  titleLine2: 'TEXT OF THE PRINTING',
  paragraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  buttonText: 'COMMOD US',
};

const CircleSet = ({ positionClass, size }) => (
  <div
    className={`absolute ${positionClass} z-0 flex items-center justify-center`}
    style={{
      width: size,
      height: size,
    }}
  >
    <div
      className="rounded-full absolute"
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        opacity: HERO_CONFIG.circleOpacity,
      }}
    ></div>
    <div
      className="rounded-full absolute"
      style={{
        width: '90%',
        height: '90%',
        backgroundColor: '#ffffff',
        opacity: HERO_CONFIG.circleOpacity,
      }}
    ></div>
    <div
      className="rounded-full absolute"
      style={{
        width: '80%',
        height: '80%',
        backgroundColor: '#ffffff',
        opacity: HERO_CONFIG.circleOpacity,
      }}
    ></div>
  </div>
);

const HeroSection = () => {
  const {
    bgFrom,
    bgTo,
    svgWaveColor,
    titleLine1,
    titleLine2,
    paragraph,
    buttonText,
  } = HERO_CONFIG;

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white px-4 sm:px-6 md:px-10"
      style={{ backgroundImage: `linear-gradient(to bottom, ${bgFrom}, ${bgTo})` }}
    >
      {/* Circles with different sizes */}
      <CircleSet positionClass="top-[-20vw] right-[-5vw]" size="50vw" />
<CircleSet positionClass="bottom-[-5vw] left-[-5vw]" size="35vw" />


      {/* Content */}
      <div className="z-10 text-center max-w-2xl sm:max-w-3xl mx-auto">
        <h1 className="whitespace-nowrap text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-2 leading-snug">
          {titleLine1}
        </h1>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-snug sm:leading-tight">
          {titleLine2}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8">
          {paragraph}
        </p>
        <button className="bg-white text-black text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2 hover:bg-gray-200 transition rounded-sm">
          {buttonText}
        </button>
      </div>

      {/* Bottom SVG wave */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill={svgWaveColor}
            d="M0,224L48,229.3C96,235,192,245,288,240C384,235,480,213,576,192C672,171,768,149,864,154.7C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
