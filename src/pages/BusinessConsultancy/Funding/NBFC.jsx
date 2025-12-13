"use client"
import React, { useEffect, useRef, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
import "../../../assets/scss/pages/loan.scss";

export default function NBFC() {
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
          <div className="hero-subtitle">Quick Disbursement • Flexible Eligibility • Specialized Products</div>
          <h1>NBFC Financing Solutions</h1>
          <p className="hero-description">
            Access alternative business funding through Enego's NBFC financing services, offering faster processing,
            flexible eligibility criteria, and specialized lending products tailored for businesses with unique
            requirements or limited banking history.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="section-label">Overview</div>
              <h2 className="text-start mb-4">Why Consider NBFC Financing?</h2>
              <p className="text-muted mb-4">
                Non-Banking Financial Companies (NBFCs) offer essential alternatives to traditional bank financing, with
                unique advantages including faster processing, more flexible eligibility criteria, specialized
                sector-focused products, and innovative lending approaches for businesses with limited banking history or
                non-traditional requirements.
              </p>
              <p className="text-muted mb-4">
                Enego specializes in connecting businesses with the optimal NBFC partners based on specific funding needs
                and eligibility profiles. Our deep industry relationships and understanding of NBFC lending criteria enable
                us to secure favorable terms while significantly accelerating the approval and disbursement process.
              </p>
              <div className="d-flex align-items-start mb-3">
                <span className="check-icon">✓</span>
                <span>Accelerated processing and disbursement compared to traditional banking</span>
              </div>
              <div className="d-flex align-items-start mb-3">
                <span className="check-icon">✓</span>
                <span>Flexible eligibility criteria with focus on business potential over historical metrics</span>
              </div>
              <div className="d-flex align-items-start mb-3">
                <span className="check-icon">✓</span>
                <span>Specialized financing solutions for specific industries and business models</span>
              </div>
              <div className="d-flex align-items-start mb-3">
                <span className="check-icon">✓</span>
                <span>Options for businesses with limited banking history or previous credit challenges</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="icon-card">
                    <div className="icon-wrapper" style={{ background: "#dcfce7" }}>
                      <span style={{ color: "#22c55e" }}>🎯</span>
                    </div>
                    <h6 className="fw-bold">Focused</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="icon-card">
                    <div className="icon-wrapper" style={{ background: "#dbeafe" }}>
                      <span style={{ color: "#3b82f6" }}>🔒</span>
                    </div>
                    <h6 className="fw-bold">Secure</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="icon-card">
                    <div className="icon-wrapper" style={{ background: "#fef3c7" }}>
                      <span style={{ color: "#f59e0b" }}>⚡</span>
                    </div>
                    <h6 className="fw-bold">Fast</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="icon-card">
                    <div className="icon-wrapper" style={{ background: "#f3f4f6" }}>
                      <span style={{ color: "#1f2937" }}>✓</span>
                    </div>
                    <h6 className="fw-bold">Trusted</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our NBFC Financing Services */}
      <section className="py-5">
        <div className="container">
          <div className="section-label">Benefits</div>
          <h2 className="section-title">Our NBFC Financing Services</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#dbeafe" }}>
                  <span style={{ color: "#3b82f6" }}>⚡</span>
                </div>
                <h5>Express Business Loans</h5>
                <p className="text-muted">
                  Quick-disbursement loans with minimal documentation and 24-48 hour processing for urgent business requirements.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#d1fae5" }}>
                  <span style={{ color: "#10b981" }}>💰</span>
                </div>
                <h5>Working Capital Financing</h5>
                <p className="text-muted">
                  Flexible short-term funding for operational expenses, inventory management, and cash flow optimization.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#f3e8ff" }}>
                  <span style={{ color: "#a855f7" }}>📈</span>
                </div>
                <h5>Business Expansion Loans</h5>
                <p className="text-muted">
                  Growth-focused financing for market expansion, capacity enhancement, and business scaling initiatives.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#fef3c7" }}>
                  <span style={{ color: "#f59e0b" }}>🎯</span>
                </div>
                <h5>Unsecured Business Loans</h5>
                <p className="text-muted">
                  No-collateral financing options based on business performance and revenue potential rather than assets.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#fee2e2" }}>
                  <span style={{ color: "#ef4444" }}>💳</span>
                </div>
                <h5>Revenue-Based Financing</h5>
                <p className="text-muted">
                  Innovative funding with repayments tied to business revenue performance rather than fixed EMI structures.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#dbeafe" }}>
                  <span style={{ color: "#3b82f6" }}>🏪</span>
                </div>
                <h5>Merchant Cash Advances</h5>
                <p className="text-muted">
                  Upfront capital with repayment through percentage of daily card sales, ideal for retail and service businesses.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#d1fae5" }}>
                  <span style={{ color: "#10b981" }}>🏭</span>
                </div>
                <h5>Equipment Financing</h5>
                <p className="text-muted">
                  Specialized funding for machinery, equipment, and technology purchases with flexible repayment structures.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#f3e8ff" }}>
                  <span style={{ color: "#a855f7" }}>🔗</span>
                </div>
                <h5>Supply Chain Financing</h5>
                <p className="text-muted">
                  Optimize cash flow through invoice discounting, purchase order financing, and vendor payment solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NBFC Financing Eligibility */}
      <section className="eligibility-section">
        <div className="container">
          <div className="section-label" style={{ color: "#ef4444" }}>
            Requirements
          </div>
          <h2 className="section-title text-white">NBFC Financing Eligibility</h2>
          <div className="row mt-5">
            <div className="col-lg-6 mb-4">
              <h5 className="text-white mb-3">Who Can Apply?</h5>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Business operational history of at least 6-12 months (varies by product)</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Consistent monthly revenue with clear cash flow patterns</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Basic financial record keeping and business documentation</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Clear business model with demonstrated market potential</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Minimum credit score requirements (typically more flexible than banks)</span>
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="text-white mb-3">Conditions</h5>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Valid business registration (any structure from Proprietorship to Private Limited)</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Active business bank account with transaction history</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>KYC documentation for directors/partners/proprietors</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Basic financial statements (balance sheets, P&L statements)</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Industry-specific requirements based on NBFC specialization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our NBFC Financing Process */}
      <section className="py-5">
        <div className="container">
          <div className="section-label">Process</div>
          <h2 className="section-title">Our NBFC Financing Process</h2>
          <div className="row g-4 mt-4">
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">1</div>
                <h5 className="fw-bold">Requirement Analysis</h5>
                <p className="text-muted">
                  Understand your funding needs, business model, and financial profile to identify suitable NBFC options.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">2</div>
                <h5 className="fw-bold">NBFC Matching</h5>
                <p className="text-muted">
                  Select optimal NBFC partners based on your business sector, funding requirements, and eligibility factors.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">3</div>
                <h5 className="fw-bold">Application Preparation</h5>
                <p className="text-muted">
                  Develop comprehensive application packages highlighting business strengths and addressing potential concerns.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">4</div>
                <h5 className="fw-bold">Fast-Track Submission</h5>
                <p className="text-muted">
                  Submit applications through priority channels established with our NBFC partners for accelerated processing.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">5</div>
                <h5 className="fw-bold">Approval Facilitation</h5>
                <p className="text-muted">
                  Coordinate with NBFC underwriters to address queries and expedite the approval decision process.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">6</div>
                <h5 className="fw-bold">Term Negotiation</h5>
                <p className="text-muted">
                  Secure optimal interest rates, processing fees, and repayment terms through strategic negotiation.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">7</div>
                <h5 className="fw-bold">Rapid Disbursement</h5>
                <p className="text-muted">
                  Complete documentation and procedural requirements to ensure quick fund release after approval.
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
                <span>Business registration proof (Incorporation Certificate, Partnership Deed, etc.)</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>KYC documents of directors/partners/proprietors (PAN, Aadhar, etc.)</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Recent business bank statements (typically last 6-12 months)</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>GST returns (where applicable) for the last 6-12 months</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Income Tax Returns for business and promoters (last 1-2 years)</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Basic financial statements (Balance Sheet, P&L statements)</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Business profile and brief business plan</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Proof of business premises (ownership/rental agreement)</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Existing loan statements (if any)</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Industry-specific licenses and permits</span>
              </div>
            </div>
          </div>
          <div className="alert alert-warning mt-4">
            <strong>Important:</strong> NBFC documentation requirements are typically more streamlined than traditional banks. The exact requirements vary based on loan product, amount, and specific NBFC policies. Our team provides customized checklists based on your selected financing option.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{ background: "#0b1220" }}>
        <div className="container">
          <div className="section-label" style={{ color: "#fecaca" }}>
            Get Started Today
          </div>
          <h2>Ready for Fast, Flexible Financing?</h2>
          <p className="mb-4" style={{ maxWidth: "700px", margin: "0 auto 30px" }}>
            Connect with our NBFC financing specialists to identify optimal funding options, streamline your application, and secure quick disbursement for your business needs.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Link to="/contact-us" className="btn btn-custom btn-white">Start Application</Link>
            <button className="btn btn-custom btn-outline-white">📞 Call: +91 9821605930</button>
          </div>
        </div>
      </section>
    </div>
  )
}
