import profile1 from '../img/i-hope-this-works.PNG';
import styled from 'styled-components';
import { About, Description, Image, Hide } from '../styles';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <Intro>
                    <Hide>
                        <h1> Daniel Mason.</h1>
                        <h2> Full stack developer with a <span>focus</span> on the front end.</h2>
                    </Hide>
                    <Hide>
                        <h2>Based in Ottawa, Canada.</h2>
                    </Hide>
                </Intro>
                <button>Connect</button>
                <p>Scroll to view more.</p>
            </Description>
            <Image>
                <img src={profile1} alt="Daniel Mason smiling" />
            </Image>
        </About>
    );
};

export default AboutSection;

const Intro = styled(Description)`
`;