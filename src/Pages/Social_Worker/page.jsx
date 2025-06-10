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
          backgroundImage: "url('/Images/SocialWork/Image2.png')",
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

      {/* Vision & Purpose Section */}
      <div className="w-full py-16 px-6 bg-[#f4f3f3]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
          {/* Left - Heading */}
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              United by<br /> Vision and <br />Purpose
            </h2>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-300 md:w-px md:h-32 my-[20px] mx-[5px]"></div>

          {/* Right - Text and Button */}
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

      {/* Social Work Section */}
     <div className="w-full py-12 bg-white">
  <h2 className="text-center text-black font-bold text-[40px] leading-[100%] tracking-[0] font-['DM_Sans'] mb-10">
    SOCIAL WORK
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 sm:px-8 md:px-2 max-w-[1400px] mx-auto">

    {/* LEFT COLUMN */}
    <div className="flex flex-col gap-6">
      <img src="/Images/SocialWork/row_1_col_1.jpg" alt="Work 1" className="w-full h-64 object-cover rounded-lg break-inside-avoid" />
      <img src="/Images/SocialWork/row_2_col_2.jpg" alt="Work 3" className="w-full h-72 object-cover rounded-lg break-inside-avoid" />
      <div className="relative h-[1046px] rounded-lg overflow-hidden break-inside-avoid">
        <img
          src="/Images/SocialWork/row_3_col_1.jpg"
          alt="Work 4"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-start justify-center px-6 py-8 text-left">
          <h2 className="text-left font-[400] text-[30px] leading-[30px] tracking-[0px] font-['Bebas_Neue'] text-white mb-4">
            LOCAL HEROES.
          </h2>
          <h3 className="text-white font-bold leading-snug text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] max-w-[500px] mb-6">
            A passionate social worker, he empowers underserved youth through education, health.
          </h3>
          <button className="bg-white text-black font-semibold px-5 py-2 rounded-md hover:bg-gray-200 transition">
            View Project
          </button>
        </div>
      </div>
      <img src="/Images/SocialWork/row_4_col_1.jpg" alt="Work 1" className="w-full h-64 object-cover rounded-lg break-inside-avoid" />
    </div>

    {/* RIGHT COLUMN */}
    <div className="flex flex-col gap-6">
      <img src="/Images/SocialWork/row_1_col_2.jpg" alt="Work 2" className="w-full h-80 object-cover rounded-lg break-inside-avoid" />
      <img src="/Images/SocialWork/row_2_col_1.png" alt="Work 4" className="w-full h-96 object-cover rounded-lg break-inside-avoid" />
      <img src="/Images/SocialWork/row_3_col_3.jpg" alt="Work 4" className="w-full h-96 object-cover rounded-lg break-inside-avoid" />
      <img src="/Images/SocialWork/row_4_col_2.jpg" alt="Work 4" className="w-[620px] h-[1046px] object-cover rounded-lg mx-auto break-inside-avoid" />
    </div>
  </div>
</div>


      <Footer />
    </div>
  );
}

export default Page;
