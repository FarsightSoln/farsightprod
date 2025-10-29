"use client";

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  Home,
  BarChart2,
  Globe,
  FileText,
  Lightbulb,
  Handshake,
  TrendingUp,
  Users,
} from 'lucide-react';
import '../../assets/scss/pages/about-farsight.scss';

const AboutFarsight = () => {
  const services = [
    {
      title: 'Company Registration',
      description: 'Private Limited, OPC, LLP, Partnership, Section 8, NGO registration services.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop',
      link: '/contact-us'
    },
    {
      title: 'Compliance & Certifications',
      description: 'MSME registration, Startup India, ISO, GST, FSSAI, IEC, trademarking services.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=200&fit=crop',
      link: '/contact-us'
    },
    {
      title: 'Funding Assistance',
      description: 'Seed funding, working capital, CGTMSE, PMEGP, MUDRA, MSME schemes support.',
      image: 'https://img.freepik.com/free-vector/hand-government-partners-giving-grants-business-tiny-people-receiving-money-searching-financial-assistance-protection-flat-vector-illustration-subsidy-finance-investment-concept_74855-21148.jpg',
      link: '/contact-us'
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your specific business requirements.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop',
      link: '/contact-us'
    },
    {
      title: 'App Development',
      description: 'Mobile and web applications built with modern, scalable technologies.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop',
      link: '/contact-us'
    },
    {
      title: 'Website Development',
      description: 'High-performing websites that engage visitors and drive conversions.',
      image: 'https://miro.medium.com/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg',
      link: '/contact-us'
    },
    {
      title: 'Digital Marketing',
      description: 'SEO, social media, and data-driven campaigns to expand your brand presence.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=200&fit=crop',
      link: '/contact-us'
    },
    {
      title: 'CRM Solutions',
      description: 'Tailored CRM systems to streamline sales and enhance customer experience.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop',
      link: '/contact-us'
    }
  ];

  const coreValues = [
    {
      icon: <Handshake size={28} />,
      title: 'Integrity',
      description: 'We act honestly, clearly and ethically in every engagement. Transparency and trust form the foundation of all our client relationships.'
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Excellence',
      description: 'We deliver high-quality solutions and continuously improve our services to ensure reliable, scalable solutions that provide consistent value.'
    },
    {
      icon: <Users size={28} />,
      title: 'Collaboration',
      description: 'We work with you, not merely for you. Your success is our success, and we believe the best solutions emerge from shared knowledge.'
    },
    {
      icon: <Lightbulb size={28} />,
      title: 'Innovation',
      description: 'We embrace change, leverage technology and challenge the status quo to deliver forward-thinking solutions that keep our clients ahead.'
    },
    {
      icon: <FileText size={28} />,
      title: 'Empowerment',
      description: 'We enable you to make informed decisions, thrive independently and lead forward with the knowledge and tools needed for success.'
    },
    {
      icon: <Globe size={28} />,
      title: 'Client-First',
      description: 'Your goals drive our strategy. We prioritize our clients\' success, building long-term partnerships based on trust and measurable results.'
    }
  ];

  return (
    <div className="about-farsight-page">
      {/* Hero Section with Background Image */}
      <section className="about-farsight-hero">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="about-farsight-hero-content">
                <h1 className="about-farsight-hero-title">
                  Know More About <br /> Our Company
                </h1>
                <div className="about-farsight-breadcrumbs">
                  <Home size={16} className="about-farsight-breadcrumb-icon" />
                  <span className="about-farsight-breadcrumb-text">Home</span>
                  <span className="about-farsight-breadcrumb-separator">|</span>
                  <span className="about-farsight-breadcrumb-text">About Us</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Overview Section with Single Image */}
      <section className="about-farsight-company-overview">
        <Container>
          <Row className="g-4 align-items-center">
            <Col lg={6}>
              <div className="about-farsight-single-image-container">
                <img
                  src="https://img.freepik.com/free-photo/about-us-information-service-sharing-join-concept_53876-124056.jpg?semt=ais_hybrid&w=740&q=80"
                  alt="Farsight Solutions Team Collaboration"
                  className="about-farsight-single-image"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-farsight-company-overview-content">
                <p className="about-farsight-section-subtitle">ABOUT OUR COMPANY</p>
                <h2 className="about-farsight-section-title">
                  Your Strategic Partner for Business Growth and Digital Transformation
                </h2>
                <p className="about-farsight-content-text">
                  Farsight Solutions a strategic partner for entrepreneurs, startups, MSMEs and growing enterprises. 
                  We combine deep business-consulting expertise with cutting-edge IT solutions to help you from 
                  incorporation and compliance through to growth, digital transformation and funding. Our mission is 
                  to simplify the complex, make every process transparent and deliver meaningful results.
                </p>
                <p className="about-farsight-content-text">
                  Based in India, we serve clients nationally and globally – offering business-consulting services 
                  domestically alongside IT solutions to clients across the world. Our multidisciplinary team brings 
                  together business strategists, legal-compliance specialists and technology professionals to deliver 
                  integrated support.
                </p>
                <div className="about-farsight-stats-row">
                  <div className="about-farsight-stat-box">
                    <p className="about-farsight-stat-label">BUSINESSES SUPPORTED</p>
                    <p className="about-farsight-stat-value">100+</p>
                  </div>
                  <div className="about-farsight-stat-box">
                    <p className="about-farsight-stat-label">CLIENT SATISFACTION</p>
                    <p className="about-farsight-stat-value">98%</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Rest of the sections remain the same */}
      <section className="about-farsight-vmp-section">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <div className="about-farsight-vmp-card">
                <div className="about-farsight-vmp-icon-wrapper">
                  <BarChart2 size={48} className="about-farsight-vmp-icon" />
                </div>
                <h3 className="about-farsight-vmp-title">Vision</h3>
                <p className="about-farsight-content-text">
                  To be the trusted growth partner for organisations across the globe – where business ideas become 
                  registered entities, processes become streamlined operations and ambitions become sustainable 
                  enterprises.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="about-farsight-vmp-card">
                <div className="about-farsight-vmp-icon-wrapper">
                  <FileText size={48} className="about-farsight-vmp-icon" />
                </div>
                <h3 className="about-farsight-vmp-title">Mission</h3>
                <p className="about-farsight-content-text">
                  To empower businesses to register, comply, fund and scale with confidence by delivering seamless 
                  consultancy and IT services that are smart, clear and outcome-oriented.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="about-farsight-vmp-card">
                <div className="about-farsight-vmp-icon-wrapper">
                  <Globe size={48} className="about-farsight-vmp-icon" />
                </div>
                <h3 className="about-farsight-vmp-title">Purpose</h3>
                <p className="about-farsight-content-text">
                  We exist to bridge the gap between ambition and execution. Our purpose is to enable businesses to 
                  grow without the roadblocks of registration delays, compliance burdens or technology bottlenecks.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about-farsight-services-section">
        <Container>
          <div className="text-center mb-5">
            <p className="about-farsight-section-subtitle">OUR SERVICES</p>
            <h2 className="about-farsight-section-title">
              Comprehensive Business Solutions
            </h2>
          </div>

          <Row className="g-4">
            {services.map((service, index) => (
              <Col key={index} lg={3} md={6} sm={6}>
                <div className="about-farsight-service-card">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="about-farsight-service-image"
                  />
                  <div className="about-farsight-service-body">
                    <h5 className="about-farsight-service-title">{service.title}</h5>
                    <p className="about-farsight-service-description">{service.description}</p>
                    <Link to={service.link} className="about-farsight-explore-btn">
                      <span>Learn More</span>
                      <span>Explore →</span>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="about-farsight-values-section">
        <Container>
          <div className="text-center mb-5">
            <p className="about-farsight-section-subtitle">OUR VALUES</p>
            <h2 className="about-farsight-section-title">
              Guiding Principles That Define Us
            </h2>
          </div>

          <Row className="g-4">
            {coreValues.map((value, index) => (
              <Col key={index} lg={4} md={6}>
                <div className="about-farsight-value-card">
                  <div className="about-farsight-value-icon">
                    {value.icon}
                  </div>
                  <h5 className="about-farsight-value-title">{value.title}</h5>
                  <p className="about-farsight-value-text">{value.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutFarsight;