import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { allData } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";

// Assuming fadeIn is imported

const ServiceCard = ({ index, title, icon }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  // Trigger animation only on first mount
  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        // Always apply the fadeIn variants whether animated or not
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        initial="hidden" // Always start from hidden
        animate="show" // Always animate to show
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { services } = allData();
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t("Introduction")}</p>
        <h2 className={styles.sectionHeadText}>{t("Overview.")}</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {t(
          "Hi, I am a Full Stack Developer who enjoys Frontend and leans towards UI/UX design. I love learning new technologies like threejs that is used in this website. I started learning and working in Web Development with ReactJs/NextJs and Javascript/Typescript."
        )}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
