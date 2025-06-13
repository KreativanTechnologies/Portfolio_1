import React from 'react';

const cardImages = [
  { id: 1, image: '/images/img1.png' },
  { id: 2, image: '/images/img2.png' },
  { id: 3, image: '/images/img3.png' },
  { id: 4, image: '/images/img4.png' },
];

const CardsImage = () => {
  return (
    <section className="w-full bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-evenly items-center gap-y-8">
        {cardImages.map((card, index) => (
          <React.Fragment key={card.id}>
            <div className="w-64 h-40 rounded-md shadow-md overflow-hidden">
              <img
                src={card.image}
                alt={`Card ${card.id}`}
                className="w-20 object-cover"
              />
            </div>
            {/* Render divider only between cards */}
            {index !== cardImages.length - 1 && (
              <div className="hidden sm:block w-px h-32 bg-gray-300 mx-2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default CardsImage;
