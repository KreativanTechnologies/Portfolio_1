import React from 'react';

export default function Hero({
  heading = 'LOREM IPSUM IS SIMPLY DUMMY',
  subtext = 'TEXT OF THE PRINTING',
  description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever`,
  buttonText = 'Learn More',
  buttonUrl = '#',
  gradient = [
    '#000507CC 80%',
    '#3C3D3FC4 70%',
    '#010505B0 69%',
    '#00000091 57%',
  ],
}) {
  const gradientStyle = `linear-gradient(180deg, ${gradient.join(', ')})`;

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden flex justify-center items-center px-4 py-8"
      style={{
        background: gradientStyle,
        backgroundBlendMode: 'multiply',
      }}
    >
      <div
        className="flex flex-col items-center text-white text-center w-full "
        style={{
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <h1 className="uppercase font-extrabold leading-[100%] tracking-[0%]
          text-[32px] sm:text-[40px] md:text-[45px] lg:text-[50.47px]">
          {heading}
        </h1>
        <h2 className="uppercase font-extrabold leading-[100%] tracking-[0%] mt-1
          text-[32px] sm:text-[40px] md:text-[45px] lg:text-[50.47px]">
          {subtext}
        </h2>
        <p className="mt-4 mb-6 font-semibold tracking-[0%]
          text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14.34px]
          leading-[22px] md:leading-[24px] lg:leading-[26.47px] max-w-[800px]">
          {description}
        </p>
        <a
          href={buttonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 px-6 py-3 bg-white text-black rounded-md font-semibold 
            hover:bg-gray-200 transition duration-300 text-sm sm:text-base"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}