import React from "react";
import member1 from "../../assets/member4.jpeg";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { motion } from "framer-motion";
// import member1 from "../../assets/member1.jpeg";
// import member2 from "../../assets/member2.jpeg";
import member3 from "../../assets/member3.jpeg";
// import member4 from "../../assets/member4.jpeg";
import heroImage from "../../assets/member5.jpeg";

import logo from "../../assets/logo.jpeg";

import "./Home.css";

const Home = () => {
  return (
    <div className="home-body">
      {/* Floating Donate Button */}
      <div className="floating-donate">
      <Link 
      to="/get-involved" 
      className="donate-btn"
      aria-label="Get Involved / Donate"
    >
      Donate
    </Link>    
      </div>
      <button className="hamburger" onClick={() => {
  document.querySelector('.nav-links').classList.toggle('active');
}}>
</button>


      {/* Page Container */}
      <div className="page-container">
        {/* Top Navigation */}
        <header className="top-navbar">
          <div className="logo-section">
          <img
      src={logo}
      alt="Adennil Foundation Logo"
      className="logo-icon"
    />
            <h2 className="logo-text">Adennil</h2>
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

        {/* Main Section */}
        <main className="main-content">
          

<section className="hero-seection">
  <div 
    className="hero-content"
    style={{
      backgroundImage: `
        linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.20) 70%),
        url(${heroImage})
      `,backgroundSize: 'cover',           
      backgroundRepeat: 'no-repeat',  
   
      // backgroundPosition: 'center center',  
      backgroundAttachment: 'fixed'
    }}
  >
    <div className="hero-text">
      <h1>I believe, so do they</h1>
      <p>"we hold the mirror until he believes in the reflection" </p>
    </div>

    <div className="hero-buttons">
    <Link 
      to="/get-involved" 
      className="donate-btn"
      aria-label="Get Involved / Donate"
    >
      Donate
    </Link>       <button className="btn-outline">Learn More</button>
    </div>
  </div>
</section>
          {/* Stats */}
      {/* Stats Section */}
      <section className="stats-section">
        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>Inmates Reached</p>
          <h3>
            <CountUp end={500} duration={3} />+
          </h3>
        </motion.div>

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>Programs Running</p>
          <h3>
            <CountUp end={12} duration={2.5} />
          </h3>
        </motion.div>

        <motion.div
          className="stat-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>Success Rate</p>
          <h3>
            <CountUp end={85} duration={3} suffix="%" />
          </h3>
        </motion.div>
      </section>



      <section className="founder-section">
  <div className="founder-image">
    <img src={member1} alt="Founder" />
  </div>

  <div className="founder-info">
    <p className="tag">Our Founder</p>
    <div className="divider"></div>

    <h2>A Journey Sparked by an Internship</h2>
    <p>
    “Ms. Elizabeth Ogallo’s powerful revelation was born during her practicum in her last year of Campus as a Counselling psychologist major at the African Nazarene University.”

    </p>

    <blockquote className="founder-quote">
    “When we return identity to the forgotten, we don’t just rebuild men we rebuild communities, families, and futures.”    </blockquote>

    <Link to="/about" className="btn-outline-secondary">
      Read Our Story
    </Link>
  </div>
</section>



          {/* Mission / Vision / Purpose */}
          <section className="mission-section">
            <div className="mission-card">
              <span className="icon">🎯</span>
              <h3>Our Mission</h3>
              <p>
              To help inmates embrace the idea that being locked up does not translate to mental stagnation.

              </p>
            </div>
            <div className="mission-card">
              <span className="icon">👁️</span>
              <h3>Our Vision</h3>
              <p>
              To be the leading foundation in assisting the inmates in knowing that how you view yourself determines how you will be
              </p>
            </div>
            <div className="mission-card">
              <span className="icon">❤️</span>
              <h3>Our Purpose</h3>
              <p>
              To create a base that aims at having a sense of self awareness, emotional intelligence and acceptance for a better tomorrow.

              </p>
            </div>
          </section>

          {/* Success Story */}
          <section className="success-section">
            <h2>Success Stories</h2>
            <p>
            Thanks to timely support, his outstanding fine was cleared on December 30th, allowing him to regain his freedom the very next day. With this assistance, he was able to start a new job in Kwale and secure safe housing—marking the beginning of a hopeful new chapter in his reintegration journey.

            </p>

            <div className="carousel">
              <div className="carousel-item">
                {/* <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMzmMn666kACZKuEw4G0FpU1-W3K5X_q4SZvtrrBeU7e8Pn8Kx7jmyuZElauIBQWNphy3h-Onl32_h8ujNCDa2m2NNS6Ditht2yejIbTh5mYaB6pjNY2wF4jNQoIsJBOj4t7fadwxysazxGOCI9AN4NsX1_OwGQbDkNR4zDC9QZ_vUse01VhY3l6rk4VRr2BJO9fQ0-xFnGSUVCJvc8ewefwSNMIyKSCm6FyCG8LNbL7bnDFuVx_l3CtkqYDLaMgkE2FrRmasdMq81"
                  alt="John"
                /> */}
                <blockquote>
                  “Adennil Foundation gave me the opportunity to continue to practice my career as a teacher  ’”
                </blockquote>
                {/* <p className="author">- John O.</p> */}
                {/* <p className="role">Program Graduate</p> */}
              </div>
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
    </div>
  );
};

export default Home;
