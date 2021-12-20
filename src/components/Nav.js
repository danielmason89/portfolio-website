import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import twitter from "../icons/twitter1.svg";
import linkedin from "../icons/linkedin2.svg";
import github from "../icons/github.svg";
import { titleAnim } from "../Animation";

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/" className="logo">
        Dan M.
      </Link>
      <Social variants={titleAnim} className="answer">
        <a href="https://www.linkedin.com/in/daniel-mason-dev/">
          <img
            src={linkedin}
            alt="Linkedin link"
            title="linkedin.com/in/daniel-mason-dev/"
          ></img>
        </a>
        <a href="https://github.com/danielmason89">
          <img
            src={github}
            alt="Github link"
            title="github.com/danielmason89"
          ></img>
        </a>
        <a href="https://twitter.com/Dusmass">
          <img
            src={twitter}
            alt="Twitter link"
            title="twitter.com/Dusmass"
          ></img>
        </a>
      </Social>
      <ul>
        <Link to="/about">About</Link>
        <Link to="/work">Projects</Link>
        <Link to="/blog">Blog</Link>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  position: sticky;
  z-index: 100000;
  top: 0;
  a {
    color: #8f7e8f;
    text-decoration: none;
    padding: 0rem 0.5rem;
    margin: 0rem 1rem;
    transition: all 0.5s ease;
    &:hover {
      color: #23d997;
    }
  }
  ul {
    display: flex;
    list-style: none;
  }
  .logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
  }
  @media (max-width: 768px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 1rem;
    ul {
      display: flex;
      flex-direction: column;
      align-items: space-between;
      margin: 1rem 0rem;
    }
  }
`;

const Social = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
  img {
    :hover {
      transform: scale(1.4);
    }
  }
`;

export default Nav;
