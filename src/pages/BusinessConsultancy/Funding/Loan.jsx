"use client"
import React, { useEffect, useRef, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
import "../../../assets/scss/pages/loan.scss";

export default function Loan() {
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
          <div className="hero-subtitle">Term Loans • Working Capital • MSME Schemes • Collateral-Free Options</div>
          <h1>Business Loan Services</h1>
          <p className="hero-description">
            Unlock tailored business financing with flexible repayment plans and delivery solutions covering term loans,
            working capital, MSME schemes, and collateral-free options. Get the financial support to fuel growth, manage
            cash flow, and expand your business with ease—from application to disbursement.
          </p>
        </div>
      </section>

      {/* Business Loan Solutions */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="section-label">Overview</div>
              <h2 className="text-start mb-4">Business Loan Solutions for Every Need</h2>
              <p className="text-muted mb-4">
                Business loans provide essential capital for growth initiatives, operational improvements, or working
                capital needs. They offer flexible repayment terms and competitive interest rates tailored to your
                business requirements.
              </p>
              <p className="text-muted mb-4">
                Bridge gaps between cash inflows and outflows with working capital loans. These short-term financing
                solutions help businesses maintain smooth operations, manage inventory, and meet day-to-day expenses
                without disrupting cash flow.
              </p>
              <div className="d-flex align-items-start mb-3">
                <span className="check-icon">✓</span>
                <span>Flexible loan repayment schedules based on business requirements and eligibility</span>
              </div>
              <div className="d-flex align-items-start mb-3">
                <span className="check-icon">✓</span>
                <span>Access to preferential rates and specialized schemes for various business sectors</span>
              </div>
              <div className="d-flex align-items-start mb-3">
                <span className="check-icon">✓</span>
                <span>Comprehensive documentation support for smoother application processes</span>
              </div>
              <div className="d-flex align-items-start mb-3">
                <span className="check-icon">✓</span>
                <span>Expert negotiation and structuring for optimal terms and conditions</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="icon-card">
                    <div className="icon-wrapper" style={{ background: "#fee2e2" }}>
                      <span style={{ color: "#ef4444" }}>📄</span>
                    </div>
                    <h6 className="fw-bold">Documentation</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="icon-card">
                    <div className="icon-wrapper" style={{ background: "#dbeafe" }}>
                      <span style={{ color: "#3b82f6" }}>🔄</span>
                    </div>
                    <h6 className="fw-bold">Processing</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="icon-card">
                    <div className="icon-wrapper" style={{ background: "#dcfce7" }}>
                      <span style={{ color: "#22c55e" }}>✓</span>
                    </div>
                    <h6 className="fw-bold">Fast</h6>
                  </div>
                </div>
                <div className="col-6">
                  <div className="icon-card">
                    <div className="icon-wrapper" style={{ background: "#f3e8ff" }}>
                      <span style={{ color: "#a855f7" }}>🔒</span>
                    </div>
                    <h6 className="fw-bold">Secure</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Business Loan Services */}
      <section className="py-5">
        <div className="container">
          <div className="section-label">Benefits</div>
          <h2 className="section-title">Our Business Loan Services</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#dbeafe" }}>
                  <span style={{ color: "#3b82f6" }}>💼</span>
                </div>
                <h5>Term Loans</h5>
                <p className="text-muted">
                  Long-term financing for business expansion, equipment purchase, and infrastructure development with
                  flexible repayment options.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#d1fae5" }}>
                  <span style={{ color: "#10b981" }}>💰</span>
                </div>
                <h5>Working Capital Loans</h5>
                <p className="text-muted">
                  Short-term financing to manage day-to-day operations, inventory, and cash flow requirements.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#f3e8ff" }}>
                  <span style={{ color: "#a855f7" }}>🏆</span>
                </div>
                <h5>MSME Priority Lending</h5>
                <p className="text-muted">
                  Special financing schemes for MSMEs with preferential rates and government-backed support.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#fef3c7" }}>
                  <span style={{ color: "#f59e0b" }}>🎯</span>
                </div>
                <h5>Collateral-free Financing</h5>
                <p className="text-muted">
                  Unsecured business loans without collateral requirements for eligible businesses.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#fee2e2" }}>
                  <span style={{ color: "#ef4444" }}>📊</span>
                </div>
                <h5>Project Financing</h5>
                <p className="text-muted">
                  Specialized funding for large-scale projects with customized disbursement and repayment structures.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#dbeafe" }}>
                  <span style={{ color: "#3b82f6" }}>🏛️</span>
                </div>
                <h5>Government Scheme Loans</h5>
                <p className="text-muted">
                  Access to various government-backed schemes like MUDRA, Stand-Up India, CGTMSE, and other
                  sector-specific programs.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#dbeafe" }}>
                  <span style={{ color: "#3b82f6" }}>🚀</span>
                </div>
                <h5>Startup Financing</h5>
                <p className="text-muted">
                  Tailored financing solutions for startups and early-stage businesses with flexible terms.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="service-card">
                <div className="icon-wrapper" style={{ background: "#fef3c7" }}>
                  <span style={{ color: "#f59e0b" }}>📈</span>
                </div>
                <h5>Business Expansion Loans</h5>
                <p className="text-muted">
                  Funding for scaling operations, entering new markets, and business growth initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Loan Eligibility Factors */}
      <section className="eligibility-section">
        <div className="container">
          <div className="section-label" style={{ color: "#ef4444" }}>
            Eligibility
          </div>
          <h2 className="section-title text-white">Business Loan Eligibility Factors</h2>
          <div className="row mt-5">
            <div className="col-lg-6 mb-4">
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Business vintage of at least 3 years (varies by loan type and lender)</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Minimum annual turnover requirements based on loan amount</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Satisfactory credit history and CIBIL score (typically 650+)</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Good credit history with minimal defaults and timely repayments</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Positive cash flow and profitability trends</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Valid business registration and PAN/TAN for loan obligations</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Complete KYC documentation for business and promoters</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Business ownership structure (proprietorship, partnership, etc.)</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>GST registration and compliance for applicable businesses</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>ITR filings for both business and promoters for previous years</span>
              </div>
              <div className="eligibility-item">
                <span className="check-icon">✓</span>
                <span>Collateral or security as per lender policies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Loan Facilitation Process */}
      <section className="py-5">
        <div className="container">
          <div className="section-label">Process</div>
          <h2 className="section-title">Our Loan Facilitation Process</h2>
          <div className="row g-4 mt-4">
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">1</div>
                <h5 className="fw-bold">Requirement Analysis</h5>
                <p className="text-muted">
                  Understand your business needs, loan amount, and purpose to recommend the most suitable financing
                  options.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">2</div>
                <h5 className="fw-bold">Eligibility Assessment</h5>
                <p className="text-muted">
                  Evaluate your business profile, financials, credit history, and documentation to determine
                  eligibility.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">3</div>
                <h5 className="fw-bold">Loan Structuring</h5>
                <p className="text-muted">
                  Design optimal loan structure including amount, tenure, interest rate, and repayment schedule.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">4</div>
                <h5 className="fw-bold">Lender Submission</h5>
                <p className="text-muted">
                  Submit your application with proper documentation and follow-up with partner lenders.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">5</div>
                <h5 className="fw-bold">Term Negotiation</h5>
                <p className="text-muted">
                  Negotiate favorable terms, interest rates, processing fees, and other conditions with lenders.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="process-card">
                <div className="process-number">6</div>
                <h5 className="fw-bold">Disbursement Facilitation</h5>
                <p className="text-muted">
                  Assist with final documentation, agreement signing, and ensure smooth fund disbursement.
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
            <button className="btn btn-sm btn-outline-light">Download All</button>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Business registration documents (Incorporation Certificate, Partnership Deed, etc.)</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>GST registration certificate and returns (last 6-12 months)</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Audited financial statements (Balance Sheet, P&L for last 2-3 years)</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Proof of business premises (Rent/Lease/Ownership documents)</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Business profile and project report for loan/business financing</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>KYC documents of directors/partners/promoters (PAN, Aadhaar, etc.)</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Income Tax Returns for business (last 2-3 years)</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Bank statements (last 6-12 months)</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Collateral documents (property papers, valuation report) if applicable</span>
              </div>
              <div className="doc-item">
                <span className="doc-icon">📄</span>
                <span>Existing loan statements and repayment track record if any</span>
              </div>
            </div>
          </div>
          <div className="alert alert-warning mt-4">
            <strong>Important:</strong> Documentation requirements may vary based on loan type, lender, amount, tenure,
            and business structure. Some providers may require additional documents or have specific formats.
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" style={{ background: "#0b1220" }}>
        <div className="container">
          <div className="section-label" style={{ color: "#fecaca" }}>
            Get Started
          </div>
          <h2>Ready to Secure Your Business Financing?</h2>
          <p className="mb-4" style={{ maxWidth: "700px", margin: "0 auto 30px" }}>
            Connect with our loan specialists to identify optimal financing options, assess your eligibility, and
            navigate the application process for successful business loan approval.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <Link to="/contact-us" className="btn btn-custom btn-white">Get Appointment</Link>
            <button className="btn btn-custom btn-outline-white">📞 Call: +91 6200331997</button>
          </div>
        </div>
      </section>
    </div>
  )
}
