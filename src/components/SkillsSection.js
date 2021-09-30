import React from 'react';
import styled from 'styled-components';
import git from '../img/git-original-wordmark.svg';
import github from '../img/github-original-wordmark.svg';
import express from '../img/express-original-wordmark.svg';
import javascript from '../img/javascript-original.svg';
import jira from '../img/jira-original-wordmark.svg';
import mongodb from '../img/mongodb-original-wordmark.svg';
import materialui from '../img/materialui-original.svg';
import docker from '../img/docker-original-wordmark.svg';
import nodejs from '../img/nodejs-original-wordmark.svg';
import npm from '../img/npm-original-wordmark.svg';
import react from '../img/react-original-wordmark.svg';
import vscode from '../img/vscode-original-wordmark.svg';
import sass from '../img/sass-original.svg';
import gitlab from '../img/gitlab-original-wordmark.svg';
import heroku from '../img/heroku-original-wordmark.svg';
import code from '../icons/code.svg';
import { About, Description, Image } from '../styles';

const SkillsSection = () => {
    return (
        <Skills>
            <Description>
                <h2>Languages /<span>Libraries</span>/ Dev-Tools</h2>
                <h3>Assets I am familiar in development/workflow</h3>
                <Cards>
                    <Card>
                        <Icons>
                            <img src={javascript} alt="javascript" />
                        </Icons>
                    </Card>
                    <Card>
                        <Icons>
                            <img src={react} alt="react" />
                        </Icons>
                    </Card>
                    <Card>
                        <Icons>
                            <img src={nodejs} alt="nodejs" />
                        </Icons>
                    </Card>
                    <Card>
                        <Icons>
                            <img src={express} alt="expressjs" />
                        </Icons>
                    </Card>
                    <Card>
                        <Icons>
                            <img src={github} alt="github" />
                        </Icons>
                    </Card>
                    <Card>
                        <Icons>
                            <img src={git} alt="git" />
                        </Icons>
                    </Card>
                    <Card>
                        <Icons>
                            <img src={gitlab} alt="gitlab" />
                        </Icons>
                    </Card>
                    <Card>
                        <Icons>
                            <img src={heroku} alt="heroku" />
                        </Icons>
                    </Card>
                    <Card>
                        <Icons>
                            <img src={mongodb} alt="mongodb" />
                        </Icons>
                    </Card>
                    <Card>
                        <Icons>
                            <img src={jira} alt="jira" />
                        </Icons>
                    </Card>
                    <Card>
                        <Icons>
                            <img src={sass} alt="sass" />
                        </Icons>
                    </Card>
                    <Card>
                        <Icons>
                            <img src={npm} alt="npm" />
                        </Icons>
                    </Card>
                    <Card>
                        <Icons>
                            <img src={vscode} alt="vscode" />
                        </Icons>
                    </Card>
                    <Card>
                        <Icons>
                            <img src={materialui} alt="materialui" />
                        </Icons>
                    </Card>
                    <Card>
                        <Icons>
                            <img src={docker} alt="docker" />
                        </Icons>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={code} alt="html-tags" />
            </Image>
        </Skills>
    );
};

const Skills = styled(About)`
h2{
    padding-bottom: 5rem;
}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}
background-color: #383e46;
`;
const Cards = styled.div`
display: flex;
flex-direction: column;
`;
const Card = styled.div`
flex-basis: 20rem;
icon{
    display:flex;
    align-items: center;
}
`;
const Icons = styled.div`
padding: 10rem 10rem;
background-size: 10px 20px;
display:flex;
flex-direction: row;
`;


export default SkillsSection;