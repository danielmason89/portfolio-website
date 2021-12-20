import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <div>
      <MainFooter>
        <p>
          2021 | Designed and coded by <span>Daniel Mason</span>
        </p>
        <p>move up arrow</p>
      </MainFooter>
    </div>
  );
};

const MainFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 3rem;
  color: #ccc;
  span {
    font-size: 1.5rem;
    color: #8f7e8f;
    :hover {
      color: #23d997;
    }
  }

  p {
    color: #ccc;
  }
`;

export default Footer;
