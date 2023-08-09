import React, { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Tech = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 800px)");

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        return () => {
            mediaQuery.addEventListener("change", handleMediaQueryChange);
        };
    }, []);

    const TechCard = ({ index, title, icon }) => {
        return (
            <Tilt className="w-full">
                <motion.div
                    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                >
                    <div
                        options={{ max: 45, scale: 1, speed: 450 }}
                        className="bg-tertiary rounded-[20px] py-5 px-12 flex justify-evenly items-center flex-col"
                    >
                        <img
                            src={icon}
                            alt={title}
                            className="w-[50px] h-[50px] object-contain max-w-none"
                        />
                    </div>
                </motion.div>
            </Tilt>
        );
    };

    return (
        <div className="flex flex-row flex-wrap justify-center gap-10 ">
            {technologies.map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                    {isMobile ? (
                        <TechCard icon={technology.icon} />
                    ) : (
                        <BallCanvas icon={technology.icon} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "");
