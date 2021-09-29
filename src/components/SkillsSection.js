import React from 'react';
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

const SkillsSection = () => {
    return (
        <div className="skills">
            <div className="description">
                <h2>Languages /<span>Libraries</span>/ Dev-Tools</h2>
                <h3>Assets I am familiar in development/workflow</h3>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={javascript} alt="javascript" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={react} alt="react" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={nodejs} alt="nodejs" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={express} alt="expressjs" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={github} alt="github" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={git} alt="git" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={gitlab} alt="gitlab" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={heroku} alt="heroku" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={mongodb} alt="mongodb" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={jira} alt="jira" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={sass} alt="sass" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={npm} alt="npm" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={vscode} alt="vscode" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={materialui} alt="materialui" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={docker} alt="docker" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src="" alt="" />
            </div>
        </div>
    );
};

export default SkillsSection;