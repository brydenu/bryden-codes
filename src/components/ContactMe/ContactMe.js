import React, {/* useState */} from "react";
import emailjs from "emailjs-com";
import "./ContactMe.scss";

export function ContactMe() {
  // const [reason, setReason] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_MESSAGE_ALERT_TEMPLATE, e.target, process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
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
          <input required id="name" type="text" name="from_name" />
        </div>
        <div className="contact-form-group">
          <label htmlFor="from_email">Email Address</label>
          <input required id="email" type="text" name="from_email" />
        </div>
        <div className="contact-form-group contact-select-group">
          <label htmlFor="reason">Reason (Not Required)</label>
          <select id="reason" name="reason">
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
        <input required type="text" name="message" />
      </div>
      <div className="contact-button-group">
        <button type="submit">Send</button>
      </div>
    </form>
  </div>
  );
}