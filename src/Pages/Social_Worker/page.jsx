import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Page() {
  return (
    <div>
      <Navbar />

      {/* Fullscreen background section */}
      <div
        className="w-full h-screen bg-center bg-no-repeat bg-cover flex items-center"
  style={{
          backgroundImage: "url('/public/image2.png')",
          // backgroundSize: '100%' // adjust zoom
        }}
      >
        <div className="w-full max-w-screen-lg pl-4 sm:pl-8 md:pl-16 text-left">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold drop-shadow-lg mb-6 leading-tight">
            Making a Difference,<br />Once Life at a Once
          </h1>
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
            Join The Mission
          </button>
        </div>
      </div>

      {/* Content Section */}
<div className="w-full py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
    
    {/* Left Side - Heading */}
    <div className=" text-left">
      <h2 className="text-3xl sm:text-4xl font-semibold">
        United by<br /> Vision and <br />Purpose
      </h2>
    </div>

    {/* Divider (vertical line for desktop, horizontal for mobile) */}
    <div className="w-full h-px bg-gray-300 md:w-px md:h-32 m-[20px]"></div>



    {/* Right Side - Text and Button */}
    <div className="w-full md:w-1/2 text-left">
      <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
        We believe in building a world where every young person has the tools to thrive. Through outreach programs,
        healthcare support, and learning initiatives, we’re nurturing futures and restoring dignity — one project at a time.
      </p>
      <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition">
        GET INVOLVED
      </button>
    </div>
  </div>
</div>



      <Footer />
    </div>
  );
}

export default Page;
