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

// Import images (you'll need to add these to your assets folder)
// import heroBanner from "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcertification&psig=AOvVaw2U2Ny1XyJmSAVIY6bpgl6X&ust=1761287549671000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiVzMjZuZADFQAAAAAdAAAAABAE";
// import msmeCardImage from "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcertification&psig=AOvVaw2U2Ny1XyJmSAVIY6bpgl6X&ust=1761287549671000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiVzMjZuZADFQAAAAAdAAAAABAE";
// import startupCardImage from "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcertification&psig=AOvVaw2U2Ny1XyJmSAVIY6bpgl6X&ust=1761287549671000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiVzMjZuZADFQAAAAAdAAAAABAE";
// import certificationCardImage from "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcertification&psig=AOvVaw2U2Ny1XyJmSAVIY6bpgl6X&ust=1761287549671000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiVzMjZuZADFQAAAAAdAAAAABAE";
// import supportCardImage from "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcertification&psig=AOvVaw2U2Ny1XyJmSAVIY6bpgl6X&ust=1761287549671000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJiVzMjZuZADFQAAAAAdAAAAABAE";

// Replace the import statements with these if using online images
const heroBanner = "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const msmeCardImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const startupCardImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const certificationCardImage = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const supportCardImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

import "../../assets/scss/pages/certification-assistance.scss";

const CertificationAssistance = () => {
  const msmeFeatures = [
    {
      id: 1,
      iconName: "dollar-sign",
      title: "Priority Access to Credit and Tax Benefits",
      description: "Secure collateral-free loans with subsidized interest rates and streamlined taxation processes under government schemes designed for MSMEs.",
      image: msmeCardImage
    },
    {
      id: 2,
      iconName: "shield",
      title: "Credit Guarantee Trust Fund for Micro and Small Enterprises (CGTMSE)",
      description: "Access collateral-free credit facilities up to ₹2 crore through government-backed guarantee schemes, reducing financial barriers to growth.",
      image: msmeCardImage
    },
    {
      id: 3,
      iconName: "trending-up",
      title: "Market Development and Export Promotion",
      description: "Participate in international trade fairs, domestic exhibitions, and government e-marketplace (GeM) portals with subsidized participation costs.",
      image: msmeCardImage
    },
    {
      id: 4,
      iconName: "award",
      title: "Interest Rate Subsidy Schemes",
      description: "Benefit from the Credit Linked Capital Subsidy Scheme (CLCSS) and other interest subvention programs to reduce operational costs.",
      image: msmeCardImage
    },
    {
      id: 5,
      iconName: "target",
      title: "Public Procurement Policy Advantages",
      description: "Enjoy relaxed tender norms with exemption from earnest money deposit (EMD) and preferential treatment in government procurement processes.",
      image: msmeCardImage
    },
    {
      id: 6,
      iconName: "briefcase",
      title: "Enhanced Business Credibility",
      description: "Establish institutional credibility with banks, investors, and corporate clients through government-recognized MSME status.",
      image: msmeCardImage
    },
  ];

  const startupFeatures = [
    {
      id: 1,
      iconName: "building",
      title: "Government Funding Eligibility",
      description: "Access central and state government schemes including Startup India Seed Fund Scheme (SISFS) and various innovation grants.",
      image: startupCardImage
    },
    {
      id: 2,
      iconName: "dollar-sign",
      title: "Seed Capital and Venture Funding",
      description: "Qualify for funding under Pradhan Mantri MUDRA Yojana (PMMY) and Startup India initiatives with simplified application processes.",
      image: startupCardImage
    },
    {
      id: 3,
      iconName: "file-text",
      title: "Simplified Public Procurement Access",
      description: "Benefit from exemptions on EMD, prior turnover requirements, and experience criteria in government tenders as per Public Procurement Policy.",
      image: startupCardImage
    },
    {
      id: 4,
      iconName: "award",
      title: "Intellectual Property Rights (IPR) Support",
      description: "Receive 80% rebate on patent filing fees and fast-track examination of patent applications through facilitation programs.",
      image: startupCardImage
    },
    {
      id: 5,
      iconName: "shield",
      title: "Income Tax Exemptions",
      description: "Avail three consecutive years of income tax exemption under Section 80-IAC of the Income Tax Act, subject to eligibility criteria.",
      image: startupCardImage
    },
    {
      id: 6,
      iconName: "users",
      title: "Networking and Mentorship Programs",
      description: "Access free mentorship, industry connect programs, and listing on Startup India portal for enhanced visibility and growth opportunities.",
      image: startupCardImage
    },
  ];

  const otherCertifications = [
    {
      id: 1,
      iconName: "file-text",
      title: "Tax Exemption Certificates",
      description: "Comprehensive assistance for obtaining tax exemption certificates under applicable sections for eligible business entities.",
      image: certificationCardImage
    },
    {
      id: 2,
      iconName: "check-circle",
      title: "NIDHI Company Registration",
      description: "Complete support for registering as a NIDHI Company under Section 406 of the Companies Act, 2013 for mutual benefit operations.",
      image: certificationCardImage
    },
    {
      id: 3,
      iconName: "award",
      title: "ISO Certification Services",
      description: "End-to-end assistance for obtaining ISO 9001, ISO 14001, ISO 27001, and other quality management system certifications.",
      image: certificationCardImage
    },
    {
      id: 4,
      iconName: "target",
      title: "Zero Defect Zero Effect (ZED) Certification",
      description: "Complete guidance for manufacturing MSMEs to achieve ZED certification and enhance manufacturing excellence and global competitiveness.",
      image: certificationCardImage
    },
  ];

  const farsightFeatures = [
    {
      id: 1,
      iconName: "file-text",
      title: "Complete Documentation Support",
      description: "Comprehensive assistance in preparing and organizing all required documents including Aadhaar, PAN, business registration proof, and investment details.",
      image: supportCardImage
    },
    {
      id: 2,
      iconName: "users",
      title: "Expert Consultation Services",
      description: "One-on-one consultation with certified professionals to understand eligibility criteria, scheme benefits, and long-term business advantages.",
      image: supportCardImage
    },
    {
      id: 3,
      iconName: "check-circle",
      title: "Udyam Registration Portal Assistance",
      description: "Step-by-step guidance through the official Udyam Registration portal ensuring accurate data entry and successful certificate generation.",
      image: supportCardImage
    },
    {
      id: 4,
      iconName: "shield",
      title: "Compliance and Verification",
      description: "Thorough verification of all information to ensure compliance with Ministry of MSME guidelines and prevent application rejection.",
      image: supportCardImage
    },
    {
      id: 5,
      iconName: "award",
      title: "Post-Registration Support",
      description: "Guidance on leveraging MSME benefits including scheme applications, subsidy claims, and annual return filing under Section 8 requirements.",
      image: supportCardImage
    },
    {
      id: 6,
      iconName: "briefcase",
      title: "Multi-Certification Assistance",
      description: "Integrated support for MSME, Startup India, and other relevant certifications to maximize your business benefits under one roof.",
      image: supportCardImage
    },
  ];

  const getIcon = (iconName) => {
    const iconProps = { size: 40, strokeWidth: 1.5 };
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
                  <Button className="ca-btn ca-btn-primary me-3 mb-3">Get Started Today</Button>
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
                  <Card.Img 
                    variant="top" 
                    src={feature.image} 
                    className="ca-card-img"
                    alt={feature.title}
                  />
                  <Card.Body className="text-center p-4">
                    <div className="ca-feature-icon mb-3">{getIcon(feature.iconName)}</div>
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
                  <Card.Img 
                    variant="top" 
                    src={feature.image} 
                    className="ca-card-img"
                    alt={feature.title}
                  />
                  <Card.Body className="text-center p-4">
                    <div className="ca-feature-icon mb-3">{getIcon(feature.iconName)}</div>
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
                  <Card.Img 
                    variant="top" 
                    src={cert.image} 
                    className="ca-card-img"
                    alt={cert.title}
                  />
                  <Card.Body className="text-center p-4">
                    <div className="ca-feature-icon mb-3">{getIcon(cert.iconName)}</div>
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
            <h2 className="ca-section-title mb-4">Farsight Solution LLP: Your MSME Certification Partner</h2>
            <p className="ca-section-subtitle lead mb-4">
              We simplify the entire MSME registration process through expert guidance and end-to-end support.
            </p>
            <div className="ca-highlight bg-white p-3 rounded d-inline-block">
              <span className="ca-highlight-badge me-2">✓</span>
              <span className="ca-highlight-text">Our Comprehensive MSME Certification Services Include:</span>
            </div>
          </div>

          <Row className="g-4">
            {farsightFeatures.map((feature) => (
              <Col key={feature.id} md={6} lg={4}>
                <Card className="ca-feature-card h-100 shadow-sm border-0">
                  <Card.Img 
                    variant="top" 
                    src={feature.image} 
                    className="ca-card-img"
                    alt={feature.title}
                  />
                  <Card.Body className="text-center p-4">
                    <div className="ca-feature-icon mb-3">{getIcon(feature.iconName)}</div>
                    <Card.Title className="ca-feature-title h5 mb-3">{feature.title}</Card.Title>
                    <Card.Text className="ca-feature-description">{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="ca-section-footer text-center mt-5">
            <Button className="ca-btn ca-btn-primary btn-lg">Register with Farsight Solution LLP Now</Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CertificationAssistance;