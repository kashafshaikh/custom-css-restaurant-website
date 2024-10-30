"use client"; 
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact Us: Message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = `mailto:billushaikhshaikh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section>
      <div className="contact-section">
        <h1 className="contact-title">
          CONTACT <span className="highlight">US</span>
        </h1>
        <div className="contact-grid">
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57930.30859148095!2d66.98057454863284!3d24.8418355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dd2b3d4f88b%3A0xc57cf100a6cedc05!2sMr.%20Burger%20Dha%20phase%202!5e0!3m2!1sen!2s!4v1727799225270!5m2!1sen!2s"
              className="map-frame"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="form-container">
            <h1 className="form-title">
              GET IN TOUCH
            </h1>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                required
              />
              <textarea
                name="message"
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="textarea-field"
                required
              />
              <button
                type="submit"
                className="submit-button"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="padding-bottom"></div>
      </div>
    </section>
  );
}
