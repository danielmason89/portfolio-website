import React from "react";
import styled from "styled-components";
import {
  Hide,
  GridContainer,
  BlogCard,
  Image,
  TitleContent,
  HeaderThree,
  Hr,
  CardInfo,
  Tag,
  TagList,
  UtilityList,
  ExternalLinks,
} from "./../styles";
import { projects } from "../constants/constants";
// Animations
import { motion } from "framer-motion";
import { fade, pageAnimation, lineAnim } from "../Animation";
import { useScroll } from "../components/UseScroll";
import ScrollOrigin from "../components/ScrollOrigin";

const Work = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();
  return (
    <WorkStyles
      style={{ background: "#2c2b2b" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Projects id="projects">
        <div className="card-box">
          <Hide>
            <GridContainer
              ref={element}
              variants={fade}
              animate={controls}
              initial="hidden"
            >
              {projects.map(
                ({ id, image, title, description, tags, source, visit }) => (
                  <BlogCard
                    ref={element2}
                    variants={fade}
                    animate={controls2}
                    initial="hidden"
                    key={id}
                  >
                    <Image
                      ref={element3}
                      variants={fade}
                      animate={controls3}
                      initial="hidden"
                      src={image}
                    />

                    <TitleContent>
                      <motion.h1 variants={fade}>
                        <HeaderThree
                          ref={element4}
                          variants={fade}
                          animate={controls4}
                          initial="hidden"
                          title={title}
                        >
                          {title}
                        </HeaderThree>
                      </motion.h1>
                      <motion.div
                        variants={lineAnim}
                        className="line"
                      ></motion.div>
                      <Hr />
                      <CardInfo
                        ref={element5}
                        variants={fade}
                        animate={controls5}
                        initial="hidden"
                      >
                        {description}
                      </CardInfo>
                    </TitleContent>
                    <div>
                      <TitleContent>Stack</TitleContent>
                      <TagList>
                        {tags.map((tag, i) => (
                          <Tag key={i}>{tag}</Tag>
                        ))}
                      </TagList>
                    </div>
                    <UtilityList>
                      <ExternalLinks href={visit}>Code</ExternalLinks>
                      <ExternalLinks href={source}>Source</ExternalLinks>
                    </UtilityList>
                  </BlogCard>
                )
              )}
            </GridContainer>
          </Hide>
        </div>
      </Projects>
      <ScrollOrigin />
    </WorkStyles>
  );
};

const WorkStyles = styled(motion.div)`
  min-height: 50vh;
  overflow: hidden;
  padding: 5rem 10rem;
  /* p {
    font-size: 2rem;
  } */
  h2 {
    padding: 1rem 0rem;
  }
  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

const Projects = styled(motion.div)`
  .line {
    height: 0.25rem;
    background: #d96ed4;
    margin-bottom: 2rem;
    border-radius: 2rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default Work;
