import React from "react";
import { Link } from "react-router-dom";
import "./GetInvolved.css";
import logo from "../../assets/logo.jpeg";


const GetInvolved = () => {
  return (
    <div className="page-wrapper">
      {/* Floating Donate */}
      <button className="floating-donate pulse">
        <span className="material-symbols-outlined">favorite</span>
      </button>

      {/* Header */}
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
      
      <Link 
              to="/get-involved" 
              className="donate-now-btn"
            >
              Donate Now
            </Link>
          </header>

      <main>
        {/* Hero with gradient overlay */}
        <section className="hero-modern hero-gradient">
          <div className="hero-overlay">
            <h1>Be the Change: Join Our Mission</h1>
            <p>
            See the Man ,not the sentence -
            Join us in Rediscovering the Father, Son, husband,uncle,grandfather and Neighbor Within.Rebuild trust ,Renew the future”            </p>
            <button className="primary-btn large">Get Started Today</button>
          </div>
        </section>

        {/* 3 Ways to Help */}
        <section className="ways-to-help">
          <div className="container">
            <div className="grid-3">
              <div className="action-card">
                <span className="icon-lg material-symbols-outlined">group</span>
                <h3>Volunteer</h3>
                <p>Mentor, teach skills, or help with outreach. Every hour counts.</p>
                <button className="secondary-btn">See Opportunities</button>
              </div>

              <div className="action-card featured">
                <span className="icon-lg material-symbols-outlined">favorite</span>
                <h3>Donate</h3>
                <p>Fund housing, counseling, and job training. 100% goes to programs.</p>
                <button className="primary-btn">Donate Now</button>
              </div>

              <div className="action-card">
                <span className="icon-lg material-symbols-outlined">handshake</span>
                <h3>Partner</h3>
                <p>Corporates, NGOs, and businesses — collaborate for greater impact.</p>
                <button className="secondary-btn">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="impact-stats">
          <div className="container grid-3">
            <div className="stat-card">
              <h2>500+</h2>
              <p>Individuals Rehabilitated</p>
            </div>
            <div className="stat-card">
              <h2>200+</h2>
              <p>Jobs Secured</p>
            </div>
            <div className="stat-card">
              <h2>50+</h2>
              <p>Community Mentors</p>
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="donate-form-section">
          <div className="container form-card">
          <h2>Make Your Donation</h2>
<form className="donation-form">
  {/* Donation amount input with minimum set to 1000 */}
  <input 
    type="number" 
    placeholder="Amount (KES)" 
    min="1000" 
    defaultValue="1000" 
    required 
  />

  <div className="frequency">
    <label>
      <input type="radio" name="freq" defaultChecked /> Monthly
    </label>
    <label>
      <input type="radio" name="freq" /> One-Time
    </label>
  </div>

  <div className="payment-icons">
    <img src="mpesa-logo.png" alt="M-Pesa" />
    <img src="visa-logo.png" alt="Visa" />
    <img src="mastercard-logo.png" alt="Mastercard" />
    <img src="paypal-logo.png" alt="PayPal" />
  </div>

  <button type="submit" className="primary-btn full">Donate Securely</button>
  <p className="secure">
    <span className="material-symbols-outlined">lock</span> Secure · Transparent
  </p>
</form>

          </div>
        </section>

        {/* Success Story Split Section */}
        <section className="impact-timeline">
  <h2>Journey of Transformation</h2>
  <div className="timeline">
    <div className="timeline-step">
      <span className="step-icon material-symbols-outlined">lock_open</span>
      <p>Release from prison</p>
    </div>
    <div className="timeline-step">
      <span className="step-icon material-symbols-outlined">school</span>
      <p>Skills training</p>
    </div>
    <div className="timeline-step">
      <span className="step-icon material-symbols-outlined">work</span>
      <p>Secured employment</p>
    </div>
    <div className="timeline-step">
      <span className="step-icon material-symbols-outlined">group</span>
      <p>Mentorship & giving back</p>
    </div>
  </div>
        </section>


        {/* Mission & Vision */}
        <section className="mission-vision">
          <div className="container">
            <h2>Our Mission & Vision</h2>
            <p>
              We believe in second chances. Our mission is to rehabilitate and reintegrate formerly incarcerated individuals,
              restoring dignity and hope. Our vision is a society where every person has the opportunity to rebuild their life.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="container">
            <h2>What People Say</h2>
            <div className="testimonial-grid">
              <div className="testimonial-card">
                <p>"Adennil Foundation gave me hope when I thought all was lost."</p>
                <span>- Sarah, Beneficiary</span>
              </div>
              <div className="testimonial-card">
                <p>"Partnering with Adennil has been the most impactful CSR initiative we’ve done."</p>
                <span>- Local Business</span>
              </div>
              <div className="testimonial-card">
                <p>"Volunteering here changed my perspective on community and humanity."</p>
                <span>- David, Volunteer</span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Footer */}
        <section className="cta-footer">
          <div className="container">
            <h2>Ready to Make a Difference?</h2>
            <button className="primary-btn large">Join Us Today</button>
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
    <p className="developer-credit">Developed by <span>Eng. Roberto</span></p>
  </div>
</footer>

    </div>
  );
};

export default GetInvolved;
