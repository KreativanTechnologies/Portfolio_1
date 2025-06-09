import React from 'react';

const Card = () => {
  const data = [
    {
      head: "Industrialist",
      decs:
        "Pioneering innovations in modern manufacturing. Leading industrial projects with precision and purpose.",
      img: "images/card1.png",
      isReverse:false
    },
    {
      head: "Builder",
      decs:
        "Crafting structures that stand the test of time. From blueprint to reality — a journey of excellence.",
      img: "images/card2.png",
       isReverse:true
    },
    {
      head: "Social Worker",
      decs:
        "Empowering communities through compassion and action. Driven to make a lasting, meaningful impact.",
      img: "images/card3.png",
       isReverse:false
    },
  ];

  return (
       <div className='mt-28 text-white'>
    {
        data.map((items,index)=>(
            <div key={index} className={`flex flex-col text-white   ${items.isReverse?"md:flex-row-reverse":"md:flex-row"}`}>
           <div className='md:w-1/2 bg-black'>
      <div className='max-w-[500px] w-full py-10 md:p-10'>
      <h1 className='text-3xl font-bold '>{items.head}</h1>
                <p className='mt-3 '>{items.decs}</p>

             
          
      </div>
           </div>

                <div className='md:w-1/2 '>
                <img src={items.img} alt="" className='h-full w-full object-cover'/>
                </div>
            </div>
        ))
    }

    </div>
  );
};

export default Card;
