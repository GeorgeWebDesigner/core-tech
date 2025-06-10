import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Standard',
      price: 500,
      period: '/project',
      description: 'Perfect for small businesses getting started online',
      features: [
        'Responsive website (5-7 pages)',
        'Mobile optimization',
        'Contact form integration',
        'Basic SEO setup',
        'Social media links',
        '2 rounds of revisions',
        '2 weeks delivery'
      ]
    },
    {
      name: 'Premium',
      price: 1200,
      period: '/project',
      description: 'Comprehensive solution for established businesses',
      features: [
        'Advanced website (up to 15 pages)',
        'CMS integration',
        'Advanced contact forms',
        'Performance optimization',
        'Advanced SEO package',
        'Custom animations',
        'Analytics setup',
        '3 rounds of revisions',
        '4 weeks delivery'
      ],
      featured: true
    },
    {
      name: 'Individual',
      price: 'Custom',
      period: 'Starting at $2,500',
      description: 'Tailored solutions for complex business requirements',
      features: [
        'Custom web application',
        'E-commerce functionality',
        'Advanced security features',
        'Third-party integrations',
        'Premium SEO package',
        'Multi-language support',
        'Content strategy',
        'Unlimited revisions',
        'Custom timeline'
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-title">
          <h2>Pricing Plans</h2>
          <p>Choose the perfect package for your business needs</p>
        </div>

        <div className="pricing-container">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
              {plan.featured && <div className="pricing-badge">Most Popular</div>}
              
              <div className="pricing-header">
                <h3>{plan.name}</h3>
                <div className="pricing-price">
                  {typeof plan.price === 'number' ? (
                    <>
                      <span className="currency">$</span>
                      <span className="amount">{plan.price}</span>
                      <span className="period">{plan.period}</span>
                    </>
                  ) : (
                    <>
                      <span className="price-custom">{plan.price}</span>
                      <span className="period">{plan.period}</span>
                    </>
                  )}
                </div>
                <p className="pricing-description">{plan.description}</p>
              </div>

              <div className="pricing-features">
                <ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <Check size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pricing-action">
                <a 
                  href="#contact" 
                  className={`pricing-button ${plan.featured ? 'featured-button' : ''}`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {plan.price === 'Custom' ? 'Request Quote' : 'Get Started'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;