import React from 'react'

const Hero = () => {
  return (
    <div >

  <div className='flex justify-center items-center h-full'>
    <img src="images/Focus.png" alt="" className='w-[100%] relative inset-0 -top-40'/>
    
    <div className='absolute top-[6%] translate-x-[5%] flex right-[15%]'>
              <div className='w-full md:w-1/2 flex flex-col justify-center pl-[15%]'>
        <p>Hello! I,m</p>
        <h1 className='text-6xl font-bold'>Jbxsbcx Sharma</h1>
        <p>Currently working for abc technologies</p>
        </div>
        <div className='w-full md:w-1/2'>
        <img src="images/heroImg.png" alt="" className='w-[900px]'/>
        </div>

    </div>
  </div>
     




    </div>
  )
}

export default Hero
