import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../App.css'
import './Testimonials.css'


// Testimonials data
const testimonialsData = [
    {
        id: 1,
        name: 'Jenifer Lopez',
        title: 'Dance Student',
        image: 'https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/testi_1_2-1.jpg',
        rating: 4.5,
        review:
            'Nulla Porttitor Accumsan Tincidunt. Curabitur Non Nulla Sit Amet Nisl Tempus Convallis Quis Ac Lectus. Quisque Velit Nisi, Pretium Ut Lacinia in, Elementum Id Enim. Pellentesque In Ipsum Id Orci Porta Dapibus. Mauris Blandit Aliquet Elit, Eget Tincidunt Nibh Pulvinar Enim Orci Elit.',
    },
    {
        id: 2,
        name: 'Abraham Khalil',
        title: 'Dance Student',
        image: 'https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/testi_1_3-1.jpg',
        rating: 4.5,
        review:
            'Mauris Blandit Aliquet Elit, Eget Tincidunt Nibh Pulvinar A. Nulla Porttitor Accumsan Tincidunt. Vestibulum Ac Diam Sit Amet Quam Vehicula Elementum Sed Sit Amet Dui. Vivamus Magna Justo, Lacinia Eget Consectetur Sed, Convallis At Tellus. Quisque Velit Nisi, Vehicula Eget At Tellus.',
    },
    {
        id: 3,
        name: 'David Milton',
        title: 'Dance Student',
        image: 'https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/testi_1_1-1.jpg',
        rating: 4.5,
        review:
            "Rapidiously Syndicate Cross-Unit Imperatives Rather Than Unique Partnerships. Collaboratively Mesh Error-Free Catalysts For Change Without Plug-And-Play Opportunities. Completely Maximize Dynamic Methodologies Via. Authoritatively Enhance Superior Relationships.",
    },
    {
        id: 1,
        name: 'Jenifer Lopez',
        title: 'Dance Student',
        image: 'https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/testi_1_2-1.jpg',
        rating: 4.5,
        review:
            'Nulla Porttitor Accumsan Tincidunt. Curabitur Non Nulla Sit Amet Nisl Tempus Convallis Quis Ac Lectus. Quisque Velit Nisi, Pretium Ut Lacinia in, Elementum Id Enim. Pellentesque In Ipsum Id Orci Porta Dapibus. Mauris Blandit Aliquet Elit, Eget Tincidunt Nibh Pulvinar Enim Orci Elit.',
    },
    {
        id: 2,
        name: 'Abraham Khalil',
        title: 'Dance Student',
        image: 'https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/testi_1_3-1.jpg',
        rating: 4.5,
        review:
            'Mauris Blandit Aliquet Elit, Eget Tincidunt Nibh Pulvinar A. Nulla Porttitor Accumsan Tincidunt. Vestibulum Ac Diam Sit Amet Quam Vehicula Elementum Sed Sit Amet Dui. Vivamus Magna Justo, Lacinia Eget Consectetur Sed, Convallis At Tellus. Quisque Velit Nisi, Vehicula Eget At Tellus.',
    },
    {
        id: 3,
        name: 'David Milton',
        title: 'Dance Student',
        image: 'https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/testi_1_1-1.jpg',
        rating: 4.5,
        review:
            "Rapidiously Syndicate Cross-Unit Imperatives Rather Than Unique Partnerships. Collaboratively Mesh Error-Free Catalysts For Change Without Plug-And-Play Opportunities. Completely Maximize Dynamic Methodologies Via. Authoritatively Enhance Superior Relationships.",
    },
];

// Star rating component
const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
        <p className="mb-6">
            {[...Array(fullStars)].map((_, i) => (
                <span key={`full-${i}`} className="fas fa-star text-yellow-500"></span>
            ))}
            {halfStar && <span className="fas fa-star-half-alt text-yellow-500"></span>}
            {[...Array(emptyStars)].map((_, i) => (
                <span key={`empty-${i}`} className="fas fa-star text-yellow-200"></span>
            ))}
        </p>
    );
};

// Testimonial card component
const TestimonialCard = ({ name, title, image, rating, review }) => (
    <div className="bg-white shadow-xl dark:bg-slate-800 rounded-2xl transition duration-300 h-full p-6">
        <div className="mt-4 text-black">
            <StarRating rating={rating} />
            <p className="opacity-50 mb-6">{review}</p>
            <div className="flex items-center">
                <div className="mr-2">
                    <img src={image} alt={name} className="max-w-full h-auto rounded-full border" width="47" />
                </div>
                <div>
                    <h4 className="text-xl font-medium">{name}</h4>
                    <p className="text-sm">
                        <i>{title}</i>
                    </p>
                </div>
            </div>
        </div>
    </div>
);

// Testimonials section component with Swiper slider
const TestimonialsSection = () => {
    return (
        <section className="py-50  reviewCard">
            <div className="container mx-auto px-4">
                <section className="ezy__testimonial1 light py-14 md:py-24 text-zinc-900 dark:text-white">
                    <div className="container px-4 mx-auto">
                        <div className="mb-20">
                            <div>
                                <p className="text-start style-font">Testimonials</p>
                                <h2 className="text-[#292929] text-start text-3 font-bold md:text-[45px]">
                                    What Our Students Have To Say?
                                </h2>
                            </div>
                        </div>

                        {/* Swiper Slider */}
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            navigation={true}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Navigation, Pagination, Autoplay]}
                            className="swiper-container"
                        >
                            {testimonialsData.map((testimonial) => (
                                <SwiperSlide key={testimonial.id}>
                                    <TestimonialCard {...testimonial} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default TestimonialsSection;
