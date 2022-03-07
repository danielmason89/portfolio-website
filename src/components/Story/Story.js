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
          As a self-taught developer, I've transitioned from a 10-year career in
          the culinary arts to the tech industry. I have chosen to make this
          transition because of experiences during the early 2000s I've had
          through my parents.
        </p>
        <p>
          During their time as fiber-optics technicians, I learned a lot about
          computers and their interworkings from a hardware and software point
          of view.
          <br /> Those experiences fostered my love for the industry since I'm a
          creative problem solver who enjoys the ability to be inventive and
          critical when needed.
        </p>
        <p>
          I'm currently looking for full-time work as a front-end developer in a
          medium to a large-scale company where I will have the opportunity to
          collaborate with like-minded individuals, add value with the skills I
          currently have, and continue to grow as a developer. Moreover, I'm
          open to working on freelance projects that come my way depending on
          their respective scale and subject matter.
        </p>
        <span>
          In my free time, you'll find me enjoying a good cup of coffee,
          reading, and going on bike rides during the summer.
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
