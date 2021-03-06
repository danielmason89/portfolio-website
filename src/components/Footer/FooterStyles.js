import styled from "styled-components";

export const FooterWrapper = styled.section`
  width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 0rem auto;
  box-sizing: content-box;

  @media screen and (max-width: 640px) {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`;

export const LinkItem = styled.a`
  font-size: 18px;
  line-height: 30px;
  margin-bottom: 16px;
  transition: 0.3s ease;
  position: relative;
  left: 0;
  &:hover {
    color: ${(props) => props.theme.body};
    left: 6px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    display: flex;
  }
  @media screen and (max-width: 640px) {
    font-size: 8.5px;
    line-height: 14px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
`;

export const SocialIconsContainer = styled.div`
  max-width: 1040px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 640px) {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: baseline;
  }
  @media screen and (max-width: 640px) {
    display: flex;
    flex-direction: column;
    margin: 0 0 32px;
    align-items: center;
  }
`;

export const Slogan = styled.p`
  min-width: 280px;
  letter-spacing: 0.02em;
  font-size: 1.75rem;
  line-height: 30px;
  padding: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 28px;
  }
  @media screen and (max-width: 640px) {
    line-height: 22px;
    font-size: 0.93rem;
    min-width: 100px;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
    padding-right: 16px;
    flex-wrap: wrap;
  }
`;

export const LinkList = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 40px;
  padding: 40px 0 28px;
  @media screen and (max-width: 1024px) {
    padding: 32px 0 16px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 32px 0 16px;
    gap: 16px;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    padding: 32px 4px 16px;
    gap: 5px;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
`;
export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
  @media screen and (max-width: 640px) {
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 8px;
  }
`;
