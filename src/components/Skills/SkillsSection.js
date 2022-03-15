import styled from "styled-components";
import { SectionDivider, SectionText, Section } from "../../styles";
import SvgGitOriginalWordmark from "../../ImgComponents/GitOriginalWordmark";
import SvgExpressOriginalWordmark from "../../ImgComponents/ExpressOriginalWordmark";
import SvgJavascriptOriginal from "../../ImgComponents/JavascriptOriginal";
import SvgJiraOriginalWordmark from "../../ImgComponents/JiraOriginalWordmark";
import SvgMongodbOriginalWordmark from "../../ImgComponents/MongodbOriginalWordmark";
import SvgMaterialuiOriginal from "../../ImgComponents/MaterialuiOriginal";
// import SvgDockerOriginalWordmark from "../../ImgComponents/DockerOriginalWordmark";
import SvgNodejsOriginalWordmark from "../../ImgComponents/NodejsOriginalWordmark";
import SvgNpmOriginalWordmark from "../../ImgComponents/NpmOriginalWordmark";
import SvgReactOriginalWordmark from "../../ImgComponents/ReactOriginalWordmark";
import SvgVscodeOriginalWordmark from "../../ImgComponents/VscodeOriginalWordmark";
import SvgSassOriginal from "../../ImgComponents/SassOriginal";
import SvgGithubOriginalWordmark from "../../ImgComponents/GithubOriginalWordmark";
import SvgHerokuOriginalWordmark from "../../ImgComponents/HerokuOriginalWordmark";
// import SvgSlackOriginalWorkmark from "../../ImgComponents/SlackOriginalWorkmark";
import SvgCSS3 from "../../ImgComponents/CSS3";
import SvgHTML5 from "../../ImgComponents/HTML5";
import { About, Description } from "../../styles";
import { scrollReveal } from "../../Animation";
import { useScroll } from "../UseScroll";

const SkillsSection = () => {
  const [element, controls] = useScroll();
  return (
    <Skills
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
      id="skills"
    >
      <Description id="tech">
        <Section>
          <SectionDivider />
          <br />
          <h1>Technologies</h1>
          <SectionText>
            <p>
              I've worked with a range of technologies in the web development
              world; using tools for Front-end development and Design.
            </p>
          </SectionText>
          <Cards>
            <Card>
              <SvgJavascriptOriginal />
            </Card>
            <Card>
              <SvgReactOriginalWordmark />
            </Card>
            <Card>
              <SvgNodejsOriginalWordmark />
            </Card>
            <Card>
              <SvgExpressOriginalWordmark />
            </Card>
            <Card>
              <SvgGithubOriginalWordmark />
            </Card>
            <Card>
              <SvgGitOriginalWordmark />
            </Card>
            <Card>
              <SvgHerokuOriginalWordmark />
            </Card>
            <Card>
              <SvgMaterialuiOriginal />
            </Card>
            <Card>
              <SvgJiraOriginalWordmark />
            </Card>
            <Card>
              <SvgSassOriginal />
            </Card>
            <Card>
              <SvgNpmOriginalWordmark />
            </Card>
            <Card>
              <SvgHTML5 />
            </Card>
            <Card>
              <SvgVscodeOriginalWordmark />
            </Card>
            <Card>
              <SvgMongodbOriginalWordmark />
            </Card>
            {/* <Card>
              <SvgDockerOriginalWordmark />
            </Card> */}
            <Card>
              <SvgCSS3 />
            </Card>
          </Cards>
        </Section>
      </Description>
    </Skills>
  );
};

const Skills = styled(About)`
  min-height: 60vh;
  h1 {
    color: black;
  }
  p {
    text-align: left;
    display: flex;
    align-items: flex-start;
    width: 95%;
    padding: 1rem 0rem 2.5rem 0rem;
    color: black;
  }
  background-color: white;
  color: black;
  padding: 1rem 0rem;
  @media (max-width: 768px) {
    p {
      text-align: left;
      display: flex;
      align-items: flex-start;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4rem 0rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  font-size: 5.7rem;
  margin: 1rem 2rem;
  padding: 1rem 1rem 1rem 1rem;
`;

export default SkillsSection;
