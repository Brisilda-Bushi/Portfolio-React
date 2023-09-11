import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { website } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    web_code_link,
    source_code_link,
}) => {
    return (
        <Tilt
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
        >
            <div className="relative w-full h-[230px]">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
                    <div
                        onClick={() => window.open(web_code_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <img
                            src={website}
                            alt="github"
                            className="w-1/2 h-1/2 object-contain"
                        />
                    </div>
                    <div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                    >
                        <img
                            src={github}
                            alt="github"
                            className="w-1/2 h-1/2 object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-5 ">
                <h3 className="text-white font-bold text-[24px]">{name}</h3>
                <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                        #{tag.name}
                    </p>
                ))}
            </div>
        </Tilt>
    );
};

const Projects = () => {
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

    return (
        <>
            {isMobile ? (
                <>
                    <div>
                        <p className={styles.sectionSubText}>My work</p>
                        <h2 className={styles.sectionHeadText}>Projects.</h2>
                    </div>
                    <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                        The following projects showcase my skills and experience
                        through real world examples of my work. Each project is
                        briefly described with links to code repositories and
                        live demos in it. It reflects my ability to solve
                        complex problems, work with different technologies, and
                        manage projects effectively.
                    </p>
                    <div className="mt-20 flex flex-wrap gap-7">
                        {projects.map((project, index) => (
                            <div key={`${project.name}-${index}`} index={index}>
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <motion.div variants={textVariant()}>
                        <p className={styles.sectionSubText}>My work</p>
                        <h2 className={styles.sectionHeadText}>Projects.</h2>
                    </motion.div>
                    <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
                    >
                        The following projects showcase my skills and experience
                        through real world examples of my work. Each project is
                        briefly described with links to code repositories and
                        live demos in it. It reflects my ability to solve
                        complex problems, work with different technologies, and
                        manage projects effectively.
                    </motion.p>
                    <div className="mt-20 flex flex-wrap items-stretch gap-7">
                        {projects.map((project, index) => (
                            <div key={`${project.name}-${index}`} index={index}>
                                <motion.div
                                    style={{ height: "100%" }}
                                    variants={fadeIn(
                                        "up",
                                        "spring",
                                        index * 0.5,
                                        0.75,
                                    )}
                                >
                                    <ProjectCard {...project} />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

export default SectionWrapper(Projects, "projects");
