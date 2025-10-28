"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { ListGroup } from "react-bootstrap";
import "../../assets/scss/components/hr-outsourcing-sidebar.scss";

const sidebarLinks = [
  { label: "Training & Development", href: "/hr-outsource/training-development" },
  { label: "Talent Development", href: "/hr-outsource/talent-development" },
  { label: "ems", href: "/hr-outsource/ems" },
];

const HROutsourcingSidebar = () => {
  return (
    <div className="hr-outsourcing-sidebar-wrapper">
      <h3 className="hr-outsourcing-sidebar-title">HR Outsourcing</h3>
      <ListGroup className="hr-outsourcing-sidebar-list-group">
        {sidebarLinks.map(({ label, href }, index) => (
          <ListGroup.Item key={index} className="hr-outsourcing-sidebar-list-item">
            <a href={href} className="hr-outsourcing-sidebar-link">
              {label} <ArrowRight size={16} className="hr-outsourcing-sidebar-arrow" />
            </a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default HROutsourcingSidebar;
