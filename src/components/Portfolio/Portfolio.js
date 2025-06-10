import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const projects = [
    {
      image: '1.png',
      category: 'Mobile Application',
      title: 'AI Stylist app',
      description: 'Moda Meteor - Developed an AI-powered mobile application that curates personalized outfit recommendations based on weather conditions and user preferences, enhancing daily styling decisions.'
    },
    {
      image: '2.png',
      category: 'Web Application',
      title: 'Restaurant Booking System',
      description: 'Restaurant Efficiency System - Created a streamlined ordering application for waiters that sends selections directly to the bar, significantly reducing wait times and allowing staff to serve more tables efficiently.'
    },
    {
      image: '4.png',
      category: 'Web development',
      title: 'Grooming salon + shop',
      description: 'Pet Grooming Salon Platform - Designed a comprehensive web application featuring an intuitive pet supply store and integrated appointment booking system that simplifies the customer experience.'
    },
    {
      image: '3.png',
      category: 'Chat Bot Development',
      title: 'Freelancer Services Bot',
      description: 'Skill Spark Bot - Built a Telegram bot powered by GPT-4 that intelligently matches candidates with relevant job openings and employers with suitable contractors through advanced natural language processing.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 60000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Some of our projects</h2>
          <p>Check out some of our recent projects and success stories.</p>
        </div>

        <div className="project-slider">
          
        <button className="slider-nav-btn prev-btn" onClick={prevSlide}>‹</button>
        <button className="slider-nav-btn next-btn" onClick={nextSlide}>›</button>
          
          <div className="project-slider__item">
            <div className="project-slider__img">
              <img src={projects[currentSlide].image} alt={projects[currentSlide].title} />
            </div>
            <div className="project-slider__content">
              <span className="project-slider__category">{projects[currentSlide].category}</span>
              <div className="project-slider__title">{projects[currentSlide].title}</div>
              <div className="project-slider__text">{projects[currentSlide].description}</div>
              <a 
                href="#contact" 
                className="project-slider__button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="project-slider__pagination">
            {projects.map((_, index) => (
              <div 
                key={index}
                className={`pagination-bullet ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
