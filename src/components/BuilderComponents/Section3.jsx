import React from 'react'

const Section3 = () => {
    const data=[
        {
            head:"Integrated Living Spaces",
            desc:"Every project is envisioned as a self-sufficient ecosystem. RAMS CITY includes beautifully landscaped parks, open green areas, children’s play zones, retail outlets, and cafés — ensuring that residents have access to everything they need within walking distance. It's not just about building homes, but about building a life around them.",
            img:'images/img1.png'
        },
        {
            head:"Strategic Locations",
            desc:"Location is everything — and we choose ours carefully. Our projects are placed in well-connected zones with easy access to major highways, metro stations, schools, hospitals, and commercial hubs. This ensures convenience and long-term property value for our clients.",
            img:'images/img2.png'
        },
        {
            head:"Superior Construction Standards",
            desc:"We pride ourselves on delivering quality that lasts. With the use of high-grade materials, expert craftsmanship, earthquake-resistant design, and strict quality checks at every stage, we ensure durability, safety, and a finish that meets international standards.",
            img:'images/img3.png'
        },
        {
            head:"Superior Construction Standards",
            desc:"We pride ourselves on delivering quality that lasts. With the use of high-grade materials, expert craftsmanship, earthquake-resistant design, and strict quality checks at every stage, we ensure durability, safety, and a finish that meets international standards.",
            img:'images/img4.png'
        },
    ]

    const data2 =[
       {
        head:"URBAN HEIGHTS",
        desc:"Urban Heights is a sophisticated residential complex designed to offer comfort, convenience, and elevated living. The architecture blends modern aesthetics with practical layouts, making it ideal for families and professionals alike.",
        list:[
            "Spacious apartments with natural lighting and ventilation.",   
             "Premium amenities including a clubhouse, gym, and children's play area."

        ]
       }
    ]
  return (
    <div>

        <div className='p-5 md:p-16 relative'>
            <div className=''>
                <img src="images/section3Img.png" alt="" className='h-full w-full object-cover'/>
            </div>
            {
                data2.map((elem,index)=>(
                    <div key={index} className='md:absolute md:-translate-y-[50%]  md:-translate-x-[6%]  bg-gradient-to-b from-black to-zinc-800  text-white md:w-[50%] p-10 rounded-3xl mt-5 md:mt-0'>
                        <h1 className='text-center text-xl sm:text-2xl font-bold mb-5'>{elem.head}</h1>
                        <p className='text-sm md:text-md'>{elem.desc}</p>
                        {elem.list.map((subelem,index)=>(
                          <div className='mt-3 text-sm md:text-md'>-{subelem}</div>
                        )
                            
                        )}
                    </div>
                ))
            }


      
        </div>

        
            <div className='flex flex-col md:flex-row py-10 px-5 md:px-16 gap-8'>

                <div className='md:w-[30%]'>
                    <h1 className='md:mt-20 font-bold text-xl md:text-4xl'>Parks, Shops & Homes — All Crafted with Vision</h1>
                    <p className='font-semibold mt-5'>With decades of real estate excellence, our builder has transformed urban landscapes by designing spaces that combine comfort, connectivity, and community. RAMS CITY is not just a housing project — it’s a lifestyle destination built with passion and precision.</p>
                </div>
               <div className='md:w-[70%] grid md:grid-cols-2 gap-5'>
                 {
                    data.map((items,index)=>(
                        <div key={index} className='bg-[#F1F6F9] p-4 z-50 rounded-2xl'>
                            <div className='flex items-center gap-6'>
                                <img src={items.img} alt="" className='w-12 md:w-16'/>
                            <h1 className='font-bold'>{items.head}</h1>
                            </div>
                            <p className='mt-4'>{items.desc}</p>

                        </div>
                    ))
                }
               </div>
            </div>
      
    </div>
  )
}

export default Section3
