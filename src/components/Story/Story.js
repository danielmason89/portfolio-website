import React from "react";
import styled from "styled-components";
import profile1 from "../../img/portfolioPicture.jpeg";
import { motion } from "framer-motion";
import { photoAnim } from "../../Animation";

const Story = () => {
  return (
    <div>
      <Image>
        <h1>Hi!, I'm Daniel Mason.</h1>
        <motion.img
          variants={photoAnim}
          src={profile1}
          alt="Daniel Mason smiling"
        />
      </Image>
      <StyledStory>
        <p>
          A self-taught Developer who transitioned from a 10 year career in the
          culinary arts. I chose the tech industry since I've had some
          experience with it through my parents who were fiber-optics
          technicians.
          <br /> Those experiences fostered my love for the industry since I'm a
          real problem, and I enjoy the flexibility to be able to think on your
          feet when needed.
        </p>
        <p>
          I'm currently looking to work as a front end developer in a medium to
          large scale company. As well, I'm open to working on freelance
          projects that come my way depending on the subject matter.
        </p>
        <span>
          In my free time you'll find me enjoy a good cups of coffee, reading
          and going on bike rides during the summer.
        </span>
      </StyledStory>
    </div>
  );
};

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 40vw;
    height: 70vh;
    object-fit: cover;
    border-radius: 10%;
    margin: 3rem;
  }
`;

const StyledStory = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: 0 5rem;
  text-align: left;
  line-height: 2rem;
  text-indent: 1rem;
  p {
    line-height: 2rem;
    color: white;
  }
  span {
    padding-top: 2rem;
    font-weight: normal;
    color: white;
  }
`;

export default Story;
