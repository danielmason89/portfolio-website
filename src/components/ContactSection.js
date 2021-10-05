import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';

const ContactSection = () => {
    return (
        <Contact>
            <h1>Looking for more info? <span>Let's Connect.</span></h1>
            <div className="info">
                <h4>Twitter</h4>
                <h4>Linkedin</h4>
                <h4>Github</h4>
                <h4>Gmail</h4>
                <div className="horizontal-line"></div>
            </div>
        </Contact>

    );
};

const Contact = styled(About)`
display: block;
span {
    display: block;
}
h1 {
    padding-bottom: 2rem;
    font-weight:lighter;
    font-size: 1.8rem;
}
.horizontal-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
}
.info{
    padding: 3rem 0rem;
    cursor:pointer;
}
h4{
    padding: 2rem 0ren;
    p{
        padding:1rem 0rem;
    }
}
`;

export default ContactSection;