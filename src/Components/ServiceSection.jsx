import React from "react";
import "./ServiceSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCamera,
    faCannabis,
    faRandom,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { faAsymmetrik } from "@fortawesome/free-brands-svg-icons";

const serviceList = [
    {
        icon: "https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/service_1_1-2.svg",
        title: "Personalized Learning",
        description:
            "Interactively cultivate optimal niches whereas client-centered processes. Enthusiastically envisioned.",
    },
    {
        icon: "https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/service_1_3-1.svg",
        title: "Convenient Dancing",
        description:
            "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur porttitor posuere at sem.",
    },
    {
        icon: "https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/service_1_2-1.svg",
        title: "Dance Theater",
        description:
            "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada.",
    },
    {
        icon: "https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/service_1_1-2.svg",
        title: "Personalized Learning",
        description:
            "Interactively cultivate optimal niches whereas client-centered processes. Enthusiastically envisioned.",
    },
];

const ServiceItem = ({ service }) => (
    <div className="group bg-slate-800/50 shadow h-full p-3 md:mt-4 rounded-lg border-solid border-1 border-slate-500 transition duration-300 hover:bg-white hover:text-black">
        <div className="p-4 lg:p-8">
            <div className="text-[40px] text-blue-600 mb-2">
                <img src={service.icon} className="bg-white p-3 rounded-lg" alt="service icon" />
            </div>
            <h5 className="text-xl font-medium my-6">{service.title}</h5>
            <p className="opacity-75 my-4">{service.description}</p>
            <a href="#" className="text-white px-4 py-2.5 rounded-lg border-solid border-1 border-slate-500 group-hover:bg-red-500 group-hover:border-red-500 transition duration-30">READ MORE</a>
        </div>
    </div>
);

ServiceItem.propTypes = {
    service: PropTypes.object.isRequired,
};

function ShapeOne() {
    return (
        <svg
            className="absolute -bottom-[20%] left-0 -z-[1]"
            width="405"
            height="626"
            viewBox="0 0 405 626"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="-302.65"
                y="296.986"
                width="433.92"
                height="140"
                rx="73.8464"
                transform="rotate(-33.796 -302.65 296.986)"
                fill="#7434F8"
                fillOpacity="0.5"
            />
            <rect
                x="-315"
                y="502.403"
                width="666.584"
                height="140"
                rx="73.8464"
                transform="rotate(-33.796 -315 502.403)"
                fill="#FAA515"
                fillOpacity="0.5"
            />
        </svg>
    );
}

function ShapeTwo() {
    return (
        <svg
            className="absolute -top-[20%] right-0 -z-[1]"
            width="340"
            height="658"
            viewBox="0 0 495 778"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="389" cy="389" r="389" fill="#0d6efd" fillOpacity="0.19" />
        </svg>
    );
}

const ServiceSection = () => {
    return (
        <section className="ezy__service20 dark py-14 md:py-24 bg-gray-50 dark:bg-[#0b1727] text-zinc-900 dark:text-white relative z-[1] overflow-hidden background-section">
            <ShapeOne />
            <ShapeTwo />

            <div className="container px-4 py-28 mx-auto">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-4">
                        <p className="style-font">Services</p>
                        <h2 className="text-[#d4d4d4] leading-[3.5rem] text-3xl leading-none font-bold md:text-[45px] mb-4 tracking-wide">Our Service Platform</h2>
                        <p className="text-[17px] leading-normal opacity-80">
                            An activity that requires a person's mental or physical effort is
                            work.If a person is trained for a certain type physical effort.
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-8">
                        <div className="grid grid-cols-2 gap-6 gap-x-5">
                            <div className="col-span-2 md:col-span-1">
                                {serviceList.slice(0, 2).map((service, i) => (
                                    <div key={i}>
                                        <ServiceItem service={service} />
                                    </div>
                                ))}
                            </div>

                            <div className="col-span-2 md:col-span-1 md:mt-12">
                                {serviceList.slice(2, 4).map((service, i) => (
                                    <div key={i}>
                                        <ServiceItem service={service} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection