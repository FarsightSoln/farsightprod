import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../assets/scss/pages/home.scss';

const AboutSection = () => {
  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12}>
            <motion.div 
              className="about-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="section-label">
                <motion.span 
                  className="label-icon"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  →
                </motion.span>
                <motion.span 
                  className="label-text"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  ABOUT US
                </motion.span>
              </div>
              
              <h2 className="section-title">
                We Create a Culture That Inspires Us To Work Smart Together
              </h2>
              
              <div className="content-text">
                <motion.p 
                  className="description-paragraph"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Farsight Solutions a strategic partner for entrepreneurs, startups, MSMEs and growing enterprises. We combine deep business-consulting expertise with advanced IT solutions to support every stage of your journey from incorporation and compliance to growth, digital transformation and funding. Our mission is to simplify complex processes, make operations transparent and deliver measurable results. Whether you are registering a new company, managing certifications, securing working capital or enhancing your digital presence we stand with you at every step.
                </motion.p>
                
                <motion.p 
                  className="description-paragraph"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Based in India we serve clients across the country and globally providing business-consulting services domestically along with IT solutions to clients worldwide. Our multidisciplinary team of business strategists, legal and compliance experts and technology professionals work together to deliver integrated solutions. At Farsight Solutionswe believe true growth happens when strategy, process and technology align perfectly to empower businesses for sustainable success.
                </motion.p>
              </div>
              
              <Link to="/about" className="read-more-link">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Button as={Link} to="/contact-us" className="read-more-btn">
                    Read More →
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </Col>
          
          <Col lg={6} md={12}>
            <motion.div 
              className="about-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.img 
                src="assets/images/aboutus.png" 
                alt="Team collaboration and business meeting" 
                className="about-main-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
              
              <motion.div 
                className="stat-card expert-team"
                initial={{ opacity: 0, x: 50, y: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">100+</div>
                <div className="stat-label">
                  Expert Team<br />Members
                </div>
              </motion.div>
              
              <motion.div 
                className="stat-card client-satisfaction"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">98%</div>
                <div className="stat-label">
                  Clients Satisfaction<br />
                  Survey in Consulting<br />
                  Organization
                </div>
              </motion.div>
              
              
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
