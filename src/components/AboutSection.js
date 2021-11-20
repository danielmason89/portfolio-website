import profile1 from "../img/portfolioPicture.jpeg";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
// Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../Animation";
import Wave from "../components/Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div variants={titleAnim} initial="hidden" animate="show">
          <Intro>
            <Hide>
              <h1> Daniel Mason.</h1>
              <motion.p variants={titleAnim}>
                {" "}
                A Canadian full stack developer with {"=>"}
              </motion.p>
              <p> a focus on the </p>
            </Hide>
            <Hide>
              <motion.span variants={titleAnim}> front end.</motion.span>
            </Hide>
          </Intro>
        </motion.div>
        <motion.button variants={fade}>
          <a href="MAILTO: danielmasson0@gmail.com">Connect</a>
        </motion.button>
        <motion.p variants={fade}>Scroll to view more.</motion.p>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          src={profile1}
          alt="Daniel Mason smiling"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;

const Intro = styled(Description)`
  h1 {
    font-size: 4rem;
    font-weight: bold;
    &:hover {
      color: #23d997;
    }
  }

  p {
    font-size: 1rem;
    padding: 0.8rem 0rem;
    font-weight: bold;
  }
`;
