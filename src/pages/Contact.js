import React from "react";
// import twitter from "../../icons/twitter1.svg";
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
          Feel free to look at my current resume, GitHub, and Linkedin below.
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
  @media (min-width: 768px) {
    height: 100vh;
  }
  @media (max-width: 668px) {
    h1 {
      font-size: 3rem;
    }
    height: 125vh;
  }
  @media (min-width: 800px) {
    height: 140vh;
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
    font-size: 1.5rem;
    border-radius: 10px;
    box-shadow: 12px;
    :hover {
      color: black;
      transition: transform 1.2s ease-in-out;
    }
  }

  input {
    width: 35%;
    font-size: 1rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
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
    background-color: #fff1f1;
    border-radius: 5px;
    text-indent: 1rem;
    border: 1px solid #000000;
    font-size: 14px;
  }
`;

export default Contact;
