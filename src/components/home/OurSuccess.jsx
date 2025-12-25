import React from 'react';
import '../../assets/scss/pages/home.scss';

const SUCCESS_LOGOS = [
  "/assets/images/Current Project.png",
  "/assets/images/Funds Granted.png",
//   "/assets/images/google review.png",
  "/assets/images/Growth Experts.png",
  "/assets/images/seed funds.png",
  "/assets/images/Startup.png",
  "/assets/images/JOURNEY.png",
  "/assets/images/tax.png",
  "/assets/images/MSME Growth.png"
];

const OurSuccess = () => {
  const displayImages = [...SUCCESS_LOGOS, ...SUCCESS_LOGOS];

  return (
    <section className="success-section container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h2 className="success-title">Our Success Stories</h2>
        </div>
        <div className="col-12">
          <div className="success-slider">
            <div className="slider-track">
              {displayImages.map((img, index) => (
                <div className="image-card" key={index}>
                  <img src={img} alt={`Success Milestone ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSuccess;