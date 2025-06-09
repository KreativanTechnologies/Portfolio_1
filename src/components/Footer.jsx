"use client"
import { Facebook, Twitter, Instagram, Send } from "lucide-react"

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted")
  }

  return (
    <footer className="bg-[#303030] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">CONTACT</h2>
          <p className="text-lg font-semibold">+91-XXXXXXXXXX</p>
          <p className="text-gray-300 leading-relaxed">
            Available for project inquiries, collaborations, and consultations.
          </p>
        </div>

        {/* Office Locations Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white mb-4">Office Locations</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-white">Delhi - Head Office</h3>
              <p className="text-gray-300 text-sm">Mon-Fri: 10:00-20:00</p>
              <p className="text-gray-300 text-sm">Sat-Sun: 10:00-19:00</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Mumbai - Branch Office</h3>
              <p className="text-gray-300 text-sm">Mon-Fri: 10:00-20:00</p>
              <p className="text-gray-300 text-sm">Sat-Sun: 10:00-19:00</p>
            </div>
          </div>
        </div>

        {/* Inquiry Form and Social Media Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">Send us your inquiry</h2>
            <p className="text-gray-300 text-sm mb-4">
              Leave your number and we'll help you find the right project or partnership.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="tel"
                placeholder="Contact No."
                className="bg-gray-800 border border-gray-700 text-white placeholder-gray-400 px-3 py-2 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="space-y-3">
            <a href="#" className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-200">
              <Facebook className="h-5 w-5 text-blue-500" />
              <span className="text-gray-300">ramspromokaz</span>
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-blue-300 transition-colors duration-200">
              <Twitter className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">ramspromokaz</span>
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-pink-400 transition-colors duration-200">
              <Instagram className="h-5 w-5 text-pink-500" />
              <span className="text-gray-300">rams_qazaqstan</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
