import React from "react";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import ScrollOrigin from "../components/ScrollOrigin";

const About = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <SkillsSection />
      <ScrollOrigin />
    </motion.div>
  );
};

export default About;
