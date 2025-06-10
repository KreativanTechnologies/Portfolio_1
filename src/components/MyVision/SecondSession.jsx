const Second = () => {
    const data = {
        title: "Lorem Ipsum",
        description1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        description3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        buttonText: "Your Lens",
        image1: [
            "/images/SocialWork/Image2.png",
        ],
         image2: [
            "/images/SocialWork/row_1_col_1.jpg",
        ],
        image3: "/images/SocialWork/row_2_col_1.png"
    }
    return (
        <div className="w-full h-full p-[4vw] md:p-0 md:px-[4vw] relative">
            <div className="w-full h-full gap-[3vw] flex flex-col md:flex-row relative">
                {/* Left Content Section */}
                <div className="space-y-6">
                    {/* Header with line */}
                    <div className="space-y-2">
                        <div className="w-16 h-0.5 bg-black"></div>
                        <h1 className="text-4xl md:text-5xl font-light text-gray-800 tracking-wide">{data.title}</h1>
                    </div>

                    {/* Content paragraphs */}
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p className="text-sm md:text-base">
                            {data.description1}
                        </p>

                        <p className="text-sm md:text-base">
                            {data.description2}
                        </p>

                        <p className="text-sm md:text-base">
                            {data.description3}
                        </p>
                    </div>

                    {/* Button */}
                    <button className="bg-black text-white px-6 py-3 text-sm font-medium tracking-wider hover:bg-gray-800 transition-colors duration-200">
                        {data.buttonText}
                    </button>
                </div>

                <div className=" relative w-full h-[70vw] md:h-full flex justify-end p-[5vw]">
                    <div className="absolute w-[35vw] h-[32vw] md:w-[14vw] md:h-[13vw] overflow-hidden left-0 md:left-2/12 top-5/12 md:top-3/12 z-20 rounded-[1vw] hover:z-40 cursor-pointer hover:scale-110 duration-1000">
                        <img
                            className="w-full h-full object-cover object-center"
                            src={data.image1}
                            alt=""
                        />
                    </div>
                    <div className="w-[70vw] h-[60vw] md:w-[28vw] md:h-[25vw] overflow-hidden rounded-[1vw] hover:z-40 cursor-pointer hover:scale-110 duration-1000">
                        <img
                            className="w-full h-full object-cover object-center"
                            src={data.image2}
                            alt=""
                        />
                    </div>
                    <div className="absolute w-[60vw] h-[50vw] md:w-[24vw] md:h-[20vw] overflow-hidden bottom-0 left-1/12 md:left-3/12 z-10 rounded-[1vw] hover:z-40 cursor-pointer hover:scale-110 duration-1000">
                        <img
                            className="w-full h-full object-cover object-center"
                            src={data.image3}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Second;


