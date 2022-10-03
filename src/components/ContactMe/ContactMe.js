import React, { useState } from "react";
import { sendEmail } from "hooks";
import "./ContactMe.scss";

export function ContactMe() {
  const [contact, setContact] = useState({ from_name: "", from_email: "", reason: "", company: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await sendEmail(contact);
      console.log({ contact, res });
    } catch (e) {
      console.error(e);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((contact) => ({ ...contact, [name]: value}));
  }

  return (
  <div className="contact">
    <div className="contact-header">
      <h3>CONTACT ME</h3>
      <p>Have any questions, suggestions, potential opportunities, or just wanna leave a comment and say hey? I'm always open to feedback, new opportunities/collaborations, and/or growing my network, so let's get in touch! Fill out the form below and I'll get back to you as soon as possible!</p>
    </div>
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-info">
        <div className="contact-form-group">
          <label htmlFor="from_name">Name</label>
          <input required id="name" type="text" name="from_name" value={contact.name} onChange={handleChange} />
        </div>
        <div className="contact-form-group">
          <label htmlFor="from_email">Email Address</label>
          <input required id="email" type="text" name="from_email" value={contact.email} onChange={handleChange} />
        </div>
        <div className="contact-form-group contact-select-group">
          <label htmlFor="reason">Reason (Not Required)</label>
          <select id="reason" name="reason" onChange={handleChange} value={contact.reason}>
            <option value="">
            </option>
            <option value="opportunity">
              Opportunity
            </option>
            <option value="suggestion">
              Suggestion
            </option>
            <option value="comment">
              Comment
            </option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      <div className="contact-message-group">
        <label htmlFor="message">Message</label>
        <textarea required type="text" name="message" value={contact.message} onChange={handleChange} />
      </div>
      <div className="contact-button-group">
        <button type="submit">Send</button>
      </div>
    </form>
  </div>
  );
}