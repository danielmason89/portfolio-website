import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Work = () => {
    return (
        <WorkStyles>
            <Projects>
                <div className="card-box">
                    <div className="card animate-card">
                        <div className="card_side_front">
                            <h1>Mealtime</h1>
                            <div className="line"></div>
                            <img src="" alt="Mealtime homepage" />
                        </div>
                        <div className="card_side_back">
                            <h1>Demo</h1>
                            <h1>Github link</h1>
                        </div>
                    </div>
                    <div className="card animate-card">
                        <div className="card_side_front">
                            <h1>Mealtime</h1>
                            <div className="line"></div>
                            <img src="" alt="Mealtime homepage" />
                        </div>
                        <div className="card_side_back">
                            <h1>Demo</h1>
                            <h1>Github link</h1>
                        </div>
                    </div>
                    <div className="card animate-card">
                        <div className="card_side_front">
                            <h1>Mealtime</h1>
                            <div className="line"></div>
                            <img src="" alt="Mealtime homepage" />
                        </div>
                        <div className="card_side_back">
                            <h1>Demo</h1>
                            <h1>Github link</h1>
                        </div>
                    </div>
                    <div className="card animate-card">
                        <div className="card_side_front">
                            <h1>Mealtime</h1>
                            <div className="line"></div>
                            <img src="" alt="Mealtime homepage" />
                        </div>
                        <div className="card_side_back">
                            <h1>Demo</h1>
                            <h1>Github link</h1>
                        </div>
                    </div>
                    <div className="card animate-card">
                        <div className="card_side_front">
                            <h1>Mealtime</h1>
                            <div className="line"></div>
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

const WorkStyles = styled.div`
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
    background: #cccccc;
    margin-bottom: 3rem;
    }
    img{
        width:100%;
        height:70vh;
        object-fit: cover;
    }
`;

export default Work;