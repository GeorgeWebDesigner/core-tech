import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Функция для навигации к разделам
  const navigateToSection = (sectionId) => {
    setIsMobileMenuOpen(false);
    
    // Если мы на главной странице, просто скроллим к разделу
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Если мы на другой странице, переходим на главную с якорем
      navigate(`/#${sectionId}`);
    }
  };

  // Эффект для обработки якорей при загрузке страницы
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <div className="logo-container" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <div className="logo-circle">
              <img src="logo.webp" alt="Core Tech Solutions Logo" className="logo-img" />
            </div>
            <div className="logo-text">Core <span>Tech</span> Solutions</div>
          </div>
          
          <ul className="nav-links">
            <li>
              <a 
                href={location.pathname === '/' ? '#home' : '/#home'} 
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection('home');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href={location.pathname === '/' ? '#services' : '/#services'} 
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection('services');
                }}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href={location.pathname === '/' ? '#portfolio' : '/#portfolio'} 
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection('portfolio');
                }}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a 
                href={location.pathname === '/' ? '#contact' : '/#contact'} 
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection('contact');
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          
          <div 
            className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </div>
        </nav>
        
        <div className={`mobile-menu-container ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="mobile-menu">
            <a 
              href={location.pathname === '/' ? '#home' : '/#home'} 
              className="mobile-menu-item" 
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('home');
              }}
            >
              Home
            </a>
            <a 
              href={location.pathname === '/' ? '#services' : '/#services'} 
              className="mobile-menu-item" 
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('services');
              }}
            >
              Services
            </a>
            <a 
              href={location.pathname === '/' ? '#core-services' : '/#core-services'} 
              className="mobile-menu-item" 
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('core-services');
              }}
            >
              Core Services
            </a>
            <a 
              href={location.pathname === '/' ? '#contact' : '/#contact'} 
              className="mobile-menu-item" 
              onClick={(e) => {
                e.preventDefault();
                navigateToSection('contact');
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
