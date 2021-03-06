import React from "react";
import ContactForm from "../components/Form";
import styled from "styled-components";

const Contact = () => {
  return (
    <div>
      <MainContact>
        <header>
          <h1 id="contact">Contact -📬- Social</h1>
        </header>
        <p>
          If you are looking for a fun and collaborative front end developer,
          lets chat over coffee or Zoom!
          <br />I look forward to chatting with you, to build something
          creative! <br />
          Feel free to check out at my current resume, GitHub, and Linkedin
          below.
        </p>
        <Form className="contact-form">
          <ContactForm />
        </Form>
      </MainContact>
    </div>
  );
};

const MainContact = styled.footer`
  height: 145vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 6rem;
  margin: 0 3rem;
  color: ${(props) => props.theme.fontColor};
  h1 {
    display: flex;
    align-items: flex-start;
  }
  p {
    font-size: 1.5rem;
    text-align: center;
  }
  #contact {
    margin-top: 1.5rem;
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
  @media (max-width: 768px) {
    height: 135vh;
    p {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 668px) {
    h1 {
      font-size: 3rem;
    }
    height: 155vh;
  }
  @media (min-width: 769px) {
    height: 125vh;
    p {
      font-size: 1.7rem;
    }
  }
`;

const Form = styled.div`
  display: block;
  max-width: 600px;
  margin: 3rem auto;
  border: 1px solid #ffffff;
  padding: 16px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.body};
  margin-bottom: 50px;
  box-shadow: 3px 3px 40px rgba(80, 78, 78, 0.5);
  font-size: 1.5rem;
  label {
    line-height: 2.5rem;
  }
  input {
    margin: 1rem 0rem;
    line-height: 1.5rem;
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
    color: ${(props) => props.theme.fontColor};
    background-color: #23d997;
    border: none;
    font-size: 1.5rem;
    border-radius: 10px;
    box-shadow: 12px;
    cursor: pointer;
    &:hover {
      transform: translate(0px, 3px);
      background-color: #23d997;
      color: whitesmoke;
      cursor: pointer;
      box-shadow: 12px;
    }
  }

  input {
    width: 35%;
    font-size: 1rem;
    border: none;
    margin-top: 0.15rem;
    text-indent: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    @media (max-width: 768px) {
      width: 100%;
      font-size: 0.75rem;
      border: none;
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    }
  }

  .input-field {
    width: 100%;
    padding: 10px 0px;
    background-color: ${(props) => props.theme.fontColor};
    border-radius: 5px;
    text-indent: 1rem;
    border: 1px solid #000000;
    font-size: 14px;
    color: ${(props) => props.theme.body};
  }
`;

export default Contact;
