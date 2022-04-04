import React from "react";

import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xqkndqpr");
  if (state.succeeded) {
    return <p>😊Thanks for reaching out!😊</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/xqkndqpr"
      method="POST"
    >
      <label htmlFor="full-name">Name</label>
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
      <label htmlFor="email">Email Address</label>
      <input
        className="input-field"
        id="email-address"
        type="email"
        name="_replyto"
        placeholder="email@domain.tld"
        required=""
      />

      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        type="text"
        className="input-field"
        name="message"
        required=""
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        id="submit-btn"
        type="submit"
        value="Send"
        disabled={state.submitting}
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
