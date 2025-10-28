"use client"
import "../../assets/scss/pages/all-business.scss"
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap"

// Import images for business setup
// import companyRegistrationImage from "../../assets/images/company-registration.jpg";
// import msmeRegistrationImage from "../../assets/images/msme-registration.jpg";
// import llpRegistrationImage from "../../assets/images/llp-registration.jpg";
// import startupIndiaImage from "../../assets/images/startup-india.jpg";
// import taxExemptionImage from "../../assets/images/tax-exemption.jpg";
// import gemRegistrationImage from "../../assets/images/gem-registration.jpg";
// import businessLandImage from "../../assets/images/business-land.jpg";

// // Import images for business growth
// import governmentGrantsImage from "../../assets/images/government-grants.jpg";
// import nbfcLoansImage from "../../assets/images/nbfc-loans.jpg";
// import governmentLoansImage from "../../assets/images/government-loans.jpg";
// import equityFundingImage from "../../assets/images/equity-funding.jpg";
// import businessMentorshipImage from "../../assets/images/business-mentorship.jpg";
// import pitchDecksImage from "../../assets/images/pitch-decks.jpg";
// import mergersAcquisitionsImage from "../../assets/images/mergers-acquisitions.jpg";

// // Import images for business expansion
// import websiteDevelopmentImage from "../../assets/images/website-development.jpg";
// import seoServiceImage from "../../assets/images/seo-service.jpg";
// import digitalMarketingImage from "../../assets/images/digital-marketing.jpg";
// import socialMediaMarketingImage from "../../assets/images/social-media-marketing.jpg";
// import performanceMarketingImage from "../../assets/images/performance-marketing.jpg";
// import whatsappMarketingImage from "../../assets/images/whatsapp-marketing.jpg";
// import crmSolutionsImage from "../../assets/images/crm-solutions.jpg";

// // Import images for business protection
// import companyLawImage from "../../assets/images/company-law.jpg";
// import trademarkImage from "../../assets/images/trademark.jpg";
// import rocFilingsImage from "../../assets/images/roc-filings.jpg";
// import gstTaxImage from "../../assets/images/gst-tax.jpg";
// import pfEsiImage from "../../assets/images/pf-esi.jpg";
// import legalAgreementsImage from "../../assets/images/legal-agreements.jpg";

// // Hero banner image
// import businessHeroBanner from "../../assets/images/business-hero-banner.jpg";

// Hero banner
const businessHeroBanner = "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";

// Business Setup Images
const companyRegistrationImage = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const msmeRegistrationImage = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const llpRegistrationImage = "https://images.unsplash.com/photo-1563010047-9bb6e0c6aff6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const startupIndiaImage = "https://images.unsplash.com/photo-1551836026-d5cbc2f4c4b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const taxExemptionImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const gemRegistrationImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const businessLandImage = "https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

// Business Growth Images
const governmentGrantsImage = "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const nbfcLoansImage = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const governmentLoansImage = "https://images.unsplash.com/photo-1551836026-d5cbc2f4c4b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const equityFundingImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const businessMentorshipImage = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const pitchDecksImage = "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const mergersAcquisitionsImage = "https://images.unsplash.com/photo-1565689228866-1d7db59f6bad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

// Business Expansion Images
const websiteDevelopmentImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const seoServiceImage = "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const digitalMarketingImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const socialMediaMarketingImage = "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const performanceMarketingImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const whatsappMarketingImage = "https://images.unsplash.com/photo-1563010047-9bb6e0c6aff6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const crmSolutionsImage = "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";

// Business Protection Images
const companyLawImage = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const trademarkImage = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const rocFilingsImage = "https://images.unsplash.com/photo-1556761175-4b46ac572b81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const gstTaxImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const pfEsiImage = "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
const legalAgreementsImage = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";



const AllBusiness = () => {
  const [activeTab, setActiveTab] = useState("setup")

  const businessSetup = {
    number: "01",
    title: "Business Setup",
    subtitle: "Start Right. Stay Legal. Grow Without Worry.",
    description:
      "We take the stress out of setting up your business. From company registration to government certifications, our experts ensure you're fully compliant from day one.",
    confusedText: "We'll guide you step-by-step, no jargon - just honest, helpful support.",
    services: [
      {
        id: 1,
        image: companyRegistrationImage,
        title: "Private Limited Company Registration",
        description: "Seamless incorporation with complete MCA compliance and documentation.",
      },
      {
        id: 2,
        image: msmeRegistrationImage,
        title: "MSME Registration",
        description: "Get official MSME status and unlock loans, subsidies & government schemes.",
      },
      {
        id: 3,
        image: llpRegistrationImage,
        title: "LLP Registration",
        description: "Flexible business structure with end-to-end support for legal formalities.",
      },
      {
        id: 4,
        image: startupIndiaImage,
        title: "Startup India Certification",
        description: "DPIIT recognition for startups, including tax exemptions and funding access.",
      },
      {
        id: 5,
        image: taxExemptionImage,
        title: "Tax Exemption Certificates (80 IAC, 12AB, 80G)",
        description: "Save more and grow faster with essential certifications for startups and NGOs.",
      },
      {
        id: 6,
        image: gemRegistrationImage,
        title: "GeM Registration (Govt eMarketplace)",
        description: "Sell directly to government buyers. We help you register and list with compliance.",
      },
      {
        id: 7,
        image: businessLandImage,
        title: "Affordable Business Land Across India",
        description: "Access verified industrial, commercial, and storage-friendly land options across India.",
      },
    ],
    ctaText: "Talk to our Business expert →",
  }

  const businessGrowth = {
    number: "02",
    title: "Business Growth",
    subtitle: "Fuel Your Business With Smart Capital & Strategic Guidance",
    description:
      "At Farsight Solutions, we do more than just help you grow - we connect your business with the right resources, people, and strategies to scale faster, smarter, and stronger. Whether you're a startup seeking seed capital or an MSME ready for expansion, our growth services are built to unlock your full potential.",
    confusedText: "Our growth experts can help you navigate funding and mentorship options.",
    services: [
      {
        id: 1,
        image: governmentGrantsImage,
        title: "Government Grants",
        description:
          "Access sector-specific grants with full expert support-from idea validation to fund reporting. Tap into untapped capital for innovation and development.",
      },
      {
        id: 2,
        image: nbfcLoansImage,
        title: "NBFC Loans for MSMEs",
        description:
          "Get faster, more flexible funding through our trusted NBFC network. Tailor-made for small businesses that need capital, now.",
      },
      {
        id: 3,
        image: governmentLoansImage,
        title: "Government Loans (PMEGP, CGTMSE, SIDBI)",
        description:
          "We help you secure collateral-free business loans with high approval rates and guided application support.",
      },
      {
        id: 4,
        image: equityFundingImage,
        title: "Equity-Based Funding",
        description:
          "Pitch like a pro. From valuations to investor deck creation, we prep you to confidently raise funds from VCs, angels, or private equity.",
      },
      {
        id: 5,
        image: businessMentorshipImage,
        title: "1:1 Business Mentorship",
        description:
          "Strategy sessions with industry experts tailored to your growth stage. Whether you're hitting your first milestone or scaling nationally, we've got your back.",
      },
      {
        id: 6,
        image: pitchDecksImage,
        title: "Investor-Ready Pitch Decks",
        description:
          "Visually compelling decks that communicate your business story with clarity, data, and purpose. Built to impress.",
      },
      {
        id: 7,
        image: mergersAcquisitionsImage,
        title: "Fuel MSME Growth Through Smart Mergers & Acquisitions",
        description: "Identify partners, align goals, and close high-impact deals with our end-to-end M&A advisory.",
      },
    ],
    ctaText: "Explore Growth Options →",
  }

  const businessExpansion = {
    number: "03",
    title: "Business Expansion",
    subtitle: "Grow Digital. Expand Smart. Scale Global.",
    description:
      "When it's time to go beyond your local market, Farsight helps MSMEs and startups expand confidently - using digital tools, smart strategies, and proven marketing systems. We don't just build campaigns - we build your business visibility, reach, and customer trust.",
    confusedText: "Let our digital marketing experts craft the perfect expansion strategy for you.",
    services: [
      {
        id: 1,
        image: websiteDevelopmentImage,
        title: "Website Development",
        description:
          "Fast, mobile-first, SEO-optimized websites that load quickly, build credibility, and convert leads into paying customers.",
      },
      {
        id: 2,
        image: seoServiceImage,
        title: "SEO (Search Engine Optimization)",
        description:
          "Boost your Google rankings and get discovered organically with our full-stack SEO strategies - technical SEO, content, backlinks, and more.",
      },
      {
        id: 3,
        image: digitalMarketingImage,
        title: "Digital Marketing",
        description:
          "Full-funnel digital campaigns that generate awareness, drive engagement, and capture quality leads across search, social, and display.",
      },
      {
        id: 4,
        image: socialMediaMarketingImage,
        title: "Social Media Marketing",
        description:
          "Social storytelling that converts. We design scroll-stopping content and data-backed ads across Instagram, Facebook, and Linkedin to keep your brand top of mind.",
      },
      {
        id: 5,
        image: performanceMarketingImage,
        title: "Performance Marketing",
        description:
          "PPC ads, retargeting, and Google campaigns that bring in high-ROI traffic. Every rupee spent is tracked and optimized.",
      },
      {
        id: 6,
        image: whatsappMarketingImage,
        title: "Whatsapp Marketing",
        description:
          "Reach customers where they are. Set up automated WhatsApp campaigns, bulk messaging, and CRM-powered conversations for faster sales cycles.",
      },
      {
        id: 7,
        image: crmSolutionsImage,
        title: "CRM Solutions to Strengthen Customer Bonds",
        description: "Empower your business with intelligent CRM tools to streamline communication and automate sales.",
      },
    ],
    ctaText: "Start Your Expansion →",
  }

  const businessProtection = {
    number: "04",
    title: "Business Protection",
    subtitle: "Protect What You've Built",
    description:
      "Running a business comes with risks - legal, financial, and regulatory. At Farsight Solutions, we simplify compliance, reduce risk, and protect your business from costly legal errors. Our legal experts and compliance advisors handle the rules, so you can focus on results.",
    confusedText: "Consult with our legal team to ensure your business is fully protected.",
    services: [
      {
        id: 1,
        image: companyLawImage,
        title: "Company Law Compliance",
        description:
          "Stay fully compliant with the Companies Act, annual returns, and corporate filings. No deadlines missed. No legal slip-ups.",
      },
      {
        id: 2,
        image: trademarkImage,
        title: "Trademark & IP Protection",
        description:
          "Protect your brand name, logo, and creations with proper trademark registration and regular IP monitoring.",
      },
      {
        id: 3,
        image: rocFilingsImage,
        title: "ROC Filings (Registrar of Companies)",
        description:
          "We manage accurate and timely submission of all statutory documents to help your business stay government-ready.",
      },
      {
        id: 4,
        image: gstTaxImage,
        title: "GST & Tax Compliance",
        description:
          "Never miss a return again. We help with GST filings, income tax returns, and regular tax updates for worry-free audits.",
      },
      {
        id: 5,
        image: pfEsiImage,
        title: "PF & ESI Compliance",
        description:
          "Ensure employee benefit compliance, including Provident Fund (PF), ESI, and other welfare schemes - smoothly managed.",
      },
      {
        id: 6,
        image: legalAgreementsImage,
        title: "Legal Agreements",
        description:
          "Professionally drafted legal contracts - from NDAs and vendor contracts to employment and founder agreements.",
      },
    ],
    ctaText: "Secure Your Business →",
  }

  const getActiveContent = () => {
    switch (activeTab) {
      case "setup":
        return businessSetup
      case "growth":
        return businessGrowth
      case "expansion":
        return businessExpansion
      case "protection":
        return businessProtection
      default:
        return businessSetup
    }
  }

  const content = getActiveContent()

  return (
    <div className="ab-wrapper">
      {/* Hero Section */}
      <section className="ab-hero">
        <div 
          className="ab-hero-banner"
          style={{
            backgroundImage: `linear-gradient(rgba(11, 11, 11, 0.81), rgba(0, 0, 0, 0.49)), url(${businessHeroBanner})`
          }}
        >
          <Container>
            <Row className="align-items-center min-vh-60">
              <Col lg={8} className="mx-auto text-center text-white">
                <h1 className="ab-hero-title mb-4">
                  Our Services
                </h1>
                <p className="ab-hero-subtitle lead mb-4 fw-bold">
                  360° Business Support For MSMEs
                </p>
                <p className="ab-hero-description mb-5">
                  Whether you're just getting started or looking to scale smartly, Farsight Solutions has your back. Our
                  360° business support helps you start right, grow strong, and stay future-ready — all under one roof.
                </p>
                <div className="ab-hero-buttons">
                  <Button className="ab-btn ab-btn-primary me-3 mb-3">Get Started</Button>
                  <Button className="ab-btn ab-btn-secondary mb-3">Talk To An Expert</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Tab Navigation Section */}
      <section className="ab-tabs-section py-5">
        <Container>
          <div className="ab-tabs-header text-center mb-5">
            <h2 className="ab-tabs-title mb-4">Our 360° Business Support</h2>
            <p className="ab-tabs-subtitle lead">
              Empowering Startups And MSMEs At Every Stage - From Launch To Legacy
            </p>
          </div>

          <div className="ab-tabs-buttons">
            <Row className="g-3 justify-content-center">
              <Col xs={12} sm={6} lg={3}>
                <Button
                  className={`ab-tab-btn w-100 ${activeTab === "setup" ? "ab-tab-active" : ""}`}
                  onClick={() => setActiveTab("setup")}
                >
                  <span className="ab-tab-number">01</span>
                  <span className="ab-tab-label">Business Setup</span>
                </Button>
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <Button
                  className={`ab-tab-btn w-100 ${activeTab === "growth" ? "ab-tab-active" : ""}`}
                  onClick={() => setActiveTab("growth")}
                >
                  <span className="ab-tab-number">02</span>
                  <span className="ab-tab-label">Business Growth</span>
                </Button>
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <Button
                  className={`ab-tab-btn w-100 ${activeTab === "expansion" ? "ab-tab-active" : ""}`}
                  onClick={() => setActiveTab("expansion")}
                >
                  <span className="ab-tab-number">03</span>
                  <span className="ab-tab-label">Business Expansion</span>
                </Button>
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <Button
                  className={`ab-tab-btn w-100 ${activeTab === "protection" ? "ab-tab-active" : ""}`}
                  onClick={() => setActiveTab("protection")}
                >
                  <span className="ab-tab-number">04</span>
                  <span className="ab-tab-label">Business Protection</span>
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="ab-content-section py-5">
        <Container>
          <Row>
            <Col lg={4} className="mb-5 mb-lg-0">
              <div className="ab-content-left text-center text-lg-start">
                <div className="ab-content-number">{content.number}</div>
                <h3 className="ab-content-title mb-3">{content.title}</h3>
                <p className="ab-content-subtitle lead mb-4">{content.subtitle}</p>
                <p className="ab-content-description mb-4">{content.description}</p>

                <div className="ab-confused-box bg-light p-4 rounded mb-4">
                  <div className="ab-confused-content">
                    <h4 className="ab-confused-title mb-3">Still Confused?</h4>
                    <p className="ab-confused-text mb-0">{content.confusedText}</p>
                  </div>
                </div>

                <Button className="ab-btn ab-btn-primary ab-cta-btn w-100">
                  {content.ctaText}
                </Button>
              </div>
            </Col>

            <Col lg={8}>
              <Row className="g-4">
                {content.services.map((service) => (
                  <Col key={service.id} md={6}>
                    <Card className="ab-service-card h-100 shadow-sm border-0">
                      <Card.Img 
                        variant="top" 
                        src={service.image} 
                        className="ab-card-img"
                        alt={service.title}
                      />
                      <Card.Body className="text-center p-4">
                        <Card.Title className="ab-service-title h5 mb-3">{service.title}</Card.Title>
                        <Card.Text className="ab-service-description">{service.description}</Card.Text>
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
  )
}

export default AllBusiness