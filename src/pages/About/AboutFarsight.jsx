"use client";

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  Home,
  Building,
  BarChart2,
  Globe,
  FileText,
  Users,
  Lightbulb,
  Handshake,
  TrendingUp,
  MapPin,
} from 'lucide-react';
import '../../assets/scss/pages/about-farsight.scss'; 

const AboutFarsight = () => {
  return (
    <div className="about-farsight-page">
      {/* Hero Section */}
      <Container fluid className="about-farsight-hero">
        <Row className="w-100 align-items-center justify-content-between">
          <Col md={6} className="about-farsight-hero-content">
            <h1 className="about-farsight-hero-title">
              Know More About <br /> Our Company
            </h1>
            <div className="about-farsight-breadcrumbs">
              <Home size={16} className="about-farsight-breadcrumb-icon" />
              <span className="about-farsight-breadcrumb-text">Home</span>
              <span className="about-farsight-breadcrumb-separator">|</span>
              <span className="about-farsight-breadcrumb-text">About Us</span>
            </div>
          </Col>
          <Col md={6} className="about-farsight-hero-image-container">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="About Farsight Solution - Strategic Business and IT Partner"
              width="500"
              height="300"
              className="about-farsight-hero-image"
            />
          </Col>
        </Row>
      </Container>

      {/* Company Overview Section */}
      <Container className="about-farsight-company-overview">
        <Row className="w-100 g-4">
          <Col lg={6} className="about-farsight-company-overview-left">
            <div className="about-farsight-image-grid">
              <div className="about-farsight-image-item">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Farsight Solution Team Collaboration"
                  width="300"
                  height="200"
                  className="about-farsight-grid-image"
                />
                <div className="about-farsight-experience-box">
                  <span className="about-farsight-experience-number">5+</span>
                  <span className="about-farsight-experience-text">Years Experience</span>
                </div>
              </div>
              <div className="about-farsight-image-item">
                <img
                  src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Farsight Solution Business Consultation"
                  width="250"
                  height="150"
                  className="about-farsight-grid-image"
                />
              </div>
            </div>
          </Col>
          <Col lg={6} className="about-farsight-company-overview-right ps-md-5">
            <p className="about-farsight-section-subtitle">ABOUT OUR COMPANY</p>
            <h2 className="about-farsight-section-title">
              Your Strategic Partner for Business Growth and Digital Transformation
            </h2>
            <p className="about-farsight-content-text">
              Farsight Solution is a strategic partner for entrepreneurs, startups, MSMEs and growing enterprises. 
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
                <p className="about-farsight-stat-value">500+</p>
              </div>
              <div className="about-farsight-stat-box">
                <p className="about-farsight-stat-label">CLIENT SATISFACTION</p>
                <p className="about-farsight-stat-value">98%</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Vision, Mission, Purpose Section */}
      <Container fluid className="about-farsight-vmp-section">
        <Row className="w-100 justify-content-around g-4">
          <Col md={3} className="about-farsight-vmp-card">
            <div className="about-farsight-vmp-icon-wrapper">
              <BarChart2 size={48} className="about-farsight-vmp-icon" />
            </div>
            <h3 className="about-farsight-vmp-title">Vision</h3>
            <p className="about-farsight-content-text">
              To be the trusted growth partner for organisations across the globe – where business ideas become 
              registered entities, processes become streamlined operations and ambitions become sustainable 
              enterprises.
            </p>
          </Col>
          <Col md={3} className="about-farsight-vmp-card">
            <div className="about-farsight-vmp-icon-wrapper">
              <FileText size={48} className="about-farsight-vmp-icon" />
            </div>
            <h3 className="about-farsight-vmp-title">Mission</h3>
            <p className="about-farsight-content-text">
              To empower businesses to register, comply, fund and scale with confidence by delivering seamless 
              consultancy and IT services that are smart, clear and outcome-oriented.
            </p>
          </Col>
          <Col md={3} className="about-farsight-vmp-card">
            <div className="about-farsight-vmp-icon-wrapper">
              <Globe size={48} className="about-farsight-vmp-icon" />
            </div>
            <h3 className="about-farsight-vmp-title">Purpose</h3>
            <p className="about-farsight-content-text">
              We exist to bridge the gap between ambition and execution. Our purpose is to enable businesses to 
              grow without the roadblocks of registration delays, compliance burdens or technology bottlenecks.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Our Comprehensive Services Section */}
      <section className="services-section py-5 bg-white">
        <div className="container text-center">
          <p className="section-subtitle text-uppercase">OUR SERVICES</p>
          <h2 className="section-title fw-bold mb-5">
            Comprehensive Business Solutions
          </h2>

          <div className="row g-5">
            {/* Business Consultancy Services */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200"
                  alt="Company Registration"
                  className="service-image card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold service-title">Company Registration</h5>
                  <p className="text-muted service-description">
                    Private Limited, OPC, LLP, Partnership, Section 8, NGO registration services.
                  </p>
                  <a href="/business-consultancy/company-registration" className="explore-btn">
                    <span>Learn More</span>
                    <span>Explore →</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
                <img
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200"
                  alt="Compliance & Certifications"
                  className="service-image card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold service-title">Compliance & Certifications</h5>
                  <p className="text-muted service-description">
                    MSME registration, Startup India, ISO, GST, FSSAI, IEC, trademarking services.
                  </p>
                  <a href="/business-consultancy/compliance-certifications" className="explore-btn">
                    <span>Learn More</span>
                    <span>Explore →</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
                <img
                  src="https://images.unsplash.com/photo-1554224154-2604ec09f10b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200"
                  alt="Funding Assistance"
                  className="service-image card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold service-title">Funding Assistance</h5>
                  <p className="text-muted service-description">
                    Seed funding, working capital, CGTMSE, PMEGP, MUDRA, MSME schemes support.
                  </p>
                  <a href="/business-consultancy/funding-assistance" className="explore-btn">
                    <span>Learn More</span>
                    <span>Explore →</span>
                  </a>
                </div>
              </div>
            </div>

            {/* IT Solutions */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200"
                  alt="Software Development"
                  className="service-image card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold service-title">Software Development</h5>
                  <p className="text-muted service-description">
                    Custom software solutions tailored to your specific business requirements.
                  </p>
                  <a href="/it-solutions/software-development" className="explore-btn">
                    <span>Learn More</span>
                    <span>Explore →</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200"
                  alt="App Development"
                  className="service-image card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold service-title">App Development</h5>
                  <p className="text-muted service-description">
                    Mobile and web applications built with modern, scalable technologies.
                  </p>
                  <a href="/it-solutions/app-development" className="explore-btn">
                    <span>Learn More</span>
                    <span>Explore →</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200"
                  alt="Website Development"
                  className="service-image card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold service-title">Website Development</h5>
                  <p className="text-muted service-description">
                    High-performing websites that engage visitors and drive conversions.
                  </p>
                  <a href="/it-solutions/website-development" className="explore-btn">
                    <span>Learn More</span>
                    <span>Explore →</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200"
                  alt="Digital Marketing"
                  className="service-image card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold service-title">Digital Marketing</h5>
                  <p className="text-muted service-description">
                    SEO, social media, and data-driven campaigns to expand your brand presence.
                  </p>
                  <a href="/it-solutions/digital-marketing" className="explore-btn">
                    <span>Learn More</span>
                    <span>Explore →</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200"
                  alt="CRM Solutions"
                  className="service-image card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="fw-bold service-title">CRM Solutions</h5>
                  <p className="text-muted service-description">
                    Tailored CRM systems to streamline sales and enhance customer experience.
                  </p>
                  <a href="/it-solutions/crm-solutions" className="explore-btn">
                    <span>Learn More</span>
                    <span>Explore →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <Container fluid className="core-values-section text-center">
        <p className="section-subtitle">OUR VALUES</p>
        <h2 className="section-title fw-bold mb-5">Guiding Principles That Define Us</h2>
        <div className="container">
          <Row className="g-4 justify-content-center">
            <Col lg={4} md={6}>
              <div className="value-card">
                <div className="value-icon">
                  <Handshake size={28} />
                </div>
                <h5 className="value-title">Integrity</h5>
                <p className="value-text">
                  We act honestly, clearly and ethically in every engagement. Transparency and trust 
                  form the foundation of all our client relationships.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="value-card">
                <div className="value-icon">
                  <TrendingUp size={28} />
                </div>
                <h5 className="value-title">Excellence</h5>
                <p className="value-text">
                  We deliver high-quality solutions and continuously improve our services to ensure 
                  reliable, scalable solutions that provide consistent value.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="value-card">
                <div className="value-icon">
                  <Users size={28} />
                </div>
                <h5 className="value-title">Collaboration</h5>
                <p className="value-text">
                  We work with you, not merely for you. Your success is our success, and we believe 
                  the best solutions emerge from shared knowledge.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="value-card">
                <div className="value-icon">
                  <Lightbulb size={28} />
                </div>
                <h5 className="value-title">Innovation</h5>
                <p className="value-text">
                  We embrace change, leverage technology and challenge the status quo to deliver 
                  forward-thinking solutions that keep our clients ahead.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="value-card">
                <div className="value-icon">
                  <FileText size={28} />
                </div>
                <h5 className="value-title">Empowerment</h5>
                <p className="value-text">
                  We enable you to make informed decisions, thrive independently and lead forward 
                  with the knowledge and tools needed for success.
                </p>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="value-card">
                <div className="value-icon">
                  <Globe size={28} />
                </div>
                <h5 className="value-title">Client-First</h5>
                <p className="value-text">
                  Your goals drive our strategy. We prioritize our clients' success, building 
                  long-term partnerships based on trust and measurable results.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Statistics Section */}
      <Container className="about-farsight-stats-section">
        <Row className="w-100 justify-content-around g-4">
          <Col md={3} className="about-farsight-stat-item">
            <div className="about-farsight-stat-icon-wrapper">
              <Building size={64} className="about-farsight-stat-large-icon" />
            </div>
            <p className="about-farsight-stat-large-number">500+</p>
            <p className="about-farsight-stat-description">BUSINESSES SUPPORTED</p>
          </Col>
          <Col md={3} className="about-farsight-stat-item">
            <div className="about-farsight-stat-icon-wrapper">
              <Users size={64} className="about-farsight-stat-large-icon" />
            </div>
            <p className="about-farsight-stat-large-number">50+</p>
            <p className="about-farsight-stat-description">CERTIFIED CONSULTANTS</p>
          </Col>
          <Col md={3} className="about-farsight-stat-item">
            <div className="about-farsight-stat-icon-wrapper">
              <MapPin size={64} className="about-farsight-stat-large-icon" />
            </div>
            <p className="about-farsight-stat-large-number">5+</p>
            <p className="about-farsight-stat-description">OPERATIONAL CENTERS</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutFarsight;