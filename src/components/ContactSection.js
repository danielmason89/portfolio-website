import { AnimateSharedLayout } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
// import { Link } from 'react-router-dom';
import Toggle from './Toggle';
import twitter from '../icons/twitter1.svg';
import linkedin from '../icons/linkedin2.svg';
import github from '../icons/github.svg';
import googlemail from '../icons/mail4.svg';
import { scrollReveal } from '../Animation';
import { useScroll } from './UseScroll';
import { motion } from 'framer-motion';
import { titleAnim } from "../Animation";

const ContactSection = () => {
    const [element, controls] = useScroll();
    return (
        <Contact variants={scrollReveal} ref={element} animate={controls} initial='hidden'>
            <AnimateSharedLayout>
                <Toggle title="Looking for more info?">
                    <h1>Let's<span>connect.</span></h1>
                    <Social variants={titleAnim} className="answer">
                        <a href="https://www.linkedin.com/in/daniel-mason-dev/"><img src={linkedin} alt="Linkedin link" title="Daniel's Linkedin"></img></a>
                        <a href="https://github.com/danielmason89"><img src={github} alt="Github link" title="Daniel's Github"></img></a>
                        <a href="https://twitter.com/Dusmass"><img src={twitter} alt="Twitter link" title="Daniel's Twitter"></img></a>
                        <a href="MAILTO: danielmasson0@gmail.com"><img src={googlemail} alt="Daniel Masons' Gmail Address" title="Daniel Masons' Gmail"></img></a>



                    </Social>
                </Toggle>
            </AnimateSharedLayout>
        </Contact>

    );
};

const Contact = styled(About)`
height: 90vh;
display: block;
span {
    display: block;
    cursor: pointer;
    padding: 0rem .9rem;
}
h1 {
    display:flex;
    align-items:center;
    justify-content:flex-start;
    padding-bottom: 1rem;
    font-weight:lighter;
    font-size: 1.8rem;
    cursor: pointer;
}
.horizontal-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
    cursor:pointer;
}
.answer{
    display:flex;
    align-items:center;
    justify-content: space-around;
    padding: 1rem 0rem;
    cursor:pointer;
}
@media (min-width: 1500px) {
    margin-top: 5rem;
padding: 3rem;
font-size: 1rem;
}
`;

const Social = styled(motion.div)`
display:flex;
align-items:center;
padding:2rem 1rem;
`;

export default ContactSection;