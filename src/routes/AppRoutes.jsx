// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutFarsight from '../pages/About/AboutFarsight';
// import Career from '../pages/About/Career';
import SoftwareDevelopment from '../pages/ITSolutions/SoftwareDevelopment';
import AppDevelopment from '../pages/ITSolutions/AppDevelopment';
import CloudInnovations from "../pages/ITSolutions/CloudInnovations";
import WebsiteDevelopment from '../pages/ITSolutions/WebsiteDevelopment';
import WebHosting from '../pages/ITSolutions/WebHosting';
import FundingAssistance from '../pages/BusinessConsultancy/FundingAssistance';
import Grant from '../pages/BusinessConsultancy/Funding/Grant';
import Loan from '../pages/BusinessConsultancy/Funding/Loan';
import NBFC from '../pages/BusinessConsultancy/Funding/NBFC';

import BackOffice from '../pages/BusinessConsultancy/CertificationAssistance';
import ContentManagement from '../pages/BusinessConsultancy/AllBusiness';
import LegalAssistance from '../pages/BusinessConsultancy/LegalAssistance';
import MarketingAssistance from '../pages/BusinessConsultancy/MarketingAssistance';
import CRM from '../pages/Products/CRM';
import ERP from '../pages/Products/ERP';
import Blogs from '../pages/Blogs';
import ContactUs from '../pages/ContactUs';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* About Us Routes */}
      <Route path="/about-farsight" element={<AboutFarsight />} />
      {/* <Route path="/career" element={<Career />} /> */}
      
      {/* IT Solutions Routes */}
      <Route path="/software-development" element={<SoftwareDevelopment />} />
      <Route path="/app-development" element={<AppDevelopment />} />
      <Route path="/cloud-innovations" element={<CloudInnovations  />} />
      <Route path="/website-development" element={<WebsiteDevelopment />} />
      <Route path="/web-hosting" element={<WebHosting />} />
      
      {/* Business Consultancy Routes */}
      <Route path="/funding-assistance" element={<FundingAssistance />} />
      {/* Funding Assistance Sub-Routes */}
      <Route path="/funding-assistance/grant" element={<Grant />} />
      <Route path="/funding-assistance/loan" element={<Loan />} />
      <Route path="/funding-assistance/nbfc" element={<NBFC />} />

      <Route path="/certification-assistance" element={<BackOffice />} />
      <Route path="/all-business" element={<ContentManagement />} />
      <Route path="/legal-assistance" element={<LegalAssistance />} />
      <Route path="/marketing-assistance" element={<MarketingAssistance />} />
      
      {/* Products Routes */}
      <Route path="/crm" element={<CRM />} />
      <Route path="/erp" element={<ERP />} />
      
      {/* Explore More Routes */}
      
      
      {/* Other Routes */}
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      
      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;