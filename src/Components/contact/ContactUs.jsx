import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Link } from "react-router-dom";
import "./ContactUs.css";
import logo from "../../assets/logo.jpeg";

const ContactUs = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_u7mbyuf",     // ✅ Your Service ID
      "template_c2ribz3",   // ✅ Your Template ID
      form.current,
      "nBIbA9Fj71liLJrVt"   // ✅ Your Public Key
    ).then(
      (result) => {
        console.log(result.text);
        setSuccessMessage("✅ Thank you! Your message has been sent. We’ll get back to you soon.");
        form.current.reset(); // clear the form after sending
      },
      (error) => {
        console.log(error.text);
        setSuccessMessage("❌ Oops! Something went wrong. Please try again later.");
      }
    );
  };

  return (
    <div className="contactus-body">
      {/* Floating Donate Button */}
      <button className="floating-donate" aria-label="Donate">
        <span className="material-symbols-outlined">favorite</span>
        <span className="sr-only">Donate</span>
      </button>

      {/* Top Navigation Bar */}
      <header className="top-navbar">
        <div className="logo-section">
          <img
            src={logo}
            alt="Adennil Foundation Logo"
            className="logo-icon"
          />
          <h2 className="logo-text">Adennil Foundation</h2>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">AboutUs</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/get-involved">Get Involved</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/get-involved" className="donate-now-btn">
          Donate Now
        </Link>
      </header>

      {/* Main Content */}
      <main className="contact-main split-layout">
        <div className="contact-container">
          {/* Floating CTA Card */}
          <div className="floating-cta-card">
            <span className="material-symbols-outlined">mail</span>
            <p>We reply within 24 hours</p>
          </div>

          {/* Left: Form */}
          <div className="contact-form-section">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-description">
              We'd love to hear from you. Please fill out this form for any inquiries,
              partnerships, or support, and we will get back to you as soon as possible.
            </p>

            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-row">
                <label>
                  Full Name
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Enter your full name"
                    required
                  />
                </label>
                <label>
                  Email Address
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Enter your email address"
                    required
                  />
                </label>
              </div>
              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  placeholder="What is your message about?"
                  required
                />
              </label>
              <label>
                Your Message
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  required
                />
              </label>
              <button type="submit" className="submit-btn gradient-btn">
                Send Message
              </button>
            </form>

            {/* Success / Error Message */}
            {successMessage && (
              <p
                className={`form-feedback ${
                  successMessage.startsWith("✅") ? "success" : "error"
                }`}
              >
                {successMessage}
              </p>
            )}
          </div>

          {/* Right: Contact Info */}
          <div className="contact-info-section">
            <h3>Contact Details</h3>
            <div className="info-grid">
              <div className="info-card">
                <span className="material-symbols-outlined">location_on</span>
                <p>
                  <strong>Our Address</strong>
                  <br />
                  Nairobi, Kenya
                </p>
              </div>
              <div className="info-card">
                <span className="material-symbols-outlined">call</span>
                <p>
                  <strong>Phone Number</strong>
                  <br />
                  <a href="tel:+254708833979">+254 708 833 979</a>
                </p>
              </div>
              <div className="info-card">
                <span className="material-symbols-outlined">mail</span>
                <p>
                  <strong>Email Address</strong>
                  <br />
                  <a href="mailto:adennilfoundation@gmail.com">
                    adennilfoundation@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <section className="contact-social">
          <h2>Connect With Us</h2>
          <div className="social-links">
            <a
              href="https://facebook.com/adennilfoundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">facebook</span> Facebook
            </a>
            <a
              href="https://twitter.com/adennilfoundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">alternate_email</span> Twitter
            </a>
            <a
              href="https://instagram.com/adennilfoundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">photo_camera</span> Instagram
            </a>
            <a
              href="https://linkedin.com/company/adennilfoundation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined">business_center</span> LinkedIn
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="contact-faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h4>How can I volunteer?</h4>
            <p>
              Fill out the form above or email us directly. We’ll guide you through the
              process.
            </p>
          </div>
          <div className="faq-item">
            <h4>Where does my donation go?</h4>
            <p>
              100% of donations fund housing, counseling, and job training programs.
            </p>
          </div>
          <div className="faq-item">
            <h4>Can organizations partner with you?</h4>
            <p>
              Yes! We welcome collaborations with corporates, NGOs, and community groups.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-columns">
          <div>
            <h3>Adennil Foundation</h3>
            <p>Reclaiming lives</p>
          </div>

          <div>
            <h3>Contact Us</h3>
            <ul>
              <li>+254 725 978 804</li>
              <li>adennilfoundation@gmail.com</li>
              <li>@Adennilfoundation@gmail. Com</li>
            </ul>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/programs">Programs</a></li>
              <li><a href="/get-involved">Get Involved</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Adennil Foundation. All rights reserved.</p>
          <p className="developer-credit">
            Developed by <span>Eng. Roberto</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
