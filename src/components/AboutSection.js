import profile1 from '../img/i-hope-this-works.PNG';
import styled from 'styled-components';
import { About, Description, Image, Hide } from '../styles';
// Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../Animation";
import Wave from "../components/Wave";


const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div variants={titleAnim} initial='hidden' animate='show'>
                    <Intro>
                        <Hide>
                            <h1> Daniel Mason.</h1>
                            <motion.h2 variants={titleAnim}> Full stack developer with a focus on the <span>front end</span>.</motion.h2>
                        </Hide>
                        <Hide>
                            <motion.h2 variants={titleAnim}>Based in Ottawa, Canada.</motion.h2>
                        </Hide>
                    </Intro>
                </motion.div>
                <motion.button variants={fade}><a href="MAILTO: danielmasson0@gmail.com">Connect</a></motion.button>
                <motion.p variants={fade}>Scroll to view more.</motion.p>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={profile1} alt="Daniel Mason smiling" />
            </Image>
            <Wave />
        </About >
    );
};

export default AboutSection;

const Intro = styled(Description)`
`;