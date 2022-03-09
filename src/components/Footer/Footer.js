import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return (
    <div>
      <MainFooter>
        <div>
          <h3>
            ©2021 |{" "}
            <a href="#home">
              <span>Daniel Mason</span>
            </a>
          </h3>
        </div>
      </MainFooter>
    </div>
  );
};

const MainFooter = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 1.5rem;
  color: white;
  align-items: center;
  justify-content: center;
  span {
    border: none;
    font-size: 1.25rem;
    color: #23d997;
    :hover {
      color: #8f7e8f;
    }
  }

  h3 {
    margin: 2rem 0rem;
    color: #ccc;
  }
`;

export default Footer;
