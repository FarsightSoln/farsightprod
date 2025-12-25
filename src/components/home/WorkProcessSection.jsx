import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../../assets/scss/pages/home.scss';

const steps = [
  { title: "Registration" },
  { title: "Certification" },
  { title: "Funding" },
  { title: "Marketing" },
  { title: "Compliances" }
];

const stats = [
  { number: "98%", text: "Farsight Solution client reach to the Interview stage" },
  { number: "100+", highlight: "crores disbursed to", subNumber: "1000+", subHighlight: "BUSINESS" },
  { number: "5000+", text: "Startup got Startup India", highlight: "CERTIFICATE" },
  { number: "500+", text: "Businesses got Tax Holiday got", highlight: "3 YEARS" },
  { label: "SERVED", number: "10000+", subLabel: "STARTUPS" }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 10 }
  }
};

const stepHoverVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(255, 107, 53, 0.4)",
    background: "linear-gradient(135deg, #ff8c42 0%, #ff6b35 100%)", // Shifted gradient on hover
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

const WorkProcessSection = () => {
  return (
    <section className="work-process-section-new">
      <Container fluid>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="growth-header text-center mb-5">
            <h2 className="growth-title">Growth with Farsight</h2>
            <p className="process-subtitle">Grow with Farsight Solution in a few steps</p>
          </motion.div>

          {/* Process Steps */}
          <motion.div variants={itemVariants} className="process-flow-container mb-5">
            <div className="steps-wrapper">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <motion.div 
                    className="process-step"
                    variants={stepHoverVariants}
                    whileHover="hover"
                  >
                    <div className="step-content">{step.title}</div>
                    <div className="step-accent"></div>
                  </motion.div>
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="step-arrow"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                    >
                      →
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Stats Row */}
          <Row className="stats-row">
            {stats.map((stat, index) => (
              <Col lg={index === 1 ? 3 : 2} md={4} sm={6} key={index} className="mb-4">
                <motion.div variants={itemVariants} className="stat-card">
                  {stat.label && <div className="stat-label">{stat.label}</div>}
                  <div className={`stat-number ${stat.subNumber ? 'mixed-stat' : ''}`}>
                    {stat.number}
                  </div>
                  {stat.text && <div className="stat-text">{stat.text}</div>}
                  {stat.highlight && <div className="stat-highlight">{stat.highlight}</div>}
                  {stat.subNumber && (
                    <div className="sub-stat">
                      <span className="sub-number">{stat.subNumber}</span>
                      <span className="sub-highlight"> {stat.subHighlight}</span>
                    </div>
                  )}
                  {stat.subLabel && <div className="stat-label">{stat.subLabel}</div>}
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default WorkProcessSection;