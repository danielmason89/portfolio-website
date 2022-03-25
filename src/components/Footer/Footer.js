import React from "react";
import { SocialIcons } from "../../styles";
import {
  FooterWrapper,
  LinkList,
  LinkColumn,
  LinkTitle,
  LinkItem,
  SocialIconsContainer,
  CompanyContainer,
  Slogan,
  SocialContainer,
} from "./FooterStyles";
import profile from "../../icons/profile.svg";
import linkedin from "../../icons/linkedin2.svg";
import github from "../../icons/github.svg";
// import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return (
    <div>
      <MainFooter>
        <FooterWrapper>
          <LinkList>
            <LinkColumn>
              <LinkTitle>Call</LinkTitle>
              <LinkItem
                href="tel:613-981-4949"
                title="Daniel Masons' phone number: 613-981-4949"
              >
                613-981-4949
              </LinkItem>
            </LinkColumn>
            <LinkColumn>
              <LinkTitle>Email</LinkTitle>
              <LinkItem
                href="mailto:contact@danmasson0@gmail.com"
                title="Daniel Masons' email: danmasson0@gmail.com"
              >
                danmasson0@gmail.com
              </LinkItem>
            </LinkColumn>
          </LinkList>
          <SocialIconsContainer>
            <CompanyContainer>
              <Slogan>😊 I look forward to speaking with you soon! 📬</Slogan>
            </CompanyContainer>
            <SocialContainer>
              <SocialIcons
                href="https://drive.google.com/file/d/1C4OZ9kLQRoGguslGvdsRl4oc63ULdp7F/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={profile}
                  alt="Resume link"
                  title="https://drive.google.com/file/d/1C4OZ9kLQRoGguslGvdsRl4oc63ULdp7F/view?usp=sharing"
                />
              </SocialIcons>
              <SocialIcons
                href="https://github.com/danielmason89"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={github}
                  alt="GitHub link"
                  title="github.com/danielmason89"
                />
              </SocialIcons>
              <SocialIcons
                href="https://www.linkedin.com/in/daniel-mason-dev/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedin}
                  alt="Linkedin link"
                  title="linkedin.com/in/daniel-mason-dev/"
                />
              </SocialIcons>
            </SocialContainer>
          </SocialIconsContainer>
          <h3>
            ©2021 |{" "}
            <a href="#home">
              <span>Daniel Mason</span>
            </a>
          </h3>
        </FooterWrapper>
      </MainFooter>
    </div>
  );
};

const MainFooter = styled.footer`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 16rem;
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
  @media (max-width: 668px) {
    padding-top: 8rem;
  }

  @media (min-width: 268px) {
    padding-top: 1rem;
  }

  @media (min-width: 1041px) {
    padding-top: 4rem;
  }
`;

export default Footer;
