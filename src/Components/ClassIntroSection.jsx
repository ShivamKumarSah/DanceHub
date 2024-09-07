import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ClassDetails from './ClassDetails'
import '../App.css'

const decsription = {
    dec1: "Credibly leverage other's low-risk high-yield intellectual capital with state of the art customer service. Proactively whiteboard bricks-and-clicks processes via error-free portals. Intrinsically transform professional.",
    dec2: "Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Curabitur aliquet quam id dui posuere blandit.",
    dec3: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const ContactForm = () => {
    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<>
        <p className="style-font">Our Dance Technic</p>
        <h2 className="text-[#181818] leading-[3.5rem] text-3xl leading-none font-bold md:text-[45px] mb-4 tracking-wide">We’re Some Simple Steps For Teaching Dance</h2>
        <Box>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="one" label="DANCE ITEM 01" />
                <Tab value="two" label="DANCE ITEM 02" />
                <Tab value="three" label="DANCE ITEM 03" />
            </Tabs>
            <Box className="text-black">
                {value === 'one' && (
                    <div>
                        <ClassDetails dec={decsription.dec1} />
                    </div>
                )}
                {value === 'two' && (
                    <div>
                        <ClassDetails dec={decsription.dec2} />
                    </div>
                )}
                {value === 'three' && (
                    <div>
                        <ClassDetails dec={decsription.dec3} />
                    </div>
                )}
            </Box>
        </Box>
    </>
    );
};

const ClassIntroSection = () => {
    return (
        <section className="ezy__contact3 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
            <div className="container px-4">
                <div className="grid grid-cols-12 py-6 lg:gap-8">
                    <div className="col-span-12 lg:col-span-7 lg:order-2 mb-1 lg:mb-0">
                        <div
                            className="bg-center bg-no-repeat bg-cover rounded-2xl h-full object-cover"
                            style={{
                                backgroundImage:
                                    "url(https://themeholy.com/wordpress/danza/wp-content/uploads/2023/09/technic.jpg)",
                            }}
                        ></div>
                    </div>
                    <div className="col-span-12 lg:col-span-5">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassIntroSection