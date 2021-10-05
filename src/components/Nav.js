import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <StyledNav>
            <h1></h1>
            <ul>
                <Link to='/About'>About</Link>
                <Link to='/work'>Work</Link>
            </ul>
        </StyledNav>
    )
};

const StyledNav = styled.nav`
min-height: 10vh;
display: flex;
margin: auto;
justify-content:space-between;
align-items: center;
padding: 1rem 10rem;
background-color: #222020;
a{
    color: #866f86;
    text-decoration: none;
    padding: 0rem 1rem;
    margin: 0rem 3rem;
    transition: all 0.5s ease;
    &:hover{
          background-color: #23d997;
          color:white;
          border-radius: 30px;
      }
}
ul{
    display: flex;
    list-style: none;
}
#logo{
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
}
`;

export default Nav;