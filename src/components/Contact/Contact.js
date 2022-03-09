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
        <h1 id="contact">Contact -📬- Social</h1>
        <p>
          I look forward to chatting with you, to build something creative!{" "}
          <br />
          Feel free to look at my current resume, Github, and Linkedin below.
          <br />
          😊I look forward to speaking with you soon!📬
        </p>
        <div>
          <a
            href="https://drive.google.com/file/d/1C4OZ9kLQRoGguslGvdsRl4oc63ULdp7F/view?usp=sharing"
            target="_blank"
          >
            <button>
              <img
                src={profile}
                alt="Resume link"
                title="https://drive.google.com/file/d/1C4OZ9kLQRoGguslGvdsRl4oc63ULdp7F/view?usp=sharing"
              />
            </button>
          </a>
          <a href="https://github.com/danielmason89" target="_blank">
            <button>
              <img
                src={github}
                alt="Github link"
                title="https://github.com/danielmason89/"
              />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-mason-dev/"
            target="_blank"
          >
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
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
  padding-top: 4rem;
  margin: 0 3rem;
  color: white;
  p {
    font-size: 2rem;
  }
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
