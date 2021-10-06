import React from 'react';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../Animation';

const About = () => {
    return (
        <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
            <AboutSection />
            <SkillsSection />
            <ContactSection />
        </motion.div>
    );
};

export default About;