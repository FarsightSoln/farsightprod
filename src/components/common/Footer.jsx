// src/components/common/Footer.jsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../../assets/scss/components/_footer.scss';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="main-footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12}>
              <div className="newsletter-content">
                <h3>Get updated Informed to Subscribe our Newsletter</h3>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <div className="input-group">
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Your e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="newsletter-btn">
                    Subscribe Now
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <Container>
          <Row className="g-4">
            <Col lg={4} md={6}>
              <div className="footer-section company-info">
                <div className="company-logo">
                  <img src={logo} alt="Farsight Solutions" className="logo-img" />
                </div>
                <p className="company-description">
                  Farsight Solution is a one-stop partner for startups, MSMEs, and growing enterprises. We provide complete business consulting and IT solutions. From company incorporation, legal compliance, certification, and funding support to digital transformation, CRM implementation, and growth strategy.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="footer-section">
                <h5 className="footer-title">Quick Link</h5>
                <nav className="footer-nav">
                  <Link to="/about-farsight" className="footer-link">About Company</Link>
                  <Link to="/blogs" className="footer-link">Blogs</Link>
                  <Link to="/#" className="footer-link">Career</Link>
                  <Link to="/contact-us" className="footer-link">Contact Us</Link>
                  <Link to="/certification-assistance" className="footer-link">Certification Assistance</Link>
                  <Link to="/legal-assistance" className="footer-link">Legal Assistance</Link>
                  <Link to="/all-business" className="footer-link">360° Business Assistance</Link>
                </nav>
              </div>
            </Col>

            <Col lg={4} md={12}>
  <div className="footer-section">
    <h5 className="footer-title">Get In Touch</h5>

    <div className="address-info">
      <div className="address-item">
        <i className="fas fa-map-marker-alt location-icon"></i>
        <p>
          Ground Floor, Farsight Solutions LLP<br />
          ILD Business Center, H-207, Sector 63,<br />
          Noida, Uttar Pradesh – 201009, India
        </p>
      </div>

      <div className="contact-item">
        <i className="fas fa-envelope contact-icon"></i>
        <a href="mailto:info@farsight.co.in">info@farsight.co.in</a>
      </div>

      <div className="contact-item">
        <i className="fas fa-phone-alt contact-icon"></i>
        <a href="tel:+91 6200331997">+91 6200331997</a>
      </div>
    </div>

    <div className="social-links">
      <a href="#" className="social-link facebook" aria-label="Facebook">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" className="social-link instagram" aria-label="Instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="social-link linkedin" aria-label="LinkedIn">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="#" className="social-link twitter" aria-label="Twitter">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="social-link youtube" aria-label="YouTube">
        <i className="fab fa-youtube"></i>
      </a>
    </div>
  </div>
</Col>

          </Row>
        </Container>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="copyright-text">
                © {new Date().getFullYear()} <span>Farsight Solutions</span> | All Rights Reserved by <span>Farsight Solutions</span>
              </div>
            </Col>
            <Col md={6}>
              <div className="footer-policies">
                <Link to="/terms-conditions" className="policy-link">Terms & Conditions</Link>
                <Link to="/privacy-policy" className="policy-link">Privacy Policy</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;