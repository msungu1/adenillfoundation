import React from 'react';
import { Link } from "react-router-dom";

import './ProgramsImpact.css';
import logo from "../../assets/logo.jpeg";


const Programs = () => {
  return (
    <>
      {/* Root Container */}
      <div className="page-container">

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

        {/* Main Content */}
        <main className="main-contents">
          <div className="content-wrapper">

            {/* Hero Section */}
            <section
              className="hero-section"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
              }}
              data-alt="Hopeful image of a person learning a new skill in a workshop setting"
            >
              <div className="hero-text">
                <h1 className="hero-title">
                  Building New Futures: From Incarceration to Integration
                </h1>
                <p className="hero-subtitle">
                  We provide inmates with the tools, support, and hope they need to successfully reintegrate into society and build a brighter future.
                </p>
              </div>
            </section>

            {/* Programs Section */}
            <section className="programs-section">
              <div className="section-header">
                <h2 className="section-title">Our Programs</h2>
                <p className="section-desc">
                  We offer a holistic range of programs designed to address the complex needs of individuals transitioning from incarceration back into the community. Our approach focuses on skill development, emotional well-being, and creating strong support systems.
                </p>
              </div>

              <div className="programs-grid">
                {/* Program 1 */}
                <div className="program-card">
                  <span className="material-symbols-outlined icon-large icon-primary">construction</span>
                  <div>
                    <h3 className="card-title">1.Cognitive Restructuring</h3>
                    <p className="card-desc">

                    This program directly targets the cost/benefit analysis of maintaining an old, criminal identity versus embracing a new, dignified identity.                    </p>
                  </div>
                </div>

                {/* Program 2 */}
                <div className="program-card">
                  <span className="material-symbols-outlined icon-large icon-primary">psychology</span>
                  <div>
                    <h3 className="card-title">
                    2.The Social Code of Manhood</h3>
                    <p className="card-desc">

                    This program uses peer interaction and social norms to make a pro-social identity the rational choice within the correctional environment.                    </p>
                  </div>
                </div>

                {/* Program 3 */}
                <div className="program-card">
                  <span className="material-symbols-outlined icon-large icon-primary">handshake</span>
                  <div>
                    <h3 className="card-title">
                    3.⁠ ⁠Skill-to-Self Worth (The Resource Maximizer)</h3>
                    <p className="card-desc">
                    This program links the acquisition of tangible skills directly to the internal feeling of self-worth and dignity, ensuring the utility of a new identity is concrete and measurable.                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Divider */}
            <div className="pattern-divider"></div>

            {/* Impact Section */}
            <section className="impact-section">
  <div className="section-header">
    <h2 className="section-title">Measurable Change, Lasting Impact</h2>
    <p className="section-desc">
      Our commitment goes beyond programs; we are dedicated to achieving tangible results that transform lives and strengthen communities. The data reflects our progress and the profound difference our supporters help us make.
    </p>
  </div>

  {/* Stats Grid */}
  <div className="stats-grid">
    <div className="stat-card">
      <p className="stat-number">78%</p>
      <p className="stat-label">Employment Rate Post-Release</p>
    </div>
    <div className="stat-card">
      <p className="stat-number">1,200+</p>
      <p className="stat-label">Inmates Supported Annually</p>
    </div>
    <div className="stat-card">
      <p className="stat-number">-45%</p>
      <p className="stat-label">Reduction in Recidivism Rate</p>
    </div>
  </div>

  {/* Chart */}
  <div className="chart-container">
    <div className="chart-text">
      <h3 className="chart-title">Program Growth Over 5 Years</h3>
      <p className="chart-desc">
        The number of individuals successfully completing our rehabilitation programs  <br/>has shown consistent and significant growth, reflecting our expanding reach and effectiveness.
      </p>
    </div>

    <div
      className="chart-bars"
      aria-label="A bar chart showing program graduate growth from 150 in 2019 to 650 in 2023."
    >
      





      {/* 2022 */}
      <div className="bar-item four">
        <div className="bar" style={{ height: '75%' }}>
          <span className="bar-percentage">60%</span>
        </div>
        <span className="bar-label">2022</span>
      </div>

      {/* 2023 */}
      <div className="bar-item five">
        <div className="bar" style={{ height: '100%' }}>
          <span className="bar-percentage">75%</span>
        </div>
        <span className="bar-label">2023</span>
      </div>
{/* 2024 */}
      <div className="bar-item six">
        <div className="bar" style={{ height: '100%' }}>
          <span className="bar-percentage">85%</span>
        </div>
        <span className="bar-label">2024</span>
      </div>
      {/* 2025 */}
      <div className="bar-item seven">
        <div className="bar" style={{ height: '100%' }}>
          <span className="bar-percentage">100%</span>
        </div>
        <span className="bar-label">2025</span>
      </div>
    </div>
  </div>
</section>

            {/* Testimonials */}
            <section className="testimonialss-section">
              <div className="section-header">
                <h2 className="section-title">Voices of Change</h2>
              </div>
              <div className="testimonials-card">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmyBl9wWv4CtxYcklhB6GmvAU1NZUka_m2YNmHUUeWTNVAHWXZc4sSwjD76nZZCq1cXJdA5fJkfa87dqbeVEGY4HS5srYhF5B7-XZsoz-5lhHONH6qeMHaY_Pl4DasyK5MIFb8tq5vNTSqgh1vnH7Y2X2qfYFHtDNycs1wcXNJi4p_a2WHTYWvhKxHVfw920VDcqzg3H5IWKSOvJDTzF3QCFV9IeoZXA_i8bwkCP_zPiW_DVAuyYxNpoD3HJo7sfEVp5KTAC7Xezxl"
                  alt="Portrait of John O."
                  className="testimonial-img"
                />
                <blockquote className="testimonial-quote">
                  "The vocational training I received through Adennil Foundation didn't just give me a skill; it gave me back my dignity. I now have a steady job and a future I can be proud of."
                </blockquote>
                <cite className="testimonial-cite">John O. - Program Graduate</cite>
              </div>
            </section>

          </div>
        </main>

        {/* FAB */}
        <button className="fab-button">
          <span className="material-symbols-outlined">favorite</span>
        </button>

               {/* Footer */}
      <footer className="footer">
  <div className="footer-columns">
    <div>
      <h3>Adennil Foundation</h3>
      <p>Rebuilding lives, restoring hope. Registered in Kenya.</p>
    </div>

    <div>
      <h3>Contact Us</h3>
      <ul>
        <li>+254 708 833 979</li>
        <li>adennilfoundation@gmail.com</li>
        <li>Nairobi, Kenya</li>
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
    </>
  );
};

export default Programs;