"use client";

import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Home, Check, Smartphone, Code, Shield, Zap, Users, TrendingUp, Globe, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import FaqAccordion from "../../components/ITsolutions/FaqAccordion";
import '../../assets/scss/pages/app-development.scss';

// // Import images
// import appHeroBanner from "../../assets/images/app-hero-banner.jpg";
// import mobileAppImage from "../../assets/images/mobile-app-development.jpg";
// import nativeAppImage from "../../assets/images/native-app.jpg";
// import crossPlatformImage from "../../assets/images/cross-platform.jpg";
// import appTestingImage from "../../assets/images/app-testing.jpg";
// import appMaintenanceImage from "../../assets/images/app-maintenance.jpg";
// import appProcessImage from "../../assets/images/app-process.jpg";

// Replace the import statements with these if using online images
const appHeroBanner = "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const mobileAppImage = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const nativeAppImage = "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const crossPlatformImage = "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const appTestingImage = "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const appMaintenanceImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const appProcessImage = "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

const AppDevelopment = () => {
  const faqItems = [
    {
      question: 'What types of app development services does Farsight Solutionsprovide?',
      answer: 'Farsight Solutionsprovides complete mobile app development for Android and iOS platforms. Our services include UI/UX design, native and hybrid app development, backend API integration, testing, deployment, and post-launch support. We build custom apps that align with your business objectives.'
    },
    {
      question: 'How long does it take to build a mobile app with Farsight Solution?',
      answer: 'The development time depends on the complexity of the project. A basic app may take 4-6 weeks, while advanced enterprise-level apps can take 3-6 months. After requirement gathering, we share a detailed timeline with clear milestones.'
    },
    {
      question: 'Do you provide app maintenance and updates?',
      answer: 'Yes, Farsight Solutionsensures your app stays up to date with regular updates, bug fixes, performance optimization, security patches, and feature enhancements.'
    },
    {
      question: 'How do you ensure app security?',
      answer: 'We follow industry-standard security practices, including secure coding, SSL encryption, secure API integration, and data privacy compliance (GDPR/ISO standards). Regular audits and penetration testing are performed.'
    },
    {
      question: 'Can you develop cross-platform mobile apps?',
      answer: 'Yes, we specialize in both native (Swift, Kotlin) and cross-platform (React Native, Flutter) mobile app development to reduce cost and development time.'
    },
    {
      question: 'Do you assist with app store publishing?',
      answer: 'Absolutely. We help you publish your app on Google Play Store and Apple App Store, following all guidelines to ensure smooth approval.'
    },
    {
      question: 'Which industries do you serve?',
      answer: 'We have delivered apps across industries such as Finance, Education, Healthcare, E-commerce, Real Estate, Travel, and IT Services.'
    },
  ];

  const services = [
    {
      icon: Smartphone,
      title: 'Native App Development',
      description: 'High-performance apps built specifically for iOS and Android platforms using native technologies.',
      features: ['Swift & Kotlin', 'Platform-specific features', 'Optimal performance']
    },
    {
      icon: Code,
      title: 'Cross-Platform Development',
      description: 'Cost-effective solutions using React Native and Flutter for simultaneous iOS and Android deployment.',
      features: ['Single codebase', 'Faster development', 'Consistent UX']
    },
    {
      icon: Shield,
      title: 'Enterprise App Solutions',
      description: 'Secure and scalable applications designed for large organizations with complex requirements.',
      features: ['Advanced security', 'Scalable architecture', 'Enterprise integration']
    },
    {
      icon: Zap,
      title: 'UI/UX Design',
      description: 'User-centric design approach creating intuitive and engaging mobile experiences.',
      features: ['User research', 'Prototype design', 'Usability testing']
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust server-side solutions and API integrations to power your mobile applications.',
      features: ['RESTful APIs', 'Cloud integration', 'Database design']
    },
    {
      icon: Users,
      title: 'App Maintenance & Support',
      description: 'Continuous monitoring, updates, and technical support to keep your app running smoothly.',
      features: ['Regular updates', 'Bug fixes', 'Performance optimization']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Revenue',
      description: 'Mobile apps provide new revenue streams through in-app purchases, subscriptions, and enhanced customer engagement.'
    },
    {
      icon: Users,
      title: 'Customer Engagement',
      description: 'Direct communication channel with customers through push notifications and personalized experiences.'
    },
    {
      icon: Shield,
      title: 'Brand Loyalty',
      description: 'Regular app usage builds stronger brand recognition and customer loyalty over time.'
    },
    {
      icon: Globe,
      title: 'Market Reach',
      description: 'Access to global markets through app stores with minimal geographical limitations.'
    }
  ];

  const developmentProcess = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'Comprehensive requirement analysis, market research, and project planning to define app objectives and scope.'
    },
    {
      step: '02',
      title: 'UI/UX Design',
      description: 'Creating intuitive user interfaces and engaging user experiences through wireframing and prototyping.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Agile development process with regular iterations, testing, and client feedback integration.'
    },
    {
      step: '04',
      title: 'Testing & Quality',
      description: 'Rigorous testing across devices and platforms to ensure performance, security, and usability.'
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'App store submission, launch coordination, and initial user onboarding support.'
    },
    {
      step: '06',
      title: 'Maintenance',
      description: 'Ongoing support, updates, and feature enhancements based on user feedback and analytics.'
    }
  ];

  const technologies = {
    native: ['Swift', 'Kotlin', 'Java', 'Objective-C'],
    crossPlatform: ['React Native', 'Flutter', 'Xamarin', 'Ionic'],
    backend: ['Node.js', 'Python', 'Firebase', 'MongoDB'],
    tools: ['Git', 'JIRA', 'Figma', 'Postman']
  };

  return (
    <div className="app-development-page">
      {/* Hero Section */}
      <section className="app-hero">
        <div
          className="app-hero-banner"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.81), rgba(0, 0, 0, 0.49)), url(${appHeroBanner})`
          }}
        >
          <Container>
            <Row className="align-items-center min-vh-60">
              <Col lg={10} className="mx-auto text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="app-hero-title mb-4">
                    Mobile App Development
                  </h1>
                  <p className="app-hero-subtitle lead mb-5">
                    Transform your business ideas into powerful mobile applications with Farsight Solution.
                    We create innovative, scalable, and user-friendly apps that drive growth and engagement.
                  </p>
                  <div className="app-breadcrumbs">
                    <Home size={16} className="app-breadcrumb-icon" />
                    <span className="app-breadcrumb-text">Home</span>
                    <span className="app-breadcrumb-separator">|</span>
                    <span className="app-breadcrumb-text">App Development</span>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* About Section */}
      <section className="app-about-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="app-section-title mb-4">
                  Leading Mobile App Development Services
                </h2>
                <p className="app-content-text mb-4">
                  Farsight Solutions a trusted mobile app development company offering scalable,
                  user-friendly, and innovative applications for startups, enterprises, and growing businesses.
                  Our expertise ensures seamless user experiences, high performance, and robust security standards.
                </p>
                <p className="app-content-text mb-4">
                  From concept to launch, our developers create apps that help increase customer engagement,
                  enhance brand visibility, and accelerate business growth. Whether you need Android, iOS,
                  or cross-platform solutions, we deliver excellence tailored to your specific requirements.
                </p>
                <div className="app-features-list">
                  <div className="app-feature-item">
                    <Check size={20} className="app-feature-icon" />
                    <span>Custom app development from scratch</span>
                  </div>
                  <div className="app-feature-item">
                    <Check size={20} className="app-feature-icon" />
                    <span>Agile development methodology</span>
                  </div>
                  <div className="app-feature-item">
                    <Check size={20} className="app-feature-icon" />
                    <span>Post-launch support and maintenance</span>
                  </div>
                </div>
              </motion.div>
            </Col>
            <Col lg={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <img
                  src={mobileAppImage}
                  alt="Mobile App Development"
                  className="app-about-img rounded-3 shadow-lg"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="app-services-section py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="app-section-title mb-4">Our App Development Services</h2>
            <p className="app-content-text lead">
              Comprehensive mobile app solutions tailored to meet your business objectives and user needs
            </p>
          </motion.div>

          <Row className="g-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Col key={index} md={6} lg={4}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="app-service-card h-100 shadow-sm border-0">
                      <Card.Body className="p-4 text-center">
                        <div className="app-service-icon-wrapper mb-3">
                          <IconComponent size={32} className="app-service-icon" />
                        </div>
                        <Card.Title className="app-service-title h5 mb-3">{service.title}</Card.Title>
                        <Card.Text className="app-service-description mb-3">
                          {service.description}
                        </Card.Text>
                        <div className="app-service-features">
                          {service.features.map((feature, idx) => (
                            <span key={idx} className="app-service-feature-tag">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="app-benefits-section py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="app-section-title mb-4">Business Benefits of Mobile Apps</h2>
            <p className="app-content-text lead">
              Transform your business with custom mobile applications that deliver measurable results
            </p>
          </motion.div>

          <Row className="g-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Col key={index} md={6} lg={3}>
                  <Card className="app-benefit-card h-100 shadow-sm border-0 text-center">
                    <Card.Body className="p-4">
                      <IconComponent size={40} className="app-benefit-icon mb-3" />
                      <Card.Title className="app-benefit-title h6 mb-3">{benefit.title}</Card.Title>
                      <Card.Text className="app-benefit-description">
                        {benefit.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Development Process */}
      <section className="app-process-section py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="app-section-title mb-4">Our Development Process</h2>
            <p className="app-content-text lead">
              A structured approach to ensure quality, transparency, and successful project delivery
            </p>
          </motion.div>

          <Row className="g-4">
            {developmentProcess.map((process, index) => (
              <Col key={index} md={6} lg={4}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="app-process-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="app-process-step-number mb-3">{process.step}</div>
                      <Card.Title className="app-process-title h5 mb-3">{process.title}</Card.Title>
                      <Card.Text className="app-process-description">
                        {process.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Technologies Section */}
      <section className="app-tech-section py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="app-section-title mb-4">Technologies We Use</h2>
            <p className="app-content-text lead">
              Leveraging cutting-edge technologies to build robust and scalable mobile applications
            </p>
          </motion.div>

          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="app-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Code size={32} className="app-tech-icon mb-3" />
                  <Card.Title className="app-tech-category h6 mb-3">Native Development</Card.Title>
                  <div className="app-tech-list">
                    {technologies.native.map((tech, idx) => (
                      <span key={idx} className="app-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="app-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Globe size={32} className="app-tech-icon mb-3" />
                  <Card.Title className="app-tech-category h6 mb-3">Cross-Platform</Card.Title>
                  <div className="app-tech-list">
                    {technologies.crossPlatform.map((tech, idx) => (
                      <span key={idx} className="app-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="app-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Database size={32} className="app-tech-icon mb-3" />
                  <Card.Title className="app-tech-category h6 mb-3">Backend</Card.Title>
                  <div className="app-tech-list">
                    {technologies.backend.map((tech, idx) => (
                      <span key={idx} className="app-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3}>
              <Card className="app-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Zap size={32} className="app-tech-icon mb-3" />
                  <Card.Title className="app-tech-category h6 mb-3">Tools</Card.Title>
                  <div className="app-tech-list">
                    {technologies.tools.map((tech, idx) => (
                      <span key={idx} className="app-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="app-faq-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="software-dev-section-title mb-4">Frequently Asked Questions</h2>
            <p className="software-dev-content-text lead">
              Get answers to common questions about our software development services
            </p>

          </motion.div>
          <FaqAccordion items={faqItems} />
        </Container>
      </section>
    </div>
  );
};

export default AppDevelopment;