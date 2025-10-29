import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Globe, Search, TrendingUp, Users, Target, MessageSquare, Database, ArrowRight, CheckCircle } from "lucide-react";

// Import images
// import marketingHeroBanner from "../../assets/images/marketing-hero-banner.jpg";
// import websiteServiceImage from "../../assets/images/website-service.jpg";
// import digitalMarketingImage from "../../assets/images/digital-marketing.jpg";
// import seoServiceImage from "../../assets/images/seo-service.jpg";
// import socialMediaImage from "../../assets/images/social-media.jpg";
// import ppcServiceImage from "../../assets/images/ppc-service.jpg";
// import whatsappMarketingImage from "../../assets/images/whatsapp-marketing.jpg";
// import crmServiceImage from "../../assets/images/crm-service.jpg";

// Replace the import statements with these if using online images
const marketingHeroBanner = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const websiteServiceImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const digitalMarketingImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const seoServiceImage = "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const socialMediaImage = "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const ppcServiceImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const whatsappMarketingImage = "https://growvid.com/wp-content/uploads/2023/08/whatsapp-marketing.jpg";
const crmServiceImage = "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

import "../../assets/scss/pages/marketing-assistance.scss";

const MarketingAssistance = () => {
  const businessServices = [
    {
      id: 1,
      icon: Globe,
      title: "Website Development & Design",
      description: "Enterprise-grade website development with advanced SEO optimization, superior performance metrics, and conversion-focused architecture designed to establish robust digital presence and accelerate business growth.",
      image: websiteServiceImage
    },
    {
      id: 2,
      icon: Target,
      title: "Digital Marketing Solutions",
      description: "Comprehensive digital marketing strategies encompassing search engine marketing, social media advertising, display campaigns, and content marketing to maximize return on investment and customer acquisition.",
      image: digitalMarketingImage
    },
    {
      id: 3,
      icon: Search,
      title: "Search Engine Optimization",
      description: "Strategic SEO implementation combining technical optimization, authoritative content development, and high-quality link building to enhance organic search visibility and generate qualified traffic.",
      image: seoServiceImage
    },
    {
      id: 4,
      icon: Users,
      title: "Social Media Management",
      description: "Professional social media marketing across major platforms including Instagram, Facebook, LinkedIn, and Twitter with analytics-driven content strategies and targeted paid advertising campaigns.",
      image: socialMediaImage
    },
    {
      id: 5,
      icon: TrendingUp,
      title: "Performance Marketing & PPC",
      description: "Results-oriented pay-per-click advertising campaigns on Google Ads and social media platforms with continuous optimization, comprehensive conversion tracking, and transparent ROI reporting.",
      image: ppcServiceImage
    },
    {
      id: 6,
      icon: MessageSquare,
      title: "WhatsApp Business Marketing",
      description: "Strategic WhatsApp marketing solutions featuring broadcast campaigns, automated customer engagement workflows, and seamless CRM integration for enhanced business communication.",
      image: whatsappMarketingImage
    },
  ];

  const qualityFeatures = [
    "ISO Certified Quality Standards",
    "Data-Driven Marketing Methodologies",
    "Dedicated Account Management",
    "Transparent Performance Reporting",
  ];

  return (
    <div className="ma-wrapper">
      {/* Hero Section */}
      <section className="ma-hero">
        <div 
          className="ma-hero-banner"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.81), rgba(0, 0, 0, 0.49)), url(${marketingHeroBanner})`
          }}
        >
          <Container>
            <Row className="align-items-center min-vh-60">
              <Col lg={8} className="mx-auto text-center text-white">
                <h1 className="ma-hero-title mb-4">
                  Comprehensive Business Solutions
                </h1>
                <p className="ma-hero-subtitle lead mb-2 fw-bold">
                  360° Digital Growth Services for MSMEs
                </p>
                <p className="ma-hero-description mb-2">
                  Farsight Solutions delivers integrated business support services specifically designed for Indian startups and MSMEs. From digital transformation initiatives to strategic market expansion, we provide comprehensive frameworks and execution expertise essential for sustainable business growth.
                </p>
                
                <div className="ma-feature-badges mb-5">
                  {qualityFeatures.map((feature, index) => (
                    <div key={index} className="ma-feature-item">
                      <CheckCircle size={18} className="ma-feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="ma-hero-buttons">
                  <Button className="ma-btn ma-btn-primary me-3 mb-3">
                    Request Consultation
                  </Button>
                  <Button className="ma-btn ma-btn-secondary mb-3">
                    View Case Studies
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="ma-section ma-business-section py-5">
        <Container>
          <div className="ma-section-header text-center mb-5">
            <h2 className="ma-section-title mb-4">
              Our Comprehensive Service Portfolio
            </h2>
            <p className="ma-section-subtitle lead">
              Empowering Indian Businesses with Strategic Digital Solutions — From{" "}
              <span className="ma-accent-text">Market Entry to Market Leadership</span>
            </p>
          </div>

          <Row className="g-4">
            <Col lg={4} className="mb-4">
              <div className="ma-left-content text-center text-lg-start">
                <h3 className="ma-service-title">Business Expansion Services</h3>
                <div className="ma-title-underline mx-auto mx-lg-0" />
                
                <p className="ma-service-description lead">
                  Strategic Growth Through Digital Transformation
                </p>
                
                <p className="ma-service-text">
                  Farsight Solutions enables MSMEs and startups to expand beyond regional boundaries through strategic digital initiatives. Our business expansion services integrate market intelligence, digital infrastructure development, and proven marketing frameworks to facilitate sustainable growth and successful market penetration across India.
                </p>
                
                <div className="ma-confused-box mt-4">
                  <p className="ma-confused-title">Schedule a Strategy Session</p>
                  <p className="ma-confused-text">
                    Our business consultants will conduct a comprehensive analysis of your expansion requirements and develop a customized growth roadmap aligned with your business objectives.
                  </p>
                  <Button className="ma-btn ma-btn-expansion w-100">
                    Begin Your Expansion <ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            </Col>

            <Col lg={8}>
              <Row className="g-4">
                {businessServices.map((service) => {
                  const IconComponent = service.icon;
                  return (
                    <Col key={service.id} md={6}>
                      <Card className="ma-service-card h-100 shadow-sm border-0">
                        <Card.Img 
                          variant="top" 
                          src={service.image} 
                          className="ma-card-img"
                          alt={service.title}
                        />
                        <Card.Body className="text-center p-4">
                          <IconComponent size={48} className="ma-service-icon mb-3" />
                          <Card.Title className="ma-service-card-title h5 mb-3">
                            {service.title}
                          </Card.Title>
                          <Card.Text className="ma-service-card-description">
                            {service.description}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>

          {/* CRM Section */}
          <Row className="g-4 mt-5">
            <Col md={12}>
              <Card className="ma-crm-card shadow-sm border-0">
                <Card.Img 
                  variant="top" 
                  src={crmServiceImage} 
                  className="ma-card-img"
                  alt="CRM Solutions"
                />
                <Card.Body className="text-center p-5">
                  <Database size={56} className="ma-service-icon ma-crm-icon mb-4" />
                  <Card.Title className="ma-crm-title h4 mb-4">
                    Customer Relationship Management Solutions
                  </Card.Title>
                  <Card.Text className="ma-crm-description lead mb-4">
                    Implement enterprise-grade CRM systems designed to streamline customer interactions, automate sales processes, and enhance customer retention metrics. Our CRM solutions integrate seamlessly with your existing business operations to deliver measurable improvements in customer satisfaction and revenue growth.
                  </Card.Text>
                  <Button className="ma-btn ma-btn-primary btn-lg">
                    Explore CRM Solutions
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default MarketingAssistance;