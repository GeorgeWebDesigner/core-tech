import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, CheckCircle, UserCheck, Headphones, ShieldCheck } from 'lucide-react';

const ServicePageLayout = ({ 
  title, 
  subtitle, 
  description, 
  heroImage, 
  whyNeeded, 
  stages, 
  technologies, 
  pricing,
  icon 
}) => {
  // Прокрутка к началу страницы при монтировании компонента
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="service-page">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-container">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-link">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <span className="breadcrumb-separator">/</span>
            <Link to="/#core-services" className="breadcrumb-current">
              Services
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{title}</span>
          </nav>
        </div>
      </div>

      {/* Service Hero Section */}
      <section className="service-hero">
        <div className="hero-background" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <div className="service-icon-large">
                {icon}
              </div>
              <h1>{title}</h1>
              <p className="service-subtitle">{subtitle}</p>
              <p className="service-description">{description}</p>
              <div className="service-hero-actions">
                <a href="#contact" className="cta-button primary">
                  Get Started
                </a>
                <a href="#stages" className="cta-button secondary">
                  Learn Process
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need This Service */}
      <section className="why-needed">
        <div className="container">
          <div className="section-title">
            <h2>Why You Need {title}</h2>
            <div className="section-underline"></div>
          </div>
          <div className="why-needed-grid">
            {whyNeeded.map((reason, index) => (
              <div key={index} className="why-needed-card">
                <div className="why-needed-icon">
                  {reason.icon}
                </div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Stages */}
      <section id="stages" className="development-stages">
        <div className="container">
          <div className="section-title">
            <h2>Our Development Process</h2>
            <div className="section-underline"></div>
            <p>We follow a proven methodology to ensure your project's success</p>
          </div>
          <div className="stages-timeline">
            {stages.map((stage, index) => (
              <div key={index} className="stage-item">
                <div className="stage-number">{index + 1}</div>
                <div className="stage-content">
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                  <div className="stage-duration">
                    Duration: {stage.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="service-technologies">
        <div className="container">
          <div className="section-title">
            <h2>Technologies We Use</h2>
            <div className="section-underline"></div>
            <p>Cutting-edge tools and frameworks for the best results</p>
          </div>
          <div className="tech-showcase">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-showcase-item">
                <div className="tech-showcase-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <h4>{tech.name}</h4>
                <p>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="service-pricing">
        <div className="container">
          <div className="section-title">
            <h2>Investment & Packages</h2>
            <div className="section-underline"></div>
            <p>Choose the package that fits your needs and budget</p>
          </div>
          <div className="pricing-packages">
            {pricing.map((pkg, index) => (
              <div key={index} className={`pricing-package ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <div className="popular-badge">Most Popular</div>}
                <div className="package-header">
                  <h3>{pkg.name}</h3>
                  <div className="package-price">
                    <span className="currency">$</span>
                    <span className="amount">{pkg.price}</span>
                    <span className="period">/{pkg.period}</span>
                  </div>
                  <p>{pkg.description}</p>
                </div>
                <div className="package-features">
                  {pkg.features.map((feature, fIndex) => (
                    <div key={fIndex} className="package-feature">
                      <Check size={16} />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="package-action">
                  <a href="#contact" className={`package-button ${pkg.popular ? 'popular' : ''}`}>
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="service-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss your requirements and create something amazing together</p>
            <div className="cta-actions">
              <a href="#contact" className="cta-button primary">
                Get Free Consultation
              </a>
              <Link to="/#services" className="cta-button secondary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Updated to match main site design */}
      <section id="contact" className="service-contact">
        <div className="container">
          <div className="contact-form-wrapper">
            <div className="app-screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close"></div>
                  <div className="screen-header-button maximize"></div>
                  <div className="screen-header-button minimize"></div>
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                </div>
              </div>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>LET'S DISCUSS</span>
                    <span>YOUR PROJECT</span>
                  </div>
                  <div className="contact-info">
                    <div className="contact-item">
                      <CheckCircle size={24} />
                      <div>
                        <h3>Free Consultation</h3>
                        <p>Project estimation within 24 hours</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <UserCheck size={24} />
                      <div>
                        <h3>Dedicated Manager</h3>
                        <p>Personal project coordinator</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <Headphones size={24} />
                      <div>
                        <h3>24/7 Support</h3>
                        <p>Continuous support during development</p>
                      </div>
                    </div>
                    <div className="contact-item">
                      <ShieldCheck size={24} />
                      <div>
                        <h3>Quality Guarantee</h3>
                        <p>100% satisfaction guarantee</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="screen-body-item right">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input 
                        className="app-form-control" 
                        placeholder="YOUR NAME" 
                        type="text" 
                        name="name" 
                        required 
                      />
                    </div>
                    <div className="app-form-group">
                      <input 
                        className="app-form-control" 
                        placeholder="EMAIL ADDRESS" 
                        type="email" 
                        name="email" 
                        required 
                      />
                    </div>
                    <div className="app-form-group">
                      <input 
                        className="app-form-control" 
                        placeholder="PHONE NUMBER" 
                        type="tel" 
                        name="phone" 
                      />
                    </div>
                    <div className="app-form-group">
                      <select className="app-form-control" name="budget" required>
                        <option value="">PROJECT BUDGET</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                      </select>
                    </div>
                    <div className="app-form-group message">
                      <textarea 
                        className="app-form-control" 
                        placeholder="TELL US ABOUT YOUR PROJECT..." 
                        name="message" 
                        rows="4" 
                        required
                      ></textarea>
                    </div>
                    <div className="app-form-group buttons">
                      <button type="button" className="app-form-button">
                        CLEAR
                      </button>
                      <button type="submit" className="app-form-button submit">
                        SEND REQUEST
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;