import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../Components/Footer'
import Hero from '../../components/MyVision/HeroCrousel'
import Second from '../../components/MyVision/SecondSession'
import Third from '../../components/MyVision/ThirdSession'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='pt-10'>
      <Second />
      </div>
      <div>
      <Third />
      </div>
      <Footer />
    </div>
  )
}

export default page