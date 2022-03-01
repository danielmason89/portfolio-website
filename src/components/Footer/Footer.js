import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return (
    <div>
      <MainFooter>
        <div>
          <p>
            ©2021 | <span>Daniel Mason</span>
          </p>
        </div>
      </MainFooter>
    </div>
  );
};

const MainFooter = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 2rem;
  color: white;
  align-items: center;
  justify-content: center;
  span {
    font-size: 1.5rem;
    color: #23d997;
    :hover {
      color: #8f7e8f;
    }
  }

  p {
    margin: 2rem 0rem;
    color: #ccc;
  }
`;

export default Footer;
