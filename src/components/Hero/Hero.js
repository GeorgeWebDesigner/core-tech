import React from 'react';
import { Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Innovative Web Solutions for Your Business</h1>
          <p>We build exceptional websites, applications, and chatbots to help businesses thrive in the digital age.</p>
          <a href="#contact" className="cta-button" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get a Free Quote
          </a>
        </div>

        <div className="achievements-plate">
          <div className="achievement-item">
            <div className="achievement-number">150+</div>
            <div className="achievement-label">Projects Completed</div>
          </div>
          <div className="achievement-separator"></div>

          <div className="achievement-item">
            <div className="achievement-number">4+</div>
            <div className="achievement-label">Years of Experience</div>
          </div>
          <div className="achievement-separator"></div>

          <div className="achievement-item">
            <div className="achievement-number">300+</div>
            <div className="achievement-label">Satisfied Clients</div>
          </div>
          <div className="achievement-separator"></div>

          <div className="achievement-item quality-guarantee">
            <div className="guarantee-icon">
              <Shield />
            </div>
            <div className="achievement-label">Quality Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;