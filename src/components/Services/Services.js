import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, RotateCcw, ArrowRight } from 'lucide-react';
import { 
  FaLaptopCode, 
  FaMobileAlt, 
  FaRobot, 
  FaAd, 
  FaHashtag 
} from 'react-icons/fa';
import Technologies from '../Technologies/Technologies';

const Services = () => {
  const [activeOffering, setActiveOffering] = useState('web-app');
  const [flippedCards, setFlippedCards] = useState(new Set());

  const offerings = {
    'web-app': {
      title: 'Web Application Development',
      content: 'Leverage our AI Web Development to transform your business processes. Core Tech Solutions chooses the right AI tools and creates industry-specific applications designed to accelerate AI integration, boosting your operational efficiency and competitive edge.',
      features: [
        'AI-fueled recommendation systems',
        'NLP, CV, ML, and predictive analytics',
        'AI-powered chatbots and virtual assistants'
      ]
    },
    'custom-web': {
      title: 'Custom Web Development',
      content: 'Core Tech Solutions has all the resources and developers to assist with any project you outsource in the Custom Web Development domain. Whether you\'re addressing UI/UX challenges, responsiveness, performance optimization, or any other issues, we can unleash the full power of Web Tech for you.',
      features: [
        'Sites and custom Web solutions',
        'CMS, CRM, and API development',
        'Web integration and optimization projects'
      ]
    },
    'web-design': {
      title: 'Web Design Services',
      content: 'Outsource IT plans to our in-house UI/UX experts to secure the translation of your ideas into impactful interfaces. Craft a look and feel that resonates with end-users and reflects your image, brand, advantages, and values.',
      features: [
        'Web design services',
        'Product design services',
        'Redesign services',
        'UX/UI audits',
        'Branding and graphic design'
      ]
    },
    'qa-web': {
      title: 'QA for Web Projects',
      content: 'Core Tech Solutions\'s QA scope for Web projects encompasses all facets mandated by user expectations. With our Web Testing Services, your product will meet all modern requirements and deliver convenient, productive, and seamless experiences.',
      features: [
        'Functional, compatibility, and performance testing',
        'Usability and accessibility testing',
        'Localization, security, and recovery testing'
      ]
    }
  };

  const webServices = [
    { id: 1, title: 'Web App Development', description: 'Transform your ideas into powerful web-based solutions with Core Tech\'s expert development services. We deliver high-quality applications tailored to your business needs.' },
    { id: 2, title: 'Cloud Web', description: 'Launch complex cloud applications with Core Tech as your trusted development partner. We help businesses thrive in today\'s data-driven environment with scalable cloud solutions.' },
    { id: 3, title: 'Web Optimization', description: 'Our experts conduct comprehensive A/B testing of your web solutions, creating detailed improvement plans to enhance performance, user experience, and conversion rates.', hasButton: true },
    { id: 4, title: 'Web Design', description: 'Looking for visually stunning websites with exceptional UI/UX? Core Tech\'s user-centered approach makes us the ideal choice for creating engaging digital experiences.' },
    { id: 5, title: 'Web Quality Assurance', description: 'Our extensive QA services help maintain the stability of your web applications, identifying and resolving issues before they affect your users or business operations.', hasButton: true, highlighted: true },
    { id: 6, title: 'Web Integration', description: 'Our team specializes in connecting data-intensive web projects with third-party platforms and applications, creating seamless integrations for your business ecosystem.' }
  ];

  const coreServices = [
    { 
      title: 'Web Development', 
      description: 'Custom websites designed and developed to showcase your brand and meet your business objectives.', 
      icon: <FaLaptopCode />,
      color: '#22a7b0',
      url: '/services/web-development'
    },
    { 
      title: 'Web Applications', 
      description: 'Powerful, scalable web applications that streamline processes and enhance user experiences.', 
      icon: <FaMobileAlt />, 
      accent: true,
      color: '#ffffff',
      url: '/services/web-applications'
    },
    { 
      title: 'Chat Bots', 
      description: 'Intelligent Telegram and WhatsApp bots that engage with your customers and automate responses.', 
      icon: <FaRobot />,
      color: '#22a7b0',
      url: '/services/chat-bots'
    },
    { 
      title: 'Google Ads', 
      description: 'Strategic Google Ads campaigns to drive targeted traffic and generate quality leads for your business.', 
      icon: <FaAd />, 
      accent: true,
      color: '#ffffff',
      url: '/services/google-ads'
    },
    { 
      title: 'Social Media Ads', 
      description: 'Expert campaign management for Instagram, Facebook, and TikTok to maximize your social media ROI.', 
      icon: <FaHashtag />,
      color: '#22a7b0',
      url: '/services/social-media'
    }
  ];

  const toggleCard = (cardId) => {
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(cardId)) {
      newFlippedCards.delete(cardId);
    } else {
      newFlippedCards.add(cardId);
    }
    setFlippedCards(newFlippedCards);
  };

  const handleKeyPress = (event, cardId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCard(cardId);
    }
  };

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>We offer a comprehensive range of digital services to meet your business needs.</p>
        </div>

        {/* Web Development Offerings */}
        <div className="web-dev-offerings">
          <h2>Web Development Offerings</h2>
          <div className="offerings-container">
            <div className="offerings-list">
              <ul>
                {Object.entries(offerings).map(([key, offering]) => (
                  <li 
                    key={key}
                    className={`offering-item ${activeOffering === key ? 'active' : ''}`}
                    onClick={() => setActiveOffering(key)}
                  >
                    {offering.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="offerings-details active">
              <p>{offerings[activeOffering].content}</p>
              <div className="offerings-box">
                <p><strong>Core Tech Solutions is the right choice to outsource:</strong></p>
                <ul>
                  {offerings[activeOffering].features.map((feature, index) => (
                    <li key={index}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Web Services Grid */}
        <div className="web-services-grid">
          <h2>Web Development Services</h2>
          <div className="web-services-container">
            {webServices.map(service => (
              <div 
                key={service.id} 
                className={`web-service-item flip-card ${service.highlighted ? 'highlighted' : ''} ${flippedCards.has(service.id) ? 'flip-active' : ''}`}
                onClick={() => toggleCard(service.id)}
                onKeyDown={(e) => handleKeyPress(e, service.id)}
                tabIndex={0}
                role="button"
                aria-label={`Flip card to see details about ${service.title}`}
                aria-pressed={flippedCards.has(service.id)}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h3>{service.title}</h3>
                    <div className="flip-hint">Click to flip</div>
                    <div className="flip-icon" aria-hidden="true">
                      <RotateCcw />
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p>{service.description}</p>
                    {service.hasButton && (
                      <a 
                        href="#contact" 
                        className="contact-sales-btn" 
                        onClick={(e) => {
                          e.stopPropagation();
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        aria-label={`Contact sales about ${service.title}`}
                      >
                        Contact Sales
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Technologies />

        {/* Core Services */}
        <div className="section-title" style={{marginTop: '80px'}} id="core-services">
          <h2>Core Services</h2>
        </div>
        <div className="services-grid">
          {coreServices.map((service, index) => (
            <div key={index} className={`service-card ${service.accent ? 'accent' : ''}`}>
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link 
                  to={service.url} 
                  className="service-card-button"
                  aria-label={`Learn more about ${service.title}`}
                >
                  See more
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="service-icon-container">
                <span style={{fontSize: '1.8rem', color: service.color}}>
                  {service.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;