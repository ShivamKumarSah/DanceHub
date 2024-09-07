import React from "react";
import PropTypes from "prop-types";

const contents = [
    {
        title: "Dance Practice",
    },
    {
        title: "Dance Training",
    },
    {
        title: "Dance Growth",
    },
    {
        title: "Dance Improvement",
    }
];

const ContentItem = ({ item, index }) => (
    <div className="xl:p-1 flex  items-baseline">
        <div className="w-6 h-6 rounded-full text-m inline-flex justify-center items-center border-solid border-1 border-red-500 bg-white text-red-500 mb-4">
            {index}
        </div>
        <h4 className="text-xl mb-2 mx-2">{item.title}</h4>
    </div>
);

ContentItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

const ClassDetails = ({ dec }) => {
    return (
        <section className="ezy__howitworks2 light py-5 bg-white dark:bg-[#0b1727] text-zinc-900">
            <p className="text-[17px] leading-normal opacity-80">
                {dec}
            </p>
            <div className="container mx-auto">
                <div className="grid grid-cols-4 justify-center items-center">
                    {contents.map((item, i) => (
                        <div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
                            <ContentItem index={i + 1} item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default ClassDetails