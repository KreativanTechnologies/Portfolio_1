import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Hero from '../../components/HomePageComponents/Hero.jsx'
import Card from '../../components/HomePageComponents/Card.jsx'
import AboutMe from '../../components/HomePageComponents/AboutMe.jsx'
const page = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the Home Page</h1>
        <p className="text-lg text-gray-600">This is the main landing page of our application.</p>
      </div> */}
      <div>
        <Hero/>
        <AboutMe/>
        <Card/>
        <Footer />
      </div>
    </div>
  )
}

export default page