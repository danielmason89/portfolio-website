import React from 'react';
import profile1 from '../img/profile-image.jpeg';

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>I work towards</h2>
                    </div>
                    <div className="hide">
                        <h2>making <span>projects</span> come
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>alive.</h2>
                    </div>
                </div>
                <p>Contact me for any further information/questions</p>
                <button>Contact Me</button>
                <div className="image">
                    <img src={profile1} alt="Daniel Mason smiling" />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;