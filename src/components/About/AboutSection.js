import homeImage from "../../icons/PngItem_468994.png";
import styled from "styled-components";
import { GlobalStyle } from ".././GlobalStyle";
import { About, Description, Hide } from "../../styles";
// Framer Motion
import { motion } from "framer-motion";
import "animate.css";
import { titleAnim, fade, photoAnim } from "../../Animation";
import Wave from "../Wave";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <About>
      <GlobalStyle />
      <Description>
        <motion.div variants={titleAnim} initial="hidden" animate="show">
          <div>
            <Hide>
              <h1>Hi. I'm Daniel Mason.</h1>
              <motion.h2 variants={titleAnim}>
                Front-end Developer | Life-long Learner{" "}
              </motion.h2>
              <p>
                {" "}
                I love building{" "}
                <motion.span variants={fade}>dynamic</motion.span> and{" "}
                <motion.span variants={fade}>responsive</motion.span> websites.
                <br />
                Based out of{" "}
                <motion.span variants={fade}>Ottawa, Ontario.</motion.span>{" "}
                <br />
                <motion.p variants={fade}>Feel free to look around😊</motion.p>
              </p>
            </Hide>
          </div>
        </motion.div>
      </Description>
      <StyledImage>
        <div>
          <motion.img
            className="animate__heartBeat"
            variants={photoAnim}
            src={homeImage}
            alt="creative developer brain"
          />
          <Link to="/contact">
            <motion.button variants={fade}>Let's Connect</motion.button>
          </Link>
        </div>
      </StyledImage>
      <Wave />
    </About>
  );
};

const StyledImage = styled.div`
  /* overflow: hidden; */
  z-index: 2000000000;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  button {
    margin-top: 5rem;
    font-size: 1.5rem;
  }
  img {
    margin-top: 1rem;
    width: 35vw;
    height: 35vh;
    object-fit: contain;
  }
  animate__heartbeat: animate__heartBeat 800s;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      margin-top: 2rem;
      width: 35vw;
      height: 40vh;
      object-fit: contain;
    }
    button {
      font-size: 1.25rem;
      margin: 6rem;
    }
  }

  @media (max-width: 250px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      margin-top: 1rem;
      width: 5vw;
      height: 30vh;
      object-fit: contain;
    }
  }
`;

export default AboutSection;
