import React from "react";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact-Page</title>
      </Helmet>
      <section id="contact">
        <div className="contact container">
          <div className="contact-left">
            <h1>Get in touch</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed et dolore.
            </p>
            <span>North Cleveland Street, Memphis,USA.</span>
            <span>8111 9210 - (012) 1111 6868</span>
            <span>Florisr@supportthem.com</span>
          </div>
          <div className="contact-center">
            <div className="contact-form">
              <h1>Contact us</h1>
              <form>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                  required
                />
                <textarea
                  placeholder="Message"
                  className="form-textarea"
                  required
                />
                <button type="submit" className="form-button">
                  SEND
                </button>
              </form>
            </div>
          </div>
          <div className="contact-right"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.7485009357342!2d49.8154458!3d40.3701006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc397d94dc3%3A0x617bc46b47244c00!2sAz%C9%99rbaycan%20Texniki%20Universiteti!5e0!3m2!1saz!2saz!4v1736010339978!5m2!1saz!2saz"
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
