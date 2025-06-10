
const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Gradient Background Shapes */}
      <div className="absolute inset-0 -top-40">
     <img src="images/Focus.png" alt="" className="min-w-[700px]"/>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-4 lg:space-y-6">
            <div className="space-y-2 lg:space-y-4">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-light">Hello! I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Jbxsbcx Sharma
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light max-w-md mx-auto lg:mx-0">
                Currently working for abc technologies
              </p>
            </div>
          </div>

          {/* Right Content - Image and Signature */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Profile Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px]">
                <img
                  src="/images/heroImg.png"
                  alt="Jbxsbcx Sharma"
                  
                  className="object-cover w-full object-center rounded-lg absolute right-64 -top-24"
                  
                />
              </div>

              {/* Signature */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8">
                {/* <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-800 italic">Antonio Davinci</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Hero
