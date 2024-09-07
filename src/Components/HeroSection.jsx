import React, { useEffect, useRef } from 'react';
import './Herosection.css';
import '../App.css'
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';


const HeroSection = () => {
    const carouselRef = useRef(null);
    const sliderRef = useRef(null);
    const thumbnailRef = useRef(null);
    let runTimeOut;
    const timeRunning = 3000; // Time for the animation to complete
    const timeAutoNext = 7000; // Time between automatic transitions

    useEffect(() => {
        const autoPlay = () => {
            showSlider('next');
        };

        // Start the automatic sliding
        const autoPlayInterval = setInterval(autoPlay, timeAutoNext);

        return () => {
            clearInterval(autoPlayInterval);
            clearTimeout(runTimeOut);
        };
    }, []);

    const showSlider = (type) => {
        const sliderItems = sliderRef.current.querySelectorAll('.item');
        const thumbnailItems = thumbnailRef.current.querySelectorAll('.item');

        if (type === 'next') {
            sliderRef.current.appendChild(sliderItems[0]);
            thumbnailRef.current.appendChild(thumbnailItems[0]);
            carouselRef.current.classList.add('next');
        } else {
            sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
            thumbnailRef.current.prepend(thumbnailItems[thumbnailItems.length - 1]);
            carouselRef.current.classList.add('prev');
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselRef.current.classList.remove('next');
            carouselRef.current.classList.remove('prev');
        }, timeRunning);
    };

    return (
        <section className="heroBody">
            <nav className="navBar">
            </nav>

            <div className="carousel" ref={carouselRef}>
                <div className="list" ref={sliderRef}>
                    {[
                        {
                            img: image1,
                            author: "Grand Ceremony",
                            title: "Once a Dancer, is Always a ",
                            topic: "Dancer!",
                        },
                        {
                            img: image2,
                            author: "Best Ballet Studio",
                            title: "Modern & Classic Ballet ",
                            topic: "Play",
                        },
                        {
                            img: image3,
                            author: "Let’s Dance!",
                            title: "Join The Incredible World of",
                            topic: "Dance!",
                        },
                    ].map((item, index) => (
                        <div className="item" key={index}>
                            <img src={item.img} alt={item.title} />
                            <div className="content">
                                <div className="author style-font">{item.author}</div>
                                <div className="title">{item.title}</div>
                                <span className="topic">{item.topic}</span>
                                <div className="des text-lg my-5">
                                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Quisque.
                                </div>
                                <div className="buttons">
                                    <button className='bg-red-600 text-white'>APPLY NOW</button>
                                    <button>LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="thumbnail" ref={thumbnailRef}>
                    {[
                        image1,
                        image2,
                        image3,
                    ].map((img, index) => (
                        <div className="item" key={index}>
                            <img src={img} alt="Thumbnail" />
                            <div className="content">
                                <div className="title">Name Slider</div>
                                <div className="description">Description</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
