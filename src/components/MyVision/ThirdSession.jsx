"use client"
import { ArrowRight } from "lucide-react"

const LoremIpsumSection = ({
  highlightText1 = "LOREM",
  middleText = "IPSUM IS SIMPLY DUMMY TEXT OF THE",
  highlightText2 = "PRINTING",
  bodyText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  ctaText = "YOUR ENDS",
  highlightColor = "text-orange-500",
  normalTextColor = "text-gray-800",
  bodyTextColor = "text-gray-500",
  ctaTextColor = "text-gray-600",
  accentColor = "bg-orange-500",
  backgroundColor = "bg-gray-50",
  dividerColor = "bg-gray-300",
  onCtaClick = () => console.log("CTA clicked"),
  showArrow = true,
  showDivider = true,
}) => {
  return (
    <div className={`px-4 py-28 ${backgroundColor} flex items-center justify-center`}>
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative">
        {/* Left Column - Dynamic Heading */}
        <div className="">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className={highlightColor}>{highlightText1}</span>{" "}
            <span className={normalTextColor}>{middleText}</span>
            <br />
            <span className={highlightColor}>{highlightText2}</span>
          </h1>
        </div>

        {/* Vertical Divider - Conditional rendering */}
        {showDivider && (
          <div
            className={`hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-64 ${dividerColor}`}
          ></div>
        )}

        {/* Right Column - Dynamic Content */}
        <div className=" lg:pl-8">
          <p className={`${bodyTextColor} text-lg leading-relaxed`}>{bodyText}</p>

          <div className="space-y-2">
            <div
              className={`flex items-center pt-10 gap-2 ${ctaTextColor} font-medium cursor-pointer hover:opacity-80 transition-opacity`}
              onClick={onCtaClick}
            >
              <span>{ctaText}</span>
              {showArrow && <ArrowRight className="w-4 h-4" />}
            </div>
            <div className={`w-16 h-0.5 ${accentColor}`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoremIpsumSection
