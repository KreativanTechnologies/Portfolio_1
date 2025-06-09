export default function AboutMe() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 py-8 lg:py-16 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20 mt-20 text-center md:text-left">

         
          <div className="md:col-span-2 lg:col-span-1 w-">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-center lg:text-left md:mb-10">About me</h1>
          </div>

          
          <div className="space-y-6 lg:space-y-8">
            <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed">
              Multi-disciplinary product designer specializing in UI, UX research, and visual design, based in Spain.
            </p>
            <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed">I speak business and tech.</p>
            <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed">
              I work in the fields of UI/UX design and art direction.
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <img
                src="images/aboutImg.png"
                alt=""
                className="object-cover rounded-lg grayscale"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
