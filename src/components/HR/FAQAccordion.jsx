"use client"
import { useState } from "react"
import { Accordion, Card } from "react-bootstrap"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion } from "framer-motion"

const FAQAccordion = ({ items }) => {
  const [activeKey, setActiveKey] = useState(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="faq-section mt-5"
    >
      <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        {items.map((item, index) => (
          <Card key={index} className="mb-3 faq-card">
            <Accordion.Toggle
              as={Card.Header}
              eventKey={index.toString()}
              className="faq-header d-flex justify-content-between align-items-center"
              style={{ cursor: "pointer" }}
            >
              <h6 className="mb-0 fw-medium">{item.question}</h6>
              {activeKey === index.toString() ? (
                <ChevronUp size={20} className="text-primary" />
              ) : (
                <ChevronDown size={20} className="text-primary" />
              )}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index.toString()}>
              <Card.Body className="faq-body">
                <p className="mb-0 text-muted" style={{ fontWeight: 300 }}>
                  {item.answer}
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </motion.div>
  )
}

export default FAQAccordion
