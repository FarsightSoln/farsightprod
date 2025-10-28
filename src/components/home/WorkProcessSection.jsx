import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/scss/pages/home.scss';

const steps = [
  { title: "Understanding Needs", desc: "We analyze your objectives, industry challenges, and ambitions." },
  { title: "Strategizing Solutions", desc: "We design comprehensive, scalable strategies." },
  { title: "Implementing with Precision", desc: "Solutions deployed with adaptability and accuracy." },
  { title: "Continuous Support & Optimization", desc: "Ongoing improvements for future growth." }
];

const WorkProcessSection = () => {
  return (
    <section className="work-process-section">
      <Container>
        <h2 className="text-center mb-5">Our Working Process</h2>
        <Row>
          {steps.map((step, index) => (
            <Col md={3} key={index} className="text-center work-step">
              <div className="step-number">{index + 1}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default WorkProcessSection;
