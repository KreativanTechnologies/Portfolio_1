import React from 'react'
import Hero from '../../components/Ind/Hero';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MidSection from '../../components/Ind/Midsection';


const page = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <MidSection />
    <Footer/>
    </>
  )
}

export default page