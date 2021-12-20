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
              <h1>
                Hello, my name is{" "}
                <span className="text-color-main-hover">Dan Mason.</span>
              </h1>
              <motion.h1 variants={titleAnim}>A full stack developer</motion.h1>
              <p> who focuses on responsive </p>
              <motion.span variants={fade}>front end applications.</motion.span>
            </Hide>
          </Intro>
        </motion.div>
        <motion.button variants={fade}>
          <a href="MAILTO: danielmasson0@gmail.com">Let's Connect</a>
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
    font-size: 3rem;
    font-weight: bold;
    .text-color-main-hover {
      font-size: 3rem;
      :hover {
        color: #8f7e8f;
      }
    }
  }

  span {
    font-size: 1.8rem;
  }

  p {
    font-size: 1.5rem;
    padding: 0.8rem 0rem;
    font-weight: bold;
  }
`;
