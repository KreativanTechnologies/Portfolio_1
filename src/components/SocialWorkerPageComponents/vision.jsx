export default function Vision({
  heading = "United by\nVision and\nPurpose",
  text = "We believe in building a world where every young person has the tools to thrive. Through outreach programs, healthcare support, and learning initiatives, we're nurturing futures and restoring dignity — one project at a time.",
  buttonText = "GET INVOLVED",
  buttonLink = "#",
  theme = {
    bgColor: "#f4f3f3", // Now using hex color directly
    textColor: "text-gray-700",
    buttonBg: "bg-black",
    buttonHover: "hover:bg-gray-800",
    buttonText: "text-white",
    dividerColor: "bg-gray-300"
  }
}) {
  const headingLines = heading.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      {i < heading.split('\n').length - 1 && <br />}
    </span>
  ));

  return (
    <div className="w-full py-16 px-6" style={{ backgroundColor: theme.bgColor }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
        {/* Left - Heading */}
        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            {headingLines}
          </h2>
        </div>

        {/* Divider */}
        <div className={`w-full h-px ${theme.dividerColor} md:w-px md:h-32 my-[20px] mx-[5px]`}></div>

        {/* Right - Text and Button */}
        <div className="w-full md:w-1/2 text-left">
          <p className={`${theme.textColor} text-base sm:text-lg leading-relaxed mb-4`}>
            {text}
          </p>
          <a 
            href={buttonLink}
            className={`px-6 py-3 ${theme.buttonBg} ${theme.buttonText} font-semibold rounded-lg shadow-md ${theme.buttonHover} transition inline-block`}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}