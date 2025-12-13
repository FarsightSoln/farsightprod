"use client"
import React, { useEffect, useRef, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
import "../../../assets/scss/pages/loan.scss";

export default function Grant() {
  const [offsetY, setOffsetY] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    // Lightweight scroll handler using requestAnimationFrame to avoid jank
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffsetY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // set initial value
    setOffsetY(window.scrollY)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // parallax translation factor and opacity mapping
  const parallax = Math.round(offsetY * 0.2)
  const opacity = Math.max(0.35, 1 - offsetY / 600)

  return (
    <div className="loan-page">
      {/* Hero Section */}
      <section className="hero-section">
        {/*
          hero-inner is moved on scroll via inline style for a simple parallax + fade effect.
          We keep the effect lightweight and avoid external animation libraries here.
        */}
        <div
          className="container hero-inner"
          ref={heroRef}
          style={{ transform: `translateY(${parallax}px)`, opacity }}
        >
          <div className="hero-subtitle">MSME • Startup India • DPIIT • Sector-Specific Schemes</div>
          <h1>Government Grants</h1>
          <p className="hero-description">
            Access non-repayable government funding with expert support! Government grants provide valuable funding to
            businesses, startups, and entrepreneurs. We assist in identifying eligible schemes, preparing comprehensive
            applications, and ensuring compliance to maximize your chances of securing government funding.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="section-label">Overview</div>
              <h2 className="text-start mb-4">Unlock Government Funding for Your Business</h2>
              <p className="text-muted mb-4">
                Government grants represent a valuable source of non-repayable funds that can significantly enhance your
                business growth without diluting equity or creating debt obligations. These schemes are designed to
                promote innovation, entrepreneurship, and economic development across various sectors.
              </p>
              <p className="text-muted mb-4">
                From subsidies for MSMEs and startups under various government programs to sector-specific incentives,
                our comprehensive grant consultancy services help you identify the most suitable schemes and navigate
                the complex application process with expert guidance and ongoing compliance support.
              </p>
              <div className="d-flex align-items-start mb-3">
                <span className="check-icon">✓</span>
                <span>Non-repayable funding without equity dilution or interest obligations</span>
              </div>
              <div className="d-flex align-items-start mb-3">
                <span className="check-icon">✓</span>
                <span>Sector-specific schemes with targeted support for key industries</span>
              </div>
              <div className="d-flex align-items-start mb-3">
                <span className="check-icon">✓</span>
                <span>Subsidies for capital expenditure, employment generation, and export promotion</span>
              </div>
              <div className="d-flex align-items-start mb-3">
                <span className="check-icon">✓</span>
                <span>Expert registration and structuring for optimal terms and conditions</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="icon-card">
                    <div className="icon-wrapper" style={{ background: "#fee2e2" }}>
                      <span style={{ color: "#ef4444" }}>📄</span>
                    </div>
                    <h6 className="fw-bold">Scheme</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="icon-card">
                    <div className="icon-wrapper" style={{ background: "#dbeafe" }}>
                      <span style={{ color: "#3b82f6" }}>🛡️</span>
                    </div>
                    <h6 className="fw-bold">Eligibility</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="icon-card">
                    <div className="icon-wrapper" style={{ background: "#dcfce7" }}>
                      <span style={{ color: "#22c55e" }}>📈</span>
                    </div>
                    <h6 className="fw-bold">Apply</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="icon-card">
                    <div className="icon-wrapper" style={{ background: "#f3e8ff" }}>
                      <span style={{ color: "#a855f7" }}>₹</span>
                    </div>
                    <h6 className="fw-bold">Funding</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Grants Consultancy Services */}
      <section className="py-5">
        <div className="container">
          <div className="section-label">Benefits</div>
          <h2 className="section-title">Our Grants Consultancy Services</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#dbeafe" }}>
                  <span style={{ color: "#3b82f6" }}>🔍</span>
                </div>
                <h5>Scheme Identification</h5>
                <p className="text-muted">
                  Research and identify the most suitable government grant schemes based on your business profile,
                  sector, and growth objectives.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#d1fae5" }}>
                  <span style={{ color: "#10b981" }}>📋</span>
                </div>
                <h5>Eligibility Assessment</h5>
                <p className="text-muted">
                  Comprehensive evaluation of your eligibility for various grant programs, ensuring you meet all
                  criteria and requirements.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#f3e8ff" }}>
                  <span style={{ color: "#a855f7" }}>📊</span>
                </div>
                <h5>Strategic Application Planning</h5>
                <p className="text-muted">
                  Develop comprehensive application strategies that highlight your strengths and align with grant
                  objectives for maximum success.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#fef3c7" }}>
                  <span style={{ color: "#f59e0b" }}>📝</span>
                </div>
                <h5>Proposal Development</h5>
                <p className="text-muted">
                  Create compelling grant proposals with detailed project plans, financial projections, and impact
                  assessments.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#dbeafe" }}>
                  <span style={{ color: "#3b82f6" }}>📁</span>
                </div>
                <h5>Documentation Support</h5>
                <p className="text-muted">
                  Assist in gathering, organizing, and preparing all required documentation for grant applications.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#fee2e2" }}>
                  <span style={{ color: "#ef4444" }}>✉️</span>
                </div>
                <h5>Application Submission</h5>
                <p className="text-muted">
                  Handle the complete submission process, ensuring all forms are correctly filled and submitted within
                  deadlines.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#d1fae5" }}>
                  <span style={{ color: "#10b981" }}>🎤</span>
                </div>
                <h5>Interview & Presentation Support</h5>
                <p className="text-muted">
                  Prepare you and your team for evaluation interviews and presentations with funding authorities.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#f3e8ff" }}>
                  <span style={{ color: "#a855f7" }}>✓</span>
                </div>
                <h5>Post Approval Compliance</h5>
                <p className="text-muted">
                  Ensure adherence to grant terms and conditions, assist with reporting requirements, and maintain
                  ongoing compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Grant Categories */}
      <section className="eligibility-section">
        <div className="container">
          <div className="section-label" style={{ color: "#ef4444" }}>
            Categories
          </div>
          <h2 className="section-title text-white">Major Grant Categories We Cover</h2>
          <div className="row mt-5">
            <div className="col-lg-6 mb-4">
              <h5 className="text-white mb-3">Startup Grants</h5>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span><strong>Startup India Seed Fund:</strong> Financial assistance for early-stage startups for proof of concept, prototype development, and product trials</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span><strong>DPIIT Recognition Benefits:</strong> Tax exemptions, IPR benefits, and easier compliance for recognized startups</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span><strong>Atal Innovation Mission (AIM):</strong> Grants for innovation-driven startups and technology development</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span><strong>State Startup Policies:</strong> State-specific grants and subsidies for startups in various sectors</span>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="text-white mb-3">MSME & Sector-Specific Grants</h5>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span><strong>Quality Certification Schemes:</strong> Subsidies for obtaining ISO, BIS, and other quality certifications</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span><strong>Technology Upgradation:</strong> Support for adopting new technologies and modernizing manufacturing processes</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span><strong>National Schemes:</strong> Grants for MSMEs in manufacturing and service sectors for technology upgradation and quality improvement</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span><strong>Export Promotion Schemes:</strong> Financial assistance for export marketing, participation in trade fairs, and international certifications</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grant Application Process */}
      <section className="py-5">
        <div className="container">
          <div className="section-label">Process</div>
          <h2 className="section-title">Our Grant Application Process</h2>
          <div className="row g-4 mt-4">
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">1</div>
                <h5 className="fw-bold">Initial Consultation</h5>
                <p className="text-muted">
                  Understand your business, objectives, and funding requirements through comprehensive discussions.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">2</div>
                <h5 className="fw-bold">Scheme Research</h5>
                <p className="text-muted">
                  Identify and analyze applicable grant schemes based on your eligibility and requirements.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">3</div>
                <h5 className="fw-bold">Eligibility Analysis</h5>
                <p className="text-muted">
                  Conduct thorough assessment of your eligibility for shortlisted grant schemes.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">4</div>
                <h5 className="fw-bold">Application Strategy</h5>
                <p className="text-muted">
                  Develop comprehensive application strategy with timeline and resource allocation.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">5</div>
                <h5 className="fw-bold">Documentation Preparation</h5>
                <p className="text-muted">
                  Gather and prepare all required documents and supporting materials for application.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">6</div>
                <h5 className="fw-bold">Submission & Follow-up</h5>
                <p className="text-muted">
                  Submit applications with proper documentation and follow up with authorities.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">7</div>
                <h5 className="fw-bold">Disbursement Support</h5>
                <p className="text-muted">
                  Guide implementation, reporting, and compliance for successful fund disbursement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Requirements */}
      <section className="doc-section">
        <div className="container">
          <div className="section-label">Documentation</div>
          <h2 className="section-title">Documentation Requirements</h2>
          <div className="doc-header">
            <h5 className="mb-0">Document Checklist</h5>
            <button className="btn btn-sm btn-outline-light">Download List</button>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Business registration certificates (Incorporation Certificate, MSME Registration, etc.)</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Financial statements for the past 2-3 years (as applicable)</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>GST registration and previous tax returns</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Detailed project report with implementation plan</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>KYC documents and existing funding documentation</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>PAN, GST registration, and tax file details (where applicable)</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Cost estimates with quotations/proforma invoices</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Property details with land/location and pollution clearances (if applicable)</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Audited/unaudited financial statements and bank statements</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Sector-specific licenses and certifications</span>
              </div>
            </div>
          </div>
          <div className="alert alert-warning mt-4">
            <strong>Important:</strong> Documentation requirements may vary based on the specific scheme and industry. Our team provides detailed guidance on scheme-specific requirements and assists in preparing all necessary documents. For sector-specific schemes or special categories, additional documentation may be required.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{ background: "#0b1220" }}>
        <div className="container">
          <div className="section-label" style={{ color: "#fecaca" }}>
            Get Started
          </div>
          <h2>Ready to Access Government Funding?</h2>
          <p className="mb-4" style={{ maxWidth: "700px", margin: "0 auto 30px" }}>
            Connect with our grant specialists to identify suitable schemes, assess your eligibility, and navigate the
            application process for successful government funding.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Link to="/contact-us" className="btn btn-custom btn-white">Get Appointment</Link>
            <button className="btn btn-custom btn-outline-white">📞 Call: +91 9821605930</button>
          </div>
        </div>
      </section>
    </div>
  )
}
