import styled from "styled-components";
import twitter from "../../icons/twitter1.svg";
import linkedin from "../../icons/linkedin2.svg";
import github from "../../icons/github.svg";
import { Link } from "react-router-dom";
import { titleAnim } from "../../Animation";

const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <Link to="/" className="logo">
          &#8249;&#47;&#8250;
        </Link>
        <Link to="/work">Projects</Link>
        <Link to="/about">About</Link>
        <a href="#contact">Contact</a>
        <a href="#skills">Skills</a>
      </ul>
      <Social variants={titleAnim} className="answer">
        <a href="https://www.linkedin.com/in/daniel-mason-dev/">
          <img
            src={linkedin}
            alt="Linkedin link"
            title="linkedin.com/in/daniel-mason-dev/"
          />
        </a>
        <a href="https://github.com/danielmason89">
          <img
            src={github}
            alt="Github link"
            title="github.com/danielmason89"
          />
        </a>
        <a href="https://twitter.com/Dusmass">
          <img src={twitter} alt="Twitter link" title="twitter.com/Dusmass" />
        </a>
      </Social>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 15vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 5rem;
  position: sticky;
  z-index: 100000;
  a {
    color: white;
    text-decoration: none;
    padding: 0rem 0.5rem;
    margin: 0rem 1rem;
    transition: all 0.5s ease;
    &:hover {
      color: #23d997;
    }
    &:focus {
      color: #23d997;
      text-decoration: underline 3px #d96ed4;
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
  @media (max-width: 767px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 2.5rem 1rem;
    ul {
      display: flex;
      flex-direction: wrap;
      align-items: space-between;
      margin: 1rem 0rem;
    }
  }
`;

const Social = styled.div`
  a {
    padding: 2rem 1rem;
  }
  img {
    :hover {
      transform: scale(1.4);
    }
  }
  @media (max-width: 767px) {
    margin: 2rem 2rem;
    display: none;
  }
`;

export default Nav;
