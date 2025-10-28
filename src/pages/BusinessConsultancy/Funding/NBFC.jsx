"use client"
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Accordion, Badge } from "react-bootstrap"
import { CheckCircle, ArrowRight, Clock, Shield, TrendingUp, Users, FileText, Zap, Target, Building } from "lucide-react";

// // Import images
// import nbfcHeroBanner from "../../../assets/images/nbfc-hero-banner.jpg";
// import workingCapitalImage from "../../../assets/images/working-capital.jpg";
// import termLoanImage from "../../../assets/images/term-loan.jpg";
// import equipmentLoanImage from "../../../assets/images/equipment-loan.jpg";
// import invoiceFinancingImage from "../../../assets/images/invoice-financing.jpg";
// import businessCreditImage from "../../../assets/images/business-credit.jpg";
// import merchantCashImage from "../../../assets/images/merchant-cash.jpg";
// import unsecuredLoanImage from "../../../assets/images/unsecured-loan.jpg";
// import productDevelopmentImage from "../../../assets/images/product-development.jpg";
// import expansionLoanImage from "../../../assets/images/expansion-loan.jpg";
// import technologyLoanImage from "../../../assets/images/technology-loan.jpg";
// import marketingLoanImage from "../../../assets/images/marketing-loan.jpg";
// import inventoryLoanImage from "../../../assets/images/inventory-loan.jpg";
// import nbfcBenefitsImage from "../../../assets/images/nbfc-benefits.jpg";

// Replace the import statements with these if using online images
const nbfcHeroBanner = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const workingCapitalImage = "https://images.unsplash.com/photo-1551836026-d5cbc2f4c4b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const termLoanImage = "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const equipmentLoanImage = "https://images.unsplash.com/photo-1565689228866-1d7db59f6bad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const invoiceFinancingImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const businessCreditImage = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const merchantCashImage = "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const unsecuredLoanImage = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const productDevelopmentImage = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const expansionLoanImage = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const technologyLoanImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const marketingLoanImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const inventoryLoanImage = "https://images.unsplash.com/photo-1563010047-9bb6e0c6aff6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const nbfcBenefitsImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

import "../../../assets/scss/pages/nbfc.scss";

const NBFC = () => {
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [activeNbfcTab, setActiveNbfcTab] = useState("all")

  const nbfcFeatures = [
    {
      icon: Clock,
      title: "Quick Approval",
      description: "Funds disbursed within 24-72 hours"
    },
    {
      icon: Shield,
      title: "Collateral-Free",
      description: "Minimal or no security required"
    },
    {
      icon: TrendingUp,
      title: "Flexible Terms",
      description: "Customized repayment options"
    },
    {
      icon: Users,
      title: "Easy Eligibility",
      description: "Simplified documentation process"
    }
  ]

const nbfcLoans = [
  {
    id: 1,
    amount: "Up to ₹1,00,000",
    title: "Working Capital Loans",
    description: "Fast funding for day-to-day business operations and cash flow management.",
    image: workingCapitalImage,
    features: ["24-48 hrs approval", "Flexible repayment", "No collateral"],
    badge: "Fastest",
    tenure: "3-12 months"
  },
  {
    id: 2,
    amount: "Up to ₹5,00,000",
    title: "Term Loans",
    description: "Medium to long-term funding for business expansion and infrastructure.",
    image: termLoanImage,
    features: ["Up to 5 years", "Fixed interest", "Business growth"],
    badge: "Popular",
    tenure: "1-5 years"
  },
  {
    id: 3,
    amount: "Up to ₹10,00,000",
    title: "Equipment & Machinery Loans",
    description: "Financing for equipment, machinery, and technology upgrades.",
    image: equipmentLoanImage,
    features: ["80% financing", "New/used equipment", "Tax benefits"],
    badge: "Asset",
    tenure: "2-5 years"
  },
  {
    id: 4,
    amount: "Up to ₹15,00,000",
    title: "Invoice Financing",
    description: "Quick cash against pending invoices to improve cash flow.",
    image: invoiceFinancingImage,
    features: ["90% advance", "Credit protection", "Flexible limits"],
    badge: "Cash Flow",
    tenure: "30-180 days"
  },
  {
    id: 5,
    amount: "Up to ₹20,00,000",
    title: "Business Line of Credit",
    description: "Flexible credit line for ongoing business needs and opportunities.",
    image: businessCreditImage,
    features: ["Revolving limit", "Pay interest only", "Any business need"],
    badge: "Flexible",
    tenure: "1-3 years"
  },
  {
    id: 6,
    amount: "Up to ₹25,00,000",
    title: "Merchant Cash Advance",
    description: "Fast funding based on your business's future credit card sales.",
    image: merchantCashImage,
    features: ["No fixed EMI", "Revenue sharing", "Quick approval"],
    badge: "Revenue Based",
    tenure: "3-24 months"
  },
  {
    id: 7,
    amount: "Up to ₹30,00,000",
    title: "Unsecured Business Loans",
    description: "Quick loans without collateral requirements for established businesses.",
    image: unsecuredLoanImage,
    features: ["No collateral", "Quick processing", "Multi-purpose"],
    badge: "Unsecured",
    tenure: "6 months - 3 years"
  },
];

const specializedLoans = [
  {
    id: 1,
    amount: "Up to ₹50,000",
    title: "Product Development Loans",
    description: "Funding for product innovation, R&D, and prototype development.",
    image: productDevelopmentImage,
    category: "Innovation"
  },
  {
    id: 2,
    amount: "Up to ₹1,50,000",
    title: "Working Capital Loans",
    description: "Quick funding for operational needs and daily business expenses.",
    image: workingCapitalImage,
    category: "Operations"
  },
  {
    id: 3,
    amount: "Up to ₹2,50,000",
    title: "Expansion Loans",
    description: "Capital for business expansion, new branches, and market entry.",
    image: expansionLoanImage,
    category: "Growth"
  },
  {
    id: 4,
    amount: "Up to ₹3,50,000",
    title: "Technology Loans",
    description: "Funding for tech infrastructure, software, and digital transformation.",
    image: technologyLoanImage,
    category: "Technology"
  },
  {
    id: 5,
    amount: "Up to ₹4,50,000",
    title: "Marketing Loans",
    description: "Capital for marketing campaigns, brand building, and customer acquisition.",
    image: marketingLoanImage,
    category: "Marketing"
  },
  {
    id: 6,
    amount: "Up to ₹5,50,000",
    title: "Inventory Loans",
    description: "Financing for inventory management, stock purchase, and supply chain.",
    image: inventoryLoanImage,
    category: "Inventory"
  },
];


  const faqs = [
    {
      id: 1,
      question: "Which is the best NBFC for business loan?",
      answer: "The best NBFC depends on your business needs, loan amount, and repayment capacity. Our experts can help you compare options and find the right fit.",
    },
    {
      id: 2,
      question: "What is the minimum GST required for an NBFC loan?",
      answer: "Most NBFCs require a minimum GST turnover of ₹20-50 lakhs annually, though this varies by lender.",
    },
    {
      id: 3,
      question: "Any GST-related business loans available?",
      answer: "Yes, many NBFCs offer GST-linked loans with flexible terms based on your GST filing history.",
    },
    {
      id: 4,
      question: "How much time can I get from an NBFC?",
      answer: "NBFC loan tenure typically ranges from 12 months to 5 years, depending on the loan type and amount.",
    },
    {
      id: 5,
      question: "Can startups apply for NBFC business loans?",
      answer: "Yes, many NBFCs offer specialized loans for startups with flexible eligibility criteria.",
    },
    {
      id: 6,
      question: "What is the repayment period for NBFC loan?",
      answer: "Repayment periods vary from 12 months to 60 months depending on the loan type and amount borrowed.",
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast Approval",
      description: "Get funds within 24-72 hours with minimal documentation"
    },
    {
      icon: Shield,
      title: "Collateral-Free Options",
      description: "Access funds without pledging assets or property"
    },
    {
      icon: TrendingUp,
      title: "Flexible Repayment",
      description: "Choose EMI plans that match your cash flow patterns"
    },
    {
      icon: Building,
      title: "Business-Focused",
      description: "Loans designed specifically for business growth needs"
    }
  ]

  const eligibilityCriteria = [
    {
      title: "Business Age",
      requirement: "6 months to 2+ years",
      description: "Minimum business operation period"
    },
    {
      title: "Annual Turnover",
      requirement: "₹20L to ₹2Cr+",
      description: "Minimum annual business revenue"
    },
    {
      title: "Credit Score",
      requirement: "650+",
      description: "Minimum credit score requirement"
    },
    {
      title: "Documentation",
      requirement: "Basic Business Docs",
      description: "GST, PAN, Bank statements required"
    }
  ]

  return (
    <div className="nbfc-wrapper">
      {/* Hero Section */}
      <section className="nbfc-hero">
        <div 
          className="nbfc-hero-banner"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.81), rgba(0, 0, 0, 0.49)), url(${nbfcHeroBanner})`
          }}
        >
          <Container>
            <Row className="align-items-center min-vh-60">
              <Col lg={10} className="mx-auto text-center text-white">
                <Badge bg="warning" text="dark" className="mb-3 nbfc-hero-badge">
                  ⚡ Approval in 24-72 Hours
                </Badge>
                <h1 className="nbfc-hero-title mb-4">
                  NBFC Business Loans
                </h1>
                <p className="nbfc-hero-subtitle lead mb-4">
                  Flexible Funding Solutions for Rapid Business Growth
                </p>
                <p className="nbfc-hero-description mb-5">
                  Get quick, collateral-free business loans with flexible terms. Whether you need working capital, 
                  expansion funds, or equipment financing, NBFCs provide faster approval and customized solutions.
                </p>
                
                <div className="nbfc-features-grid mb-5">
                  {nbfcFeatures.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div key={index} className="nbfc-feature-item">
                        <IconComponent size={24} className="nbfc-feature-icon" />
                        <div>
                          <h6 className="nbfc-feature-title">{feature.title}</h6>
                          <p className="nbfc-feature-desc">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="nbfc-hero-buttons">
                  <Button className="nbfc-btn nbfc-btn-primary btn-lg me-3 mb-3">
                    Apply Now <ArrowRight size={18} />
                  </Button>
                  <Button className="nbfc-btn nbfc-btn-light btn-lg mb-3">
                    Check Eligibility
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* What Are NBFC Business Loans */}
      <section className="nbfc-section nbfc-what-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="nbfc-content-left">
                <h2 className="nbfc-section-title mb-4">What Are NBFC Business Loans?</h2>
                <p className="nbfc-section-subtitle lead mb-4">
                  NBFC Business Loans are flexible financial solutions provided by Non-Banking Financial Companies 
                  to support businesses with faster approval, minimal documentation, and customized terms.
                </p>
                
                <div className="nbfc-benefits-list">
                  <div className="nbfc-benefit-item">
                    <CheckCircle size={20} className="nbfc-benefit-icon" />
                    <span>Faster Approval (24-72 hours)</span>
                  </div>
                  <div className="nbfc-benefit-item">
                    <CheckCircle size={20} className="nbfc-benefit-icon" />
                    <span>Collateral-Free Options Available</span>
                  </div>
                  <div className="nbfc-benefit-item">
                    <CheckCircle size={20} className="nbfc-benefit-icon" />
                    <span>Flexible Repayment Terms</span>
                  </div>
                  <div className="nbfc-benefit-item">
                    <CheckCircle size={20} className="nbfc-benefit-icon" />
                    <span>Minimal Documentation Required</span>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="nbfc-illustration-box text-center">
                <img 
                  src={nbfcBenefitsImage} 
                  alt="NBFC Benefits" 
                  className="nbfc-illustration-img rounded-3"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Benefits */}
      <section className="nbfc-section nbfc-benefits-section py-5 bg-light">
        <Container>
          <div className="nbfc-section-header text-center mb-5">
            <h2 className="nbfc-section-title mb-4">Why Choose NBFC Business Loans?</h2>
            <p className="nbfc-section-subtitle lead">
              Experience faster, more flexible funding compared to traditional banking
            </p>
          </div>

          <Row className="g-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Col key={index} md={6} lg={3}>
                  <Card className="nbfc-benefit-card h-100 shadow-sm border-0 text-center">
                    <Card.Body className="p-4">
                      <div className="nbfc-benefit-icon-wrapper mb-4">
                        <IconComponent size={32} className="nbfc-benefit-icon" />
                      </div>
                      <Card.Title className="nbfc-benefit-title h6 mb-3">{benefit.title}</Card.Title>
                      <Card.Text className="nbfc-benefit-description">{benefit.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      {/* Types of NBFC Loans */}
      <section className="nbfc-section nbfc-types-section py-5">
        <Container>
          <div className="nbfc-section-header text-center mb-5">
            <h2 className="nbfc-section-title mb-4">Types of NBFC Business Loans</h2>
            <p className="nbfc-section-subtitle lead">
              Choose from a wide range of flexible financing options tailored to your business needs
            </p>
          </div>

          <Row className="g-4">
            {nbfcLoans.map((loan) => (
              <Col key={loan.id} md={6} lg={4}>
                <Card className="nbfc-card h-100 shadow-sm border-0">
                  <Card.Img 
                    variant="top" 
                    src={loan.image} 
                    className="nbfc-card-img"
                    alt={loan.title}
                  />
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div className="nbfc-amount">{loan.amount}</div>
                      <Badge bg="primary" className="nbfc-badge">
                        {loan.badge}
                      </Badge>
                    </div>
                    <Card.Title className="nbfc-card-title h5 mb-3">{loan.title}</Card.Title>
                    <Card.Text className="nbfc-card-description mb-4">{loan.description}</Card.Text>
                    
                    <div className="nbfc-loan-details mb-4">
                      <div className="nbfc-tenure">
                        <strong>Tenure:</strong> {loan.tenure}
                      </div>
                    </div>
                    
                    <div className="nbfc-features-tags mb-4">
                      {loan.features.map((feature, index) => (
                        <span key={index} className="nbfc-feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <Button className="nbfc-btn nbfc-btn-primary w-100">
                      Apply Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Specialized Loan Programs */}
      <section className="nbfc-section nbfc-specialized-section py-5 bg-light">
        <Container>
          <div className="nbfc-section-header text-center mb-5">
            <h2 className="nbfc-section-title mb-4">Specialized Loan Programs</h2>
            <p className="nbfc-section-subtitle lead">
              Tailored financing solutions for specific business requirements
            </p>
          </div>

          <Row className="g-4">
            {specializedLoans.map((loan) => (
              <Col key={loan.id} md={6} lg={4}>
                <Card className="nbfc-special-card h-100 shadow-sm border-0">
                  <Card.Img 
                    variant="top" 
                    src={loan.image} 
                    className="nbfc-card-img"
                    alt={loan.title}
                  />
                  <Card.Body className="p-4">
                    <Badge bg="outline-primary" className="nbfc-category-badge mb-3">
                      {loan.category}
                    </Badge>
                    <div className="nbfc-amount-sm">{loan.amount}</div>
                    <Card.Title className="nbfc-card-title h5 mb-3">{loan.title}</Card.Title>
                    <Card.Text className="nbfc-card-description mb-4">{loan.description}</Card.Text>
                    <Button className="nbfc-btn nbfc-btn-outline w-100">
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Eligibility Criteria */}
      <section className="nbfc-section nbfc-eligibility-section py-5">
        <Container>
          <div className="nbfc-section-header text-center mb-5">
            <h2 className="nbfc-section-title mb-4">Eligibility Criteria</h2>
            <p className="nbfc-section-subtitle lead">
              Simple requirements to qualify for NBFC business loans
            </p>
          </div>

          <Row className="g-4">
            {eligibilityCriteria.map((criteria, index) => (
              <Col key={index} md={6} lg={3}>
                <Card className="nbfc-eligibility-card h-100 shadow-sm border-0 text-center">
                  <Card.Body className="p-4">
                    <Card.Title className="nbfc-eligibility-title h6 mb-3">{criteria.title}</Card.Title>
                    <div className="nbfc-eligibility-requirement mb-3">{criteria.requirement}</div>
                    <Card.Text className="nbfc-eligibility-description">
                      {criteria.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Documents Required */}
      <section className="nbfc-section nbfc-documents-section py-5 bg-light">
        <Container>
          <div className="nbfc-section-header text-center mb-5">
            <h2 className="nbfc-section-title mb-4">Documents Required</h2>
            <p className="nbfc-section-subtitle lead">
              Minimal documentation for quick processing and approval
            </p>
          </div>

          <Row className="g-4">
            <Col md={6}>
              <div className="nbfc-doc-list-box">
                <h4 className="nbfc-subsection-title mb-4">Business Documents</h4>
                <ul className="nbfc-doc-list">
                  <li>Business Registration Certificate</li>
                  <li>GST Registration Certificate</li>
                  <li>PAN Card of Business</li>
                  <li>MSME Certificate (if applicable)</li>
                  <li>Business Address Proof</li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="nbfc-doc-list-box">
                <h4 className="nbfc-subsection-title mb-4">Financial Documents</h4>
                <ul className="nbfc-doc-list">
                  <li>6 Months Bank Statements</li>
                  <li>2 Years ITR Returns</li>
                  <li>Financial Statements</li>
                  <li>Business Plan/Project Report</li>
                  <li>KYC Documents of Directors</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="nbfc-section nbfc-faq-section py-5">
        <Container>
          <div className="nbfc-section-header text-center mb-5">
            <h2 className="nbfc-section-title mb-4">Frequently Asked Questions</h2>
            <p className="nbfc-section-subtitle lead">
              Get answers to common questions about NBFC Business Loans
            </p>
          </div>

          <div className="nbfc-faq-tabs mb-4">
            <Button
              className={`nbfc-faq-tab ${activeNbfcTab === "all" ? "active" : ""}`}
              onClick={() => setActiveNbfcTab("all")}
            >
              All Questions
            </Button>
            <Button
              className={`nbfc-faq-tab ${activeNbfcTab === "rates" ? "active" : ""}`}
              onClick={() => setActiveNbfcTab("rates")}
            >
              Interest Rates
            </Button>
            <Button
              className={`nbfc-faq-tab ${activeNbfcTab === "legal" ? "active" : ""}`}
              onClick={() => setActiveNbfcTab("legal")}
            >
              Eligibility
            </Button>
            <Button
              className={`nbfc-faq-tab ${activeNbfcTab === "process" ? "active" : ""}`}
              onClick={() => setActiveNbfcTab("process")}
            >
              Process
            </Button>
          </div>

          <div className="nbfc-accordion-container">
            <Accordion className="nbfc-accordion">
              {faqs.map((faq) => (
                <Accordion.Item key={faq.id} eventKey={faq.id.toString()} className="nbfc-accordion-item">
                  <Accordion.Header className="nbfc-accordion-header">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body className="nbfc-accordion-body">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="nbfc-section nbfc-cta-section py-5">
        <Container>
          <div className="nbfc-cta-content text-center text-white">
            <h2 className="nbfc-cta-title mb-4">
              Ready to Grow Your Business with NBFC Funding?
            </h2>
            <p className="nbfc-cta-subtitle lead mb-5">
              Get quick approval, flexible terms, and expert guidance throughout the process. 
              Our NBFC partners offer the perfect financing solution for your business growth.
            </p>
            <div className="nbfc-cta-buttons">
              <Button className="nbfc-btn nbfc-btn-light btn-lg me-3 mb-3">
                Apply for Loan
              </Button>
              <Button className="nbfc-btn nbfc-btn-outline-light btn-lg mb-3">
                Talk to Expert
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default NBFC