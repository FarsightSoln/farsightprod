"use client";

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Home, Code, Database, Shield, Zap, Users, TrendingUp, Globe, Smartphone, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import FaqAccordion from "../../components/ITsolutions/FaqAccordion";
import "../../assets/scss/pages/website-development.scss";

// Replace the import statements with these if using online images
const websiteHeroBanner = "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const customWebsiteImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const webDevelopmentImage = "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const ecommerceImage = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const cmsImage = "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const responsiveDesignImage = "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const websiteProcessImage = "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

const WebsiteDevelopment = () => {
  const faqItems = [
    {
      question: "What Website Development Services Does Farsight SolutionsOffer?",
      answer:
        "Farsight Solutionsprovides comprehensive website development services including custom website design, e-commerce solutions, CMS development, responsive web design, and website maintenance. We create visually appealing, user-friendly, and high-performing websites that drive business growth.",
    },
    {
      question: "How long does a Website Development Project Take?",
      answer:
        "The timeline depends on project complexity. Basic brochure websites may take 2-4 weeks, while complex e-commerce platforms can take 6-12 weeks. We provide a detailed project timeline after the initial consultation and requirement analysis.",
    },
    {
      question: "Which Technologies Does Farsight SolutionsUse for Web Development?",
      answer:
        "Our team works with modern technologies including React, Angular, Vue.js, HTML5, CSS3, JavaScript, PHP, WordPress, Shopify, and various CMS platforms. We choose the best technology stack based on your specific requirements.",
    },
    {
      question: "Do You Provide Website Maintenance & Support?",
      answer:
        "Yes, we offer comprehensive website maintenance packages including security updates, content updates, performance optimization, and technical support to ensure your website remains secure and up-to-date.",
    },
  ];

  const services = [
    {
      icon: Code,
      title: "Custom Website Development",
      description: "Tailored website solutions designed specifically for your business needs and brand identity.",
      features: ["Responsive Design", "Custom Functionality", "SEO Optimized"],
      image: customWebsiteImage
    },
    {
      icon: Globe,
      title: "E-commerce Development",
      description: "Feature-rich online stores with secure payment gateways and inventory management.",
      features: ["Payment Integration", "Product Management", "Order Tracking"],
      image: ecommerceImage
    },
    {
      icon: Database,
      title: "CMS Development",
      description: "Content Management Systems that empower you to manage your website content easily.",
      features: ["WordPress", "Custom CMS", "User Management"],
      image: cmsImage
    },
    {
      icon: Smartphone,
      title: "Responsive Web Design",
      description: "Websites that look and function perfectly across all devices and screen sizes.",
      features: ["Mobile-First", "Cross-Device Testing", "Fast Loading"],
      image: responsiveDesignImage
    },
    {
      icon: Cloud,
      title: "Website Redesign",
      description: "Modernize your existing website with improved design, functionality and user experience.",
      features: ["UI/UX Refresh", "Performance Boost", "Content Reorganization"],
      image: webDevelopmentImage
    },
    {
      icon: Shield,
      title: "Website Maintenance & Support",
      description: "Ongoing maintenance, security updates, and technical support for your website.",
      features: ["Security Updates", "Backup Services", "Performance Monitoring"],
      image: customWebsiteImage
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Online Presence",
      description: "Establish a strong digital footprint and reach more customers with a professional website."
    },
    {
      icon: Users,
      title: "Enhanced User Experience",
      description: "Deliver seamless browsing experiences that keep visitors engaged and convert them into customers."
    },
    {
      icon: Shield,
      title: "Improved Security",
      description: "Implement robust security measures to protect your website and customer data."
    },
    {
      icon: Zap,
      title: "Better Search Rankings",
      description: "Optimized websites that rank higher in search engines and attract more organic traffic."
    }
  ];

  const technologies = {
    frontend: ["React", "Angular", "Vue.js", "HTML5/CSS3"],
    backend: ["Node.js", "PHP", "Python", "Laravel"],
    cms: ["WordPress", "Shopify", "Magento", "Drupal"],
    database: ["MySQL", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Webpack", "Figma", "Adobe XD"]
  };

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Comprehensive analysis of business goals, target audience, and technical requirements."
    },
    {
      step: "02",
      title: "UI/UX Design",
      description: "Creating wireframes, mockups, and prototypes for optimal user experience and visual appeal."
    },
    {
      step: "03",
      title: "Development & Coding",
      description: "Agile development with focus on clean code, functionality, and cross-browser compatibility."
    },
    {
      step: "04",
      title: "Content Integration",
      description: "Adding and optimizing content, images, and multimedia elements for maximum impact."
    },
    {
      step: "05",
      title: "Testing & Quality",
      description: "Comprehensive testing including functionality, performance, security, and user acceptance."
    },
    {
      step: "06",
      title: "Launch & Support",
      description: "Deployment to live server and providing ongoing maintenance and support services."
    }
  ];

  const industries = [
    "Corporate Websites",
    "E-commerce Stores",
    "Portfolio Sites",
    "Educational Platforms",
    "Healthcare Portals",
    "Real Estate Listings",
    "Restaurant & Food",
    "Non-Profit Organizations"
  ];

  return (
    <div className="website-dev-wrapper">
      {/* Hero Section */}
      <section className="website-dev-hero">
        <div 
          className="website-dev-hero-banner"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.81), rgba(0, 0, 0, 0.49)), url(${websiteHeroBanner})`
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
                  <h1 className="website-dev-hero-title mb-4">
                    Website Development
                  </h1>
                  <p className="website-dev-hero-subtitle lead mb-5">
                    Create stunning, responsive, and high-performing websites with{" "}
                    <strong>Farsight Solution</strong> – your trusted partner for digital presence and online growth.
                  </p>
                  <div className="website-dev-breadcrumbs">
                    <Home size={16} className="website-dev-breadcrumb-icon" />
                    <span className="website-dev-breadcrumb-text">Home</span>
                    <span className="website-dev-breadcrumb-separator">|</span>
                    <span className="website-dev-breadcrumb-text">Website Development</span>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* About Section */}
      <section className="website-dev-about py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="website-dev-section-title mb-4">
                  Professional Website Development Company
                </h2>
                <p className="website-dev-content-text mb-4">
                  Farsight Solutions a leading website development company specializing in creating 
                  innovative, responsive, and high-converting websites for businesses of all sizes. 
                  Whether you need a corporate website, e-commerce platform, or custom web application, 
                  we deliver solutions that enhance your online presence and drive business growth.
                </p>
                <p className="website-dev-content-text mb-4">
                  With expertise across various industries and technologies, our team of designers, 
                  developers, and digital strategists ensures your website not only looks great but 
                  also performs exceptionally well across all devices and platforms.
                </p>
                <div className="website-dev-features">
                  <div className="website-dev-feature-item">
                    <span>✓ Responsive & Mobile-Friendly</span>
                  </div>
                  <div className="website-dev-feature-item">
                    <span>✓ SEO Optimized</span>
                  </div>
                  <div className="website-dev-feature-item">
                    <span>✓ Fast Loading Speed</span>
                  </div>
                  <div className="website-dev-feature-item">
                    <span>✓ Ongoing Support & Maintenance</span>
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
                  src={websiteProcessImage}
                  alt="Website Development Process"
                  className="website-dev-about-img rounded-3 shadow-lg"
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="website-dev-services py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="website-dev-section-title mb-4">Our Website Development Services</h2>
            <p className="website-dev-content-text lead">
              Comprehensive web solutions tailored to meet your unique business requirements and objectives
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
                    <Card className="website-service-card h-100 shadow-sm border-0">
                      <Card.Img 
                        variant="top" 
                        src={service.image} 
                        className="website-service-img"
                        alt={service.title}
                      />
                      <Card.Body className="p-4">
                        <IconComponent size={40} className="website-service-icon mb-3" />
                        <Card.Title className="website-service-title h5 mb-3">{service.title}</Card.Title>
                        <Card.Text className="website-service-description mb-3">
                          {service.description}
                        </Card.Text>
                        <div className="website-service-features">
                          {service.features.map((feature, idx) => (
                            <span key={idx} className="website-service-feature-tag">
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
      <section className="website-dev-benefits py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="website-dev-section-title mb-4">Business Benefits</h2>
            <p className="website-dev-content-text lead">
              Transform your online presence with professional website solutions that deliver measurable results
            </p>
          </motion.div>

          <Row className="g-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Col key={index} md={6} lg={3}>
                  <Card className="website-benefit-card h-100 shadow-sm border-0 text-center">
                    <Card.Body className="p-4">
                      <IconComponent size={40} className="website-benefit-icon mb-3" />
                      <Card.Title className="website-benefit-title h6 mb-3">{benefit.title}</Card.Title>
                      <Card.Text className="website-benefit-description">
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
      <section className="website-dev-tech py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="website-dev-section-title mb-4">Technology Stack</h2>
            <p className="website-dev-content-text lead">
              We leverage cutting-edge technologies to build robust and scalable website solutions
            </p>
          </motion.div>

          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="website-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Code size={32} className="website-tech-icon mb-3" />
                  <Card.Title className="website-tech-category h6 mb-3">Frontend</Card.Title>
                  <div className="website-tech-list">
                    {technologies.frontend.map((tech, idx) => (
                      <span key={idx} className="website-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="website-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Database size={32} className="website-tech-icon mb-3" />
                  <Card.Title className="website-tech-category h6 mb-3">Backend</Card.Title>
                  <div className="website-tech-list">
                    {technologies.backend.map((tech, idx) => (
                      <span key={idx} className="website-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="website-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Globe size={32} className="website-tech-icon mb-3" />
                  <Card.Title className="website-tech-category h6 mb-3">CMS Platforms</Card.Title>
                  <div className="website-tech-list">
                    {technologies.cms.map((tech, idx) => (
                      <span key={idx} className="website-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="website-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Shield size={32} className="website-tech-icon mb-3" />
                  <Card.Title className="website-tech-category h6 mb-3">Database</Card.Title>
                  <div className="website-tech-list">
                    {technologies.database.map((tech, idx) => (
                      <span key={idx} className="website-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="website-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Cloud size={32} className="website-tech-icon mb-3" />
                  <Card.Title className="website-tech-category h6 mb-3">Development Tools</Card.Title>
                  <div className="website-tech-list">
                    {technologies.tools.map((tech, idx) => (
                      <span key={idx} className="website-tech-tag">{tech}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4}>
              <Card className="website-tech-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">
                  <Users size={32} className="website-tech-icon mb-3" />
                  <Card.Title className="website-tech-category h6 mb-3">Website Types</Card.Title>
                  <div className="website-tech-list">
                    {industries.slice(0, 4).map((industry, idx) => (
                      <span key={idx} className="website-tech-tag">{industry}</span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Development Process */}
      <section className="website-dev-process py-5">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="website-dev-section-title mb-4">Our Development Process</h2>
            <p className="website-dev-content-text lead">
              A structured approach ensuring quality, transparency, and successful project delivery
            </p>
          </motion.div>

          <Row className="g-4">
            {developmentProcess.map((process, index) => (
              <Col key={index} md={6} lg={4}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="website-process-card h-100 border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="website-process-step-number mb-3">{process.step}</div>
                      <Card.Title className="website-process-title h5 mb-3">{process.title}</Card.Title>
                      <Card.Text className="website-process-description">
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
      <section className="website-dev-faq py-5 bg-light">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-5"
          >
            <h2 className="website-dev-section-title mb-4">Frequently Asked Questions</h2>
            <p className="website-dev-content-text lead">
              Get answers to common questions about our website development services
            </p>
          </motion.div>
          <FaqAccordion items={faqItems} />
        </Container>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;