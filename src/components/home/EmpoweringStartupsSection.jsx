import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../../assets/scss/pages/home.scss';

const EmpoweringStartupsSection = () => {
  const processSteps = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png", // search/analysis
      title: "Understanding Your Vision",
      description:
        "At Farsight Solutions, we begin by analyzing your business goals, challenges, and future vision to design a growth-focused plan.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png", // strategy
      title: "Strategic Planning",
      description:
        "We craft customized strategies combining our expertise in consultancy, finance, compliance, and IT to empower your business journey.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/992/992700.png", // implementation
      title: "Execution with Precision",
      description:
        "Our expert teams implement solutions with accuracy, ensuring seamless performance and impactful business transformation.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", // support
      title: "Continuous Support & Growth",
      description:
        "We provide ongoing monitoring, support, and optimization to keep your business adaptive and ahead of the curve.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="working-process-section">
      <Container>
        {/* Header Line and Label */}
        <motion.div
          className="process-header-top"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="process-line"></span>
          <span className="process-text">Work Process</span>
        </motion.div>

        {/* Main Title */}
        <motion.h2
          className="process-main-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {"Our Working Process at Farsight Solutions".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.03 }}
              viewport={{ once: true }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Process Steps */}
        <motion.div
          className="process-steps-row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Row>
            {processSteps.map((step, index) => (
              <Col lg={3} md={6} sm={12} key={index} className="process-step-col">
                <motion.div className="process-step-content" variants={stepVariants}>
                  <motion.div
                    className="icon-circle"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <img src={step.icon} alt={step.title} className="step-icon" />
                  </motion.div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </motion.div>

                {/* Connecting Arrow (except last one) */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="arrow-container"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="dashed-arrow"></div>
                  </motion.div>
                )}
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default EmpoweringStartupsSection;
