"use client"
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Accordion, Badge } from "react-bootstrap"
import { CheckCircle, ArrowRight, Shield, TrendingUp, Users, Target, FileText, Clock } from "lucide-react";

// // Import images
// import loanHeroBanner from "../../../assets/images/loan-hero-banner.jpg";
// import startupLoanImage from "../../../assets/images/startup-loan.jpg";
// import msmeLoanImage from "../../../assets/images/msme-loan.jpg";
// import scstLoanImage from "../../../assets/images/scst-loan.jpg";
// import pmegpLoanImage from "../../../assets/images/pmegp-loan.jpg";
// import clcssLoanImage from "../../../assets/images/clcss-loan.jpg";
// import mudraLoanImage from "../../../assets/images/mudra-loan.jpg";
// import womenEntrepreneurImage from "../../../assets/images/women-entrepreneur.jpg";
// import emergencyLoanImage from "../../../assets/images/emergency-loan.jpg";
// import documentImage from "../../../assets/images/document-assistance.jpg";
// Replace the import statements with these if using online images
const loanHeroBanner = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const startupLoanImage = "https://images.unsplash.com/photo-1551836026-d5cbc2f4c4b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const msmeLoanImage = "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const scstLoanImage = "https://images.unsplash.com/photo-1565689228866-1d7db59f6bad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const pmegpLoanImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const clcssLoanImage = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const mudraLoanImage = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const womenEntrepreneurImage = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const emergencyLoanImage = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const documentImage = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";


import "../../../assets/scss/pages/loan.scss";

const Loan = () => {
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [activeLoanTab, setActiveLoanTab] = useState("all")

  const loanFeatures = [
    {
      icon: Shield,
      title: "Collateral-Free Options",
      description: "Many schemes don't require security or collateral"
    },
    {
      icon: TrendingUp,
      title: "Low Interest Rates",
      description: "Subsidized rates starting from 4% per annum"
    },
    {
      icon: Clock,
      title: "Quick Approval",
      description: "Fast-track processing within 7-15 days"
    },
    {
      icon: Users,
      title: "Women Entrepreneurs",
      description: "Special benefits for women-led businesses"
    }
  ]

const loanSchemes = [
  {
    id: 1,
    amount: "Up to ₹50 LAKH",
    title: "Government Startup Loans",
    description: "Special funding for new businesses & entrepreneurs with flexible repayment options.",
    image: startupLoanImage,
    features: ["Collateral-free", "4-8% Interest", "7-year term"],
    badge: "Popular"
  },
  {
    id: 2,
    amount: "Up to ₹2 CRORE",
    title: "MSME Government Loans",
    description: "Comprehensive support for micro, small, and medium enterprises with working capital.",
    image: msmeLoanImage,
    features: ["Up to ₹2Cr", "6-9% Interest", "CGTMSE Cover"],
    badge: "Recommended"
  },
  {
    id: 3,
    amount: "Up to ₹15 CRORE",
    title: "Financial Assistance for SC, ST & OBC",
    description: "Special funding support for marginalized communities with subsidized rates.",
    image: scstLoanImage,
    features: ["Subsidized Rates", "Margin Money", "Training Support"],
    badge: "Subsidized"
  },
  {
    id: 4,
    amount: "Up to ₹10 LAKH",
    title: "Prime Minister Employment Generation Program",
    description: "Supports new business ventures and job creation in manufacturing and service sectors.",
    image: pmegpLoanImage,
    features: ["35% Subsidy", "Rural Focus", "Job Creation"],
    badge: "Subsidized"
  },
  {
    id: 5,
    amount: "Up to ₹50 LAKH",
    title: "Credit Linked Capital Subsidy Scheme",
    description: "Technology upgradation support with capital subsidy for MSME units.",
    image: clcssLoanImage,
    features: ["15% Subsidy", "Tech Upgrade", "Quality Improvement"],
    badge: "Technology"
  },
  {
    id: 6,
    amount: "Up to ₹25 LAKH",
    title: "Pradhan Mantri Mudra Yojana",
    description: "Collateral-free loans for small businesses under Shishu, Kishore, and Tarun categories.",
    image: mudraLoanImage,
    features: ["Collateral-free", "Three Categories", "Quick Processing"],
    badge: "Popular"
  },
];

const specializedLoans = [
  {
    id: 1,
    amount: "Up to ₹50 LAKH",
    title: "Government Startup Loans",
    description: "Get financial support for innovative business ideas with mentorship.",
    image: startupLoanImage,
    category: "Startup"
  },
  {
    id: 2,
    amount: "Up to ₹2 CRORE",
    title: "MSME Government Loans",
    description: "Working capital and term loans for established MSMEs.",
    image: msmeLoanImage,
    category: "MSME"
  },
  {
    id: 3,
    amount: "Up to ₹15 CRORE",
    title: "Small Business Government Loans",
    description: "Financial assistance for small-scale business expansion.",
    image: scstLoanImage,
    category: "Business"
  },
  {
    id: 4,
    amount: "Up to ₹10 LAKH",
    title: "Government Funding for Startups",
    description: "Seed capital and early-stage funding support.",
    image: startupLoanImage,
    category: "Startup"
  },
  {
    id: 5,
    amount: "Up to ₹30 LAKH",
    title: "Women Entrepreneur Loans",
    description: "Exclusive funding with additional subsidies for women-led businesses.",
    image: womenEntrepreneurImage,
    category: "Women"
  },
  {
    id: 6,
    amount: "Up to ₹30 LAKH",
    title: "Emergency Business Loans",
    description: "Fast-track loans for urgent business requirements and working capital.",
    image: emergencyLoanImage,
    category: "Emergency"
  },
];


  const faqs = [
    {
      id: 1,
      question: "What are Government Business Loans?",
      answer: "Government Business Loans are low-interest financial assistance programs designed to help businesses grow without financial strain. These loans offer flexible repayment terms and are designed to support entrepreneurs.",
    },
    {
      id: 2,
      question: "Who is eligible for Government Startup Loans?",
      answer: "Startups registered with DPIIT, businesses less than 7 years old, and entrepreneurs with viable business plans are eligible for government startup loans.",
    },
    {
      id: 3,
      question: "What is the difference between government business loans and private bank loans?",
      answer: "Government loans offer lower interest rates, flexible repayment terms, and collateral-free options. Private bank loans typically have higher rates and stricter collateral requirements.",
    },
    {
      id: 4,
      question: "Are Government Loan Schemes available for women entrepreneurs?",
      answer: "Yes, there are dedicated government loan schemes for women entrepreneurs with special benefits, lower interest rates, and simplified application processes.",
    },
    {
      id: 5,
      question: "How can I find the best Small Business Government Loan?",
      answer: "Our experts can help you identify the best loan scheme based on your business type, size, and funding requirements. Contact us for a personalized consultation.",
    },
  ]

  const documents = [
    {
      icon: FileText,
      title: "Business Registration",
      items: ["Company Incorporation Certificate", "GST Registration", "MSME Certificate"]
    },
    {
      icon: Users,
      title: "Identity Proof",
      items: ["PAN Card", "Aadhaar Card", "Address Proof"]
    },
    {
      icon: TrendingUp,
      title: "Financial Documents",
      items: ["Bank Statements", "ITR Returns", "Business Plan"]
    },
    {
      icon: Target,
      title: "Project Report",
      items: ["Detailed Project Report", "Financial Projections", "Market Analysis"]
    }
  ]

  return (
    <div className="loan-wrapper">
      {/* Hero Section */}
      <section className="loan-hero">
        <div 
          className="loan-hero-banner"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.81), rgba(0, 0, 0, 0.49)), url(${loanHeroBanner})`
          }}
        >
          <Container>
            <Row className="align-items-center min-vh-60">
              <Col lg={10} className="mx-auto text-center text-white">
                <Badge bg="warning" text="dark" className="mb-3 loan-hero-badge">
                  Low Interest Starting at 4%
                </Badge>
                <h1 className="loan-hero-title mb-4">
                  Government Business Loans
                </h1>
                <p className="loan-hero-subtitle lead mb-4">
                  Your Gateway to Business Expansion & Growth
                </p>
                <p className="loan-hero-description mb-5">
                  Get affordable loans with lower interest rates & easy approval. Whether you need funds for working capital, 
                  expansion, or equipment purchase, Government Loan Schemes provide flexible repayment options.
                </p>
                
                <div className="loan-features-grid mb-5">
                  {loanFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="loan-feature-item">
                        <IconComponent size={24} className="loan-feature-icon" />
                        <div>
                          <h6 className="loan-feature-title">{feature.title}</h6>
                          <p className="loan-feature-desc">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="loan-hero-buttons">
                  <Button className="loan-btn loan-btn-primary btn-lg me-3 mb-3">
                    Apply Now <ArrowRight size={18} />
                  </Button>
                  <Button className="loan-btn loan-btn-light btn-lg mb-3">
                    Check Eligibility
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* What Are Government Business Loans */}
      <section className="loan-section loan-what-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="loan-content-left">
                <h2 className="loan-section-title mb-4">What Are Government Business Loans?</h2>
                <p className="loan-section-subtitle lead mb-4">
                  Government Business Loans are financial assistance programs provided by the Indian government to support 
                  entrepreneurs, MSMEs, and startups. These subsidized loans help businesses access capital without heavy 
                  repayment burdens.
                </p>
                
                <div className="loan-benefits-list">
                  <div className="loan-benefit-item">
                    <CheckCircle size={20} className="loan-benefit-icon" />
                    <span>Lower Interest Rates (4-9% p.a.)</span>
                  </div>
                  <div className="loan-benefit-item">
                    <CheckCircle size={20} className="loan-benefit-icon" />
                    <span>Longer Repayment Periods (up to 7 years)</span>
                  </div>
                  <div className="loan-benefit-item">
                    <CheckCircle size={20} className="loan-benefit-icon" />
                    <span>Collateral-Free Options Available</span>
                  </div>
                  <div className="loan-benefit-item">
                    <CheckCircle size={20} className="loan-benefit-icon" />
                    <span>Subsidized Loans for MSMEs & Startups</span>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="loan-illustration-box text-center">
                <img 
                  src={documentImage} 
                  alt="Loan Benefits" 
                  className="loan-illustration-img rounded-3"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Types of Government Business Loans */}
      <section className="loan-section loan-types-section py-5 bg-light">
        <Container>
          <div className="loan-section-header text-center mb-5">
            <h2 className="loan-section-title mb-4">Types of Government Business Loans Available</h2>
            <p className="loan-section-subtitle lead">
              Explore various Government Loan Schemes designed to support business growth and expansion
            </p>
          </div>

          <Row className="g-4">
            {loanSchemes.map((scheme) => (
              <Col key={scheme.id} md={6} lg={4}>
                <Card className="loan-card h-100 shadow-sm border-0">
                  <Card.Img 
                    variant="top" 
                    src={scheme.image} 
                    className="loan-card-img"
                    alt={scheme.title}
                  />
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="loan-amount">{scheme.amount}</div>
                      <Badge bg="primary" className="loan-badge">
                        {scheme.badge}
                      </Badge>
                    </div>
                    <Card.Title className="loan-card-title h5 mb-3">{scheme.title}</Card.Title>
                    <Card.Text className="loan-card-description mb-4">{scheme.description}</Card.Text>
                    
                    <div className="loan-features-tags mb-4">
                      {scheme.features.map((feature, index) => (
                        <span key={index} className="loan-feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <Button className="loan-btn loan-btn-primary w-100">
                      Apply Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Specialized Loan Schemes */}
      <section className="loan-section loan-specialized-section py-5">
        <Container>
          <div className="loan-section-header text-center mb-5">
            <h2 className="loan-section-title mb-4">Specialized Loan Schemes</h2>
            <p className="loan-section-subtitle lead">
              Tailored financial solutions for different business needs and categories
            </p>
          </div>

          <Row className="g-4">
            {specializedLoans.map((loan) => (
              <Col key={loan.id} md={6} lg={4}>
                <Card className="loan-special-card h-100 shadow-sm border-0">
                  <Card.Img 
                    variant="top" 
                    src={loan.image} 
                    className="loan-card-img"
                    alt={loan.title}
                  />
                  <Card.Body className="p-4">
                    <Badge bg="outline-primary" className="loan-category-badge mb-3">
                      {loan.category}
                    </Badge>
                    <div className="loan-amount-sm">{loan.amount}</div>
                    <Card.Title className="loan-card-title h5 mb-3">{loan.title}</Card.Title>
                    <Card.Text className="loan-card-description mb-4">{loan.description}</Card.Text>
                    <Button className="loan-btn loan-btn-outline w-100">
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Documents Required */}
      <section className="loan-section loan-documents-section py-5 bg-light">
        <Container>
          <div className="loan-section-header text-center mb-5">
            <h2 className="loan-section-title mb-4">Documents Required for Loan Application</h2>
            <p className="loan-section-subtitle lead">
              Streamline your application process with these essential documents
            </p>
          </div>

          <Row className="g-4">
            {documents.map((doc, index) => {
              const IconComponent = doc.icon;
              return (
                <Col key={index} md={6} lg={3}>
                  <Card className="loan-doc-card h-100 shadow-sm border-0 text-center">
                    <Card.Body className="p-4">
                      <div className="loan-doc-icon mb-3">
                        <IconComponent size={32} />
                      </div>
                      <Card.Title className="loan-doc-title h6 mb-3">{doc.title}</Card.Title>
                      <ul className="loan-doc-list">
                        {doc.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="loan-section loan-faq-section py-5">
        <Container>
          <div className="loan-section-header text-center mb-5">
            <h2 className="loan-section-title mb-4">Frequently Asked Questions</h2>
            <p className="loan-section-subtitle lead">
              Find answers to common questions about Government Business Loans
            </p>
          </div>

          <div className="loan-faq-tabs mb-4">
            <Button
              className={`loan-faq-tab ${activeLoanTab === "all" ? "active" : ""}`}
              onClick={() => setActiveLoanTab("all")}
            >
              All Questions
            </Button>
            <Button
              className={`loan-faq-tab ${activeLoanTab === "comparison" ? "active" : ""}`}
              onClick={() => setActiveLoanTab("comparison")}
            >
              Loan Comparison
            </Button>
            <Button
              className={`loan-faq-tab ${activeLoanTab === "women" ? "active" : ""}`}
              onClick={() => setActiveLoanTab("women")}
            >
              Women Entrepreneurs
            </Button>
          </div>

          <div className="loan-accordion-container">
            <Accordion className="loan-accordion">
              {faqs.map((faq) => (
                <Accordion.Item key={faq.id} eventKey={faq.id.toString()} className="loan-accordion-item">
                  <Accordion.Header className="loan-accordion-header">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body className="loan-accordion-body">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="loan-section loan-cta-section py-5 ">
        <Container>
          <div className="loan-cta-content text-center text-white">
            <h2 className="loan-cta-title mb-4">
              Get a Government Business Loan & Scale Your Business Today!
            </h2>
            <p className="loan-cta-subtitle lead mb-5">
              Why struggle with high-interest loans when Government Loan Schemes offer subsidized business funding?
              Our experts will guide you through the entire process.
            </p>
            <div className="loan-cta-buttons">
              <Button className="loan-btn loan-btn-light btn-lg me-3 mb-3">
                Apply for Loan
              </Button>
              <Button className="loan-btn loan-btn-outline-light btn-lg mb-3">
                Talk to Expert
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Loan