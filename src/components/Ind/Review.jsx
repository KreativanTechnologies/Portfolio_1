import React, { useEffect, useState } from 'react';

// Sample review data
const reviews = [
  {
    image: '/images/user1.jpg',
    name: 'Lorem Ips',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    stars: 5,
  },
  {
    image: '/images/user2.jpg',
    name: 'Dolor Sit',
    text: 'An unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries...',
    stars: 4,
  },
  {
    image: '/images/user3.jpg',
    name: 'Amet Consectetur',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...',
    stars: 5,
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // Change every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const { image, name, text, stars } = reviews[currentIndex];

  return (
    <section className="w-full flex flex-col items-center py-16 px-10 bg-white">
      <h2 className="text-2xl font-semibold mb-8">LOREM IPSUM IS SIMPLY</h2>

      <div className="flex flex-wrap items-center justify-center gap-6 w-full max-w-5xl">
        {/* Layered Image */}
       <div className="relative w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] shrink-0">
  {/* Wider black shadow layers */}
  <div className="absolute w-[107%] h-[105%] bg-black bottom-2 left-2 rounded"></div>
<div className="absolute w-[107%] h-[105%] bg-black top-2 right-2 rounded"></div>

  {/* Gray foreground image box */}
  <div className="absolute w-full h-full bg-gray-300 top-0 left-0 shadow-md overflow-hidden rounded">
           
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Review Card */}
        <div className="flex-1 min-w-[250px] bg-white shadow-xl rounded-md px-6 py-5 text-left">
          <p className="text-sm italic text-gray-600 mb-4 leading-relaxed">{text}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-900 font-semibold">{name}</span>
            <div className="text-yellow-400 text-lg">
              {Array.from({ length: stars }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex mt-6 space-x-2">
        {reviews.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${
              currentIndex === idx ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Review;
