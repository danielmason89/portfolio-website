import styled from 'styled-components';
import SvgGitOriginalWordmark from '../ImgComponents/GitOriginalWordmark';
import SvgGitlabOriginalWordmark from '../ImgComponents/GitlabOriginalWordmark';
import SvgExpressOriginalWordmark from '../ImgComponents/ExpressOriginalWordmark';
import SvgJavascriptOriginal from '../ImgComponents/JavascriptOriginal';
import SvgJiraOriginalWordmark from '../ImgComponents/JiraOriginalWordmark';
import SvgMongodbOriginalWordmark from '../ImgComponents/MongodbOriginalWordmark';
import SvgMaterialuiOriginal from '../ImgComponents/MaterialuiOriginal';
import SvgDockerOriginalWordmark from '../ImgComponents/DockerOriginalWordmark';
import SvgNodejsOriginalWordmark from '../ImgComponents/NodejsOriginalWordmark';
import SvgNpmOriginalWordmark from '../ImgComponents/NpmOriginalWordmark';
import SvgReactOriginalWordmark from '../ImgComponents/ReactOriginalWordmark';
import SvgVscodeOriginalWordmark from '../ImgComponents/VscodeOriginalWordmark';
import SvgSassOriginal from '../ImgComponents/SassOriginal';
import SvgGithubOriginalWordmark from '../ImgComponents/GithubOriginalWordmark';
import SvgHerokuOriginalWordmark from '../ImgComponents/HerokuOriginalWordmark';
import { About, Description } from '../styles';
import { scrollReveal } from '../Animation';
import { useScroll } from './UseScroll';


const SkillsSection = () => {
    const [element, controls] = useScroll();
    return (
        <Skills variants={scrollReveal} animate={controls} initial='hidden' ref={element}>
            <Description>
                <h1>Languages /<span>Libraries</span>/ Dev-Tools</h1>
                <h2>Some of the assets that I'm familiar with.</h2>
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
                        <SvgGitlabOriginalWordmark />
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
                        <SvgVscodeOriginalWordmark />
                    </Card>
                    <Card>
                        <SvgMongodbOriginalWordmark />
                    </Card>
                    <Card>
                        <SvgDockerOriginalWordmark />
                    </Card>
                </Cards>
            </Description>
        </Skills>
    );
};

const Skills = styled(About)`
h1{
    padding-bottom: 1rem;
}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
background-color: #f5f1f1;
color:black;
padding: 0rem 0rem;
@media(max-width:768px) {
      p{
          display: flex;
          align-items: center;
    padding: 3rem 0rem 5rem 0rem;
}
      }
`;

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
padding: 0rem 0rem;
@media(max-width:768px) {
      justify-content: center;
      }
`;

const Card = styled.div`
display: flex;
align-items: center;
flex-basis: 4rem;
font-size: 5.7rem;
border-radius: 1rem;
margin: 1rem 2rem;
padding: 1rem 1rem 0rem 1rem; 
`;


export default SkillsSection;