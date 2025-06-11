import React from 'react';

const MID_CONFIG = {
  titleLine1: 'LOREM IPSUM IS SIMPLY DUMMY',
  titleLine2: 'TEXT OF THE PRINTING AND TYPESETTING',
  paragraph:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  buttonText: 'LOREM IPSUM SIMPLY',
  cards: [
    { title: 'Lorem Ipsum Simp' },
    { title: 'Lorem' },
    { title: 'Ipsum Card' },
    { title: 'Typeset Card' },
  ],
};

// Custom card positions
const cardStyles = [
  'left-[35%] top-[20%] z-[30]',
  'left-[25%] top-[55%] z-[20]',
  'left-[55%] top-[45%] z-[30]',
  'left-[65%] top-[10%] z-[20]',
];

const MidSection = () => {
  return (
    <section className="relative w-full bg-white py-20 px-4 sm:px-10 md:px-20 flex flex-col md:flex-row items-start justify-between gap-12 md:gap-16">
      
      {/* Cards Section */}
      <div className="relative w-full md:w-[60%] h-[500px] sm:h-[550px] lg:h-[600px]">
        {MID_CONFIG.cards.map((card, index) => (
          <div
            key={index}
            className={`absolute ${cardStyles[index]} 
              w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 
              bg-white/30 backdrop-blur-md shadow-xl 
              flex flex-col items-center justify-center 
              rounded transition hover:scale-105 p-4`}
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-300 rounded-md mb-3" />
            <p className="text-center text-gray-700 text-sm font-medium">{card.title}</p>
          </div>
        ))}
      </div>

      {/* Text Section */}
      <div className="w-full md:w-[40%] text-center md:text-left flex flex-col justify-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
          {MID_CONFIG.titleLine1}
          <br />
          {MID_CONFIG.titleLine2}
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
          {MID_CONFIG.paragraph}
        </p>
        <button className="bg-black text-white px-6 py-2 text-sm hover:bg-gray-800 transition rounded-sm self-center md:self-start">
          {MID_CONFIG.buttonText}
        </button>
      </div>
    </section>
  );
};

export default MidSection;
