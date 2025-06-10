import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      console.log('Message sent:', formData);
      alert('Message sent successfully!');
      handleClear();
    } else {
      alert('Please fill in all required fields');
    }
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Ready to start your project? Get in touch with our team today.</p>
        </div>

        <div className="screen-container">
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
                  <span>GET IN</span>
                  <span>TOUCH</span>
                </div>

                <div className="contact-info">
                  <div className="contact-item">
                    <MapPin />
                    <div>
                      <h3>Location</h3>
                      <p>Belgrade, Serbia</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <Mail />
                    <div>
                      <h3>Email</h3>
                      <p>info@coretechsolutions.com</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <Phone />
                    <div>
                      <h3>Phone</h3>
                      <p>+381 XX XXX XXXX</p>
                    </div>
                  </div>

                  <div className="contact-item">
                    <Clock />
                    <div>
                      <h3>Working Hours</h3>
                      <p>Monday - Friday: 9am - 6pm CET</p>
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
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="app-form-group">
                    <input 
                      type="email" 
                      className="app-form-control" 
                      placeholder="EMAIL ADDRESS" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="app-form-group">
                    <input 
                      className="app-form-control" 
                      placeholder="SUBJECT"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="app-form-group message">
                    <textarea 
                      className="app-form-control" 
                      placeholder="YOUR MESSAGE" 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="app-form-group buttons">
                    <button type="button" className="app-form-button" onClick={handleClear}>
                      CLEAR
                    </button>
                    <button type="button" className="app-form-button submit" onClick={handleSubmit}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;