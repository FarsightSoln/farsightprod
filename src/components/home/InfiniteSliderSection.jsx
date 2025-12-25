import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/scss/pages/home.scss';

const InfiniteSliderSection = () => {
  const services = [
    // Business Consultancy
    {
      title: "Business Consultancy",
      icon: "/assets/images/slider/business-consultancy.png",
      link: "/business-consultancy",
      description: "Expert strategies to grow, manage, and scale your business."
    },
    {
      title: "Funding Assistance",
      icon: "/assets/images/slider/funding-assistance.png",
      link: "/funding-assistance/grant",
      description: "Get guidance to secure funding and investment opportunities."
    },
    {
      title: "Certification Assistance",
      icon: "/assets/images/slider/certification-assistance.png",
      link: "/certification-assistance",
      description: "Support for obtaining business certifications efficiently."
    },
    {
      title: "Legal Assistance",
      icon: "/assets/images/slider/legal-assistance.png",
      link: "/legal-assistance",
      description: "Professional help with documentation and compliance."
    },
    {
      title: "Marketing Assistance",
      icon: "/assets/images/slider/marketing-assistance.png",
      link: "/marketing-assistance",
      description: "Boost your brand visibility with strategic marketing."
    },
    {
      title: "360° Business Assistance",
      icon: "/assets/images/slider/360-business-assistance.png",
      link: "/all-business",
      description: "Comprehensive business support under one roof."
    },

    // IT Solutions
    {
      title: "Software Development",
      icon: "/assets/images/slider/software-development.png",
      link: "/software-development",
      description: "Custom software designed for your unique business needs."
    },
    {
      title: "App Development",
      icon: "/assets/images/slider/app-development.png",
      link: "/app-development",
      description: "User-friendly mobile apps for iOS and Android platforms."
    },
    {
      title: "Cloud Innovations",
      icon: "/assets/images/slider/cloud-innovations.png",
      link: "/cloud-innovations",
      description: "Secure and scalable cloud-based business solutions."
    },
    {
      title: "Website Development",
      icon: "/assets/images/slider/website-development.png",
      link: "/website-development",
      description: "Modern and responsive websites for your digital presence."
    },
    {
      title: "Web Hosting",
      icon: "/assets/images/slider/web-hosting.png",
      link: "/web-hosting",
      description: "Reliable and secure hosting for seamless performance."
    }
  ];

  return (
    <section className="farsight-slider-section">
      <div className="farsight-slider-heading">
        <h2 className="text-warning">Our Comprehensive Services</h2>
        <p>Explore a complete range of business and IT solutions crafted for your success.</p>
      </div>

      <div className="farsight-slider-container">
        <div className="farsight-slider-track">
          {[...services, ...services].map((service, index) => (
            <div className="farsight-slide-card" key={`slide-${index}`}>
              <div className="farsight-slide-content pb-3">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="farsight-slide-icon"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/assets/images/slider/ai.png"; // fallback image
                  }}
                />
                <h3 className="farsight-slide-title">{service.title}</h3>
                <p className="farsight-slide-description">{service.description}</p>
                <Link to={service.link} className="farsight-slide-button">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteSliderSection;
