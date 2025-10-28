"use client";

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Home, Cloud, Server, Database, Shield, Zap, Users, TrendingUp, Globe, Lock, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import FaqAccordion from "../../components/ITsolutions/FaqAccordion";
import "../../assets/scss/pages/Cloud-Innovations.scss";

// Replace the import statements with these if using online images
const cloudHeroBanner = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const cloudMigrationImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const cloudInfrastructureImage = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const cloudSecurityImage = "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const hybridCloudImage = "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const cloudAnalyticsImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const cloudProcessImage = "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

const CloudInnovations = () => {
  const faqItems = [
    {
      question: "What Cloud Services Does Farsight Solution Offer?",
      answer:
        "Farsight Solution provides comprehensive cloud services including cloud migration, infrastructure setup, cloud security, hybrid cloud solutions, cloud analytics, and managed cloud services. We help businesses leverage cloud technology for innovation and growth.",
    },
    {
      question: "How long does a Cloud Migration Project Take?",
      answer:
        "The timeline depends on the complexity of your infrastructure. Small to medium migrations typically take 4-8 weeks, while enterprise-level migrations can take 12-24 weeks. We provide a detailed migration plan after initial assessment.",
    },
    {
      question: "Which Cloud Platforms Does Farsight Solution Support?",
      answer:
        "Our team works with all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and IBM Cloud. We help you choose the right platform based on your business needs and technical requirements.",
    },
    {
      question: "Do You Provide Cloud Security and Compliance?",
      answer:
        "Yes, we offer comprehensive cloud security services including data encryption, identity management, compliance auditing, and security monitoring to ensure your cloud infrastructure meets industry standards and regulations.",
    },
  ];

  const services = [
    {
      icon: Cloud,
      title: "Cloud Migration Services",
      description: "Seamless migration of your applications and data to cloud platforms with minimal downtime.",
      features: ["Application Assessment", "Data Migration", "Performance Optimization"],
      image: cloudMigrationImage
    },
    {
      icon: Server,
      title: "Cloud Infrastructure Setup",
      description: "Design and implement scalable cloud infrastructure tailored to your business requirements.",
      features: ["Infrastructure as Code", "Auto Scaling", "Load Balancing"],
      image: cloudInfrastructureImage
    },
    {
      icon: Shield,
      title: "Cloud Security & Compliance",
      description: "Comprehensive security solutions to protect your cloud environment and ensure compliance.",
      features: ["Data Encryption", "Identity Management", "Security Monitoring"],
      image: cloudSecurityImage
    },
    {
      icon: Cpu,
      title: "Hybrid Cloud Solutions",
      description: "Integrated solutions combining public and private cloud for optimal flexibility and control.",
      features: ["Multi-Cloud Strategy", "Private Cloud Setup", "Cloud Integration"],
      image: hybridCloudImage
    },
    {
      icon: Database,
      title: "Cloud Data Analytics",
      description: "Leverage cloud-powered analytics for business intelligence and data-driven decision making.",
      features: ["Big Data Processing", "Real-time Analytics", "Machine Learning"],
      image: cloudAnalyticsImage
    },
    {
      icon: Users,
      title: "Managed Cloud Services",
      description: "Complete cloud management including monitoring, optimization, and 24/7 support.",
      features: ["Performance Monitoring", "Cost Optimization", "Technical Support"],
      image: cloudInfrastructureImage
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Reduce IT costs with pay-as-you-go models and eliminate upfront infrastructure investments."
    },
    {
      icon: Zap,
      title: "Scalability & Flexibility",
      description: "Easily scale resources up or down based on demand and business growth requirements."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Enterprise-grade security features and compliance certifications for data protection."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Deploy applications globally with low latency and high availability across multiple regions."
    }
  ];

  const technologies = {
    platforms: ["AWS", "Microsoft Azure", "Google Cloud", "IBM Cloud"],
    services: ["EC2/Compute", "S3/Storage", "RDS/Databases", "Kubernetes"],
    security: ["IAM", "Encryption", "Firewall", "Compliance"],
    tools: ["Terraform", "Docker", "Kubernetes", "CI/CD"],
    analytics: ["BigQuery", "Redshift", "Data Lakes", "Machine Learning"]
  };

  const implementationProcess = [
    {
      step: "01",
      title: "Cloud Strategy & Assessment",
      description: "Comprehensive analysis of current infrastructure and development of cloud migration strategy."
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design scalable and secure cloud architecture tailored to your business requirements."
    },
    {
      step: "03",
      title: "Migration & Deployment",
      description: "Seamless migration of applications and data with minimal disruption to business operations."
    },
    {
      step: "04",
      title: "Security Implementation",
      description: "Implementation of security measures, access controls, and compliance frameworks."
    },
    {
      step: "05",
      title: "Optimization & Testing",
      description: "Performance optimization, load testing, and cost management implementation."
    },
    {
      step: "06",
      title: "Managed Services & Support",
      description: "Ongoing monitoring, maintenance, and 24/7 support for your cloud environment."
    }
  ];

  const industries = [
    "Healthcare & Life Sciences",
    "Financial Services",
    "E-commerce & Retail",
    "Manufacturing & Supply Chain",
    "Media & Entertainment",
    "Education & Research",
    "Government & Public Sector",
    "Startups & SMBs"
  ];

  return (
    <div className="cloud-innovations-wrapper">
      {/* Hero Section */}
      <section className="cloud-innovations-hero">
        <div 
          className="cloud-innovations-hero-banner"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.81), rgba(0, 0, 0, 0.49)), url(${cloudHeroBanner})`
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
                  <h1 className="cloud-innovations-hero-title mb-4">
                    Cloud Innovations
                  </h1>
                  <p className="cloud-innovations-hero-subtitle lead mb-5">
                    Transform your business with cutting-edge cloud solutions from{" "}
                    <strong>Farsight Solution</strong> – your trusted partner for digital transformation and innovation.
                  </p>
                  <div className="cloud-innovations-breadcrumbs">
                    <Home size={16} className="cloud-innovations-breadcrumb-icon" />
                    <span className="cloud-innovations-breadcrumb-text">Home</span>
                    <span className="cloud-innovations-breadcrumb-separator">|</span>
                    <span className="cloud-innovations-breadcrumb-text">Cloud Innovations</span>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* About Section */}
      <section className="cloud-innovations-about py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="cloud-innovations-section-title mb-4">
                  Leading Cloud Innovation Company
                </h2>
                <p className="cloud-innovations-content-text mb-4">
                  Farsight Solution is at the forefront of cloud innovation, helping businesses 
                  harness the power of cloud computing to drive digital transformation. Our 
                  comprehensive cloud services enable organizations to scale, innovate, and 
                  compete in today's dynamic business landscape.
                </p>
                <p className="cloud-innovations-content-text mb-4">
                  With expertise across all major cloud platforms and a proven track record 
                  of successful implementations, we deliver cloud solutions that are secure, 
                  scalable, and cost-effective. From cloud migration to advanced analytics, 
                  we help you unlock the full potential of cloud technology.
                </p>
                <div className="cloud-innovations-features">
                  <div className="cloud-innovations-feature-item">
                    <span>✓ Multi-Cloud Expertise</span>
                  </div>
                  <div className="cloud-innovations-feature-item">
                    <span>✓ 24/7 Cloud Monitoring</span>
                  </div>
                  <div className="cloud-innovations-feature-item">
                    <span>✓ Security & Compliance</span>
                  </div>
                  <div className="cloud-innovations-feature-item">
                    <span>✓ Cost Optimization</span>
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
                  src={cloudProcessImage}
                  alt="Cloud Innovation Process"
                  className="cloud-innovations-about-img rounded-3 shadow-lg"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="cloud-innovations-services py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="cloud-innovations-section-title mb-4">Our Cloud Services</h2>
            <p className="cloud-innovations-content-text lead">
              Comprehensive cloud solutions designed to drive innovation and business growth
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
                    <Card className="cloud-service-card h-100 shadow-sm border-0">
                      <Card.Img 
                        variant="top" 
                        src={service.image} 
                        className="cloud-service-img"
                        alt={service.title}
                      />
                      <Card.Body className="p-4">
                        <IconComponent size={40} className="cloud-service-icon mb-3" />
                        <Card.Title className="cloud-service-title h5 mb-3">{service.title}</Card.Title>
                        <Card.Text className="cloud-service-description mb-3">
                          {service.description}
                        </Card.Text>
                        <div className="cloud-service-features">
                          {service.features.map((feature, idx) => (
                            <span key={idx} className="cloud-service-feature-tag">
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
      <section className="cloud-innovations-benefits py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="cloud-innovations-section-title mb-4">Business Benefits</h2>
            <p className="cloud-innovations-content-text lead">
              Transform your operations with cloud solutions that deliver measurable results and competitive advantage
            </p>
          </motion.div>

          <Row className="g-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Col key={index} md={6} lg={3}>
                  <Card className="cloud-benefit-card h-100 shadow-sm border-0 text-center">
                    <Card.Body className="p-4">
                      <IconComponent size={40} className="cloud-benefit-icon mb-3" />
                      <Card.Title className="cloud-benefit-title h6 mb-3">{benefit.title}</Card.Title>
                      <Card.Text className="cloud-benefit-description">
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
      <section className="cloud-innovations-tech py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="cloud-innovations-section-title mb-4">Cloud Technology Stack</h2>
            <p className="cloud-innovations-content-text lead">
              We leverage cutting-edge cloud technologies and platforms for optimal performance and scalability
            </p>
          </motion.div>

          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="cloud-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Cloud size={32} className="cloud-tech-icon mb-3" />
                  <Card.Title className="cloud-tech-category h6 mb-3">Cloud Platforms</Card.Title>
                  <div className="cloud-tech-list">
                    {technologies.platforms.map((tech, idx) => (
                      <span key={idx} className="cloud-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="cloud-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Server size={32} className="cloud-tech-icon mb-3" />
                  <Card.Title className="cloud-tech-category h6 mb-3">Cloud Services</Card.Title>
                  <div className="cloud-tech-list">
                    {technologies.services.map((tech, idx) => (
                      <span key={idx} className="cloud-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="cloud-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Shield size={32} className="cloud-tech-icon mb-3" />
                  <Card.Title className="cloud-tech-category h6 mb-3">Security</Card.Title>
                  <div className="cloud-tech-list">
                    {technologies.security.map((tech, idx) => (
                      <span key={idx} className="cloud-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="cloud-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Cpu size={32} className="cloud-tech-icon mb-3" />
                  <Card.Title className="cloud-tech-category h6 mb-3">DevOps Tools</Card.Title>
                  <div className="cloud-tech-list">
                    {technologies.tools.map((tech, idx) => (
                      <span key={idx} className="cloud-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="cloud-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Database size={32} className="cloud-tech-icon mb-3" />
                  <Card.Title className="cloud-tech-category h6 mb-3">Analytics</Card.Title>
                  <div className="cloud-tech-list">
                    {technologies.analytics.map((tech, idx) => (
                      <span key={idx} className="cloud-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="cloud-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Users size={32} className="cloud-tech-icon mb-3" />
                  <Card.Title className="cloud-tech-category h6 mb-3">Industries Served</Card.Title>
                  <div className="cloud-tech-list">
                    {industries.slice(0, 4).map((industry, idx) => (
                      <span key={idx} className="cloud-tech-tag">{industry}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Implementation Process */}
      <section className="cloud-innovations-process py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="cloud-innovations-section-title mb-4">Our Implementation Process</h2>
            <p className="cloud-innovations-content-text lead">
              A structured approach ensuring successful cloud adoption and digital transformation
            </p>
          </motion.div>

          <Row className="g-4">
            {implementationProcess.map((process, index) => (
              <Col key={index} md={6} lg={4}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="cloud-process-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="cloud-process-step-number mb-3">{process.step}</div>
                      <Card.Title className="cloud-process-title h5 mb-3">{process.title}</Card.Title>
                      <Card.Text className="cloud-process-description">
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
      <section className="cloud-innovations-faq py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="cloud-innovations-section-title mb-4">Frequently Asked Questions</h2>
            <p className="cloud-innovations-content-text lead">
              Get answers to common questions about our cloud innovation services
            </p>
          </motion.div>
          <FaqAccordion items={faqItems} />
        </Container>
      </section>
    </div>
  );
};

export default CloudInnovations;