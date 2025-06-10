"use client"

import { useState, useEffect } from "react"

const defaultSlides = [
  {
    id: 1,
    title: "LOREM IPSUM IS SIMPLY DUMMY TEXT PRINTING",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.",
    link: "LOREM IPSUM",
    highlightWords: ["LOREM", "PRINTING"],
  },
  {
    id: 2,
    title: "CREATIVE DESIGN SOLUTIONS FOR YOUR BUSINESS",
    description:
      "We provide innovative design solutions that help your business stand out in the competitive market. Our team of experts creates stunning visuals that capture your brand's essence and communicate your message effectively.",
    link: "LEARN MORE",
    highlightWords: ["CREATIVE", "SOLUTIONS"],
  },
  {
    id: 3,
    title: "MODERN TECHNOLOGY MEETS TRADITIONAL CRAFTSMANSHIP",
    description:
      "Combining cutting-edge technology with time-tested techniques, we deliver exceptional results that exceed expectations. Our approach ensures quality, reliability, and innovation in every project we undertake.",
    link: "DISCOVER",
    highlightWords: ["MODERN", "CRAFTSMANSHIP"],
  },
]

export default function Carousel({
  slides = defaultSlides,
  autoPlayInterval = 3500,
  showDots = true,
  showProgressBar = true,
  accentColor = "orange-500",
  backgroundColor = "gray-800",
}) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlayInterval, slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const formatTitle = (title, highlightWords = []) => {
    const words = title.split(" ")
    return words.map((word, index) => {
      const isHighlighted = highlightWords.includes(word)
      return (
        <span key={index} className={isHighlighted ? `text-${accentColor}` : "text-white"}>
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      )
    })
  }

  if (!slides || slides.length === 0) {
    return (
      <div className={`w-full h-screen bg-${backgroundColor} flex items-center justify-center`}>
        <div className="text-white text-xl">No slides available</div>
      </div>
    )
  }

  return (
    <div className={`relative w-full h-screen bg-${backgroundColor} overflow-hidden`}>
      {/* Carousel Content */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id || index}
            className={`absolute inset-0 transition-opacity duration-400 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-start h-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
              <div className="max-w-4xl text-left w-full sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
                  {formatTitle(slide.title, slide.highlightWords)}
                </h1>

                <div className={`w-12 sm:w-14 md:w-16 lg:w-20 h-1 bg-${accentColor} mb-4 sm:mb-6 md:mb-8`}></div>

                <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-12 leading-relaxed max-w-3xl">
                  {slide.description}
                </p>

                {slide.link && (
                  <button
                    className={`text-${accentColor} font-semibold text-sm sm:text-base md:text-lg lg:text-xl hover:text-${accentColor.replace("500", "400")} transition-colors duration-200 flex items-center group`}
                    onClick={() => slide.onClick && slide.onClick(slide)}
                  >
                    {slide.link}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Indicators */}
      {showDots && slides.length > 1 && (
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? `bg-${accentColor} scale-110` : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {showProgressBar && slides.length > 1 && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
          <div
            className={`h-full bg-${accentColor} transition-all duration-100 ease-linear`}
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          />
        </div>
      )}
    </div>
  )
}
