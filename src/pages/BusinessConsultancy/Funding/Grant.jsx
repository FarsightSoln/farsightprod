"use client"
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Accordion, Badge } from "react-bootstrap";
import { CheckCircle, ArrowRight, Shield, TrendingUp, Users, Target, FileText, Award, Zap, Building } from "lucide-react";

// // Import images
// import grantHeroBanner from "../../../assets/images/grant-hero-banner.jpg";
// import smallBusinessGrantImage from "../../../assets/images/small-business-grant.jpg";
// import creditGuaranteeImage from "../../../assets/images/credit-guarantee.jpg";
// import businessGrantImage from "../../../assets/images/business-grant.jpg";
// import homeownerGrantImage from "../../../assets/images/homeowner-grant.jpg";
// import womenEntrepreneurImage from "../../../assets/images/women-entrepreneur.jpg";
// import minorityGrantImage from "../../../assets/images/minority-grant.jpg";
// import technologyInnovationImage from "../../../assets/images/technology-innovation.jpg";
// import sustainableBusinessImage from "../../../assets/images/sustainable-business.jpg";
// import exportPromotionImage from "../../../assets/images/export-promotion.jpg";
// import skillDevelopmentImage from "../../../assets/images/skill-development.jpg";
// import infrastructureImage from "../../../assets/images/infrastructure.jpg";
// import marketingBrandImage from "../../../assets/images/marketing-brand.jpg";
// import noRepaymentImage from "../../../assets/images/no-repayment.jpg";
// import innovationGrowthImage from "../../../assets/images/innovation-growth.jpg";
// import communityDevelopmentImage from "../../../assets/images/community-development.jpg";
// import competitiveAdvantageImage from "../../../assets/images/competitive-advantage.jpg";
// import financialBurdenImage from "../../../assets/images/financial-burden.jpg";
// import mentorshipResourcesImage from "../../../assets/images/mentorship-resources.jpg";
// import grantProcessImage from "../../../assets/images/grant-process.jpg";

// Replace the import statements with these if using online images
const grantHeroBanner = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const smallBusinessGrantImage = "https://images.unsplash.com/photo-1551836026-d5cbc2f4c4b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const creditGuaranteeImage = "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const businessGrantImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const homeownerGrantImage = "https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const womenEntrepreneurImage = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const minorityGrantImage = "https://images.unsplash.com/photo-1565689228866-1d7db59f6bad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const technologyInnovationImage = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const sustainableBusinessImage = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const exportPromotionImage = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const skillDevelopmentImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const infrastructureImage = "https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const marketingBrandImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const noRepaymentImage = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const innovationGrowthImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const communityDevelopmentImage = "https://images.unsplash.com/photo-1563010047-9bb6e0c6aff6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const competitiveAdvantageImage = "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const financialBurdenImage = "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const mentorshipResourcesImage = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const grantProcessImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";


import "../../../assets/scss/pages/grant.scss";

const Grant = () => {
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [activeGrantTab, setActiveGrantTab] = useState("all")

  const grantFeatures = [
    {
      icon: Shield,
      title: "No Repayment",
      description: "Grants don't need to be repaid"
    },
    {
      icon: Award,
      title: "Non-Dilutive",
      description: "Keep 100% ownership of your business"
    },
    {
      icon: Zap,
      title: "Quick Processing",
      description: "Faster approval than traditional loans"
    },
    {
      icon: Users,
      title: "Mentorship Included",
      description: "Access to government resources & guidance"
    }
  ]

const grantTypes = [
  {
    id: 1,
    amount: "Up to ₹1,00,000",
    title: "Government Grants for Small Businesses",
    description: "Ideal for startups and small enterprises looking to establish their foundation with government support.",
    image: smallBusinessGrantImage,
    features: ["No repayment", "Up to ₹1L", "Startup focused"],
    badge: "Startup",
    category: "Small Business"
  },
  {
    id: 2,
    amount: "Up to ₹5,00,000",
    title: "Government Credit Guarantee Schemes",
    description: "Collateral-free loans backed by government guarantee for MSMEs seeking working capital.",
    image: creditGuaranteeImage,
    features: ["Collateral-free", "Guaranteed", "Working capital"],
    badge: "Guaranteed",
    category: "MSME"
  },
  {
    id: 3,
    amount: "Up to ₹10,00,000",
    title: "Government Business Grants",
    description: "Offered to established businesses for expansion, innovation, and market development.",
    image: businessGrantImage,
    features: ["Expansion", "Innovation", "Market development"],
    badge: "Growth",
    category: "Business"
  },
  {
    id: 4,
    amount: "Up to ₹15,00,000",
    title: "Government Grants for Homeowners",
    description: "Support for home-based businesses and entrepreneurs starting from home.",
    image: homeownerGrantImage,
    features: ["Home-based", "Flexible", "Remote work"],
    badge: "Home Business",
    category: "Home-Based"
  },
  {
    id: 5,
    amount: "Up to ₹20,00,000",
    title: "Government Grants for Women Entrepreneurs",
    description: "Special schemes and subsidies for women-led businesses and startups.",
    image: womenEntrepreneurImage,
    features: ["Women-led", "Subsidized", "Training"],
    badge: "Women",
    category: "Women"
  },
  {
    id: 6,
    amount: "Up to ₹25,00,000",
    title: "Government Grants for Minorities",
    description: "Dedicated funding and support for minority-owned enterprises.",
    image: minorityGrantImage,
    features: ["Minority-owned", "Inclusive", "Community"],
    badge: "Inclusive",
    category: "Minority"
  },
];

const grantPurposes = [
  {
    id: 1,
    amount: "Up to ₹2,00,000",
    title: "Technology & Innovation",
    description: "Grants for businesses investing in technology, R&D, and innovation.",
    image: technologyInnovationImage,
    category: "Technology"
  },
  {
    id: 2,
    amount: "Up to ₹3,00,000",
    title: "Sustainable Business & Green Initiatives",
    description: "Support for eco-friendly businesses and sustainable practices.",
    image: sustainableBusinessImage,
    category: "Sustainability"
  },
  {
    id: 3,
    amount: "Up to ₹4,00,000",
    title: "Export Promotion & International Trade",
    description: "Grants to help businesses expand internationally and boost exports.",
    image: exportPromotionImage,
    category: "Export"
  },
  {
    id: 4,
    amount: "Up to ₹5,00,000",
    title: "Skill Development & Training",
    description: "Funding for employee training and skill enhancement programs.",
    image: skillDevelopmentImage,
    category: "Training"
  },
  {
    id: 5,
    amount: "Up to ₹6,00,000",
    title: "Infrastructure Development",
    description: "Support for building or upgrading business infrastructure.",
    image: infrastructureImage,
    category: "Infrastructure"
  },
  {
    id: 6,
    amount: "Up to ₹7,00,000",
    title: "Marketing & Brand Building",
    description: "Grants for marketing campaigns and brand development initiatives.",
    image: marketingBrandImage,
    category: "Marketing"
  },
];

const grantBenefits = [
  {
    id: 1,
    amount: "Up to ₹1,50,000",
    title: "No Repayment Obligations",
    description: "Grants don't need to be repaid, unlike loans, making them ideal for startups.",
    image: noRepaymentImage,
    icon: Shield
  },
  {
    id: 2,
    amount: "Up to ₹2,50,000",
    title: "Encourage Innovation and Growth",
    description: "Grants fuel business innovation, expansion, and market competitiveness.",
    image: innovationGrowthImage,
    icon: TrendingUp
  },
  {
    id: 3,
    amount: "Up to ₹3,50,000",
    title: "Community & Job Development",
    description: "Grants support job creation and community development initiatives.",
    image: communityDevelopmentImage,
    icon: Users
  },
  {
    id: 4,
    amount: "Up to ₹4,50,000",
    title: "Competitive Advantage",
    description: "Access to capital gives businesses a competitive edge in their market.",
    image: competitiveAdvantageImage,
    icon: Target
  },
  {
    id: 5,
    amount: "Up to ₹5,50,000",
    title: "Reduced Financial Burden",
    description: "Lower financial pressure allows businesses to focus on growth and operations.",
    image: financialBurdenImage,
    icon: Building
  },
  {
    id: 6,
    amount: "Up to ₹6,50,000",
    title: "Access to Mentorship & Resources",
    description: "Many grant programs include mentorship, training, and networking opportunities.",
    image: mentorshipResourcesImage,
    icon: Award
  },
];

  const processSteps = [
    {
      step: 1,
      title: "Research & Identify",
      description: "Find grants matching your business type and needs"
    },
    {
      step: 2,
      title: "Eligibility Check",
      description: "Verify requirements and prepare documentation"
    },
    {
      step: 3,
      title: "Application Preparation",
      description: "Complete forms and create compelling proposals"
    },
    {
      step: 4,
      title: "Submission & Follow-up",
      description: "Submit application and track progress"
    },
    {
      step: 5,
      title: "Approval & Disbursement",
      description: "Receive grant approval and funds"
    }
  ]

  const faqs = [
    {
      id: 1,
      question: "What is a government grant?",
      answer: "A government grant is financial assistance provided by the government to businesses, individuals, or organizations for specific purposes without the requirement of repayment.",
    },
    {
      id: 2,
      question: "How do I check if I'm eligible for government grants?",
      answer: "Eligibility depends on your business type, size, location, and the specific grant scheme. Contact our experts for a personalized eligibility assessment.",
    },
    {
      id: 3,
      question: "Are there government grants for new businesses?",
      answer: "Yes, there are several government grants specifically designed for startups and new businesses, including Startup India schemes and PMEGP.",
    },
    {
      id: 4,
      question: "How do I apply for government grants for homeowners?",
      answer: "Home-based businesses can apply through various schemes. We provide end-to-end support from application to approval.",
    },
    {
      id: 5,
      question: "How long does the government grant approval process take?",
      answer: "The approval timeline varies by scheme, typically ranging from 2-6 months. Our team expedites the process with proper documentation.",
    },
  ]

  const supportedAreas = [
    "Research and Development",
    "Energy Efficiency",
    "Community Development",
    "Business Expansion",
    "Technology Innovation",
    "Export Promotion",
    "Skill Development",
    "Green Initiatives"
  ]

  return (
    <div className="grant-wrapper">
      {/* Hero Section */}
      <section className="grant-hero">
        <div 
          className="grant-hero-banner"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.81), rgba(0, 0, 0, 0.49)), url(${grantHeroBanner})`
          }}
        >
          <Container>
            <Row className="align-items-center min-vh-60">
              <Col lg={10} className="mx-auto text-center text-white">
                <Badge bg="warning" text="dark" className="mb-3 grant-hero-badge">
                  🎯 No Repayment Required
                </Badge>
                <h1 className="grant-hero-title mb-4">
                  Government Grants
                </h1>
                <p className="grant-hero-subtitle lead mb-4">
                  Securing Government Funding for MSMEs & Start-ups
                </p>
                <p className="grant-hero-description mb-5">
                  Access non-repayable government grants to fuel your business growth. Unlike loans, grants provide 
                  capital without repayment obligations, making them ideal for startups and growing businesses.
                </p>
                
                <div className="grant-features-grid mb-5">
                  {grantFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="grant-feature-item">
                        <IconComponent size={24} className="grant-feature-icon" />
                        <div>
                          <h6 className="grant-feature-title">{feature.title}</h6>
                          <p className="grant-feature-desc">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="grant-hero-buttons">
                  <Button className="grant-btn grant-btn-primary btn-lg me-3 mb-3">
                    Apply for Grants <ArrowRight size={18} />
                  </Button>
                  <Button className="grant-btn grant-btn-light btn-lg mb-3">
                    Check Eligibility
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* What Are Government Grants */}
      <section className="grant-section grant-what-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="grant-content-left">
                <h2 className="grant-section-title mb-4">What Are Government Grants?</h2>
                <p className="grant-section-subtitle lead mb-4">
                  Government grants are financial awards given to businesses, nonprofits, and individuals to support 
                  specific initiatives. These non-repayable funds promote economic development, innovation, and social welfare.
                </p>
                
                <div className="grant-benefits-list">
                  <div className="grant-benefit-item">
                    <CheckCircle size={20} className="grant-benefit-icon" />
                    <span>Non-Repayable Funding</span>
                  </div>
                  <div className="grant-benefit-item">
                    <CheckCircle size={20} className="grant-benefit-icon" />
                    <span>100% Business Ownership Retained</span>
                  </div>
                  <div className="grant-benefit-item">
                    <CheckCircle size={20} className="grant-benefit-icon" />
                    <span>Support for Various Business Needs</span>
                  </div>
                  <div className="grant-benefit-item">
                    <CheckCircle size={20} className="grant-benefit-icon" />
                    <span>Access to Government Resources</span>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="grant-supported-areas">
                <h4 className="grant-subsection-title mb-4">
                  Government grants support various business areas:
                </h4>
                <div className="grant-areas-grid">
                  {supportedAreas.map((area, index) => (
                    <div key={index} className="grant-area-item">
                      <CheckCircle size={16} className="grant-area-icon" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Types of Government Grants */}
      <section className="grant-section grant-types-section py-5 bg-light">
        <Container>
          <div className="grant-section-header text-center mb-5">
            <h2 className="grant-section-title mb-4">Types of Government Grants Available</h2>
            <p className="grant-section-subtitle lead">
              Explore various grant programs designed to support different business categories and needs
            </p>
          </div>

          <Row className="g-4">
            {grantTypes.map((grant) => (
              <Col key={grant.id} md={6} lg={4}>
                <Card className="grant-card h-100 shadow-sm border-0">
                  <Card.Img 
                    variant="top" 
                    src={grant.image} 
                    className="grant-card-img"
                    alt={grant.title}
                  />
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="grant-amount">{grant.amount}</div>
                      <Badge bg="primary" className="grant-badge">
                        {grant.badge}
                      </Badge>
                    </div>
                    <Card.Title className="grant-card-title h5 mb-3">{grant.title}</Card.Title>
                    <Card.Text className="grant-card-description mb-4">{grant.description}</Card.Text>
                    
                    <div className="grant-features-tags mb-4">
                      {grant.features.map((feature, index) => (
                        <span key={index} className="grant-feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <Button className="grant-btn grant-btn-primary w-100">
                      Apply Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Purpose of Government Grants */}
      <section className="grant-section grant-purpose-section py-5">
        <Container>
          <div className="grant-section-header text-center mb-5">
            <h2 className="grant-section-title mb-4">Purpose of Government Grants</h2>
            <p className="grant-section-subtitle lead">
              Government grants serve multiple purposes, from supporting innovation to promoting sustainable business practices
            </p>
          </div>

          <Row className="g-4">
            {grantPurposes.map((purpose) => (
              <Col key={purpose.id} md={6} lg={4}>
                <Card className="grant-purpose-card h-100 shadow-sm border-0">
                  <Card.Img 
                    variant="top" 
                    src={purpose.image} 
                    className="grant-card-img"
                    alt={purpose.title}
                  />
                  <Card.Body className="p-4 text-center">
                    <Badge bg="outline-primary" className="grant-category-badge mb-3">
                      {purpose.category}
                    </Badge>
                    <div className="grant-amount-sm">{purpose.amount}</div>
                    <Card.Title className="grant-card-title h5 mb-3">{purpose.title}</Card.Title>
                    <Card.Text className="grant-card-description mb-4">{purpose.description}</Card.Text>
                    <Button className="grant-btn grant-btn-outline w-100">
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Benefits of Government Grants */}
      <section className="grant-section grant-benefits-section py-5 bg-light">
        <Container>
          <div className="grant-section-header text-center mb-5">
            <h2 className="grant-section-title mb-4">Benefits of Government Grants</h2>
            <p className="grant-section-subtitle lead">
              Discover why government grants are the ideal funding solution for your business growth
            </p>
          </div>

          <Row className="g-4">
            {grantBenefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <Col key={benefit.id} md={6} lg={4}>
                  <Card className="grant-benefit-card h-100 shadow-sm border-0">
                    <Card.Img 
                      variant="top" 
                      src={benefit.image} 
                      className="grant-card-img"
                      alt={benefit.title}
                    />
                    <Card.Body className="p-4 text-center">
                      <div className="grant-benefit-icon-wrapper mb-3">
                        <IconComponent size={24} className="grant-benefit-icon" />
                      </div>
                      <div className="grant-amount-sm">{benefit.amount}</div>
                      <Card.Title className="grant-card-title h5 mb-3">{benefit.title}</Card.Title>
                      <Card.Text className="grant-card-description">{benefit.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Grant Application Process */}
      <section className="grant-section grant-process-section py-5">
        <Container>
          <div className="grant-section-header text-center mb-5">
            <h2 className="grant-section-title mb-4">Grant Application Process</h2>
            <p className="grant-section-subtitle lead">
              Follow our proven 5-step process to successfully secure government grants
            </p>
          </div>

          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="grant-process-steps">
                {processSteps.map((step, index) => (
                  <div key={step.step} className="grant-process-step">
                    <div className="grant-step-number">{step.step}</div>
                    <div className="grant-step-content">
                      <h5 className="grant-step-title">{step.title}</h5>
                      <p className="grant-step-description">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
            <Col lg={6}>
              <div className="grant-process-visual text-center">
                <img 
                  src={grantProcessImage} 
                  alt="Grant Application Process" 
                  className="grant-process-img rounded-3"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Common Mistakes to Avoid */}
      <section className="grant-section grant-mistakes-section py-5 bg-light">
        <Container>
          <div className="grant-section-header text-center mb-5">
            <h2 className="grant-section-title mb-4">Common Mistakes to Avoid</h2>
            <p className="grant-section-subtitle lead">
              Learn from others' experiences to maximize your chances of grant approval
            </p>
          </div>

          <Row className="g-4">
            <Col md={6}>
              <div className="grant-mistake-box">
                <h4 className="grant-subsection-title mb-4">Application Mistakes</h4>
                <ul className="grant-mistake-list">
                  <li>Applying for grants you don't qualify for</li>
                  <li>Submitting incomplete or inaccurate applications</li>
                  <li>Missing application deadlines</li>
                  <li>Failing to follow specific grant requirements</li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="grant-mistake-box">
                <h4 className="grant-subsection-title mb-4">Documentation Errors</h4>
                <ul className="grant-mistake-list">
                  <li>Inadequate business plan or proposal</li>
                  <li>Poor financial projections</li>
                  <li>Missing supporting documents</li>
                  <li>Unclear project objectives</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="grant-section grant-faq-section py-5">
        <Container>
          <div className="grant-section-header text-center mb-5">
            <h2 className="grant-section-title mb-4">Frequently Asked Questions</h2>
            <p className="grant-section-subtitle lead">
              Get answers to common questions about Government Grants
            </p>
          </div>

          <div className="grant-faq-tabs mb-4">
            <Button
              className={`grant-faq-tab ${activeGrantTab === "all" ? "active" : ""}`}
              onClick={() => setActiveGrantTab("all")}
            >
              All Questions
            </Button>
            <Button
              className={`grant-faq-tab ${activeGrantTab === "eligibility" ? "active" : ""}`}
              onClick={() => setActiveGrantTab("eligibility")}
            >
              Eligibility
            </Button>
            <Button
              className={`grant-faq-tab ${activeGrantTab === "process" ? "active" : ""}`}
              onClick={() => setActiveGrantTab("process")}
            >
              Application Process
            </Button>
            <Button
              className={`grant-faq-tab ${activeGrantTab === "benefits" ? "active" : ""}`}
              onClick={() => setActiveGrantTab("benefits")}
            >
              Benefits
            </Button>
          </div>

          <div className="grant-accordion-container">
            <Accordion className="grant-accordion">
              {faqs.map((faq) => (
                <Accordion.Item key={faq.id} eventKey={faq.id.toString()} className="grant-accordion-item">
                  <Accordion.Header className="grant-accordion-header">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body className="grant-accordion-body">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="grant-section grant-cta-section py-5">
        <Container>
          <div className="grant-cta-content text-center text-white">
            <h2 className="grant-cta-title mb-4">
              Ready to Explore Government Grants for Your Business?
            </h2>
            <p className="grant-cta-subtitle lead mb-5">
              Our expert team will help you identify the right grants, prepare compelling applications, 
              and maximize your chances of approval. Get non-repayable funding for your business growth.
            </p>
            <div className="grant-cta-buttons">
              <Button className="grant-btn grant-btn-light btn-lg me-3 mb-3">
                Apply for Grants
              </Button>
              <Button className="grant-btn grant-btn-outline-light btn-lg mb-3">
                Free Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Grant