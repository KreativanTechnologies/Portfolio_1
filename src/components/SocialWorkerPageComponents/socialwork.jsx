export default function SocialWork({
  title = "SOCIAL WORK",
  items = [
    // Left column items
    {
      type: "image",
      src: "/Images/SocialWork/row_1_col_1.jpg",
      alt: "Work 1",
      className: "w-full h-64 object-cover rounded-lg break-inside-avoid"
    },
    {
      type: "image",
      src: "/Images/SocialWork/row_2_col_2.jpg",
      alt: "Work 2",
      className: "w-full h-72 object-cover rounded-lg break-inside-avoid"
    },
    {
      type: "featured",
      image: "/Images/SocialWork/row_3_col_1.jpg",
      alt: "Work 3",
      overlayTitle: "LOCAL HEROES.",
      overlayText: "A passionate social worker, he empowers underserved youth through education, health.",
      buttonText: "View Project",
      buttonLink: "#",
      className: "h-[1046px]"
    },
    {
      type: "image",
      src: "/Images/SocialWork/row_4_col_1.jpg",
      alt: "Work 4",
      className: "w-full h-64 object-cover rounded-lg break-inside-avoid"
    },
    // Right column items
    {
      type: "image",
      src: "/Images/SocialWork/row_1_col_2.jpg",
      alt: "Work 5",
      className: "w-full h-80 object-cover rounded-lg break-inside-avoid",
      column: "right"
    },
    {
      type: "image",
      src: "/Images/SocialWork/row_2_col_1.png",
      alt: "Work 6",
      className: "w-full h-96 object-cover rounded-lg break-inside-avoid",
      column: "right"
    },
    {
      type: "image",
      src: "/Images/SocialWork/row_3_col_3.jpg",
      alt: "Work 7",
      className: "w-full h-96 object-cover rounded-lg break-inside-avoid",
      column: "right"
    },
    {
      type: "image",
      src: "/Images/SocialWork/row_4_col_2.jpg",
      alt: "Work 8",
      className: "h-[1046px] object-cover rounded-lg mx-auto break-inside-avoid",
      column: "right"
    }
  ],
  theme = {
    bgColor: "bg-white",
    textColor: "text-black",
    buttonBg: "bg-white",
    buttonTextColor: "text-black",
    buttonHover: "hover:bg-gray-200",
    titleFont: "font-['DM_Sans']",
    overlayTitleFont: "font-['Bebas_Neue']"
  }
}) {
  // Split items into left and right columns
  const leftColumnItems = items.filter(item => item.column !== "right");
  const rightColumnItems = items.filter(item => item.column === "right");

  const renderItem = (item, index) => {
    switch (item.type) {
      case "image":
        return (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className={item.className}
          />
        );
      case "featured":
        return (
          <div key={index} className={`relative ${item.className} rounded-lg overflow-hidden break-inside-avoid`}>
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col items-start justify-center px-6 py-8 text-left">
              <h2 className={`text-left font-[400] text-[30px] leading-[30px] tracking-[0px] ${theme.overlayTitleFont} text-white mb-4`}>
                {item.overlayTitle}
              </h2>
              <h3 className="text-white font-bold leading-snug text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] max-w-[500px] mb-6">
                {item.overlayText}
              </h3>
              <a
                href={item.buttonLink}
                className={`${theme.buttonBg} ${theme.buttonTextColor} font-semibold px-5 py-2 rounded-md ${theme.buttonHover} transition`}
              >
                {item.buttonText}
              </a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`w-full py-12 ${theme.bgColor}`}>
      <h2 className={`text-center ${theme.textColor} font-bold text-[40px] leading-[100%] tracking-[0] ${theme.titleFont} mb-10`}>
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 sm:px-8 md:px-2 max-w-[1400px] mx-auto">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          {leftColumnItems.map((item, index) => renderItem(item, index))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          {rightColumnItems.map((item, index) => renderItem(item, index))}
        </div>
      </div>
    </div>
  );
}