import styled from "styled-components";
import linkedin from "../../icons/linkedin2.svg";
import github from "../../icons/github.svg";
import profile from "../../icons/profile.svg";
import { Link } from "react-router-dom";
import { titleAnim } from "../../Animation";
import { SocialIcons } from "../../styles";
import ModeSwitch from "../Switch/Switch";

const Nav = ({ themeToggler }) => {
  return (
    <StyledNav id="home">
      <ul>
        <Link to="/" className="navbar">
          Home
        </Link>
        <Link to="/work" className="navbar">
          Projects
        </Link>
        <Link to="/about" className="navbar">
          About
        </Link>
        <Link to="/contact" className="navbar">
          Contact
        </Link>
      </ul>
      <ModeSwitch themeToggler={themeToggler} />
      <Social variants={titleAnim} className="answer">
        <SocialIcons>
          <a
            href="https://www.linkedin.com/in/daniel-mason-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedin}
              alt="Linkedin link to bring the user to"
              title="linkedin.com/in/daniel-mason-dev/"
            />
          </a>
        </SocialIcons>
        <SocialIcons>
          <a
            href="https://drive.google.com/file/d/17qdrhNDJu47145Xy_BdqlZ85hl3HQ7z0/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={profile}
              alt="Resume link"
              title="https://drive.google.com/file/d/17qdrhNDJu47145Xy_BdqlZ85hl3HQ7z0/view?usp=sharing"
            />
          </a>
        </SocialIcons>
        <SocialIcons>
          <a
            href="https://github.com/danielmason89"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={github}
              alt="Github link to bring the user to"
              title="github.com/danielmason89"
            />
          </a>
        </SocialIcons>
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
  padding: 0rem 2rem;
  position: sticky;
  z-index: 100000;
  a {
    color: ${(props) => props.theme.fontColor};
    text-decoration: none;
    padding: 0rem 0.5rem;
    margin: 0rem 1rem;
    transition: all 0.5s ease;
    font-size: 1.25rem;
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
    padding-top: 0.05rem;
  }
  .navbar-font {
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
    padding: 1rem 0.25rem;
    margin: 0rem 0.5rem;
  }
  button {
    margin: 0.75rem 0.75rem;
    padding: 0.75rem 0.75rem;
  }
  @media (max-width: 767px) {
    margin: 2rem 2rem;
    display: none;
  }
`;

export default Nav;
