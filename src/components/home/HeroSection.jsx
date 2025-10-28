import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../assets/scss/pages/home.scss';

const HeroSection = () => {
  return (
    <section className="farsight-fullbg-hero">
      <img
        src="/assets/images/banner/hbanner.png"
        alt="Farsight Hero Banner"
        className="hero-background-image"
      />
      <div className="farsight-hero-overlay">
        <Container fluid>
          <Row className="farsight-hero-row align-items-end">
            <Col lg={12} className="text-center">
              <motion.div
                className="farsight-hero-buttons"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button as={Link} to="/contact-us" className=" btn-skew mb-md-3">
                  <span className="btn-skew__text">Get Started</span>
                    
                  </Button>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
