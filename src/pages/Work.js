import React from 'react';
import { Hide } from '../styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mealTime from '../icons/landingPage.PNG';
// Animations
import { motion } from 'framer-motion';
import { sliderContainer, slider, fade, pageAnimation, lineAnim } from '../Animation';
import { useScroll } from '../components/UseScroll';
import ScrollOrigin from '../components/ScrollOrigin';


const Work = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();
    const [element4, controls4] = useScroll();
    const [element5, controls5] = useScroll();
    return (
        <WorkStyles style={{ background: '#2c2b2b' }} exit='exit' variants={pageAnimation} initial='hidden' animate='show' >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>

            <Projects>
                <div className="card-box">
                    <Hide>
                        <Project ref={element} variants={fade} animate={controls} initial='hidden'>
                            <div className="card_side_front">
                                <motion.h1 variants={fade}>Mealtime</motion.h1>
                                <motion.div variants={lineAnim} className="line"></motion.div>
                                <Link />
                                <Image src={mealTime} alt="Mealtime homepage" />
                            </div>
                            <div className="card_side_back">
                                <h2></h2>
                                <a href="https://github.com/danielmason89/savvyCodersCapstoneProjectMealTime"><h3>Github link</h3></a>
                            </div>
                        </Project>
                    </Hide>
                    <Project ref={element2} variants={fade} animate={controls2} initial='hidden'>
                        <div className="card_side_front">
                            <motion.h1 variants={fade}>Blake Alexander</motion.h1>
                            <motion.div variants={lineAnim} className="line"></motion.div>
                            <Link />
                            <img src="" alt="Blake Alexander homepage" />
                        </div>
                        <div className="card_side_back">
                            <h2>Demo</h2>
                            <h3>Github link</h3>
                        </div>
                    </Project>
                    <Project ref={element3} variants={fade} animate={controls3} initial='hidden'>
                        <div className="card_side_front">
                            <motion.h1 variants={fade}>Peckish</motion.h1>
                            <motion.div variants={lineAnim} className="line"></motion.div>
                            <Link />
                            <img src="" alt="Peckish homepage" />
                        </div>
                        <div className="card_side_back">
                            <h2>Demo Coming Soon..</h2>
                            <h3>Github link Coming Soon..</h3>
                        </div>
                    </Project>
                    <Project ref={element4} variants={fade} animate={controls4} initial='hidden'>
                        <div className="card_side_front">
                            <motion.h1 variants={fade}>PupConnect</motion.h1>
                            <motion.div variants={lineAnim} className="line"></motion.div>
                            <Link />
                            <img src="" alt="PupConnect homepage" />
                        </div>
                        <div className="card_side_back">
                            <h2>Demo Coming Soon..</h2>
                            <h3>Github link Coming Soon..</h3>
                        </div>
                    </Project>
                    <Project ref={element5} variants={fade} animate={controls5} initial='hidden'>
                        <div className="card_side_front">
                            <motion.h1 variants={fade}>Lustrare</motion.h1>
                            <motion.div variants={lineAnim} className="line"></motion.div>
                            <Link />
                            <img src="" alt="Lustrare homepage" />
                        </div>
                        <div className="card_side_back">
                            <h2>Demo Coming Soon..</h2>
                            <h3>Github link Coming Soon..</h3>
                        </div>
                    </Project>
                </div>
            </Projects>
            <ScrollOrigin />
        </WorkStyles>
    );
};

const WorkStyles = styled(motion.div)`
min-height:50vh;
overflow: hidden;
padding: 5rem 10rem;
h2{
    padding:1rem 0rem;
    }
    @media (max-width: 768px) {
        padding: 2rem 2rem;
    }
`;
const Projects = styled(motion.div)`
.line{
    height:0.5rem;
    background: #D96ED4;
    margin-bottom: 3rem;
    border-radius: 3rem;
    }
    img{
        width:100%;
        height:70vh;
        object-fit: cover;
    }
    h3{
        padding-bottom: 3rem;
    }
`;

const Project = styled(motion.div)`
overflow: hidden;
color: #c8adad;

@media (max-width: 768px) {
        padding: 2rem 1rem;
        display:flex;
        align-items: center;
        flex-wrap: wrap;
        flex-direction: column;
        h3{
        padding-bottom: 1rem;
    }
    }
`;

const Image = styled(motion.img)`
width: auto;
height: 95vh;
object-fit: cover;
`;

const Frame1 = styled(motion.div)`
position: fixed;
left: 0;
top:10%;
width:100%;
height:100vh;
background: #fffebf;
z-index: 2;
`;

const Frame2 = styled(Frame1)`
background:#ff8efb;
`
const Frame3 = styled(Frame1)`
background:#8ed2ff;
`

const Frame4 = styled(Frame1)`
background:#8effa0;
`
export default Work;