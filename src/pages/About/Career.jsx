// src/pages/About/Career.jsx
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../../assets/scss/pages/career.scss';

const Career = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Software Developer',
      department: 'IT Solutions',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Customer Support Specialist',
      department: 'Business Consultancy',
      location: 'New York',
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'HR Consultant',
      department: 'Products',
      location: 'Chicago',
      type: 'Contract'
    },
    {
      id: 4,
      title: 'Business Analyst',
      department: 'Explore More',
      location: 'Remote',
      type: 'Full-time'
    }
  ];

  return (
    <div className="career-page">
      <section className="career-hero">
        <Container>
          <Row>
            <Col>
              <h1>Build Your Career With Us</h1>
              <p className="lead">Join our team of innovators and problem solvers</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="career-content">
        <Container>
          <Row>
            <Col lg={6} className="mb-5">
              <h2>Why Work at Farsight?</h2>
              <p>
                At Farsight Solutions, we believe our people are our greatest asset. We foster a 
                culture of learning, collaboration, and innovation where every team member can grow 
                and make an impact.
              </p>
              <ul className="benefits-list">
                <li>Competitive salaries and comprehensive benefits</li>
                <li>Flexible work arrangements (remote and hybrid options)</li>
                <li>Continuous learning and professional development opportunities</li>
                <li>Cutting-edge projects with industry-leading clients</li>
                <li>Inclusive and diverse work environment</li>
              </ul>
            </Col>
            <Col lg={6} className="mb-5">
              <div className="culture-image"></div>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col>
              <h2 className="text-center mb-5">Current Openings</h2>
              <Row>
                {jobOpenings.map((job) => (
                  <Col md={6} key={job.id} className="mb-4">
                    <Card className="job-card">
                      <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {job.department} • {job.location} • {job.type}
                        </Card.Subtitle>
                        <Button variant="primary" className="mt-3">
                          Apply Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Career;