import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
const page = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Home Page</h1>
        <p className="text-lg text-gray-600">This is the main landing page of our application.</p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default page