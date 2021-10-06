import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// Animations
import { motion } from 'framer-motion';
import { sliderContainer, slider, fade, pageAnimation, lineAnim } from '../Animation';


const Work = () => {
    return (
        <WorkStyles style={{ background: '#fff' }} exit='exit' variants={pageAnimation} initial='hidden' animate='show' >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>

            <Projects>
                <div className="card-box">
                    <div className="card animate-card">
                        <div className="card_side_front">
                            <motion.h1 variants={fade}>Mealtime</motion.h1>
                            <motion.div variants={lineAnim} className="line"></motion.div>
                            <Link />
                            <img src="" alt="Mealtime homepage" />
                        </div>
                        <div className="card_side_back">
                            <h2>Demo</h2>
                            <h3>Github link</h3>
                        </div>
                    </div>
                    <div className="card animate-card">
                        <div className="card_side_front">
                            <h1>Mealtime</h1>
                            <motion.div className="line"></motion.div>
                            <Link />
                            <img src="" alt="Mealtime homepage" />
                        </div>
                        <div className="card_side_back">
                            <h2>Demo</h2>
                            <h3>Github link</h3>
                        </div>
                    </div>
                    <div className="card animate-card">
                        <div className="card_side_front">
                            <h1>Mealtime</h1>
                            <motion.div className="line"></motion.div>
                            <Link />
                            <img src="" alt="Mealtime homepage" />
                        </div>
                        <div className="card_side_back">
                            <h2>Demo</h2>
                            <h3>Github link</h3>
                        </div>
                    </div>
                    <div className="card animate-card">
                        <div className="card_side_front">
                            <h1>Mealtime</h1>
                            <motion.div className="line"></motion.div>
                            <Link />
                            <img src="" alt="Mealtime homepage" />
                        </div>
                        <div className="card_side_back">
                            <h2>Demo</h2>
                            <h2>Github link</h2>
                        </div>
                    </div>
                    <div className="card animate-card">
                        <div className="card_side_front">
                            <h1>Mealtime</h1>
                            <motion.div className="line"></motion.div>
                            <Link />
                            <img src="" alt="Mealtime homepage" />
                        </div>
                        <div className="card_side_back">
                            <h1>Demo</h1>
                            <h1>Github link</h1>
                        </div>
                    </div>
                </div>
            </Projects>
        </WorkStyles>
    );
};

const WorkStyles = styled(motion.div)`
min-height:100vh;
overflow: hidden;
padding: 5rem 10rem;
h2{
    padding:1rem 0rem;
    }
`;
const Projects = styled.div`
padding-bottom: 10rem;
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

const Hide = styled.div`
overflow: hidden;
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