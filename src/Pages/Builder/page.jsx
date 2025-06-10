import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import Hero from '../../components/Ind/Hero.jsx'
const page = () => {
  return (
    <div>
      <Navbar />

      <div>
        <Hero />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default page