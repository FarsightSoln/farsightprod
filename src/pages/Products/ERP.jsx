import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Badge, Accordion } from "react-bootstrap";
import { 
  Users, 
  Shield, 
  TrendingUp, 
  Clock, 
  FileText, 
  BarChart3, 
  Settings,
  CheckCircle,
  ArrowRight,
  Building,
  Target,
  Zap,
  Award,
  Database,
  Lock,
  ShoppingCart,
  Package,
  DollarSign,
  Factory,
  Truck,
  Warehouse
} from "lucide-react";

// ERP images using online sources
const erpHeroBanner = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const financeManagementImage = "https://www.practiceguru.pro/images/startup-india.jpg";
const inventoryManagementImage = "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const supplyChainImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const manufacturingImage = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const analyticsDashboardImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const securityFeaturesImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvunrzmd6U9JOnKVD2BUOEuMAkPEXztSp6kFZ1HsfW08KMUmeoaFbIr2P6re9eskcblx4&usqp=CAU";
const customizationImage = "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const farsightOfficeImage = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

import "../../assets/scss/pages/erp.scss";

const ERP = () => {
  const [activeFeature, setActiveFeature] = useState("finance")

  const keyFeatures = [
    {
      id: "finance",
      icon: DollarSign,
      title: "Financial Management",
      description: "Comprehensive accounting, budgeting, and financial reporting to streamline your financial operations and ensure compliance.",
      image: financeManagementImage,
      highlights: [
        "General ledger & accounting",
        "Accounts payable/receivable",
        "Budgeting and forecasting",
        "Financial reporting & compliance"
      ]
    },
    {
      id: "inventory",
      icon: Package,
      title: "Inventory & Warehouse Management",
      description: "Optimize inventory levels, reduce costs, and improve warehouse efficiency with real-time tracking and automation.",
      image: inventoryManagementImage,
      highlights: [
        "Real-time inventory tracking",
        "Warehouse management system",
        "Stock level optimization",
        "Barcode & RFID integration"
      ]
    },
    {
      id: "supplychain",
      icon: Truck,
      title: "Supply Chain Management",
      description: "Streamline procurement, logistics, and supplier relationships for end-to-end supply chain visibility and efficiency.",
      image: supplyChainImage,
      highlights: [
        "Procurement management",
        "Supplier relationship management",
        "Logistics and transportation",
        "Supply chain analytics"
      ]
    },
    {
      id: "manufacturing",
      icon: Factory,
      title: "Manufacturing & Production",
      description: "Manage production planning, shop floor control, quality management, and manufacturing operations seamlessly.",
      image: manufacturingImage,
      highlights: [
        "Production planning & scheduling",
        "Shop floor control",
        "Quality management",
        "Bill of materials management"
      ]
    },
    {
      id: "sales",
      icon: ShoppingCart,
      title: "Sales & Distribution",
      description: "Automate sales processes, order management, and distribution to enhance customer service and boost revenue.",
      image: analyticsDashboardImage,
      highlights: [
        "Order management system",
        "Sales forecasting",
        "Pricing and promotions",
        "Distribution management"
      ]
    },
    {
      id: "security",
      icon: Shield,
      title: "Role-Based Access Control",
      description: "Ensure data security with customizable user permissions and compliance features across all business modules.",
      image: securityFeaturesImage,
      highlights: [
        "Multi-level access control",
        "Data encryption",
        "Audit trail logging",
        "GDPR & compliance ready"
      ]
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Increased Operational Efficiency",
      description: "Automate business processes and reduce manual workload by up to 70% across departments"
    },
    {
      icon: Target,
      title: "Data-Driven Business Decisions",
      description: "Make informed decisions with real-time analytics and comprehensive business intelligence"
    },
    {
      icon: Award,
      title: "Enhanced Productivity",
      description: "Streamline operations and improve overall organizational productivity with integrated systems"
    },
    {
      icon: Database,
      title: "Centralized Business Data",
      description: "Single source of truth for all business operations and decision-making"
    },
    {
      icon: Lock,
      title: "Improved Security & Compliance",
      description: "Enterprise-grade security with role-based access controls and regulatory compliance"
    },
    {
      icon: Building,
      title: "Scalable Enterprise Solution",
      description: "Grows with your business from small company to large enterprise level"
    }
  ]

  const customizationFeatures = [
    "Custom business workflow configurations",
    "Industry-specific module customization",
    "Custom field creation and forms",
    "Report and dashboard customization",
    "Integration with existing systems",
    "Role and permission tailoring"
  ]

  const faqs = [
    {
      question: "Is Enterprise Maximizer suitable for small and medium businesses?",
      answer: "Yes, Enterprise Maximizer is designed to scale from small businesses to large enterprises. Our modular approach allows you to start with essential modules and add more as your business grows."
    },
    {
      question: "Can we customize the system to match our industry-specific processes?",
      answer: "Absolutely. Every module in Enterprise Maximizer is fully customizable. You can modify workflows, fields, reports, and permissions to align perfectly with your industry and business requirements."
    },
    {
      question: "What kind of implementation support and training do you provide?",
      answer: "We provide comprehensive implementation support, administrator training, user documentation, data migration services, and ongoing technical support to ensure smooth adoption and optimal usage."
    },
    {
      question: "Is our business data secure with Enterprise Maximizer?",
      answer: "Yes, we employ enterprise-grade security measures including data encryption, secure servers, regular backups, disaster recovery, and compliance with data protection regulations to keep your information safe."
    },
    {
      question: "Can we integrate with our existing software and systems?",
      answer: "Enterprise Maximizer offers extensive API integration capabilities to connect with your existing accounting software, CRM, e-commerce platforms, and other business applications."
    }
  ]

  const pricingTiers = [
    {
      name: "Business Starter",
      description: "Perfect for small businesses",
      price: "₹14,999",
      period: "per month",
      features: [
        "Up to 25 users",
        "Financial management",
        "Inventory management",
        "Basic reporting",
        "Standard support",
        "Cloud deployment"
      ]
    },
    {
      name: "Enterprise Professional",
      description: "Ideal for growing companies",
      price: "₹29,999",
      period: "per month",
      features: [
        "Up to 100 users",
        "All core modules",
        "Advanced analytics",
        "Supply chain management",
        "Priority support",
        "Custom reports"
      ],
      popular: true
    },
    {
      name: "Enterprise Elite",
      description: "For large organizations",
      price: "Custom",
      period: "tailored pricing",
      features: [
        "Unlimited users",
        "Full customization",
        "Advanced manufacturing",
        "API integrations",
        "Dedicated support",
        "On-premise deployment option"
      ]
    }
  ]

  return (
    <div className="erp-wrapper">
      {/* Hero Section */}
      <section className="erp-hero">
        <div 
          className="erp-hero-banner"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.81), rgba(0, 0, 0, 0.49)), url(${erpHeroBanner})`
          }}
        >
          <Container>
            <Row className="align-items-center min-vh-60">
              <Col lg={8} className="mx-auto text-center text-white">
                <Badge bg="light" text="dark" className="erp-hero-badge mb-3">
                  🚀 Enterprise-Ready Solution
                </Badge>
                <h1 className="erp-hero-title mb-4">
                  Enterprise Maximizer
                </h1>
                <p className="erp-hero-subtitle lead mb-4">
                  Unifying Business Operations with Comprehensive ERP Solutions
                </p>
                <p className="erp-hero-description mb-5">
                  Advanced Enterprise Resource Planning System designed to integrate, automate, and optimize 
                  your business processes. Built with scalability and flexibility in mind.
                </p>
                
                <div className="erp-hero-buttons">
                  <Button className="erp-btn erp-btn-primary btn-lg me-3 mb-3">
                    Get Free Demo <ArrowRight size={18} />
                  </Button>
                  <Button className="erp-btn erp-btn-light btn-lg mb-3">
                    Download Brochure
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Product Overview */}
      <section className="erp-section erp-overview-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="erp-content-left">
                <h2 className="erp-section-title mb-4">
                  Complete Business Management Solution
                </h2>
                <p className="erp-section-subtitle lead mb-4">
                  Enterprise Maximizer by <strong>Farsight SolutionsLLP</strong> is more than just an ERP system — 
                  it's a comprehensive business optimization platform.
                </p>
                <p className="erp-description mb-4">
                  Designed to adapt to your organization's unique business processes, every module within the system is 
                  <strong> modifiable</strong> and <strong>customizable</strong>, ensuring that your ERP solution 
                  perfectly aligns with your industry requirements and operational needs.
                </p>
                
                <div className="erp-benefits-list">
                  <div className="erp-benefit-item">
                    <CheckCircle size={20} className="erp-benefit-icon" />
                    <span>Fully customizable business modules and workflows</span>
                  </div>
                  <div className="erp-benefit-item">
                    <CheckCircle size={20} className="erp-benefit-icon" />
                    <span>Scalable from small business to large enterprise</span>
                  </div>
                  <div className="erp-benefit-item">
                    <CheckCircle size={20} className="erp-benefit-icon" />
                    <span>Cloud-based with on-premise deployment options</span>
                  </div>
                  <div className="erp-benefit-item">
                    <CheckCircle size={20} className="erp-benefit-icon" />
                    <span>Industry-specific solutions for manufacturing, retail, and services</span>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="erp-overview-visual text-center">
                <img 
                  src={customizationImage} 
                  alt="Enterprise Maximizer Dashboard" 
                  className="erp-overview-img rounded-3 shadow-lg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Benefits */}
      <section className="erp-section erp-benefits-section py-5 bg-light">
        <Container>
          <div className="erp-section-header text-center mb-5">
            <h2 className="erp-section-title mb-4">Why Choose Enterprise Maximizer?</h2>
            <p className="erp-section-subtitle lead">
              Transform your business operations with our comprehensive ERP platform
            </p>
          </div>

          <Row className="g-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Col key={index} md={6} lg={4}>
                  <Card className="erp-benefit-card h-100 shadow-sm border-0 text-center">
                    <Card.Body className="p-4">
                      <div className="erp-benefit-icon-wrapper mb-4">
                        <IconComponent size={32} className="erp-benefit-icon" />
                      </div>
                      <Card.Title className="erp-benefit-title h5 mb-3">{benefit.title}</Card.Title>
                      <Card.Text className="erp-benefit-description">
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

      {/* Features Section */}
      <section className="erp-section erp-features-section py-5">
        <Container>
          <div className="erp-section-header text-center mb-5">
            <h2 className="erp-section-title mb-4">Comprehensive ERP Modules</h2>
            <p className="erp-section-subtitle lead">
              Integrated modules designed to handle every aspect of your business operations
            </p>
          </div>

          <Row>
            <Col lg={4} className="mb-4">
              <div className="erp-features-nav">
                {keyFeatures.map((feature) => {
                  const IconComponent = feature.icon;
                  return (
                    <button
                      key={feature.id}
                      className={`erp-feature-nav-btn ${activeFeature === feature.id ? 'active' : ''}`}
                      onClick={() => setActiveFeature(feature.id)}
                    >
                      <IconComponent size={20} className="erp-feature-nav-icon" />
                      <span>{feature.title}</span>
                    </button>
                  );
                })}
              </div>
            </Col>
            
            <Col lg={8}>
              <div className="erp-feature-detail">
                {keyFeatures.map((feature) => (
                  <div 
                    key={feature.id} 
                    className={`erp-feature-detail-content ${activeFeature === feature.id ? 'active' : ''}`}
                  >
                    <div className="erp-feature-image mb-4">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="erp-feature-img rounded-3"
                      />
                    </div>
                    <h3 className="erp-feature-detail-title mb-3">{feature.title}</h3>
                    <p className="erp-feature-detail-description mb-4">
                      {feature.description}
                    </p>
                    <div className="erp-feature-highlights">
                      <h5 className="erp-highlights-title mb-3">Key Capabilities:</h5>
                      <ul className="erp-highlights-list">
                        {feature.highlights.map((highlight, index) => (
                          <li key={index} className="erp-highlight-item">
                            <CheckCircle size={16} className="erp-highlight-icon" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Customization Section */}
      <section className="erp-section erp-customization-section py-5 bg-light">
        <Container>
          <div className="erp-section-header text-center mb-5">
            <h2 className="erp-section-title mb-4">Tailored to Your Business Needs</h2>
            <p className="erp-section-subtitle lead">
              Every aspect of Enterprise Maximizer is designed to be modified according to your industry requirements
            </p>
          </div>

          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="erp-customization-content">
                <h3 className="erp-customization-title mb-4">Complete Customization Freedom</h3>
                <p className="erp-customization-description mb-4">
                  Unlike rigid ERP systems, Enterprise Maximizer gives you complete control over every module, 
                  business workflow, and reporting structure. Adapt the system to match your existing business processes 
                  rather than changing your processes to fit the software.
                </p>
                
                <div className="erp-customization-features">
                  {customizationFeatures.map((feature, index) => (
                    <div key={index} className="erp-customization-feature">
                      <Settings size={18} className="erp-customization-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="erp-customization-visual text-center">
                <img 
                  src={customizationImage} 
                  alt="Customization Options" 
                  className="erp-customization-img rounded-3 shadow"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="erp-section erp-pricing-section py-5">
        <Container>
          <div className="erp-section-header text-center mb-5">
            <h2 className="erp-section-title mb-4">Flexible Pricing Plans</h2>
            <p className="erp-section-subtitle lead">
              Choose the plan that best fits your organization's size and business requirements
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            {pricingTiers.map((tier, index) => (
              <Col key={index} md={6} lg={4}>
                <Card className={`erp-pricing-card h-100 shadow-sm border-0 ${tier.popular ? 'popular' : ''}`}>
                  {tier.popular && (
                    <div className="erp-popular-badge">Most Popular</div>
                  )}
                  <Card.Body className="p-4 text-center">
                    <Card.Title className="erp-pricing-tier h4 mb-2">{tier.name}</Card.Title>
                    <p className="erp-pricing-description text-muted mb-4">{tier.description}</p>
                    
                    <div className="erp-pricing-amount mb-4">
                      <span className="erp-price">{tier.price}</span>
                      <span className="erp-period">/{tier.period}</span>
                    </div>
                    
                    <ul className="erp-pricing-features">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="erp-pricing-feature">
                          <CheckCircle size={16} className="erp-feature-check" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className={`erp-btn w-100 mt-4 ${tier.popular ? 'erp-btn-primary' : 'erp-btn-outline'}`}>
                      Get Started
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About Farsight SolutionsLLP */}
      <section className="erp-section erp-about-section py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="erp-about-visual text-center">
                <img 
                  src={farsightOfficeImage} 
                  alt="Farsight SolutionsLLP" 
                  className="erp-about-img rounded-3 shadow"
                />
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="erp-about-content">
                <h2 className="erp-section-title mb-4">About Farsight SolutionsLLP</h2>
                <p className="erp-about-description mb-4">
                  Farsight SolutionsLLP is a premier business consulting and technology solutions provider 
                  based in India. With years of expertise in enterprise software development and business 
                  process optimization, we deliver innovative ERP solutions that drive operational excellence 
                  and business growth.
                </p>
                
                <div className="erp-company-highlights">
                  <div className="erp-highlight-item">
                    <Building size={20} className="erp-highlight-icon" />
                    <div>
                      <h5>Enterprise Technology Expertise</h5>
                      <p>Specialized in scalable business management solutions</p>
                    </div>
                  </div>
                  <div className="erp-highlight-item">
                    <Target size={20} className="erp-highlight-icon" />
                    <div>
                      <h5>Industry-Specific Solutions</h5>
                      <p>Custom ERP solutions tailored to your industry needs</p>
                    </div>
                  </div>
                  <div className="erp-highlight-item">
                    <Award size={20} className="erp-highlight-icon" />
                    <div>
                      <h5>Proven Track Record</h5>
                      <p>Trusted by businesses across manufacturing, retail, and services</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="erp-section erp-faq-section py-5">
        <Container>
          <div className="erp-section-header text-center mb-5">
            <h2 className="erp-section-title mb-4">Frequently Asked Questions</h2>
            <p className="erp-section-subtitle lead">
              Get answers to common questions about Enterprise Maximizer
            </p>
          </div>

          <div className="erp-accordion-container">
            <Accordion className="erp-accordion">
              {faqs.map((faq, index) => (
                <Accordion.Item key={index} eventKey={index.toString()} className="erp-accordion-item">
                  <Accordion.Header className="erp-accordion-header">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body className="erp-accordion-body">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="erp-section erp-cta-section py-4">
        <Container>
          <div className="erp-cta-content text-center text-white">
            <h2 className="erp-cta-title mb-4">
              Ready to Transform Your Business Operations?
            </h2>
            <p className="erp-cta-subtitle lead mb-5">
              Join hundreds of organizations that trust Enterprise Maximizer for their ERP needs. 
              Schedule a personalized demo to see how we can help your business achieve operational excellence.
            </p>
            <div className="erp-cta-buttons">
              <Button className="erp-btn erp-btn-light btn-lg me-3 mb-3">
                Schedule Free Demo
              </Button>
              <Button className="erp-btn erp-btn-outline-light btn-lg mb-3">
                Contact Sales
              </Button>
            </div>
            <p className="erp-cta-note mt-4">
              📞 Call us at +91-9821605930 | ✉️ info@farsight.co.in
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ERP