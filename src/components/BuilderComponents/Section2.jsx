import { data } from 'autoprefixer'
import { list } from 'postcss'
import React from 'react'

const Section2 = () => {

 const   data=[
        {
            head:"1st workk",
            desc:"ЖК RAMS CITY – RAMS CITY is a premium residential and commercial development designed with modern urban lifestyles in mind. Located in a prime area, the project blends contemporary architecture with functional design to create a harmonious living environment. ",
            list:[
                "State-of-the-art residential apartments with eco-friendly design." , "Integrated commercial space with retail outlets and offices.","Landscaped gardens, jogging tracks, and community areas.","Located near major landmarks and easily accessible by public transport.!"
            ],
            img:"images/builderImg1.png"
        }
    ]
  return (
    <div className=' px-5'>
      <div className='bg-black text-white p-5 md:p-10'>
         
        {
            data.map((items,index)=>(
                <div className='flex flex-col lg:flex-row  gap-5'>
                   <div className='w-full lg:w-[40%] flex flex-col justify-center p-6 lg:pl-20'>
                     <h1 className='text-2xl md:text-3xl'>{items.head}</h1>
                     <div className='h-1 w-[150px] md:w-[200px] bg-white mt-2'></div>
                    <p className='mt-10 text-sm sm:text-md'>{items.desc}</p>
                    {
                        items.list.map((subItems,index)=>(
                            <div className='mt-4'>-{subItems}</div>
                        ))
                    }
                   </div>
                   <div className='w-full lg:w-[60%] flex justify-center'>
<img src={items.img} alt="" className='h-full w-full object-fill' />
                   </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Section2
