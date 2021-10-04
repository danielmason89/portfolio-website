import profile1 from '../img/i-hope-this-works.PNG';
// import styled from 'styled-components';
import { About, Description, Image, Hide } from '../styles';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h1>Hi I'm Daniel Mason.</h1>
                        <h2>A professional cook turned Full stack developer with a focus on the front end.</h2>
                    </Hide>
                    <Hide>
                        <h2> Interested in being a part of creative <span>projects</span> that come</h2>
                    </Hide>
                    <Hide>
                        <h2>alive.</h2>
                    </Hide>
                </div>
                <p>Contact me here to book a interview.</p>
                <button>Contact</button>
                <p>Please scroll to view more about me.</p>
            </Description>
            <Image>
                <img src={profile1} alt="Daniel Mason smiling" />
            </Image>
        </About>
    );
};

export default AboutSection;