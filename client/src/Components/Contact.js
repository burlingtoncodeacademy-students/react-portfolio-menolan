import React from "react"
import { useState } from "react"
// Contact page with contact form
const Contact = () => {

    const handleSubmit = () => {
        return alert("Thanks for reaching out! I'll be back to you shortly.")
    }

    return (
        <div>
        {/* Contact form page header */}
        <h2 id="contactPage">Please reach out if you have any questions, comments or feedback. I'd love to hear some ideas for projects or improvements on this site!</h2>
        <form onSubmit={handleSubmit}>
            {/* Making form FlexBox for styling */}
            <div id="formBox">
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" required />
            </div>
            <button type="submit" id="send">Send</button>
            </div>
        </form>
        </div>
    )
    
}

export default Contact