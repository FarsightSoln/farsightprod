import React from 'react';
import '../../assets/scss/pages/home.scss';

const BANK_LOGOS = [
  // Global Fintech
  "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  // Indian Banks
  "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/1200px-State_Bank_of_India_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/1280px-HDFC_Bank_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/AXISBank_Logo.svg/2560px-AXISBank_Logo.svg.png",
  // Additional Digital/Tech Payments
  "https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg"
];

const OurPartners = () => {
  
  const displayLogos = [...BANK_LOGOS, ...BANK_LOGOS];

  return (
    <section className="partners-section">
      <h1 className="partners-title">Our Partners</h1>
      <div className="slider">
        <div className="slider-items">
          {displayLogos.map((logo, index) => (
            <div className="logo-wrapper" key={index}>
              <img src={logo} alt="Bank Logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;