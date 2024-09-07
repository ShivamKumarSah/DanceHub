import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './BlogSection.css'
import '../App.css'

// Team members data
const teamMembers = [
    {
        picture: "https://themeholy.com/wordpress/danza/wp-content/uploads/2023/09/blog-s-1-5-331x223.jpg",
        fullName: "Dance Studios On Social Media Platforms",
    },
    {
        picture: "https://themeholy.com/wordpress/danza/wp-content/uploads/2023/09/blog-s-1-4-331x223.jpg",
        fullName: "Find Videos That Show The Instructor",
    },
    {
        picture: "https://themeholy.com/wordpress/danza/wp-content/uploads/2023/09/blog-s-1-3-2-331x223.jpg",
        fullName: "The Opportunity, Share Videos Of Your Practice",
    },
    {
        picture: "https://themeholy.com/wordpress/danza/wp-content/uploads/2023/09/blog-s-1-6-331x223.jpg",
        fullName: "Community Centers, Gyms Or Cultural Centers",
    },
];

// Team member item component
const TeamMemberItem = ({ member }) => (
    <div className="bg-white shadow-xl dark:bg-slate-800 rounded-2xl h-full m-4">
        <img
            src={member.picture}
            alt={member.fullName}
            className="h-auto w-full rounded-2xl"
        />
        <div className="px-4 py-6 xl:px-6">
            <h4 className="text-2xl font-medium mb-2">{member.fullName}</h4>
            <p className="opacity-50">{member.bio}</p>
            <button className="py-2 px-7 border border-blue-600 hover:bg-blue-600 hover:text-white duration-300 rounded-md mt-6">
                Read More
            </button>
        </div>
    </div>
);

TeamMemberItem.propTypes = {
    member: PropTypes.object.isRequired,
};

const BlogSection = () => {
    return (
        <section
            className="ezy__team1 light py-5 md:py-90 dark:bg-[#67643d0d] text-zinc-900 outerSection"
            style={{
                backgroundImage:
                    "url('https://themeholy.com/wordpress/danza/wp-content/uploads/2023/09/blog_1_1.png')",
            }}
        >
            <div className="container px-4 mx-auto">
                <div className="flex justify-center mb-6 md:mb-12">
                    <div className="text-center">
                        <p className="style-font mt-56">Blog & News</p>
                        <h2 className="text-[#3d3d3d] text-3 font-bold md:text-[45px]">
                            Our Latest News & Articles
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
                    navigation={true} // Enable navigation arrows
                    pagination={{ clickable: true }} // Enable pagination dots
                    autoplay={{
                        delay: 3000, // Time in milliseconds between slides (3 seconds)
                        disableOnInteraction: false, // Keeps autoplay active even after user interaction
                    }}
                    modules={[Navigation, Pagination, Autoplay]} // Include Navigation, Pagination, and Autoplay modules
                    className="swiper-container"
                >
                    {teamMembers.map((member, i) => (
                        <SwiperSlide key={i} className="my-2">
                            <TeamMemberItem member={member} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default BlogSection;
