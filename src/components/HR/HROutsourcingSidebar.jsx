"use client"
import React from "react"
import { Card, ListGroup, Button } from "react-bootstrap"
import { Users, Target, TrendingUp, Phone, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const HROutsourcingSidebar = () => {
  const services = [
    { icon: <Users size={20} />, title: "Training & Development", active: true },
    { icon: <Target size={20} />, title: "ems Services", active: false },
    { icon: <TrendingUp size={20} />, title: "Talent Development", active: false },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="hr-sidebar"
    >
      <Card className="mb-4">
        <Card.Header className="bg-primary text-white">
          <h5 className="mb-0">HR Outsourcing Services</h5>
        </Card.Header>
        <ListGroup variant="flush">
          {services.map((service, index) => (
            <ListGroup.Item
              key={index}
              className={`d-flex align-items-center ${service.active ? "active" : ""}`}
              style={{ cursor: "pointer" }}
            >
              {service.icon}
              <span className="ms-3">{service.title}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>

      <Card className="mb-4">
        <Card.Header className="bg-success text-white">
          <h5 className="mb-0">Contact Information</h5>
        </Card.Header>
        <Card.Body>
          <div className="contact-info">
            <div className="d-flex align-items-center mb-3">
              <Phone size={20} className="text-primary me-3" />
              <div>
                <strong>Phone:</strong>
                <br />
                <span className="text-muted">+91 8228890344</span>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <Mail size={20} className="text-primary me-3" />
              <div>
                <strong>Email:</strong>
                <br />
                <span className="text-muted">hr@farsightsolution.com</span>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <MapPin size={20} className="text-primary me-3" />
              <div>
                <strong>Address:</strong>
                <br />
                <span className="text-muted">Business Hub, Mumbai, India</span>
              </div>
            </div>
          </div>
          <Button variant="primary" className="w-100 mt-3">
            Get Free Consultation
          </Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body className="text-center">
          <h6>Need Custom HR Solutions?</h6>
          <p className="text-muted small">Let our experts design a tailored HR strategy for your organization.</p>
          <Button variant="outline-primary" size="sm">
            Schedule a Call
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  )
}

export default HROutsourcingSidebar
