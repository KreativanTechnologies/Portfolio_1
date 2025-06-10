"use client"

export default function RamsCityHero() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo */}
      <header className="p-6">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-gray-800">
            RAMS<span className="text-orange-500">CITY</span>
          </div>
        </div>
      </header>

      {/* Main Hero Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
            <div className="space-y-8 flex flex-col justify-center">
            <div className="text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Building smart spaces for smart living.
              </h1>
            </div>

            {/* Decorative Dot Pattern */}
            <div className="flex justify-end pt-12 ">
              <div className="grid grid-cols-5 gap-1">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-gray-800 rounded-full" />
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="./Rectangle 2.png"
                alt="Modern residential building with green architecture and balconies"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 grid grid-cols-3 gap-1">
              <div className="grid grid-cols-5 gap-1">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-gray-300 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
