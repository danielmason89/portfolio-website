import React from 'react';
import profile1 from '../img/profile-image.jpeg';

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h1>Hi I'm Daniel Mason</h1>
                        <h2>A professional cook turned Full-stack/Front-end developer</h2>
                    </div>
                    <div className="hide">
                        <h2> Interested in being a part of creative <span>projects</span>that come
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>alive.</h2>
                    </div>
                </div>
                <p>Contact me here to book a interview</p>
                <button>Contact Me</button>
                <div className="image">
                    <img src={profile1} alt="Daniel Mason smiling" />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;