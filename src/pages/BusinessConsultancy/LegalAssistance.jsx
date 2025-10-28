import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  Shield,
  TrendingUp,
  Target,
  Building2,
  FileText,
  CheckCircle,
  Lock,
  AlertCircle,
  Users,
  Briefcase,
} from "lucide-react";
// Import images
// import legalHeroBanner from "../../assets/images/legal-hero-banner.jpg";
// import benefitCardImage from "../../assets/images/legal-benefit-card.jpg";
// import approachCardImage from "../../assets/images/legal-approach-card.jpg";
// import serviceCardImage from "../../assets/images/legal-service-card.jpg";
// import supportCardImage from "../../assets/images/legal-support-card.jpg";

// Replace the import statements with these if using online images
const legalHeroBanner = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
const benefitCardImage = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const approachCardImage = "https://jgbd.in/wp-content/uploads/2023/09/General-Practice-1024x683-1-768x512.jpg";
const serviceCardImage = "https://jgbd.in/wp-content/uploads/2023/09/General-Practice-1024x683-1-768x512.jpg";
const supportCardImage = "https://jgbd.in/wp-content/uploads/2023/09/General-Practice-1024x683-1-768x512.jpg";

import "../../assets/scss/pages/legal-assistance.scss";

const LegalAssistance = () => {
  const benefitCards = [
    {
      icon: Shield,
      title: "Mitigation of Legal Risks",
      desc: "Comprehensive legal risk assessment and proactive measures to safeguard your business from regulatory non-compliance and potential litigation.",
      image: benefitCardImage
    },
    {
      icon: TrendingUp,
      title: "Enhanced Operational Efficiency",
      desc: "Streamlined compliance processes and regulatory frameworks that optimize business operations while ensuring adherence to statutory requirements.",
      image: benefitCardImage
    },
    {
      icon: Target,
      title: "Cost-Effective Compliance",
      desc: "Strategic legal planning to prevent expensive litigation, penalties, and regulatory sanctions through proactive compliance management.",
      image: benefitCardImage
    },
    {
      icon: Building2,
      title: "Strengthened Market Position",
      desc: "Establish credibility and trust with stakeholders, investors, and regulatory authorities through robust compliance frameworks.",
      image: benefitCardImage
    },
  ]

  const approachSteps = [
    { 
      num: 1, 
      title: "Initial Legal Audit & Assessment", 
      desc: "Comprehensive evaluation of your business structure, operations, and existing compliance status to identify gaps and risks.",
      image: approachCardImage
    },
    { 
      num: 2, 
      title: "Tailored Compliance Strategy", 
      desc: "Development of customized legal and regulatory frameworks aligned with your industry, business model, and growth objectives.",
      image: approachCardImage
    },
    { 
      num: 3, 
      title: "Implementation & Monitoring", 
      desc: "Systematic execution of compliance protocols with continuous monitoring to ensure adherence to evolving regulatory requirements.",
      image: approachCardImage
    },
    { 
      num: 4, 
      title: "Expert Legal Consultation", 
      desc: "Access to experienced legal professionals providing strategic guidance on complex regulatory and compliance matters.",
      image: approachCardImage
    },
    { 
      num: 5, 
      title: "Documentation & Regulatory Filing", 
      desc: "Professional management of statutory documentation, registrations, licenses, and periodic regulatory submissions.",
      image: approachCardImage
    },
  ]

  const services = [
    {
      icon: Briefcase,
      title: "Business Registration & Statutory Compliance",
      desc: "End-to-end assistance in company incorporation, GST registration, MSME certification, and all statutory registrations required under Indian law.",
      image: serviceCardImage
    },
    {
      icon: Users,
      title: "Labour & Employment Law Advisory",
      desc: "Comprehensive compliance with the Code on Wages, Industrial Relations, Social Security, and Occupational Safety, Health & Working Conditions.",
      image: serviceCardImage
    },
    {
      icon: FileText,
      title: "Contract Management & Legal Vetting",
      desc: "Professional drafting, review, and vetting of commercial agreements, vendor contracts, employment agreements, and partnership deeds.",
      image: serviceCardImage
    },
    {
      icon: Building2,
      title: "Corporate Governance & Secretarial Services",
      desc: "Compliance with Companies Act provisions, board governance, statutory meetings, annual filings, and maintenance of statutory registers.",
      image: serviceCardImage
    },
    {
      icon: AlertCircle,
      title: "Tax Planning & Regulatory Advisory",
      desc: "Strategic tax structuring, GST compliance, income tax advisory, and guidance on regulatory frameworks including FEMA, RBI, and sector-specific regulations.",
      image: serviceCardImage
    },
    {
      icon: CheckCircle,
      title: "Licensing & Government Liaison",
      desc: "Facilitation of business licenses, regulatory approvals, environmental clearances, and liaison with government departments and statutory authorities.",
      image: serviceCardImage
    },
  ]

  const supportServices = [
    {
      icon: Lock,
      title: "Regulatory Intelligence & Updates",
      desc: "Timely notifications and analysis of amendments in central and state legislation, notifications, circulars, and policy changes affecting your business.",
      image: supportCardImage
    },
    {
      icon: AlertCircle,
      title: "Audit Support & Regulatory Filings",
      desc: "Professional assistance in statutory audits, departmental inspections, preparation of compliance documentation, and timely regulatory submissions.",
      image: supportCardImage
    },
    {
      icon: CheckCircle,
      title: "Continuous Legal Advisory for MSMEs & Startups",
      desc: "Year-round access to legal consultation addressing the dynamic compliance requirements of growing businesses and startups.",
      image: supportCardImage
    },
    {
      icon: Briefcase,
      title: "Integrated Business Solutions",
      desc: "Seamless coordination of legal compliance with financial services, tax planning, business advisory, and growth strategies.",
      image: supportCardImage
    },
    {
      icon: FileText,
      title: "Certification & Tender Readiness",
      desc: "Comprehensive support for ISO certifications, startup recognition, government tender participation, and subsidy applications.",
      image: supportCardImage
    },
    {
      icon: Users,
      title: "Professional Legal Representation",
      desc: "Expert representation before regulatory authorities, tribunals, and administrative bodies for compliance matters and dispute resolution.",
      image: supportCardImage
    },
  ]

  return (
    <div className="legal-assistance-page">
      {/* Hero Section */}
      <section className="la-hero">
        <div 
          className="la-hero-banner"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.81), rgba(0, 0, 0, 0.49)), url(${legalHeroBanner})`
          }}
        >
          <Container>
            <Row className="align-items-center min-vh-60">
              <Col lg={8} className="mx-auto text-center text-white">
                <h1 className="la-hero-title mb-4">
                  Comprehensive Legal & Compliance Solutions for Indian Businesses
                </h1>
                <p className="la-hero-desc lead mb-5">
                  Farsight Solution LLP delivers expert legal and regulatory compliance services designed to protect your business interests and ensure full adherence to Indian statutory requirements.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Button className="la-btn-primary btn-lg">Schedule Consultation</Button>
                  <Button className="la-btn-secondary btn-lg">Speak with Legal Expert</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Why Legal & Compliance Support Matters */}
      <section className="la-section-white py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="la-section-title mb-4">The Strategic Importance of Legal & Compliance Management</h2>
            <p className="la-section-subtitle lead mb-4">
              In India's complex regulatory environment, professional legal compliance is not merely administrative—it represents a critical business investment that safeguards assets, ensures continuity, and establishes competitive advantage.
            </p>
            <div className="la-highlight-text bg-light p-3 rounded d-inline-block">
              Strategic Benefits of Professional Legal Compliance Services
            </div>
          </div>

          <Row className="g-4">
            {benefitCards.map((card, idx) => (
              <Col md={6} lg={3} key={idx}>
                <Card className="la-benefit-card h-100 shadow-sm border-0">
                  <Card.Img 
                    variant="top" 
                    src={card.image} 
                    className="la-card-img"
                    alt={card.title}
                  />
                  <Card.Body className="text-center p-4">
                    <div className="la-card-icon mb-3">
                      <card.icon size={32} />
                    </div>
                    <h5 className="la-card-title mb-3">{card.title}</h5>
                    <p className="la-card-desc">{card.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <Button className="la-btn-primary btn-lg">Consult Our Legal Advisors</Button>
          </div>
        </Container>
      </section>

      {/* Our Legal Approach */}
      <section className="la-section-light py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="la-section-title mb-4">Our Systematic Approach to Legal Compliance</h2>
            <p className="la-section-subtitle lead mb-4">
              Farsight Solution LLP employs a structured, intelligence-driven methodology tailored to the specific requirements of Indian businesses.
            </p>
            <div className="la-highlight-text bg-white p-3 rounded d-inline-block">
              Our Five-Phase Compliance Framework
            </div>
          </div>

          <Row className="g-4">
            {approachSteps.map((step, idx) => (
              <Col md={6} lg={4} key={idx}>
                <Card className="la-approach-card h-100 shadow-sm border-0">
                  <Card.Img 
                    variant="top" 
                    src={step.image} 
                    className="la-card-img"
                    alt={step.title}
                  />
                  <Card.Body className="text-center p-4 position-relative">
                    <div className="la-step-number">{step.num}</div>
                    <h5 className="la-approach-title mb-3">{step.title}</h5>
                    <p className="la-approach-desc">{step.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <Button className="la-btn-primary btn-lg">Request Compliance Assessment</Button>
          </div>
        </Container>
      </section>

      {/* Popular Legal Services */}
      <section className="la-section-white py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="la-section-title mb-4">Comprehensive Legal & Compliance Services Portfolio</h2>
            <p className="la-section-subtitle lead mb-4">
              Farsight Solution LLP provides end-to-end legal and regulatory compliance solutions customized to your business sector, operational structure, and regulatory environment.
            </p>
            <div className="la-highlight-text bg-light p-3 rounded d-inline-block">
              Core Legal & Regulatory Compliance Services
            </div>
          </div>

          <Row className="g-4">
            {services.map((service, idx) => (
              <Col md={6} lg={4} key={idx}>
                <Card className="la-service-card h-100 shadow-sm border-0">
                  <Card.Img 
                    variant="top" 
                    src={service.image} 
                    className="la-card-img"
                    alt={service.title}
                  />
                  <Card.Body className="text-center p-4">
                    <div className="la-card-icon mb-3">
                      <service.icon size={32} />
                    </div>
                    <h5 className="la-card-title mb-3">{service.title}</h5>
                    <p className="la-card-desc">{service.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <Button className="la-btn-primary btn-lg">Discuss Your Compliance Requirements</Button>
          </div>
        </Container>
      </section>

      {/* How Farsight Helps */}
      <section className="la-section-light py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="la-section-title mb-4">How Farsight Solution LLP Ensures Regulatory Compliance</h2>
            <p className="la-section-subtitle lead mb-4">
              When you engage Farsight Solution LLP, you gain access to a dedicated team of legal and compliance professionals committed to maintaining your business in a state of continuous regulatory readiness.
            </p>
            <div className="la-highlight-text bg-white p-3 rounded d-inline-block">
              Our Comprehensive Compliance Support Includes
            </div>
          </div>

          <Row className="g-4">
            {supportServices.map((service, idx) => (
              <Col md={6} lg={4} key={idx}>
                <Card className="la-support-card h-100 shadow-sm border-0">
                  <Card.Img 
                    variant="top" 
                    src={service.image} 
                    className="la-card-img"
                    alt={service.title}
                  />
                  <Card.Body className="text-center p-4">
                    <div className="la-card-icon mb-3">
                      <service.icon size={32} />
                    </div>
                    <h5 className="la-card-title mb-3">{service.title}</h5>
                    <p className="la-card-desc">{service.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-5">
            <Button className="la-btn-primary btn-lg">Partner with Farsight Solution LLP</Button>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default LegalAssistance;