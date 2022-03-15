import React from "react";
// import twitter from "../../icons/twitter1.svg";
import profile from "../icons/profile.svg";
import linkedin from "../icons/linkedin2.svg";
import github from "../icons/github.svg";
import styled from "styled-components";

const Contact = () => {
  return (
    <div>
      <MainContact>
        <header>
          <h1 id="contact">Contact -📬- Social</h1>
        </header>
        <p>
          I look forward to chatting with you, to build something creative!{" "}
          <br />
          Feel free to look at my current resume, Github, and Linkedin below.
          <br />
          😊 I look forward to speaking with you soon! 📬
        </p>
        <Form className="contact-form">
          <label>Name</label>
          <input className="input-field" type="text" name="Name" required />
          <label>Subject</label>
          <input className="input-field" type="text" name="Subject" required />
          <label>Email</label>
          <input className="input-field" type="email" name="Email" required />
          <label>Message</label>
          <textarea
            className="input-field"
            type="text"
            name="message"
          ></textarea>
          <input id="submit-btn" type="submit" value="Send" />
        </Form>
        <div>
          <a
            href="https://drive.google.com/file/d/1C4OZ9kLQRoGguslGvdsRl4oc63ULdp7F/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <img
                src={profile}
                alt="Resume link"
                title="https://drive.google.com/file/d/1C4OZ9kLQRoGguslGvdsRl4oc63ULdp7F/view?usp=sharing"
              />
            </button>
          </a>
          <a
            href="https://github.com/danielmason89"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <img
                src={github}
                alt="GitHub link"
                title="https://github.com/danielmason89/"
              />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-mason-dev/"
            target="_blank"
            rel="noreferrer"
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
  padding-top: 4rem;
  margin: 0 3rem;
  color: white;
  h1 {
    display: flex;
    align-items: flex-start;
  }
  p {
    font-size: 2rem;
    text-align: center;
  }
  div {
    display: flex;
    gap: 3rem;
    span {
      font-size: 1.5rem;
      color: #49655b;
      :hover {
        color: #c9a9c9;
      }
    }

    p {
      line-height: 0rem;
      color: #ccc;
    }
  }
`;

const Form = styled.form`
  display: block;
  max-width: 600px;
  margin: 3rem auto;
  border: 1px solid #ffffff;
  padding: 16px;
  border-radius: 5px;
  background-color: #000000;
  margin-bottom: 50px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  font-size: 1.5rem;

  label {
    line-height: 2.7em;
  }

  textarea {
    min-height: 100px;
    font-size: 0.875rem;
    line-height: 1.23rem;
    resize: none;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    cursor: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }

  #submit-btn {
    margin-top: 10px;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #fff;
    background-color: #23d997;
    border: none;
  }

  .input-field {
    width: 100%;
    padding: 10px 0px;
    background-color: #fff1f1;
    border-radius: 5px;
    border: 1px solid #000000;
    font-size: 14px;
  }
`;

export default Contact;
