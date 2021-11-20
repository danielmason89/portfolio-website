import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/" className="logo">
        dan//Dev
      </Link>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/work">Projects:Work</Link>
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
  background-color: #423d3d;
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
    font-size: 2rem;
    font-family: "Lobster", cursive;
    font-weight: bold;
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

export default Nav;
