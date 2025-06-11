import React from 'react'
import Hero from '../../components/BuilderComponents/Hero'
import Section2 from '../../components/BuilderComponents/Section2'
import Section3 from '../../components/BuilderComponents/Section3'
import Section4 from '../../components/BuilderComponents/Section4'
import Navbar from '../../components/Navbar'
import Footer from '../../Components/Footer'

const page = () => {
  return (
<>
    <Navbar/>
      
    <Hero/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Footer/>
</>
  )
}

export default page