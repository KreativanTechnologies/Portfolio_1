const Section3 = () => {
  return (
    <div className="relative">
      <div className="w-full h-[800px] overflow-hidden mt-20">
        <img src="/images/builderSection3.png" alt="Room Background" className="w-full h-full object-cover" />
      </div>

      <div className="flex justify-center h-48 md:h-32">
        <div className="bg-orange-500 p-6 h-fit py-10 w-[80%] absolute translate-x-1 -translate-y-1/2 text-white rounded-md">
       
          <div className="text-center mb-6 text-2xl md:text-3xl font-semibold">Your Dream Space is Just a Step Away</div>

         
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-1">
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input type="text" id="name" className="w-full p-3 rounded-xl outline-none text-black" />
            </div>
            <div className="flex-1">
              <label htmlFor="project" className="block mb-2">
                Select Project
              </label>
              <input type="text" id="project" className="w-full p-3 rounded-xl outline-none text-black" />
            </div>
            <div className="flex-1">
              <label htmlFor="contact" className="block mb-2">
                Contact No.
              </label>
              <input type="number" id="contact" className="w-full p-3 rounded-xl outline-none text-black" />
            </div>
            {/* Submit button */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[95%] sm:left-auto sm:translate-x-0 sm:right-[10%] sm:top-[90%]">
              <button className="w-full p-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors min-w-[200px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
