// src/components/home/Testimonials.jsx
import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../../assets/scss/pages/home.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


// Using placeholder images for now - replace with your local images
const testimonialProfile1 = "https://w7.pngwing.com/pngs/646/829/png-transparent-avatar-man-ico-icon-cartoon-little-boy-avatar-cartoon-character-png-material-child-thumbnail.png";
const testimonialProfile2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2IYhSn8Y9S9_HF3tVaYOepJBcrYcd809pBA&s";
const testimonialProfile3 = "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg";

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      image: testimonialProfile1,
      text: "Partnering with Farsight Solutions transformed our operations. Their Business Consultancy streamlined our processes and improved efficiency by 40% within months.",
      name: "Michael Chen",
      className: "tm-img-1"
    },
    {
      id: 2,
      image: testimonialProfile2,
      text: "Farsight Solutions' IT team delivered an exceptional custom solution that perfectly fit our business needs. Their technical expertise is unmatched in the industry.",
      name: "Sarah Johnson",
      className: "tm-img-2"
    },
    {
      id: 3,
      image: testimonialProfile3,
      text: "The strategic guidance from Farsight Solutions helped us navigate complex compliance requirements while scaling our operations internationally.",
      name: "David Rodriguez",
      className: "tm-img-3"
    }
  ];

  // Duplicate testimonials for seamless loop
  const extendedTestimonials = [...testimonialData, ...testimonialData, ...testimonialData];

  return (
    <section className="testimonial-section" id="testimonials">
      <div className="container">
        <h2 className="testimoinial-section-title">Testimonials</h2>
        <div className="testimonial-slider-wrapper">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={30}
            loop={true}
            speed={1300}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true
            }}
            breakpoints={{
              480: {
                slidesPerView: 2,
                slidesPerGroup: 1
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3
              }
            }}
            className="testimonial-wrapper"
          >
            {extendedTestimonials.map((testimonial, index) => (
              <SwiperSlide key={`${testimonial.id}-${index}`} className="testimonial-items">
                <div className={`testimonial-img ${testimonial.className}`}>
                  <img src={testimonial.image} alt={`${testimonial.name} profile`} />
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <h3 className="testimonial-title">{testimonial.name}</h3>
                <div className="review-stars">
                  <svg width="200" height="32" viewBox="0 0 200 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {[...Array(5)].map((_, i) => (
                      <path
                        key={i}
                        d={`M${16 + i * 40} 4L${18.472 + i * 40} 12.944L${28 + i * 40} 12.944L${20.764 + i * 40} 18.112L${23.236 + i * 40} 27.056L${16 + i * 40} 21.888L${8.764 + i * 40} 27.056L${11.236 + i * 40} 18.112L${4 + i * 40} 12.944L${13.528 + i * 40} 12.944L${16 + i * 40} 4Z`}
                        fill="#FFD700"
                      />
                    ))}
                  </svg>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;