import React from 'react'
import Hero from '../../components/Ind/Hero';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MidSection from '../../components/Ind/Midsection';
import CardsImage from '../../components/Ind/CardsImage';
import Review from '../../components/Ind/Review';


const page = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <MidSection />
    <CardsImage />
    <Review />
    <Footer/>
    </>
  )
}

export default page