import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Content Section */}
        <div className="footer-main">
          <div className="footer-brand">
            <h2 className="footer-title"><img src="/public/images/Logo.png" alt="" /></h2>
            <p className="footer-description">
              للابنية الذكية والمصاعد الكهربائية وحلول النقل العمودي المتقدمة.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="links-section">
              <h3 className="links-title">Quick Links</h3>
              <ul className="links-list">
                <li><a href="#home" className="footer-link">Home</a></li>
                <li><a href="#about" className="footer-link">About</a></li>
                <li><a href="#projects" className="footer-link">Projects</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>
            
            <div className="links-section">
              <h3 className="links-title">Contact</h3>
              <ul className="links-list">
                <li>
                  <a href="#" className="footer-link">
                    ORIENT@Gmail.com
                  </a>
                </li>
                <li>
                  <span className="footer-text">Cairo, Egypt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>© 2025 ORIENT. All rights reserved.</span>
          </div>
          
          <div className="footer-legal">
            <a href="#privacy" className="legal-link">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#terms" className="legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;