import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { 
  TrendingUp, 
  Shield, 
  Award, 
  DollarSign, 
  Target, 
  Briefcase, 
  Building, 
  FileText, 
  CheckCircle, 
  Users 
} from "lucide-react";
import "../../assets/scss/pages/certification-assistance.scss";

// Hero background image only
const heroBanner = "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

const CertificationAssistance = () => {
  const msmeFeatures = [
    {
      id: 1,
      iconName: "dollar-sign",
      title: "Priority Access to Credit and Tax Benefits",
      description: "Secure collateral-free loans with subsidized interest rates and streamlined taxation processes under government schemes designed for MSMEs."
    },
    {
      id: 2,
      iconName: "shield",
      title: "Credit Guarantee Trust Fund Support",
      description: "Access collateral-free credit facilities through government-backed guarantee schemes, reducing financial barriers to business growth."
    },
    {
      id: 3,
      iconName: "trending-up",
      title: "Market Development and Export Promotion",
      description: "Participate in international trade fairs, domestic exhibitions, and government e-marketplace portals with subsidized participation costs."
    },
    {
      id: 4,
      iconName: "award",
      title: "Interest Rate Subsidy Schemes",
      description: "Benefit from credit-linked capital subsidy schemes and interest subvention programs to reduce operational costs significantly."
    },
    {
      id: 5,
      iconName: "target",
      title: "Public Procurement Policy Advantages",
      description: "Enjoy relaxed tender norms with exemption from earnest money deposit and preferential treatment in government procurement processes."
    },
    {
      id: 6,
      iconName: "briefcase",
      title: "Enhanced Business Credibility",
      description: "Establish institutional credibility with banks, investors, and corporate clients through government-recognized MSME status."
    },
  ];

  const startupFeatures = [
    {
      id: 1,
      iconName: "building",
      title: "Government Funding Eligibility",
      description: "Access central and state government schemes including seed fund initiatives and various innovation grants for startups."
    },
    {
      id: 2,
      iconName: "dollar-sign",
      title: "Seed Capital and Venture Funding",
      description: "Qualify for funding under various government initiatives with simplified application processes and favorable terms."
    },
    {
      id: 3,
      iconName: "file-text",
      title: "Simplified Public Procurement Access",
      description: "Benefit from exemptions on earnest money deposit and relaxed criteria in government tenders as per Public Procurement Policy."
    },
    {
      id: 4,
      iconName: "award",
      title: "Intellectual Property Rights Support",
      description: "Receive substantial rebates on patent filing fees and fast-track examination of patent applications through facilitation programs."
    },
    {
      id: 5,
      iconName: "shield",
      title: "Income Tax Exemptions",
      description: "Avail consecutive years of income tax exemption under relevant sections of the Income Tax Act, subject to eligibility criteria."
    },
    {
      id: 6,
      iconName: "users",
      title: "Networking and Mentorship Programs",
      description: "Access free mentorship, industry connect programs, and enhanced visibility through government startup portals."
    },
  ];

  const otherCertifications = [
    {
      id: 1,
      iconName: "file-text",
      title: "Tax Exemption Certificates",
      description: "Comprehensive assistance for obtaining tax exemption certificates under applicable sections for eligible business entities."
    },
    {
      id: 2,
      iconName: "check-circle",
      title: "NIDHI Company Registration",
      description: "Complete support for registering as a NIDHI Company under relevant sections of the Companies Act for mutual benefit operations."
    },
    {
      id: 3,
      iconName: "award",
      title: "ISO Certification Services",
      description: "End-to-end assistance for obtaining ISO quality management system certifications and other international standards."
    },
    {
      id: 4,
      iconName: "target",
      title: "Zero Defect Zero Effect Certification",
      description: "Complete guidance for manufacturing enterprises to achieve ZED certification and enhance global competitiveness."
    },
  ];

  const farsightFeatures = [
    {
      id: 1,
      iconName: "file-text",
      title: "Complete Documentation Support",
      description: "Comprehensive assistance in preparing and organizing all required documents including identification, business registration proof, and investment details."
    },
    {
      id: 2,
      iconName: "users",
      title: "Expert Consultation Services",
      description: "One-on-one consultation with certified professionals to understand eligibility criteria, scheme benefits, and long-term business advantages."
    },
    {
      id: 3,
      iconName: "check-circle",
      title: "Registration Portal Assistance",
      description: "Step-by-step guidance through official registration portals ensuring accurate data entry and successful certificate generation."
    },
    {
      id: 4,
      iconName: "shield",
      title: "Compliance and Verification",
      description: "Thorough verification of all information to ensure compliance with government guidelines and prevent application rejection."
    },
    {
      id: 5,
      iconName: "award",
      title: "Post-Registration Support",
      description: "Guidance on leveraging certification benefits including scheme applications, subsidy claims, and annual compliance requirements."
    },
    {
      id: 6,
      iconName: "briefcase",
      title: "Multi-Certification Assistance",
      description: "Integrated support for multiple certifications to maximize your business benefits under one comprehensive service."
    },
  ];

  const getIcon = (iconName) => {
    const iconProps = { size: 48, strokeWidth: 1.5 };
    const icons = {
      'dollar-sign': <DollarSign {...iconProps} />,
      'shield': <Shield {...iconProps} />,
      'trending-up': <TrendingUp {...iconProps} />,
      'award': <Award {...iconProps} />,
      'target': <Target {...iconProps} />,
      'briefcase': <Briefcase {...iconProps} />,
      'building': <Building {...iconProps} />,
      'file-text': <FileText {...iconProps} />,
      'check-circle': <CheckCircle {...iconProps} />,
      'users': <Users {...iconProps} />
    };
    return icons[iconName] || <Award {...iconProps} />;
  };

  return (
    <div className="ca-wrapper">
      {/* Hero Section */}
      <section className="ca-hero">
        <div 
          className="ca-hero-banner"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.81), rgba(0, 0, 0, 0.49)), url(${heroBanner})`
          }}
        >
          <Container>
            <Row className="align-items-center min-vh-60">
              <Col lg={8} className="mx-auto text-center text-white">
                <h1 className="ca-hero-title mb-4">
                  MSME Certification Services in India
                </h1>
                <p className="ca-hero-subtitle lead mb-4">
                  Empowering Your Business with Government-Backed Benefits
                </p>
                <p className="ca-hero-description mb-5">
                  Transform Your Business with Official Recognition and unlock substantial benefits including preferential credit access, reduced interest rates, government tender advantages, and tax incentives.
                </p>
                <div className="ca-hero-buttons">
                  <Button  className="ca-btn ca-btn-primary me-3 mb-3">Get Started Today</Button>
                  <Button className="ca-btn ca-btn-secondary mb-3">Consult Our Experts</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* MSME Certification Section */}
      <section className="ca-section ca-msme-section py-5">
        <Container>
          <div className="ca-section-header text-center mb-5">
            <h2 className="ca-section-title mb-4">Understanding MSME Certification in India</h2>
            <p className="ca-section-subtitle lead mb-4">
              MSME Certification, officially known as Udyam Registration, is a government-issued recognition that validates your enterprise classification as Micro, Small, or Medium based on investment and turnover criteria.
            </p>
            <div className="ca-highlight bg-light p-3 rounded d-inline-block">
              <span className="ca-highlight-badge me-2">✓</span>
              <span className="ca-highlight-text">Strategic Advantages of MSME Certification</span>
            </div>
          </div>

          <Row className="g-4">
            {msmeFeatures.map((feature) => (
              <Col key={feature.id} md={6} lg={4}>
                <Card className="ca-feature-card h-100 shadow-sm border-0">
                  <Card.Body className="text-center p-4">
                    <div className="ca-feature-icon mb-4">{getIcon(feature.iconName)}</div>
                    <Card.Title className="ca-feature-title h5 mb-3">{feature.title}</Card.Title>
                    <Card.Text className="ca-feature-description">{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="ca-section-footer text-center mt-5">
            <Button className="ca-btn ca-btn-primary btn-lg">Schedule Expert Consultation</Button>
          </div>
        </Container>
      </section>

      {/* Startup India Section */}
      <section className="ca-section ca-startup-section py-5 bg-light">
        <Container>
          <div className="ca-section-header text-center mb-5">
            <h2 className="ca-section-title mb-4">Startup India Recognition Certificate</h2>
            <p className="ca-section-subtitle lead mb-4">Accelerate Innovation with Government-Backed Startup Ecosystem</p>
            <div className="ca-highlight bg-white p-3 rounded d-inline-block">
              <span className="ca-highlight-badge me-2">✓</span>
              <span className="ca-highlight-text">
                Access exclusive benefits and accelerate business growth through government support programs
              </span>
            </div>
          </div>

          <Row className="g-4">
            {startupFeatures.map((feature) => (
              <Col key={feature.id} md={6} lg={4}>
                <Card className="ca-feature-card h-100 shadow-sm border-0">
                  <Card.Body className="text-center p-4">
                    <div className="ca-feature-icon mb-4">{getIcon(feature.iconName)}</div>
                    <Card.Title className="ca-feature-title h5 mb-3">{feature.title}</Card.Title>
                    <Card.Text className="ca-feature-description">{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="ca-section-footer text-center mt-5">
            <Button className="ca-btn ca-btn-primary btn-lg">Explore Startup Registration</Button>
          </div>
        </Container>
      </section>

      {/* Other Certifications Section */}
      <section className="ca-section ca-other-section py-5">
        <Container>
          <div className="ca-section-header text-center mb-5">
            <h2 className="ca-section-title mb-4">Additional Business Certification Services</h2>
            <div className="ca-highlight bg-light p-3 rounded d-inline-block">
              <span className="ca-highlight-badge me-2">✓</span>
              <span className="ca-highlight-text">
                Comprehensive support for essential business certifications that enhance regulatory compliance and market credibility
              </span>
            </div>
          </div>

          <Row className="g-4">
            {otherCertifications.map((cert) => (
              <Col key={cert.id} md={6} lg={3}>
                <Card className="ca-feature-card h-100 shadow-sm border-0">
                  <Card.Body className="text-center p-4">
                    <div className="ca-feature-icon mb-4">{getIcon(cert.iconName)}</div>
                    <Card.Title className="ca-feature-title h5 mb-3">{cert.title}</Card.Title>
                    <Card.Text className="ca-feature-description">{cert.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="ca-section-footer text-center mt-5">
            <Button className="ca-btn ca-btn-primary btn-lg">Request Certification Guidance</Button>
          </div>
        </Container>
      </section>

      {/* Farsight Support Section */}
      <section className="ca-section ca-egniol-section py-5 bg-light">
        <Container>
          <div className="ca-section-header text-center mb-5">
            <h2 className="ca-section-title mb-4">Farsight Solutions: Your Certification Partner</h2>
            <p className="ca-section-subtitle lead mb-4">
              We simplify the entire certification process through expert guidance and end-to-end support.
            </p>
            <div className="ca-highlight bg-white p-3 rounded d-inline-block">
              <span className="ca-highlight-badge me-2">✓</span>
              <span className="ca-highlight-text">Our Comprehensive Certification Services Include:</span>
            </div>
          </div>

          <Row className="g-4">
            {farsightFeatures.map((feature) => (
              <Col key={feature.id} md={6} lg={4}>
                <Card className="ca-feature-card h-100 shadow-sm border-0">
                  <Card.Body className="text-center p-4">
                    <div className="ca-feature-icon mb-4">{getIcon(feature.iconName)}</div>
                    <Card.Title className="ca-feature-title h5 mb-3">{feature.title}</Card.Title>
                    <Card.Text className="ca-feature-description">{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="ca-section-footer text-center mt-5">
            <Button className="ca-btn ca-btn-primary btn-lg">Register with Farsight Solutions Now</Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CertificationAssistance;