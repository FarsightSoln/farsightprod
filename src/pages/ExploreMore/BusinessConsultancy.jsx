// src/pages/ExploreMore/BusinessConsultancy.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../assets/scss/pages/business-consultancy.scss';

const BusinessConsultancy = () => {
  const services = [
    {
      title: 'Strategic Planning',
      description: 'Develop actionable strategies to achieve long-term business objectives.'
    },
    {
      title: 'Operational Efficiency',
      description: 'Streamline processes and eliminate waste to improve productivity.'
    },
    {
      title: 'Digital Transformation',
      description: 'Leverage technology to modernize operations and enhance customer experiences.'
    },
    {
      title: 'Market Expansion',
      description: 'Identify and capitalize on new growth opportunities locally and globally.'
    },
    {
      title: 'Organizational Design',
      description: 'Align your structure, roles, and processes with business strategy.'
    },
    {
      title: 'Performance Management',
      description: 'Implement systems to measure and improve organizational performance.'
    }
  ];

  return (
    <div className="business-consultancy-page">
      <section className="consultancy-hero">
        <Container>
          <Row>
            <Col>
              <h1>Business Consultancy Services</h1>
              <p className="lead">
                Expert guidance to navigate challenges and accelerate growth
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="consultancy-content">
        <Container>
          <Row className="align-items-center mb-5">
            <Col lg={6}>
              <h2>Strategic Business Advisory</h2>
              <p>
                In an increasingly complex business environment, having access to expert advice can 
                mean the difference between stagnation and growth. Our seasoned consultants bring 
                decades of combined experience across industries to help you solve challenges, 
                capitalize on opportunities, and achieve sustainable success.
              </p>
              <p>
                We take a practical, results-oriented approach to consulting, ensuring our 
                recommendations are both strategic and executable.
              </p>
            </Col>
            <Col lg={6}>
              <div className="consultancy-image"></div>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col>
              <h2 className="text-center mb-5">Our Consultancy Services</h2>
              <Row>
                {services.map((service, index) => (
                  <Col lg={4} md={6} key={index} className="mb-4">
                    <Card className="service-card">
                      <Card.Body>
                        <Card.Title>{service.title}</Card.Title>
                        <Card.Text>{service.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>

          <Row className="approach-section">
            <Col>
              <h2 className="text-center mb-4">Our Approach</h2>
              <Row>
                <Col md={3} className="approach-step">
                  <div className="step-number">1</div>
                  <h3>Discovery</h3>
                  <p>Deep dive into your business challenges and objectives</p>
                </Col>
                <Col md={3} className="approach-step">
                  <div className="step-number">2</div>
                  <h3>Analysis</h3>
                  <p>Comprehensive assessment of data and processes</p>
                </Col>
                <Col md={3} className="approach-step">
                  <div className="step-number">3</div>
                  <h3>Solution Design</h3>
                  <p>Development of tailored recommendations</p>
                </Col>
                <Col md={3} className="approach-step">
                  <div className="step-number">4</div>
                  <h3>Implementation</h3>
                  <p>Practical execution with measurable results</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BusinessConsultancy;