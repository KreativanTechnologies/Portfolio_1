const Card = () => {
  const data = [
    {
      head: "Industrialist",
      decs: "Pioneering innovations in modern manufacturing. Leading industrial projects with precision and purpose.",
      img: "images/card1.png",
      img2: "images/Ellipse.png",
      isReverse: true,
    },
    {
      head: "Builder",
      decs: "Crafting structures that stand the test of time. From blueprint to reality — a journey of excellence.",
       img: "images/card2.png",
      img2: "images/Ellipse.png",
      isReverse: false,
    },
    {
      head: "Social Worker",
      decs: "Empowering communities through compassion and action. Driven to make a lasting, meaningful impact.",
        img: "images/card3.png",
      img2: "images/Ellipse.png",
      isReverse: true,
    },
  ]

  return (
    <div className="mt-20 text-white flex flex-col md:flex-row">
      {/* Left Side - Works */}
      <div className="w-full md:w-[20%] mb-6 md:mb-0 px-10">
        <h3 className="text-black text-4xl font-bold md:top-28 md:text-left text-center">Works</h3>
      </div>

      {/* Right Side - Cards */}
      <div className="w-full md:w-[80%] flex flex-col gap-8">
        {data.map((items, index) => {
          const isEllipseLeft = index % 2 !== 0

          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row px-5 overflow-auto ${items.isReverse ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-[60%] bg-[#090909] relative overflow-hidden">
              
                <img
                  src={items.img2 }
                  alt=""
                  className={`absolute md:w-48  z-0 ${
                    isEllipseLeft
                      ? "left-2 sm:left-4 md:left-0 top-4 sm:top-6 md:top-[30%]"
                      : "right-2 sm:right-4 md:right-0 top-4  md:top-[30%]"
                  }`}
                />

               
                <div
                  className={`relative z-10 md:mt-10 w-full py-8 px-6 sm:py-10 sm:px-8 md:p-10 lg:p-12  ${
                    isEllipseLeft ? "pl-12 sm:pl-16 md:pl-20 lg:pl-24" : "pr-12 sm:pr-16 md:pr-20 lg:pr-24"
                  }`}
                >
                  <h1 className="text-2xl sm:text-3xl font-bold mb-3">{items.head}</h1>
                  <p className="text-sm sm:text-base leading-relaxed">{items.decs}</p>
                </div>
              </div>

              <div className="md:w-[40%] min-h-[200px] md:min-h-[250px]">
                <img src={items.img} alt={items.head} className="h-full w-full object-cover" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card
