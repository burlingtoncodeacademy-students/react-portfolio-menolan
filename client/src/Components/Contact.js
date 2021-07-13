import React from "react";
import { useState } from "react";
// Contact page with contact form
const Contact = () => {
  const [status, setStatus] = useState("Send");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending message...");
    const { name, email, message } = event.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Send");
    let result = await response.JSON();
    alert(result.status);
  };
  return (
    <div>
      {/* Contact form page header */}
      <h2 id="contactPage">
        Please reach out if you have any questions, comments or feedback. I'd
        love to hear some ideas for projects or improvements on this site!
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Making form FlexBox for styling */}
        <div id="formBox">
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit" id="send">
            {status}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
