import React from "react";

const Contact = props => {
  return (
    <div className="contact-display">
      <h1>Contact Me</h1>
      <form name="contact" method="POST" netlify>
        <span>{props.state.result}</span>

        <input placeholder="NAME" name="name" />
        <input placeholder="E-MAIL" name="email" />
        <textarea placeholder="MESSAGE" name="message" />
        <button type="submit">SUBMIT!</button>
        <input type="hidden" name="form-name" value="contact" />
      </form>
    </div>
  );
};

export default Contact;
