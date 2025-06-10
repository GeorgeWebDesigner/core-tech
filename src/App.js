import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Service Pages
import WebDevelopmentPage from './components/ServicePages/WebDevelopmentPage';
import WebApplicationsPage from './components/ServicePages/WebApplicationsPage';
import ChatBotsPage from './components/ServicePages/ChatBotsPage';
import GoogleAdsPage from './components/ServicePages/GoogleAdsPage';
import SocialMediaPage from './components/ServicePages/SocialMediaPage';

import './App.css';
import './components/ServicePages/ServicePages.css';

// Main Homepage Component
const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <Portfolio />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/web-applications" element={<WebApplicationsPage />} />
          <Route path="/services/chat-bots" element={<ChatBotsPage />} />
          <Route path="/services/google-ads" element={<GoogleAdsPage />} />
          <Route path="/services/social-media" element={<SocialMediaPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;