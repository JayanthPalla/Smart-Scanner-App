import React from 'react';
import Slider from 'react-slick';
import profile1 from '../assets/profile.png';
import im1 from "../assets/yellow2 (1).png";
import im2 from "../assets/carousel_2 (1).png";
import im3 from "../assets/yellow3.png";
import im4 from "../assets/yellow1.png";
import newspaper from '../assets/newspaper.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import 'slick-carousel/slick/fonts/slick.ttf';
import 'slick-carousel/slick/fonts/slick.woff';

const Carousel = () => {
    const carouselItems = [
        { image: im1, description: "Image 1 Description" },
        { image: im2, description: "Image 2 Description" },
        { image: im3, description: "Image 3 Description" },
        { image: im4, description: "Image 4 Description" },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Set autoplay to true for automatic sliding
        autoplaySpeed: 3000, // Set the speed (in milliseconds) for automatic sliding
    };

    return (
        <div className="div1">
            <Slider {...settings}>
                {carouselItems.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <img src={item.image} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
