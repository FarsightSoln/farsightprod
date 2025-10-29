"use client";

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Home, Code, Database, Shield, Zap, Users, TrendingUp, Globe, Smartphone, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import FaqAccordion from "../../components/ITsolutions/FaqAccordion";
import "../../assets/scss/pages/software-development.scss";



// import softwareHeroBanner from "../../assets/images/banner/software.png";
// import customSoftwareImage from "../../assets/images/custom-software.jpg";
// import webDevelopmentImage from "../../assets/images/web-development.jpg";
// import mobileAppImage from "../../assets/images/mobile-app-dev.jpg";
// import enterpriseSoftwareImage from "../../assets/images/enterprise-software.jpg";
// import cloudSolutionsImage from "../../assets/images/cloud-solutions.jpg";
// import softwareProcessImage from "../../assets/images/software-process.jpg";
// Replace the import statements with these if using online images
// const softwareHeroBanner = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const customSoftwareImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const webDevelopmentImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const mobileAppImage = "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const enterpriseSoftwareImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const cloudSolutionsImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const softwareProcessImage = "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

const SoftwareDevelopment = () => {
  const faqItems = [
    {
      question: "What Software Development Services Does Farsight SolutionsProvide?",
      answer:
        "Farsight Solutionsdelivers comprehensive software development services encompassing custom application development, mobile application solutions, enterprise-grade web platforms, and strategic IT consulting. Our solutions are engineered to be scalable, secure, and aligned with contemporary business requirements, ensuring optimal performance and long-term sustainability.",
    },
    {
      question: "What is the Expected Timeline for Software Development Projects?",
      answer:
        "Project timelines vary based on scope, complexity, and specific requirements. Smaller applications typically require 4-8 weeks for development and deployment, while enterprise-level solutions may span 3-6 months or longer. Following our comprehensive requirement analysis phase, we provide detailed project timelines with clearly defined milestones and deliverables.",
    },
    {
      question: "Which Technology Stacks Does Farsight SolutionsSpecialize In?",
      answer:
        "Our engineering team possesses extensive expertise across modern technology stacks including React, Angular, Vue.js for frontend development; Node.js, Python, Java, and .NET for backend systems; and comprehensive database management using SQL, PostgreSQL, MongoDB, and Redis. We employ a strategic approach to technology selection, ensuring optimal performance, scalability, and maintainability for each unique project.",
    },
    {
      question: "Does Farsight SolutionsOffer Post-Deployment Support and Maintenance?",
      answer:
        "We provide comprehensive post-deployment support and maintenance services to ensure sustained performance and reliability. Our support framework includes proactive bug resolution, continuous performance monitoring and optimization, feature enhancements, security patches, system upgrades, and technical assistance. We offer flexible support packages tailored to your operational requirements.",
    },
  ];

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Enterprise-grade custom software solutions engineered to align precisely with your unique business processes, operational workflows, and strategic objectives.",
      features: ["Business process automation", "Custom workflow engines", "Scalable architecture design"],
      image: customSoftwareImage
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "High-performance, responsive web applications built using cutting-edge frameworks and modern development methodologies to deliver exceptional user experiences.",
      features: ["Progressive Web Apps (PWA)", "Single Page Applications (SPA)", "Cross-browser compatibility"],
      image: webDevelopmentImage
    },
    {
      icon: Smartphone,
      title: "Mobile Application Development",
      description: "Native and cross-platform mobile applications for iOS and Android ecosystems, delivering seamless performance and intuitive user interfaces.",
      features: ["Native performance optimization", "Offline functionality", "App store deployment support"],
      image: mobileAppImage
    },
    {
      icon: Database,
      title: "Enterprise Software Solutions",
      description: "Comprehensive enterprise systems including ERP, CRM, supply chain management, and business intelligence platforms designed for operational excellence.",
      features: ["Enterprise system integration", "Advanced data analytics", "Multi-tenant architecture"],
      image: enterpriseSoftwareImage
    },
    {
      icon: Cloud,
      title: "Cloud Solutions & Migration",
      description: "Cloud-native application development and seamless migration services leveraging leading cloud platforms for enhanced scalability and performance.",
      features: ["AWS/Azure/Google Cloud", "Microservices architecture", "Containerization with Docker/Kubernetes"],
      image: cloudSolutionsImage
    },
    {
      icon: Shield,
      title: "Software Maintenance & Support",
      description: "Proactive maintenance, continuous monitoring, and comprehensive technical support ensuring optimal performance and system reliability.",
      features: ["Scheduled updates and patches", "Security vulnerability management", "Performance tuning and optimization"],
      image: customSoftwareImage
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Enhanced Operational Efficiency",
      description: "Streamline business operations through intelligent automation, eliminating redundant tasks and optimizing workflows for maximum productivity."
    },
    {
      icon: Users,
      title: "Superior Customer Experience",
      description: "Deliver exceptional digital experiences through intuitive interfaces and seamless interactions that drive customer satisfaction and loyalty."
    },
    {
      icon: Shield,
      title: "Robust Security Infrastructure",
      description: "Implement enterprise-grade security protocols and compliance frameworks to safeguard sensitive data and protect critical business operations."
    },
    {
      icon: Zap,
      title: "Sustainable Competitive Advantage",
      description: "Leverage innovative technology solutions and digital transformation strategies to maintain market leadership and drive business growth."
    }
  ];

  const technologies = {
    frontend: ["React", "Angular", "Vue.js", "TypeScript"],
    backend: ["Node.js", "Python", "Java", ".NET"],
    mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
    database: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    cloud: ["AWS", "Azure", "Google Cloud", "Docker"]
  };

  const developmentProcess = [
    {
      step: "01",
      title: "Requirements Analysis & Discovery",
      description: "Comprehensive analysis of business objectives, user requirements, technical specifications, and project constraints to establish a solid foundation for development."
    },
    {
      step: "02",
      title: "Strategic Planning & Architecture Design",
      description: "Development of detailed technical architecture, technology stack selection, database design, and creation of comprehensive project roadmaps with defined milestones."
    },
    {
      step: "03",
      title: "Agile Development & Implementation",
      description: "Iterative development approach with regular sprints, continuous integration, rigorous code reviews, and adherence to industry best practices and coding standards."
    },
    {
      step: "04",
      title: "Quality Assurance & Testing",
      description: "Multi-layered testing methodology including unit testing, integration testing, system testing, performance testing, and comprehensive user acceptance testing (UAT)."
    },
    {
      step: "05",
      title: "Deployment & Go-Live",
      description: "Strategic deployment to production environments with minimal disruption, including data migration, system configuration, and comprehensive deployment validation."
    },
    {
      step: "06",
      title: "Ongoing Maintenance & Evolution",
      description: "Continuous support, proactive monitoring, regular updates, and iterative enhancements based on user feedback and evolving business requirements."
    }
  ];

  const industries = [
    "Healthcare & Medical",
    "Finance & Banking",
    "E-commerce & Retail",
    "Education & E-learning",
    "Manufacturing & Logistics",
    "Real Estate & Property",
    "Travel & Hospitality",
    "Media & Entertainment"
  ];

  return (
    <div className="software-dev-wrapper">
      {/* Hero Section */}
      <section className="software-dev-hero">
        <div 
          className="software-dev-hero-banner"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.81), rgba(0, 0, 0, 0.49)), url('assets/images/banner/software.png')`
          }}
        >
          <Container>
            <Row className="align-items-center min-vh-60">
              <Col lg={8} className="mx-auto text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="software-dev-hero-title mb-4">
                    Professional Software Development Services
                  </h1>
                  <p className="software-dev-hero-subtitle lead mb-5">
                    Partner with <strong>Farsight Solution</strong> to develop secure, scalable, and high-performance software solutions that drive digital transformation and accelerate business growth.
                  </p>
                  <div className="software-dev-breadcrumbs">
                    <Home size={16} className="software-dev-breadcrumb-icon" />
                    <span className="software-dev-breadcrumb-text">Home</span>
                    <span className="software-dev-breadcrumb-separator">|</span>
                    <span className="software-dev-breadcrumb-text">Software Development</span>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* About Section */}
      <section className="software-dev-about py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="software-dev-section-title mb-4">
                  Premier Software Development Partner for Enterprise Solutions
                </h2>
                <p className="software-dev-content-text mb-4">
                  Farsight Solutionsstands as a distinguished software development firm, delivering innovative and cost-effective technology solutions to organizations across diverse industries worldwide. Whether you require a sophisticated SaaS platform, enterprise-grade applications, or custom software solutions, we facilitate accelerated time-to-market through secure, scalable, and performance-optimized technology implementations.
                </p>
                <p className="software-dev-content-text mb-4">
                  Our multidisciplinary team of software engineers, UI/UX designers, quality assurance specialists, and project managers brings extensive domain expertise across healthcare, financial services, retail, manufacturing, and logistics sectors. We employ industry best practices and agile methodologies to deliver software solutions that precisely align with your strategic business objectives and support sustainable growth trajectories.
                </p>
                <div className="software-dev-features">
                  <div className="software-dev-feature-item">
                    <span>✓ Scalable & Secure Architecture</span>
                  </div>
                  <div className="software-dev-feature-item">
                    <span>✓ 24/7 Technical Support</span>
                  </div>
                  <div className="software-dev-feature-item">
                    <span>✓ Client-Centric Development Approach</span>
                  </div>
                  <div className="software-dev-feature-item">
                    <span>✓ Guaranteed On-Time Delivery</span>
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
                  src={softwareProcessImage}
                  alt="Professional Software Development Methodology"
                  className="software-dev-about-img rounded-3 shadow-lg w-100"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="software-dev-services py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="software-dev-section-title mb-4">Comprehensive Software Development Services</h2>
            <p className="software-dev-content-text lead">
              End-to-end software solutions meticulously designed to address your specific business challenges and strategic objectives
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
                    <Card className="software-service-card h-100 shadow-sm border-0">
                      <Card.Img 
                        variant="top" 
                        src={service.image} 
                        className="software-service-img"
                        alt={service.title}
                      />
                      <Card.Body className="p-4">
                        <IconComponent size={40} className="software-service-icon mb-3" />
                        <Card.Title className="software-service-title h5 mb-3">{service.title}</Card.Title>
                        <Card.Text className="software-service-description mb-3">
                          {service.description}
                        </Card.Text>
                        <div className="software-service-features">
                          {service.features.map((feature, idx) => (
                            <span key={idx} className="software-service-feature-tag">
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
      <section className="software-dev-benefits py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="software-dev-section-title mb-4">Strategic Business Advantages</h2>
            <p className="software-dev-content-text lead">
              Transform your enterprise operations with custom software solutions that deliver quantifiable business value and sustainable competitive advantages
            </p>
          </motion.div>

          <Row className="g-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Col key={index} md={6} lg={3}>
                  <Card className="software-benefit-card h-100 shadow-sm border-0 text-center">
                    <Card.Body className="p-4">
                      <IconComponent size={40} className="software-benefit-icon mb-3" />
                      <Card.Title className="software-benefit-title h6 mb-3">{benefit.title}</Card.Title>
                      <Card.Text className="software-benefit-description">
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

      {/* Technologies Section */}
      <section className="software-dev-tech py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="software-dev-section-title mb-4">Advanced Technology Stack Expertise</h2>
            <p className="software-dev-content-text lead">
              Leveraging cutting-edge technologies and frameworks to architect robust, scalable, and future-proof software solutions
            </p>
          </motion.div>

          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="software-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Code size={32} className="software-tech-icon mb-3" />
                  <Card.Title className="software-tech-category h6 mb-3">Frontend Technologies</Card.Title>
                  <div className="software-tech-list">
                    {technologies.frontend.map((tech, idx) => (
                      <span key={idx} className="software-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="software-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Database size={32} className="software-tech-icon mb-3" />
                  <Card.Title className="software-tech-category h6 mb-3">Backend Technologies</Card.Title>
                  <div className="software-tech-list">
                    {technologies.backend.map((tech, idx) => (
                      <span key={idx} className="software-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="software-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Smartphone size={32} className="software-tech-icon mb-3" />
                  <Card.Title className="software-tech-category h6 mb-3">Mobile Technologies</Card.Title>
                  <div className="software-tech-list">
                    {technologies.mobile.map((tech, idx) => (
                      <span key={idx} className="software-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="software-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Shield size={32} className="software-tech-icon mb-3" />
                  <Card.Title className="software-tech-category h6 mb-3">Database Systems</Card.Title>
                  <div className="software-tech-list">
                    {technologies.database.map((tech, idx) => (
                      <span key={idx} className="software-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="software-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Cloud size={32} className="software-tech-icon mb-3" />
                  <Card.Title className="software-tech-category h6 mb-3">Cloud & DevOps</Card.Title>
                  <div className="software-tech-list">
                    {technologies.cloud.map((tech, idx) => (
                      <span key={idx} className="software-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="software-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Users size={32} className="software-tech-icon mb-3" />
                  <Card.Title className="software-tech-category h6 mb-3">Industry Specializations</Card.Title>
                  <div className="software-tech-list">
                    {industries.slice(0, 4).map((industry, idx) => (
                      <span key={idx} className="software-tech-tag">{industry}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Development Process */}
      <section className="software-dev-process py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="software-dev-section-title mb-4">Structured Development Methodology</h2>
            <p className="software-dev-content-text lead">
              A proven, systematic approach ensuring superior quality, complete transparency, and successful project outcomes
            </p>
          </motion.div>

          <Row className="g-4">
            {developmentProcess.map((process, index) => (
              <Col key={index} md={6} lg={4}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="software-process-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="software-process-step-number mb-3">{process.step}</div>
                      <Card.Title className="software-process-title h5 mb-3">{process.title}</Card.Title>
                      <Card.Text className="software-process-description">
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

      {/* FAQ Section */}
      <section className="software-dev-faq py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="software-dev-section-title mb-4">Frequently Asked Questions</h2>
            <p className="software-dev-content-text lead">
              Comprehensive answers to common inquiries regarding our software development services and methodologies
            </p>
          </motion.div>
          <FaqAccordion items={faqItems} />
        </Container>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;