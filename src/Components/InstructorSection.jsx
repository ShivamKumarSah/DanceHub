import React from "react";
import '../App.css'
import {
    faFacebookF,
    faLinkedinIn,
    faTwitter,
    faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const teamMembers = [
    {
        picture: "https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/team_1_1-2.jpg",
        fullName: "Sammy Houston",
        designation: "Instructor",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: "https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/team_1_2-2.jpg",
        fullName: "Sammy Houston",
        designation: "Coreographer",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: "https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/team_1_3-2.jpg",
        fullName: "David Milton",
        designation: "Zumba Teacher",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
    {
        picture: "https://themeholy.com/wordpress/test/wp-content/uploads/2023/09/team_1_4-2.jpg",
        fullName: "Ellen Harrington",
        designation: "Gym Instructor",
        socialLinks: [
            { icon: faFacebookF, href: "#" },
            { icon: faLinkedinIn, href: "#" },
            { icon: faTwitter, href: "#" },
            { icon: faBehance, href: "#" },
        ],
    },
];

const TeamMemberItem = ({ member }) => (
    <div className="bg-white shadow-xl dark:bg-slate-800 rounded-xl h-full p-2">
        <img
            src={member.picture}
            alt={member.fullName}
            className="w-full h-auto rounded-lg"
        />
        <div className="px-4 py-6">
            <h4 className="text-2xl font-medium mb-1">{member.fullName}</h4>
            <p className="mb-4 text-sm text-red-500 font-bold">{member.designation}</p>
            <div className="mt-6">
                {member.socialLinks.map((item, i) => (
                    <a
                        href={item.href}
                        className="text-red-500 inline-block opacity-60 transition duration-300 hover:translate-y-1 hover:opacity-100 mr-4"
                        key={i}
                    >
                        <FontAwesomeIcon icon={item.icon} />
                    </a>
                ))}
            </div>
        </div>
    </div>
);

TeamMemberItem.propTypes = {
    member: PropTypes.object.isRequired,
};

const InstructorSection = () => {
    return (
        <section className="ezy__team4 light py-7 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="container px-4 mx-auto">
                <div className="flex justify-center mb-6 md:mb-12">
                    <div className=" text-center text-black">
                        <p className="style-font">
                            Dance Teacher
                        </p>
                        <h2 className="text-start text-3xl md:text-[50px]  capitalize font-bold mb-4 text-[#232323]">
                            Our Professional Instructor
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-6 text-center text-black">
                    {teamMembers.map((member, i) => (
                        <div className="col-span-4 md:col-span-2 lg:col-span-1" key={i}>
                            <TeamMemberItem member={member} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstructorSection
