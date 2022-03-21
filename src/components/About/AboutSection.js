import homeImage from "../../icons/PngItem_468994.png";
import styled from "styled-components";
import { About, Description, Hide } from "../../styles";
// Framer Motion
import { motion } from "framer-motion";
import "animate.css";
import { titleAnim, fade, photoAnim } from "../../Animation";
import Wave from "../Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div variants={titleAnim} initial="hidden" animate="show">
          <div>
            <Hide>
              <h1>Hi. I'm Daniel Mason.</h1>
              <motion.h2 variants={titleAnim}>A front end developer.</motion.h2>
              <p>
                {" "}
                who strives to build responsive{" "}
                <motion.span variants={fade}>
                  websites in Ottawa, ON.
                </motion.span>{" "}
                <br />
                Please take a look around!
              </p>
            </Hide>
          </div>
        </motion.div>
      </Description>
      <StyledImage>
        <motion.img
          className="animate__heartBeat"
          variants={photoAnim}
          src={homeImage}
          alt="creative developer brain"
        />
        <motion.button variants={fade}>
          <a href="../../pages/Contact.js">Let's Connect</a>
        </motion.button>
      </StyledImage>
      <Wave />
    </About>
  );
};

const StyledImage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* z-index: 2; */
  /* flex: 1; */
  overflow: hidden;
  button {
    margin-top: 5rem;
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
      margin-top: 1rem;
      width: 20vw;
      height: 20vh;
      object-fit: contain;
    }
    button {
      margin: 2rem;
    }
  }

  @media (min-width: 360px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      margin-top: 1rem;
      width: 35vw;
      height: 30vh;
      object-fit: contain;
    }
    button {
      margin: 2rem;
    }
  }
`;

export default AboutSection;
