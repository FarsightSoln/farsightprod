// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import InfiniteSliderSection from '../components/home/InfiniteSliderSection';
import AboutSection from '../components/home/AboutSection';
import OurSolutionsSection from '../components/home/OurSolutionsSection';
import EmpoweringStartupsSection from '../components/home/EmpoweringStartupsSection';
import CertificationsSection from '../components/home/CertificationsSection';
// import WorkProcessSection from '../components/home/WorkProcessSection';
// import Testimonials from '../components/home/Testimonials';
import JoinOurTeamSection from '../components/home/JoinOurTeamSection';
import '../assets/scss/pages/home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <InfiniteSliderSection />
      <AboutSection />
      <OurSolutionsSection />
      <CertificationsSection />
      <EmpoweringStartupsSection />
      {/* <WorkProcessSection /> */}
      {/* <Testimonials /> */}
      <JoinOurTeamSection />
    </div>
  );
};

export default Home;