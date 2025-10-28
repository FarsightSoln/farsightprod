import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/scss/pages/home.scss';

const CertificationsSection = () => {
  const certificates = [
    { title: "GeM Seller Registration", desc: "Registered as an authorized seller on the Government e-Marketplace (GeM)." },
    { title: "Udyam Registration (MSME)", desc: "Recognized under the MSME scheme for small and medium enterprises." },
    { title: "MSME Registration", desc: "Certified as a Micro, Small & Medium Enterprise by the Government of India." },
    { title: "ISO Certification", desc: "Compliant with international quality and management standards." },
    { title: "Trademark Registration", desc: "Officially registered trademark of Farsight Solutions." },
    { title: "Patent Registration", desc: "Recognized for innovation and original technological solutions." },
    { title: "Startup India DPIIT", desc: "Registered under the Startup India initiative by DPIIT." },
    { title: "GST Registration", desc: "Compliant with all Indian tax and regulatory requirements." }
  ];

  return (
    <div className="certifications-section">
      <Container>
        <div className="cert-header text-center">
          <h2 className="cert-title">Our Certifications</h2>
          <p className="cert-description">
            Farsight Solutions holds multiple certifications that reflect our credibility, compliance, and commitment to quality.
          </p>
        </div>

        <Row className="cert-grid">
          {certificates.map((cert, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={12} className="cert-card-col">
              <div className="cert-card fade-in">
                <h5 className="cert-name">{cert.title}</h5>
                <p className="cert-text">{cert.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CertificationsSection;
