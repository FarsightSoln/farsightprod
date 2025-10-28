"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { ListGroup } from "react-bootstrap";
import "../../assets/scss/components/it-solution-sidebar.scss";

const itSolutionLinks = [
  { label: "Software Development", href: "/it-solutions/software-development" },
  { label: "App Development", href: "/it-solutions/app-development" },
  { label: "Cloud Innovations", href: "/it-solutions/CloudInnovations" },
  { label: "Website Development", href: "/it-solutions/website-development" },
  { label: "Web Hosting", href: "/it-solutions/web-hosting" },
];

const ItSolutionSidebar = () => {
  return (
    <div className="it-solution-sidebar-wrapper">
      <h3 className="it-solution-sidebar-title">IT Solution Services</h3>
      <ListGroup className="it-solution-sidebar-list-group">
        {itSolutionLinks.map(({ label, href }, index) => (
          <ListGroup.Item key={index} className="it-solution-sidebar-list-item">
            <a href={href} className="it-solution-sidebar-link">
              {label} <ArrowRight size={16} className="it-solution-sidebar-arrow" />
            </a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ItSolutionSidebar;
