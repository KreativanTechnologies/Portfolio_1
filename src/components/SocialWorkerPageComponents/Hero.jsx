

const Hero = () => {
  // You can later replace this with API response or props
  const heroData = {
    bgImage: "Images/SocialWork/Image2.png",
    titleLine1: "Making a Difference,",
    titleLine2: "One Life at a Time",
    buttonText: "Join The Mission",
  };

  return (
    <div>
      <div
        className="w-full h-screen bg-center bg-no-repeat bg-cover flex items-center"
        style={{
          backgroundImage: `url(${heroData.bgImage})`,
        }}
      >
        <div className="w-full max-w-screen-lg pl-4 sm:pl-8 md:pl-16 text-left">
          <h1 className="text-white whitespace-pre-line text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold drop-shadow-lg mb-6 leading-tight">
            {heroData.titleLine1}
            <br />
            {heroData.titleLine2}
          </h1>
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
            {heroData.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

