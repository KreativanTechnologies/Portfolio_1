import Navbar from '../../components/Navbar'
import Footer from '../../Components/Footer'
const ContactForm = () => {
  return (
    <>
    <Navbar />
    <div className="responsivewidth min-h-screen  py-12 px-4 relative mt-20 p-10">
      <div className="max-w-2xl mx-auto ">
     

<div className="absolute -translate-x-[17%] -translate-y-[72%]">
  <img src="images/contactImg.png" alt="" className="w-96"/>
</div>
  
        <div className="bg-black rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-8 italic">Contact Us</h2>

          <form className="space-y-6">
          
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-4 rounded-lg border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-lg"
              />
            </div>

         
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-4 rounded-lg border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-lg"
              />
            </div>

            
            <div>
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-4 rounded-lg border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-lg"
              />
            </div>


            <div>
              <input
                type="text"
                placeholder="Service Interested In"
                className="w-full px-4 py-4 rounded-lg border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-lg"
              />
            </div>

       
            <div>
              <textarea
                placeholder="Any Additional Information?"
                rows="4"
                className="w-full px-4 py-4 rounded-lg border-0 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-lg resize-none"
              ></textarea>
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="consent"
                className="mt-1 w-5 h-5 rounded border-2 border-white bg-white focus:ring-2 focus:ring-white"
              />
              <label htmlFor="consent" className="text-white text-sm leading-relaxed">
                I consent to Lollie's Handmade contacting me via the information that I have provided.
              </label>
            </div>

           
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-white text-black py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default ContactForm
