import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const handleChange = (shakeAndBake) => {
    console.log(shakeAndBake);
    setCaptchaDone(true);
  };

  const [state, handleSubmit] = useForm("xqkndqpr...");
  const [captchaDone, setCaptchaDone] = useState(false);

  if (state.succeeded) {
    return <p>😊Thanks for reaching out!😊</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xqkndqpr"
      method="POST"
    >
      <label for="full-name">Name</label>
      <input
        placeholder="Full Name"
        className="input-field"
        type="text"
        name="Name"
        id="full-name"
        required=""
      />
      <label>Subject</label>
      <input
        className="input-field"
        type="text"
        name="Subject"
        placeholder="Title"
        required=""
      />
      <label htmlFor="email" for="email-address">
        Email Address
      </label>
      <input
        className="input-field"
        id="email-address"
        type="email"
        name="_replyto"
        placeholder="email@domain.tld"
        required=""
      />

      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label for="message">Message</label>
      <textarea
        id="message"
        type="text"
        className="input-field"
        name="message"
        required=""
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <ReCAPTCHA
        sitekey="6LfeTCMfAAAAAN9cIv5UoS-XwQvAhJRE8iWTuV-U"
        onChange={handleChange}
      />
      {captchaDone ? (
        <button
          id="submit-btn"
          type="submit"
          value="Send"
          disabled={state.submitting}
        >
          Send
        </button>
      ) : (
        <button
          id="submit-btn"
          type="button"
          onClick={() => alert("please do captcha")}
        >
          Send
        </button>
      )}
    </form>
  );
}

export default ContactForm;
