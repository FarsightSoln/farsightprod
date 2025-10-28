"use client"
import { ArrowRight } from "lucide-react"
import { ListGroup } from "react-bootstrap"
import "../assets/scss/components/business-consultancy-sidebar.scss"

const BPOServicesSidebar = () => {
  return (
    <div className="business-consultancy-sidebar-wrapper">
      <h3 className="business-consultancy-sidebar-title">IT Help Desk Services</h3>
      <ListGroup className="business-consultancy-sidebar-list-group">
        <ListGroup.Item className="business-consultancy-sidebar-list-item">
          <a href="/business-consultancy/customer-service" className="business-consultancy-sidebar-link">
            Customer Service <ArrowRight size={16} className="business-consultancy-sidebar-arrow" />
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="business-consultancy-sidebar-list-item">
          <a href="/business-consultancy/data-office-services" className="business-consultancy-sidebar-link">
            Data Office Services <ArrowRight size={16} className="business-consultancy-sidebar-arrow" />
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="business-consultancy-sidebar-list-item">
          <a href="/business-consultancy/all-business" className="business-consultancy-sidebar-link">
            Content Management <ArrowRight size={16} className="business-consultancy-sidebar-arrow" />
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="business-consultancy-sidebar-list-item">
          <a href="/business-consultancy/marketing-assistance" className="business-consultancy-sidebar-link">
            Marketing Assistance <ArrowRight size={16} className="business-consultancy-sidebar-arrow" />
          </a>
        </ListGroup.Item>
        <ListGroup.Item className="business-consultancy-sidebar-list-item">
          <a href="/business-consultancy/marketing-assistance" className="business-consultancy-sidebar-link">
            Marketing Assistance <ArrowRight size={16} className="business-consultancy-sidebar-arrow" />
          </a>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default BPOServicesSidebar
