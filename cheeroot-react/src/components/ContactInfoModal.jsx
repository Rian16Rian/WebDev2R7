import React from 'react';

function ContactInfoModal({ closeModal }) {
  return (
    <div id="contactInfoModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us via email or through our social media accounts:</p>
        <ul>
          <li>
            Email: <a href="mailto:cheeroot.official@gmail.com">cheeroot.official@gmail.com</a>
          </li>
          <li>Facebook: <a href="#">Facebook Page</a></li>
          <li>Instagram: <a href="#">Instagram Page</a></li>
        </ul>
        <h3>Send Us Your Feedback</h3>
        <form id="contactForm">
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactInfoModal;
