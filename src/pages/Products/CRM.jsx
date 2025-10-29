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
  Phone,
  Mail,
  Calendar,
  PieChart
} from "lucide-react";

// CRM images using online sources
const crmHeroBanner = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const leadManagementImage = "https://www.practiceguru.pro/images/startup-india.jpg";
const contactManagementImage = "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const salesPipelineImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const customerSupportImage = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const analyticsDashboardImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const securityFeaturesImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvunrzmd6U9JOnKVD2BUOEuMAkPEXztSp6kFZ1HsfW08KMUmeoaFbIr2P6re9eskcblx4&usqp=CAU";
const customizationImage = "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const farsightOfficeImage = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

import "../../assets/scss/pages/crm.scss";

const CRM = () => {
  const [activeFeature, setActiveFeature] = useState("leads")

  const keyFeatures = [
    {
      id: "leads",
      icon: Users,
      title: "Lead Management & Tracking",
      description: "Capture, qualify, and track leads through the entire sales funnel with automated lead scoring and distribution.",
      image: leadManagementImage,
      highlights: [
        "Automated lead capture",
        "Lead scoring & prioritization",
        "Lead distribution rules",
        "Conversion tracking"
      ]
    },
    {
      id: "contacts",
      icon: Phone,
      title: "Contact & Account Management",
      description: "Maintain complete customer profiles with interaction history, preferences, and relationship mapping.",
      image: contactManagementImage,
      highlights: [
        "360-degree customer view",
        "Contact hierarchy management",
        "Interaction history tracking",
        "Relationship mapping"
      ]
    },
    {
      id: "sales",
      icon: TrendingUp,
      title: "Sales Pipeline Management",
      description: "Visualize and manage your sales pipeline with customizable stages, forecasts, and performance metrics.",
      image: salesPipelineImage,
      highlights: [
        "Visual pipeline dashboard",
        "Sales forecasting",
        "Deal stage management",
        "Performance analytics"
      ]
    },
    {
      id: "support",
      icon: Mail,
      title: "Customer Support & Service",
      description: "Deliver exceptional customer service with ticket management, knowledge base, and support automation.",
      image: customerSupportImage,
      highlights: [
        "Ticket management system",
        "Knowledge base integration",
        "SLAs and escalation rules",
        "Customer satisfaction tracking"
      ]
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "Advanced Analytics & Reporting",
      description: "Gain deep insights into sales performance, customer behavior, and team productivity with comprehensive analytics.",
      image: analyticsDashboardImage,
      highlights: [
        "Custom report builder",
        "Real-time sales dashboards",
        "Customer behavior analysis",
        "ROI tracking"
      ]
    },
    {
      id: "security",
      icon: Shield,
      title: "Role-Based Access Control",
      description: "Ensure data security with customizable user permissions and compliance features tailored to your business.",
      image: securityFeaturesImage,
      highlights: [
        "Multi-level access control",
        "Data encryption",
        "Audit trail logging",
        "GDPR compliance ready"
      ]
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Increased Sales Efficiency",
      description: "Automate sales processes and reduce administrative workload by up to 70%"
    },
    {
      icon: Target,
      title: "Data-Driven Decisions",
      description: "Make informed decisions with real-time analytics and comprehensive sales reporting"
    },
    {
      icon: Award,
      title: "Enhanced Customer Relationships",
      description: "Build stronger customer relationships with centralized communication history"
    },
    {
      icon: Database,
      title: "Centralized Customer Data",
      description: "Single source of truth for all customer-related information and interactions"
    },
    {
      icon: Lock,
      title: "Improved Data Security",
      description: "Enterprise-grade security with role-based access controls and encryption"
    },
    {
      icon: Building,
      title: "Scalable Solution",
      description: "Grows with your business from startup to enterprise level"
    }
  ]

  const customizationFeatures = [
    "Custom sales workflow configurations",
    "Brand-specific UI theming",
    "Custom field creation for contacts",
    "Report template customization",
    "Integration with existing systems",
    "Role and permission tailoring"
  ]

  const faqs = [
    {
      question: "Is Customer Maximizer suitable for small businesses?",
      answer: "Yes, Customer Maximizer is designed to scale from small startups to large enterprises. Our modular approach allows you to start with essential features and add more as your business grows."
    },
    {
      question: "Can we customize the system to match our sales processes?",
      answer: "Absolutely. Every module in Customer Maximizer is fully customizable. You can modify sales workflows, contact fields, reports, and permissions to align perfectly with your organization's unique requirements."
    },
    {
      question: "What kind of support and training do you provide?",
      answer: "We provide comprehensive implementation support, administrator training, user documentation, and ongoing technical support to ensure smooth adoption and optimal usage."
    },
    {
      question: "Is our customer data secure with Customer Maximizer?",
      answer: "Yes, we employ enterprise-grade security measures including data encryption, secure servers, regular backups, and compliance with data protection regulations to keep your information safe."
    },
    {
      question: "Can we integrate with our existing software systems?",
      answer: "Customer Maximizer offers API integration capabilities to connect with your email platforms, marketing automation tools, accounting software, and other business applications."
    }
  ]

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for small teams",
      price: "₹4,999",
      period: "per month",
      features: [
        "Up to 50 contacts",
        "Basic lead management",
        "Contact tracking",
        "Email integration",
        "Standard support"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "₹9,999",
      period: "per month",
      features: [
        "Up to 500 contacts",
        "Advanced lead scoring",
        "Sales pipeline management",
        "Custom reporting",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom",
      period: "tailored pricing",
      features: [
        "Unlimited contacts",
        "Full customization",
        "Advanced analytics",
        "API integrations",
        "Dedicated support",
        "On-premise deployment"
      ]
    }
  ]

  return (
    <div className="crm-wrapper">
      {/* Hero Section */}
      <section className="crm-hero">
        <div 
          className="crm-hero-banner"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.81), rgba(0, 0, 0, 0.49)), url(${crmHeroBanner})`
          }}
        >
          <Container>
            <Row className="align-items-center min-vh-60">
              <Col lg={8} className="mx-auto text-center text-white">
                <Badge bg="light" text="dark" className="crm-hero-badge mb-3">
                  🚀 Enterprise-Ready Solution
                </Badge>
                <h1 className="crm-hero-title mb-4">
                  Customer Maximizer
                </h1>
                <p className="crm-hero-subtitle lead mb-4">
                  Empowering Businesses with Smarter Customer Relationship Management
                </p>
                <p className="crm-hero-description mb-5">
                  Advanced CRM System designed to streamline, automate, and optimize your customer relationships. 
                  Built with flexibility and sales efficiency in mind.
                </p>
                
                <div className="crm-hero-buttons">
                  <Button className="crm-btn crm-btn-primary btn-lg me-3 mb-3">
                    Get Free Demo <ArrowRight size={18} />
                  </Button>
                  <Button className="crm-btn crm-btn-light btn-lg mb-3">
                    Download Brochure
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Product Overview */}
      <section className="crm-section crm-overview-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="crm-content-left">
                <h2 className="crm-section-title mb-4">
                  Complete Customer Relationship Management Solution
                </h2>
                <p className="crm-section-subtitle lead mb-4">
                  Customer Maximizer by <strong>Farsight SolutionsLLP</strong> is more than just a CRM tool — 
                  it's a comprehensive customer success platform.
                </p>
                <p className="crm-description mb-4">
                  Designed to adapt to your organization's unique sales processes, every feature within the system is 
                  <strong> modifiable</strong> and <strong>customizable</strong>, ensuring that your CRM perfectly 
                  aligns with your business needs and customer engagement strategies.
                </p>
                
                <div className="crm-benefits-list">
                  <div className="crm-benefit-item">
                    <CheckCircle size={20} className="crm-benefit-icon" />
                    <span>Fully customizable sales workflows and pipelines</span>
                  </div>
                  <div className="crm-benefit-item">
                    <CheckCircle size={20} className="crm-benefit-icon" />
                    <span>Scalable from 10 to 10,000+ customers</span>
                  </div>
                  <div className="crm-benefit-item">
                    <CheckCircle size={20} className="crm-benefit-icon" />
                    <span>Cloud-based with on-premise options</span>
                  </div>
                  <div className="crm-benefit-item">
                    <CheckCircle size={20} className="crm-benefit-icon" />
                    <span>Integration with popular marketing and sales tools</span>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="crm-overview-visual text-center">
                <img 
                  src={customizationImage} 
                  alt="Customer Maximizer Dashboard" 
                  className="crm-overview-img rounded-3 shadow-lg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Key Benefits */}
      <section className="crm-section crm-benefits-section py-5 bg-light">
        <Container>
          <div className="crm-section-header text-center mb-5">
            <h2 className="crm-section-title mb-4">Why Choose Customer Maximizer?</h2>
            <p className="crm-section-subtitle lead">
              Transform your sales and customer service operations with our comprehensive CRM platform
            </p>
          </div>

          <Row className="g-4">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Col key={index} md={6} lg={4}>
                  <Card className="crm-benefit-card h-100 shadow-sm border-0 text-center">
                    <Card.Body className="p-4">
                      <div className="crm-benefit-icon-wrapper mb-4">
                        <IconComponent size={32} className="crm-benefit-icon" />
                      </div>
                      <Card.Title className="crm-benefit-title h5 mb-3">{benefit.title}</Card.Title>
                      <Card.Text className="crm-benefit-description">
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
      <section className="crm-section crm-features-section py-5">
        <Container>
          <div className="crm-section-header text-center mb-5">
            <h2 className="crm-section-title mb-4">Powerful Features for Modern Sales Teams</h2>
            <p className="crm-section-subtitle lead">
              Comprehensive modules designed to handle every aspect of customer relationship management
            </p>
          </div>

          <Row>
            <Col lg={4} className="mb-4">
              <div className="crm-features-nav">
                {keyFeatures.map((feature) => {
                  const IconComponent = feature.icon;
                  return (
                    <button
                      key={feature.id}
                      className={`crm-feature-nav-btn ${activeFeature === feature.id ? 'active' : ''}`}
                      onClick={() => setActiveFeature(feature.id)}
                    >
                      <IconComponent size={20} className="crm-feature-nav-icon" />
                      <span>{feature.title}</span>
                    </button>
                  );
                })}
              </div>
            </Col>
            
            <Col lg={8}>
              <div className="crm-feature-detail">
                {keyFeatures.map((feature) => (
                  <div 
                    key={feature.id} 
                    className={`crm-feature-detail-content ${activeFeature === feature.id ? 'active' : ''}`}
                  >
                    <div className="crm-feature-image mb-4">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="crm-feature-img rounded-3"
                      />
                    </div>
                    <h3 className="crm-feature-detail-title mb-3">{feature.title}</h3>
                    <p className="crm-feature-detail-description mb-4">
                      {feature.description}
                    </p>
                    <div className="crm-feature-highlights">
                      <h5 className="crm-highlights-title mb-3">Key Capabilities:</h5>
                      <ul className="crm-highlights-list">
                        {feature.highlights.map((highlight, index) => (
                          <li key={index} className="crm-highlight-item">
                            <CheckCircle size={16} className="crm-highlight-icon" />
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
      <section className="crm-section crm-customization-section py-5 bg-light">
        <Container>
          <div className="crm-section-header text-center mb-5">
            <h2 className="crm-section-title mb-4">Tailored to Your Sales Process</h2>
            <p className="crm-section-subtitle lead">
              Every aspect of Customer Maximizer is designed to be modified according to your sales requirements
            </p>
          </div>

          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="crm-customization-content">
                <h3 className="crm-customization-title mb-4">Complete Customization Freedom</h3>
                <p className="crm-customization-description mb-4">
                  Unlike rigid CRM systems, Customer Maximizer gives you complete control over every module, 
                  sales workflow, and reporting structure. Adapt the system to match your existing sales processes 
                  rather than changing your processes to fit the software.
                </p>
                
                <div className="crm-customization-features">
                  {customizationFeatures.map((feature, index) => (
                    <div key={index} className="crm-customization-feature">
                      <Settings size={18} className="crm-customization-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="crm-customization-visual text-center">
                <img 
                  src={customizationImage} 
                  alt="Customization Options" 
                  className="crm-customization-img rounded-3 shadow"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className="crm-section crm-pricing-section py-5">
        <Container>
          <div className="crm-section-header text-center mb-5">
            <h2 className="crm-section-title mb-4">Flexible Pricing Plans</h2>
            <p className="crm-section-subtitle lead">
              Choose the plan that best fits your organization's size and sales requirements
            </p>
          </div>

          <Row className="g-4 justify-content-center">
            {pricingTiers.map((tier, index) => (
              <Col key={index} md={6} lg={4}>
                <Card className={`crm-pricing-card h-100 shadow-sm border-0 ${tier.popular ? 'popular' : ''}`}>
                  {tier.popular && (
                    <div className="crm-popular-badge">Most Popular</div>
                  )}
                  <Card.Body className="p-4 text-center">
                    <Card.Title className="crm-pricing-tier h4 mb-2">{tier.name}</Card.Title>
                    <p className="crm-pricing-description text-muted mb-4">{tier.description}</p>
                    
                    <div className="crm-pricing-amount mb-4">
                      <span className="crm-price">{tier.price}</span>
                      <span className="crm-period">/{tier.period}</span>
                    </div>
                    
                    <ul className="crm-pricing-features">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="crm-pricing-feature">
                          <CheckCircle size={16} className="crm-feature-check" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className={`crm-btn w-100 mt-4 ${tier.popular ? 'crm-btn-primary' : 'crm-btn-outline'}`}>
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
      <section className="crm-section crm-about-section py-5 bg-light">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="crm-about-visual text-center">
                <img 
                  src={farsightOfficeImage} 
                  alt="Farsight SolutionsLLP" 
                  className="crm-about-img rounded-3 shadow"
                />
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="crm-about-content">
                <h2 className="crm-section-title mb-4">About Farsight SolutionsLLP</h2>
                <p className="crm-about-description mb-4">
                  Farsight SolutionsLLP is a premier business consulting and technology solutions provider 
                  based in India. With years of expertise in enterprise software development and business 
                  process optimization, we deliver innovative solutions that drive sales growth and customer satisfaction.
                </p>
                
                <div className="crm-company-highlights">
                  <div className="crm-highlight-item">
                    <Building size={20} className="crm-highlight-icon" />
                    <div>
                      <h5>Sales Technology Expertise</h5>
                      <p>Specialized in scalable sales automation solutions</p>
                    </div>
                  </div>
                  <div className="crm-highlight-item">
                    <Target size={20} className="crm-highlight-icon" />
                    <div>
                      <h5>Client-Centric Approach</h5>
                      <p>Custom solutions tailored to your sales processes</p>
                    </div>
                  </div>
                  <div className="crm-highlight-item">
                    <Award size={20} className="crm-highlight-icon" />
                    <div>
                      <h5>Proven Track Record</h5>
                      <p>Trusted by sales teams across various industries</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="crm-section crm-faq-section py-5">
        <Container>
          <div className="crm-section-header text-center mb-5">
            <h2 className="crm-section-title mb-4">Frequently Asked Questions</h2>
            <p className="crm-section-subtitle lead">
              Get answers to common questions about Customer Maximizer
            </p>
          </div>

          <div className="crm-accordion-container">
            <Accordion className="crm-accordion">
              {faqs.map((faq, index) => (
                <Accordion.Item key={index} eventKey={index.toString()} className="crm-accordion-item">
                  <Accordion.Header className="crm-accordion-header">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body className="crm-accordion-body">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="crm-section crm-cta-section py-4">
        <Container>
          <div className="crm-cta-content text-center text-white">
            <h2 className="crm-cta-title mb-4">
              Ready to Transform Your Customer Relationships?
            </h2>
            <p className="crm-cta-subtitle lead mb-5">
              Join hundreds of organizations that trust Customer Maximizer for their CRM needs. 
              Schedule a personalized demo to see how we can help your sales team grow.
            </p>
            <div className="crm-cta-buttons">
              <Button className="crm-btn crm-btn-light btn-lg me-3 mb-3">
                Schedule Free Demo
              </Button>
              <Button className="crm-btn crm-btn-outline-light btn-lg mb-3">
                Contact Sales
              </Button>
            </div>
            <p className="crm-cta-note mt-4">
              📞 Call us at +91-6200331997 | ✉️ info@farsight.co.in
            </p>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default CRM