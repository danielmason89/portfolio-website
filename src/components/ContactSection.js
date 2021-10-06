import { AnimateSharedLayout } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import twitter from '../icons/twitter 1.svg';

const ContactSection = () => {
    return (
        <Contact>
            <AnimateSharedLayout>
                <Toggle title="Looking for more info?">
                    <h1>Let's<span>connect.</span></h1>
                    <div className="info">
                        <p>{twitter}</p>
                        <p>Linkedin</p>
                        <p>Github</p>
                        <p>Gmail</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Contact>

    );
};

const Contact = styled(About)`
height: 75vh;
display: block;
span {
    display: block;
    cursor: pointer;
    padding: 0rem .9rem;
}
h1 {
    display:flex;
    align-items:center;
    justify-content:flex-start;
    padding-bottom: 1rem;
    font-weight:lighter;
    font-size: 1.8rem;
    cursor: pointer;
}
.horizontal-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
.info{
    display:flex;
    align-items:center;
    justify-content: space-around;
    padding: 1rem 0rem;
    cursor:pointer;
}
    p{
        padding:2rem 2rem;
    }
`;

export default ContactSection;