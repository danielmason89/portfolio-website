import React from "react";
// import twitter from "../../icons/twitter1.svg";
import profile from "../../icons/profile.svg";
import linkedin from "../../icons/linkedin2.svg";
import github from "../../icons/github.svg";
import styled from "styled-components";

export const Contact = () => {
  return (
    <div>
      <MainContact>
        <h1>Contact | Social</h1>
        <p>
          I look forward to chatting with you to build something creatively
          responsive! <br />
          Feel free to look at my current resume, Github, and Linkedin below 😊
          <br />I look forward to speaking with you soon!
        </p>
        <div>
          <a href="https://docs.google.com/document/d/1OgP7Kx1OLKao9hmA_dL4W59uFRcW4pr6NXz0m4lx_KU/edit?usp=sharing">
            <button>
              <img
                src={profile}
                alt="Resume link"
                title="https://docs.google.com/document/d/1OgP7Kx1OLKao9hmA_dL4W59uFRcW4pr6NXz0m4lx_KU/edit?usp=sharing"
              />
            </button>
          </a>
          <a href="https://github.com/danielmason89">
            <button>
              <img
                src={github}
                alt="Github link"
                title="https://github.com/danielmason89/"
              />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/daniel-mason-dev/">
            <button>
              <img
                src={linkedin}
                alt="Linkedin link"
                title="linkedin.com/in/daniel-mason-dev/"
              />
            </button>
          </a>
        </div>
      </MainContact>
    </div>
  );
};

const MainContact = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  padding-top: 2rem;
  margin: 0 3rem;
  color: white;
  div {
    display: flex;
    gap: 3rem;
    span {
      font-size: 1.5rem;
      color: #23d997;
      :hover {
        color: #8f7e8f;
      }
    }

    p {
      line-height: 0rem;
      color: #ccc;
    }
  }
`;

export default Contact;
