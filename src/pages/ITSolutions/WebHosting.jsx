"use client";

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Home, Server, Shield, Zap, Users, Clock, Cloud, Database, Globe, CheckCircle, Code } from 'lucide-react';
import { motion } from "framer-motion";
import ItSolutionSidebar from "../../components/ITsolutions/ItSolutionSidebar";
import FaqAccordion from "../../components/ITsolutions/FaqAccordion";
import '../../assets/scss/pages/web-hosting.scss';

// Import images
const webHostingHeroBanner = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const sharedHostingImage = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const vpsHostingImage = "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const dedicatedHostingImage = "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const cloudHostingImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const wordpressHostingImage = "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const hostingInfrastructureImage = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

const WebHosting = () => {
  const faqItems = [
    {
      question: "What types of web hosting services does Farsight Solution provide?",
      answer: "Farsight Solution offers comprehensive hosting solutions including Shared Hosting, VPS Hosting, Dedicated Servers, Cloud Hosting, WordPress-optimized hosting, E-commerce Hosting, and Managed Hosting services tailored for businesses of all sizes and requirements."
    },
    {
      question: "How reliable is Farsight Solution's web hosting infrastructure?",
      answer: "Our hosting infrastructure guarantees 99.9% uptime with redundant systems, advanced server monitoring, load balancing, and multiple data center locations to ensure maximum reliability and performance for your website."
    },
    {
      question: "Can I upgrade my hosting plan as my business grows?",
      answer: "Absolutely! All our hosting plans are designed with scalability in mind. You can seamlessly upgrade to higher-tier plans or migrate to VPS/dedicated servers without any downtime or data migration hassles."
    },
    {
      question: "What security features are included with your hosting plans?",
      answer: "We provide comprehensive security including free SSL certificates, DDoS protection, Web Application Firewall (WAF), malware scanning & removal, daily automated backups, and advanced threat detection systems."
    },
    {
      question: "Do you offer specialized WordPress hosting?",
      answer: "Yes, our WordPress-optimized hosting includes pre-configured caching, automatic updates, staging environments, WordPress-specific security, and expert support from WordPress specialists."
    },
    {
      question: "What kind of customer support do you provide?",
      answer: "We offer 24/7/365 expert support through multiple channels including live chat, phone, email, and ticket system. Our support team consists of certified hosting professionals ready to assist you."
    }
  ];

  const hostingPlans = [
    {
      icon: Users,
      title: "Shared Hosting",
      description: "Perfect for small websites and blogs with cost-effective shared resources and easy management.",
      features: ["Unlimited Bandwidth", "100 GB SSD Storage", "Free SSL Certificate", "cPanel Control Panel", "Email Accounts"],
      price: "$2.99/month",
      image: sharedHostingImage
    },
    {
      icon: Server,
      title: "VPS Hosting",
      description: "Dedicated resources with root access for growing websites needing more control and performance.",
      features: ["2-8 GB RAM", "2-4 CPU Cores", "100 GB SSD Storage", "Full Root Access", "Free Migration"],
      price: "$19.99/month",
      image: vpsHostingImage
    },
    {
      icon: Database,
      title: "Dedicated Servers",
      description: "Complete server control for high-traffic websites and applications requiring maximum performance.",
      features: ["16-64 GB RAM", "8-16 CPU Cores", "1-2 TB SSD Storage", "Dedicated IP", "24/7 Monitoring"],
      price: "$99.99/month",
      image: dedicatedHostingImage
    },
    {
      icon: Cloud,
      title: "Cloud Hosting",
      description: "Scalable cloud infrastructure with pay-as-you-go pricing and high availability.",
      features: ["Auto Scaling", "Load Balancing", "Multiple Data Centers", "99.99% Uptime", "Instant Deployment"],
      price: "From $9.99/month",
      image: cloudHostingImage
    },
    {
      icon: Globe,
      title: "WordPress Hosting",
      description: "Optimized hosting specifically for WordPress with enhanced performance and security.",
      features: ["Pre-installed WordPress", "Automatic Updates", "Staging Environment", "WordPress Cache", "Expert Support"],
      price: "$4.99/month",
      image: wordpressHostingImage
    },
    {
      icon: Shield,
      title: "Managed Hosting",
      description: "Complete hosting management including security, updates, and optimization by our experts.",
      features: ["Proactive Monitoring", "Security Management", "Performance Optimization", "Daily Backups", "Expert Support"],
      price: "$29.99/month",
      image: sharedHostingImage
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "SSD storage, LiteSpeed servers, and advanced caching for blazing-fast website loading speeds."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Multi-layered security with DDoS protection, malware scanning, and automated backups."
    },
    {
      icon: Clock,
      title: "99.9% Uptime Guarantee",
      description: "Reliable hosting infrastructure with SLA-backed uptime guarantee and proactive monitoring."
    },
    {
      icon: Users,
      title: "24/7 Expert Support",
      description: "Round-the-clock support from hosting experts via chat, phone, and ticket system."
    }
  ];

  const technologies = {
    servers: ["LiteSpeed Web Server", "NGINX", "Apache"],
    controlPanels: ["cPanel", "Plesk", "Custom Dashboard"],
    databases: ["MySQL", "PostgreSQL", "Redis"],
    security: ["CloudLinux", "Imunify360", "SSL/TLS"],
    caching: ["LSCache", "Varnish", "Redis Cache"],
    development: ["PHP", "Python", "Node.js"]
  };

  const hostingProcess = [
    {
      step: "01",
      title: "Choose Your Plan",
      description: "Select the perfect hosting plan based on your website requirements and budget."
    },
    {
      step: "02",
      title: "Domain & Setup",
      description: "Register your domain or transfer existing one with seamless migration assistance."
    },
    {
      step: "03",
      title: "Server Configuration",
      description: "Our experts configure and optimize servers for maximum performance and security."
    },
    {
      step: "04",
      title: "Website Deployment",
      description: "Deploy your website with one-click installers or custom deployment options."
    },
    {
      step: "05",
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization to ensure optimal website performance."
    },
    {
      step: "06",
      title: "Ongoing Support",
      description: "24/7 monitoring, security updates, and expert support for your hosting environment."
    }
  ];

  return (
    <div className="web-hosting-wrapper">
      {/* Hero Section */}
      <section className="web-hosting-hero">
        <div 
          className="web-hosting-hero-banner"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.81), rgba(0, 0, 0, 0.49)), url(${webHostingHeroBanner})`
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
                  <h1 className="web-hosting-hero-title mb-4">
                    Web Hosting Solutions
                  </h1>
                  <p className="web-hosting-hero-subtitle lead mb-5">
                    High-performance, secure, and reliable web hosting with{" "}
                    <strong>Farsight Solution</strong> – your trusted partner for online presence and business growth.
                  </p>
                  <div className="web-hosting-breadcrumbs">
                    <Home size={16} className="web-hosting-breadcrumb-icon" />
                    <span className="web-hosting-breadcrumb-text">Home</span>
                    <span className="web-hosting-breadcrumb-separator">|</span>
                    <span className="web-hosting-breadcrumb-text">Web Hosting</span>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* About Section */}
      <section className="web-hosting-about py-5">
        <Container>
          <Row>
            <Col lg={8}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="web-hosting-section-title mb-4">
                  Premium Web Hosting Services by Farsight Solution
                </h2>
                <p className="web-hosting-content-text mb-4">
                  Farsight Solution delivers enterprise-grade web hosting solutions designed to power your online 
                  presence with unmatched reliability, security, and performance. Our hosting infrastructure is 
                  built on cutting-edge technology to ensure your website loads quickly and remains accessible 
                  to your visitors 24/7.
                </p>
                <p className="web-hosting-content-text mb-4">
                  Whether you're launching a personal blog, business website, or enterprise application, 
                  we provide scalable hosting solutions that grow with your business. With multiple data 
                  center locations, advanced security protocols, and expert technical support, we ensure 
                  your website performs at its best.
                </p>
                <div className="web-hosting-features">
                  <div className="web-hosting-feature-item">
                    <span>✓ 99.9% Uptime Guarantee</span>
                  </div>
                  <div className="web-hosting-feature-item">
                    <span>✓ 24/7 Expert Support</span>
                  </div>
                  <div className="web-hosting-feature-item">
                    <span>✓ Free SSL Certificates</span>
                  </div>
                  <div className="web-hosting-feature-item">
                    <span>✓ Automated Daily Backups</span>
                  </div>
                </div>
              </motion.div>
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
              <ItSolutionSidebar />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Hosting Plans Section */}
      <section className="web-hosting-plans py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="web-hosting-section-title mb-4">Our Hosting Solutions</h2>
            <p className="web-hosting-content-text lead">
              Choose from our range of high-performance hosting plans designed for every need and budget
            </p>
          </motion.div>

          <Row className="g-4">
            {hostingPlans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <Col key={index} md={6} lg={4}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="web-hosting-plan-card h-100 shadow-sm border-0">
                      <Card.Img 
                        variant="top" 
                        src={plan.image} 
                        className="web-hosting-plan-img"
                        alt={plan.title}
                      />
                      <Card.Body className="p-4">
                        <IconComponent size={40} className="web-hosting-plan-icon mb-3" />
                        <Card.Title className="web-hosting-plan-title h5 mb-3">{plan.title}</Card.Title>
                        <Card.Text className="web-hosting-plan-description mb-3">
                          {plan.description}
                        </Card.Text>
                        <div className="web-hosting-plan-price mb-3">
                          {plan.price}
                        </div>
                        <div className="web-hosting-plan-features">
                          {plan.features.map((feature, idx) => (
                            <div key={idx} className="web-hosting-plan-feature-item">
                              <CheckCircle size={16} className="web-hosting-feature-check" />
                              <span>{feature}</span>
                            </div>
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

      {/* Features Section */}
      <section className="web-hosting-features-section py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="web-hosting-section-title mb-4">Why Choose Our Hosting</h2>
            <p className="web-hosting-content-text lead">
              Enterprise-grade features that ensure your website performs at its best
            </p>
          </motion.div>

          <Row className="g-4">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Col key={index} md={6} lg={3}>
                  <Card className="web-hosting-feature-card h-100 shadow-sm border-0 text-center">
                    <Card.Body className="p-4">
                      <IconComponent size={40} className="web-hosting-feature-icon mb-3" />
                      <Card.Title className="web-hosting-feature-title h6 mb-3">{feature.title}</Card.Title>
                      <Card.Text className="web-hosting-feature-description">
                        {feature.description}
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
      <section className="web-hosting-tech py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="web-hosting-section-title mb-4">Advanced Hosting Technology</h2>
            <p className="web-hosting-content-text lead">
              Powered by cutting-edge technology stack for optimal performance and security
            </p>
          </motion.div>

          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="web-hosting-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Server size={32} className="web-hosting-tech-icon mb-3" />
                  <Card.Title className="web-hosting-tech-category h6 mb-3">Web Servers</Card.Title>
                  <div className="web-hosting-tech-list">
                    {technologies.servers.map((tech, idx) => (
                      <span key={idx} className="web-hosting-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="web-hosting-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Globe size={32} className="web-hosting-tech-icon mb-3" />
                  <Card.Title className="web-hosting-tech-category h6 mb-3">Control Panels</Card.Title>
                  <div className="web-hosting-tech-list">
                    {technologies.controlPanels.map((tech, idx) => (
                      <span key={idx} className="web-hosting-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="web-hosting-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Database size={32} className="web-hosting-tech-icon mb-3" />
                  <Card.Title className="web-hosting-tech-category h6 mb-3">Databases</Card.Title>
                  <div className="web-hosting-tech-list">
                    {technologies.databases.map((tech, idx) => (
                      <span key={idx} className="web-hosting-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="web-hosting-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Shield size={32} className="web-hosting-tech-icon mb-3" />
                  <Card.Title className="web-hosting-tech-category h6 mb-3">Security</Card.Title>
                  <div className="web-hosting-tech-list">
                    {technologies.security.map((tech, idx) => (
                      <span key={idx} className="web-hosting-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="web-hosting-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Zap size={32} className="web-hosting-tech-icon mb-3" />
                  <Card.Title className="web-hosting-tech-category h6 mb-3">Caching</Card.Title>
                  <div className="web-hosting-tech-list">
                    {technologies.caching.map((tech, idx) => (
                      <span key={idx} className="web-hosting-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="web-hosting-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Code size={32} className="web-hosting-tech-icon mb-3" />
                  <Card.Title className="web-hosting-tech-category h6 mb-3">Development</Card.Title>
                  <div className="web-hosting-tech-list">
                    {technologies.development.map((tech, idx) => (
                      <span key={idx} className="web-hosting-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Setup Process */}
      <section className="web-hosting-process py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="web-hosting-section-title mb-4">Simple Setup Process</h2>
            <p className="web-hosting-content-text lead">
              Get your website online quickly with our streamlined hosting setup process
            </p>
          </motion.div>

          <Row className="g-4">
            {hostingProcess.map((process, index) => (
              <Col key={index} md={6} lg={4}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="web-hosting-process-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="web-hosting-process-step-number mb-3">{process.step}</div>
                      <Card.Title className="web-hosting-process-title h5 mb-3">{process.title}</Card.Title>
                      <Card.Text className="web-hosting-process-description">
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
      <section className="web-hosting-faq py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="web-hosting-section-title mb-4">Frequently Asked Questions</h2>
            <p className="web-hosting-content-text lead">
              Get answers to common questions about our web hosting services
            </p>
          </motion.div>
          <FaqAccordion items={faqItems} />
        </Container>
      </section>
    </div>
  );
};

export default WebHosting;