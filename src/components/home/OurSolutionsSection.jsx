import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../assets/scss/pages/home.scss';

const OurSolutionsSection = () => {
  const solutions = [
    {
      title: "Business Consultancy",
      description:
        "Empower your business with expert guidance in strategy, operations, and growth. Our consultancy team helps you make informed decisions and achieve measurable results.",
    },
    {
      title: "Funding Assistance",
      description:
        "We help businesses access funding opportunities through proper documentation, proposal creation, and financial strategy support for sustained growth.",
    },
    {
      title: "Certification Assistance",
      description:
        "Get professional help in acquiring essential business certifications and registrations like ISO, MSME, FSSAI, and more with complete guidance.",
    },
    {
      title: "Legal Assistance",
      description:
        "Ensure your business stays compliant with our legal support services, including agreements, documentation, and policy advisory.",
    },
    {
      title: "Marketing Assistance",
      description:
        "Grow your brand visibility with creative marketing strategies, social media management, and digital campaign optimization.",
    },
    {
      title: "IT Solutions",
      description:
        "From website and app development to cloud and hosting services, we provide complete IT solutions to strengthen your digital presence.",
    },
  ];

  return (
    <div className="solutions-section">
      <Container>
        <div className="solutions-header">
          <h2 className="solutions-title">Our Solutions</h2>
          <h3 className="solutions-subtitle">
            Comprehensive Business & IT Solutions from Falcon Futures
          </h3>
          <p className="solutions-description">
            At Falcon Futures, we provide end-to-end solutions to help your business grow — from expert consultancy and funding support to digital innovation and IT development.
          </p>
          <Button className="solutions-button">Discover Our Solutions</Button>
        </div>

        <Row className="solutions-grid">
          {solutions.map((solution, index) => (
            <Col lg={4} md={6} sm={12} key={index} className="solution-col">
              <div className="solution-card">
                <h4 className="card-title">{solution.title}</h4>
                <p className="card-description">{solution.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurSolutionsSection;
