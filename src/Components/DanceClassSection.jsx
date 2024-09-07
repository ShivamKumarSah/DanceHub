import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../App.css'

// Team members data
const teamMembers = [
    {
        picture: "https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/couple_1_1.jpg",
        fullName: "Break Dance",
        bio: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt quis ac velit lectus.s",
    },
    {
        picture: "https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/couple_1_2.jpg",
        fullName: "Couple Dance Class",
        bio: "Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed",
    },
    {
        picture: "https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/couple_1_3.jpg",
        fullName: "Classical Dance Class",
        bio: "Curabitur aliquet quam id dui posuere blandit. Pellentesque ipsum orci porta dapibus. Donec rutrum malesuada.",
    },
    {
        picture: "https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/couple_1_4.jpg",
        fullName: "Kid's Ballet",
        bio: "Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. aliquet felis volutpat.",
    },
    {
        picture: "https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/couple_1_5.jpg",
        fullName: "Couple Ballet",
        bio: "Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt. Quisque velit id enim.",
    },
    {
        picture: "https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/couple_1_6.jpg",
        fullName: "Classic Ballet",
        bio: "Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id at sem.",
    },
    {
        picture: "https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/couple_1_7.jpg",
        fullName: "Hip-Hop Dance",
        bio: "Sed porttitor lectus nibh. Curabitur aliquet quam id dui posuere blandit. Proin eget tortor tincidunt at risus.",
    },
    {
        picture: "https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/couple_1_8.jpg",
        fullName: "Cardio Dance",
        bio: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec sit amet aliquam.",
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
                Explore Details
            </button>
        </div>
    </div>
);

TeamMemberItem.propTypes = {
    member: PropTypes.object.isRequired,
};

// Dance class section component with Swiper slider
const DanceClassSection = () => {
    return (
        <section
            className="ezy__team1 light py-5 md:py-24 dark:bg-[#67643d0d] text-zinc-900"
            style={{
                backgroundImage:
                    "url('https://themeholy.com/wordpress/danza/wp-content/uploads/2023/09/dance_bg_1.png')",
            }}
        >
            <div className="container px-4 mx-auto">
                <div className="mb-6 mt-10 md:mb-12">
                    <div className="">
                        <p className="text-start style-font">Our Dance Classes</p>
                        <h2 className="text-start text-3 font-semibold md:text-[45px]">
                            Dance Classes For Everyone
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

export default DanceClassSection;
