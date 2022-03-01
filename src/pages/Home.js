import React from "react";
import AboutSection from "../components/About/AboutSection";
import SkillsSection from "../components/Skills/SkillsSection";
import Contact from "../components/Contact/Contact";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
import ScrollOrigin from "../components/ScrollOrigin";

const Home = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <SkillsSection />
      <Contact />
      <ScrollOrigin />
    </motion.div>
  );
};

export default Home;
