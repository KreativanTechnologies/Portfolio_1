const Hero = () => {
  return (
<div className="relative  w-full bg-white overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute  right-[30%] md:right-0 md:-top-[13%] xl:-top-40 max-sm:right-[10%] max-sm:-top-[5%] sm:right-[15%] sm:-top-[8%] overflow-hidden">
        <img
          src="/images/Focus.png"
          alt="Background Gradient"
          className=""
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between container mx-auto px-6 lg:px-20 max-sm:px-4 max-sm:pt-8 max-sm:pb-8">
        <div className="flex-1 xl:absolute  xl:top-[20%]">
          <p className="text-lg italic text-gray-700 ">Hello! I'm</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 font-serif max-sm:text-3xl ">
            Jbxsbcx Sharma
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-sm:text-base max-sm:mt-2">
            Currently working for abc technologies
          </p>
        </div>

        <div className="relative flex-1 flex justify-center lg:justify-end md:-top-[1%] lg:top-[12%] xl:top-[9%] md:right-[7%] max-sm:mb-4 max-sm:top-0 max-sm:right-0">
          <img
            src="/images/heroImg.png"
            alt="Jbxsbcx Sharma"
            className="object-cover max-sm:w-[280px] max-sm:h-auto max-sm:max-w-full"
          />

          {/* Signature (Optional) */}
          <img
            src="/images/Paraf.png" 
            alt="Antonio Davinci"
            className="absolute -right-[1%] top-[10%] sm:right-[14%] sm:top-[20%] md:right-[6%]  md:top-[20%] w-28 sm:w-36 lg:w-42 z-20"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
