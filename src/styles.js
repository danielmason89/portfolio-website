import styled from "styled-components";
import { motion } from "framer-motion";

export const Hide = styled.div`
  overflow: hidden;
`;

export const Description = styled.div`
  flex: 1;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  span {
    :hover {
      color: #8f7e8f;
    }
  }

  @media (min-width: 669px) {
    h1 {
      text-align: left;
    }
  }

  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const About = styled(motion.header)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  h1 {
    line-height: 3rem;
  }

  .image-text {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    text-align: center;
  }

  @media (max-width: 668px) {
    min-height: 85vh;
    display: block;
    padding: 2rem 2rem;
    text-align: center;
    h1 {
      font-size: 3rem;
    }
    h2 {
      line-height: 2.5rem;
    }
    p {
      font-size: 1.25rem;
    }
    span {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 800px) {
    min-height: 55vh;
  }
  @media (min-width: 800px) {
    min-height: 90vh;
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  padding-top: 2rem;
  color: #fff;
  h1 {
    margin: 0;
  }
`;

export const HeaderThree = styled.p`
  font-weight: 200;
  letter-spacing: 2px;
  color: #ffffff;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "2rem" : "1rem")};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const CardInfo = styled.h3`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  font-weight: lighter;
  text-align: center;
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    border: 1px solid #ffffff;
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  list-style: none;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
`;

export const SectionDivider = styled.div`
  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${(props) =>
    props.colorAlt
      ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
      : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)"};
  margin: ${(props) => (props.divider ? "4rem 0" : "")};
`;

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  padding: ${(props) => (props.nopadding ? "0" : "32px 48px 0")};
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "65px" : "56px")};
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 25px;
  padding: 2rem 2rem;
  &:hover {
    background-color: #99a2b5;
    transform: scale(1);
    cursor: pointer;
    padding: 1rem;
  }
`;
