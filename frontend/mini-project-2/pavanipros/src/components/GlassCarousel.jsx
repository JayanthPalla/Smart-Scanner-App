import React, { useState } from 'react';
import './GlassCarousel.css'; // Styles for the carousel

const GlassCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="glass-carousel">
      <button className="arrow prev" onClick={goToPrevSlide}>
        &lt;
      </button>
      <div className="image-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
      <button className="arrow next" onClick={goToNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default GlassCarousel;
